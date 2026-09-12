/**
 * scripts/build-db.ts
 * ------------------------------------------------------------------
 * อ่านไฟล์ YAML ทั้งหมดใน /data/** แล้ว compile รวมเป็น SQLite database
 * ไฟล์เดียว พร้อม FTS5 index สำหรับค้นหา
 *
 * ทำงานตอน build/deploy เท่านั้น (ไม่ต้องมี database server รันตลอดเวลา)
 * เหมาะกับ public GitHub repo: contributor แก้แค่ไฟล์ YAML แล้วเปิด PR
 * ได้เหมือนแก้ wiki โดยไม่ต้องแตะ database เลย
 *
 * ติดตั้ง:
 *   npm install --save-dev js-yaml better-sqlite3 glob tsx
 *   npm install --save-dev @types/js-yaml @types/better-sqlite3
 *
 * รัน:
 *   npx tsx scripts/build-db.ts
 *
 * output: public/app.db
 * (แนะนำใส่ public/app.db ใน .gitignore แล้วให้ CI build ใหม่ทุกครั้ง
 *  เพื่อให้ git diff ของ repo เห็นแค่การเปลี่ยนแปลงไฟล์ YAML)
 * ------------------------------------------------------------------
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import Database from 'better-sqlite3';
import { glob } from 'glob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '../data');
const OUTPUT_DB = path.join(__dirname, '../public/app.db');

// ---------------------- Types (ตรงกับโครงสร้าง YAML) ----------------------

interface StageInfo {
  level: 'safe' | 'caution' | 'danger';
  advice: string;
}

interface DiseaseInfo {
  reason: string;
  stages: Record<string, StageInfo>;
}

interface FoodYaml {
  id: string;
  name: string;
  category: string;
  categoryName: string;
  icon?: string;
  imageUrl?: string;
  imageCredit?: string;
  tags?: string[];
  keywords?: string[];
  sources?: { name: string; url: string }[];
  diseases: Record<string, DiseaseInfo>; // key เปิดอิสระ: 'kidney' | 'diabetes' | ...
}

// ---------------------- โหลดและ validate YAML ----------------------

function loadAllFoods(): FoodYaml[] {
  const files = glob.sync('**/*.yaml', { cwd: DATA_DIR, absolute: true });

  if (files.length === 0) {
    throw new Error(`ไม่พบไฟล์ .yaml ใน ${DATA_DIR} เลย`);
  }

  const seenIds = new Set<string>();

  return files.map((filePath) => {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const parsed = yaml.load(raw) as FoodYaml;

    if (!parsed?.id || !parsed?.name) {
      throw new Error(`ไฟล์ ${filePath} ขาด field 'id' หรือ 'name'`);
    }
    if (seenIds.has(parsed.id)) {
      throw new Error(`id ซ้ำ: '${parsed.id}' (พบใน ${filePath})`);
    }
    seenIds.add(parsed.id);

    if (!parsed.diseases || Object.keys(parsed.diseases).length === 0) {
      throw new Error(`ไฟล์ ${filePath} ต้องมีอย่างน้อย 1 โรคใน 'diseases'`);
    }

    return parsed;
  });
}

// ---------------------- สร้าง schema ----------------------

function createSchema(db: Database.Database) {
  db.exec(`
    PRAGMA foreign_keys = ON;

    DROP TABLE IF EXISTS foods_fts;
    DROP TABLE IF EXISTS disease_stages;
    DROP TABLE IF EXISTS food_sources;
    DROP TABLE IF EXISTS food_keywords;
    DROP TABLE IF EXISTS food_tags;
    DROP TABLE IF EXISTS foods;

    CREATE TABLE foods (
      id            TEXT PRIMARY KEY,
      name          TEXT NOT NULL,
      category      TEXT NOT NULL,
      category_name TEXT NOT NULL,
      icon          TEXT,
      image_url     TEXT,
      image_credit  TEXT
    );

    CREATE TABLE food_tags (
      food_id TEXT NOT NULL REFERENCES foods(id) ON DELETE CASCADE,
      tag     TEXT NOT NULL
    );

    CREATE TABLE food_keywords (
      food_id TEXT NOT NULL REFERENCES foods(id) ON DELETE CASCADE,
      keyword TEXT NOT NULL
    );

    CREATE TABLE food_sources (
      food_id TEXT NOT NULL REFERENCES foods(id) ON DELETE CASCADE,
      name    TEXT NOT NULL,
      url     TEXT NOT NULL
    );

    -- ตารางหัวใจที่ทำให้รองรับหลายโรคได้: 1 แถว = 1 วัตถุดิบ x 1 โรค x 1 ระยะ
    -- อยากเพิ่มโรคใหม่ ไม่ต้องแก้ตารางนี้ แค่เพิ่มแถวใหม่
    CREATE TABLE disease_stages (
      food_id TEXT NOT NULL REFERENCES foods(id) ON DELETE CASCADE,
      disease TEXT NOT NULL,   -- 'kidney' | 'diabetes' | 'gout' | ...
      reason  TEXT NOT NULL,   -- เหตุผลทางโภชนาการ เฉพาะโรคนั้นๆ
      stage   TEXT NOT NULL,   -- 'stage1_2' | 'general' | ... แล้วแต่โรค
      level   TEXT NOT NULL,   -- 'safe' | 'caution' | 'danger'
      advice  TEXT NOT NULL
    );

    CREATE INDEX idx_disease_stages_lookup ON disease_stages(disease, food_id);
    CREATE INDEX idx_food_keywords_food ON food_keywords(food_id);

    -- FTS5 แยกตารางต่างหาก เชื่อมด้วย food_id เอง
    -- tokenize='trigram' ช่วยให้ค้นคำไทยที่ไม่มีช่องว่างคั่นได้ระดับหนึ่ง
    CREATE VIRTUAL TABLE foods_fts USING fts5(
      food_id UNINDEXED,
      name,
      keywords,
      tags,
      tokenize = 'trigram'
    );
  `);
}

// ---------------------- insert ข้อมูลทั้งหมด ----------------------

function insertFoods(db: Database.Database, foods: FoodYaml[]) {
  const insertFood = db.prepare(`
    INSERT INTO foods (id, name, category, category_name, icon, image_url, image_credit)
    VALUES (@id, @name, @category, @categoryName, @icon, @imageUrl, @imageCredit)
  `);
  const insertTag = db.prepare(`INSERT INTO food_tags (food_id, tag) VALUES (?, ?)`);
  const insertKeyword = db.prepare(`INSERT INTO food_keywords (food_id, keyword) VALUES (?, ?)`);
  const insertSource = db.prepare(`INSERT INTO food_sources (food_id, name, url) VALUES (?, ?, ?)`);
  const insertStage = db.prepare(`
    INSERT INTO disease_stages (food_id, disease, reason, stage, level, advice)
    VALUES (@food_id, @disease, @reason, @stage, @level, @advice)
  `);
  const insertFts = db.prepare(`
    INSERT INTO foods_fts (food_id, name, keywords, tags) VALUES (?, ?, ?, ?)
  `);

  const insertAll = db.transaction((items: FoodYaml[]) => {
    for (const f of items) {
      insertFood.run({
        id: f.id,
        name: f.name,
        category: f.category,
        categoryName: f.categoryName,
        icon: f.icon ?? null,
        imageUrl: f.imageUrl ?? null,
        imageCredit: f.imageCredit ?? null,
      });

      for (const tag of f.tags ?? []) insertTag.run(f.id, tag);
      for (const kw of f.keywords ?? []) insertKeyword.run(f.id, kw);
      for (const src of f.sources ?? []) insertSource.run(f.id, src.name, src.url);

      for (const [disease, info] of Object.entries(f.diseases)) {
        for (const [stage, stageInfo] of Object.entries(info.stages)) {
          insertStage.run({
            food_id: f.id,
            disease,
            reason: info.reason.trim(),
            stage,
            level: stageInfo.level,
            advice: stageInfo.advice,
          });
        }
      }

      insertFts.run(f.id, f.name, (f.keywords ?? []).join(' '), (f.tags ?? []).join(' '));
    }
  });

  insertAll(foods);
}

// ---------------------- main ----------------------

function main() {
  if (fs.existsSync(OUTPUT_DB)) fs.rmSync(OUTPUT_DB);
  fs.mkdirSync(path.dirname(OUTPUT_DB), { recursive: true });

  const db = new Database(OUTPUT_DB);
  db.pragma('journal_mode = WAL');

  const foods = loadAllFoods();
  console.log(`พบไฟล์วัตถุดิบทั้งหมด ${foods.length} รายการ`);

  createSchema(db);
  insertFoods(db, foods);

  db.close();
  console.log(`✅ สร้างฐานข้อมูลเรียบร้อยที่ ${OUTPUT_DB}`);
}

main();

// ------------------------------------------------------------------
// ตัวอย่างการ query หลัง build เสร็จแล้ว (ใช้ใน API route ของเว็บ):
//
//   import Database from 'better-sqlite3';
//   const db = new Database('public/app.db', { readonly: true });
//
//   // ค้นหาแบบ full-text
//   const results = db.prepare(`
//     SELECT f.*
//     FROM foods_fts
//     JOIN foods f ON f.id = foods_fts.food_id
//     WHERE foods_fts MATCH ?
//   `).all('มะเฟือง');
//
//   // ดึงข้อมูลเฉพาะโรคของวัตถุดิบหนึ่งชิ้น
//   const kidneyInfo = db.prepare(`
//     SELECT * FROM disease_stages WHERE food_id = ? AND disease = 'kidney'
//   `).all('apple');
// ------------------------------------------------------------------
