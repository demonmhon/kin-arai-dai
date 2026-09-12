/**
 * scripts/build-db.ts
 * ------------------------------------------------------------------
 * 1. Reads all YAML files in /data/** and strictly validates schemas.
 * 2. Compiles a normalized SQLite database with FTS5 trigram full-text search
 *    at public/app.db.
 * 3. Compiles src/data/generated/foods.json for 0ms client hydration.
 *
 * Runs automatically during 'npm run build' or 'npm run dev'.
 * ------------------------------------------------------------------
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { load } from 'js-yaml';
import Database from 'better-sqlite3';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'data');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const OUTPUT_DB = path.join(PUBLIC_DIR, 'app.db');
const GENERATED_DIR = path.join(ROOT_DIR, 'src/data/generated');
const OUTPUT_JSON = path.join(GENERATED_DIR, 'foods.json');

// Valid levels & stages
const VALID_LEVELS = new Set(['safe', 'caution', 'danger']);
const VALID_CATEGORIES = new Set([
  'fruit',
  'vegetable',
  'protein',
  'carb',
  'condiment',
  'drink',
  'dish',
]);

export interface StageInfo {
  level: 'safe' | 'caution' | 'danger';
  advice: string;
}

export interface DiseaseInfo {
  reason: string;
  tags?: string[];
  sources?: { name: string; url: string }[];
  stages: Record<string, StageInfo>;
}

export interface FoodYaml {
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
  diseases: Record<string, DiseaseInfo>;
}

// ---------------------- 1. Load & Validate YAML ----------------------

export function loadAndValidateFoods(): FoodYaml[] {
  const files = glob.sync('**/*.yaml', { cwd: DATA_DIR, absolute: true });

  if (files.length === 0) {
    throw new Error(`[build-db] ไม่พบไฟล์ .yaml ใน ${DATA_DIR}`);
  }

  const seenIds = new Set<string>();
  const foods: FoodYaml[] = [];

  for (const filePath of files) {
    const relativePath = path.relative(ROOT_DIR, filePath);
    const raw = fs.readFileSync(filePath, 'utf-8');
    let parsed: FoodYaml;

    try {
      parsed = load(raw) as FoodYaml;
    } catch (err: any) {
      throw new Error(`[build-db] ไฟล์ ${relativePath} มีข้อผิดพลาดทางไวยากรณ์ YAML: ${err.message}`);
    }

    if (!parsed || typeof parsed !== 'object') {
      throw new Error(`[build-db] ไฟล์ ${relativePath} ไม่มีเนื้อหาข้อมูล`);
    }

    // Required fields check
    if (!parsed.id || typeof parsed.id !== 'string') {
      throw new Error(`[build-db] ไฟล์ ${relativePath} ขาดฟิลด์ 'id' หรือไม่ใช่ string`);
    }
    if (seenIds.has(parsed.id)) {
      throw new Error(`[build-db] ตรวจพบ ID ซ้ำ '${parsed.id}' ในไฟล์ ${relativePath}`);
    }
    seenIds.add(parsed.id);

    if (!parsed.name || typeof parsed.name !== 'string') {
      throw new Error(`[build-db] ไฟล์ ${relativePath} ขาดฟิลด์ 'name'`);
    }

    if (!parsed.category || !VALID_CATEGORIES.has(parsed.category)) {
      throw new Error(
        `[build-db] ไฟล์ ${relativePath} มี category '${parsed.category}' ที่ไม่ถูกต้อง (อนุญาตเฉพาะ: ${Array.from(VALID_CATEGORIES).join(', ')})`
      );
    }

    if (!parsed.categoryName || typeof parsed.categoryName !== 'string') {
      throw new Error(`[build-db] ไฟล์ ${relativePath} ขาดฟิลด์ 'categoryName'`);
    }

    if (!parsed.diseases || Object.keys(parsed.diseases).length === 0) {
      throw new Error(`[build-db] ไฟล์ ${relativePath} ต้องมีอย่างน้อย 1 โรคใน 'diseases'`);
    }

    // Normalize diseases & validate stages
    const normalizedDiseases: Record<string, DiseaseInfo> = {};

    for (const [rawDiseaseKey, dInfo] of Object.entries(parsed.diseases)) {
      // Alias 'kidney' -> 'ckd' for consistent disease lookup
      const diseaseKey = rawDiseaseKey === 'kidney' ? 'ckd' : rawDiseaseKey;

      if (!dInfo.reason || typeof dInfo.reason !== 'string') {
        throw new Error(
          `[build-db] ไฟล์ ${relativePath} (โรค: ${rawDiseaseKey}) ต้องมีฟิลด์ 'reason' ที่ไม่ว่าง`
        );
      }

      if (!dInfo.stages || Object.keys(dInfo.stages).length === 0) {
        throw new Error(
          `[build-db] ไฟล์ ${relativePath} (โรค: ${rawDiseaseKey}) ต้องมีอย่างน้อย 1 stage ใน 'stages'`
        );
      }

      for (const [stageKey, stageData] of Object.entries(dInfo.stages)) {
        if (!stageData || !VALID_LEVELS.has(stageData.level)) {
          throw new Error(
            `[build-db] ไฟล์ ${relativePath} (โรค: ${rawDiseaseKey}, stage: ${stageKey}) level '${stageData?.level}' ไม่ถูกต้อง (ต้องเป็น safe | caution | danger)`
          );
        }
        if (!stageData.advice || typeof stageData.advice !== 'string') {
          throw new Error(
            `[build-db] ไฟล์ ${relativePath} (โรค: ${rawDiseaseKey}, stage: ${stageKey}) ต้องมีคำแนะนำ 'advice'`
          );
        }
      }

      normalizedDiseases[diseaseKey] = {
        reason: dInfo.reason.trim(),
        tags: dInfo.tags || [],
        sources: dInfo.sources || [],
        stages: dInfo.stages,
      };
    }

    parsed.diseases = normalizedDiseases;
    foods.push(parsed);
  }

  return foods;
}

// ---------------------- 2. SQLite Schema Creation ----------------------

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

    CREATE TABLE disease_stages (
      food_id TEXT NOT NULL REFERENCES foods(id) ON DELETE CASCADE,
      disease TEXT NOT NULL,   -- 'ckd' | 'diabetes' | 'gout' | ...
      reason  TEXT NOT NULL,   -- เหตุผลทางโภชนาการสำหรับโรคนั้น
      stage   TEXT NOT NULL,   -- 'stage1_2' | 'general' | ...
      level   TEXT NOT NULL,   -- 'safe' | 'caution' | 'danger'
      advice  TEXT NOT NULL
    );

    CREATE INDEX idx_disease_stages_lookup ON disease_stages(disease, food_id);
    CREATE INDEX idx_disease_stages_stage ON disease_stages(disease, stage, level);
    CREATE INDEX idx_food_keywords_food ON food_keywords(food_id);
    CREATE INDEX idx_food_tags_food ON food_tags(food_id);

    -- FTS5 full-text search with trigram for Thai text
    CREATE VIRTUAL TABLE foods_fts USING fts5(
      food_id UNINDEXED,
      name,
      keywords,
      tags,
      tokenize = 'trigram'
    );
  `);
}

// ---------------------- 3. Insert SQLite Records ----------------------

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

      // Collect sources both at root level and per-disease
      const combinedSources: { name: string; url: string }[] = [...(f.sources ?? [])];
      for (const d of Object.values(f.diseases)) {
        if (d.sources && d.sources.length > 0) {
          combinedSources.push(...d.sources);
        }
      }

      const seenSourceUrls = new Set<string>();
      for (const src of combinedSources) {
        if (src.name && src.url && !seenSourceUrls.has(src.url)) {
          seenSourceUrls.add(src.url);
          insertSource.run(f.id, src.name, src.url);
        }
      }

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

      insertFts.run(
        f.id,
        f.name,
        (f.keywords ?? []).join(' '),
        (f.tags ?? []).join(' ')
      );
    }
  });

  insertAll(foods);
}

// ---------------------- 4. Generate Client JSON ----------------------

function generateClientData(foods: FoodYaml[]) {
  fs.mkdirSync(GENERATED_DIR, { recursive: true });

  // Map to the full FoodItem shape with legacy backward compatibility fields
  const clientFoods = foods.map((f) => {
    const ckdProfile = f.diseases.ckd;
    const sources = f.sources || ckdProfile?.sources || [];
    const legacySource = sources.length > 0 ? sources[0] : undefined;

    return {
      id: f.id,
      name: f.name,
      category: f.category,
      categoryName: f.categoryName,
      icon: f.icon || '🍽️',
      imageUrl: f.imageUrl,
      imageCredit: f.imageCredit,
      tags: f.tags || [],
      keywords: f.keywords || [],
      diseases: f.diseases,
      // Backward compatibility fields for any legacy component
      reason: ckdProfile?.reason || '',
      advice: ckdProfile?.stages?.stage3?.advice || ckdProfile?.stages?.stage1_2?.advice || '',
      source: legacySource,
      stages: ckdProfile?.stages || {},
    };
  });

  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(clientFoods, null, 2), 'utf-8');
}

// ---------------------- 5. Main Runner ----------------------

export function main() {
  console.log('📦 [build-db] Loading and validating YAML files...');
  const startTime = Date.now();
  const foods = loadAndValidateFoods();
  console.log(`✅ [build-db] Validated ${foods.length} food items successfully.`);

  // 1. Build SQLite
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  if (fs.existsSync(OUTPUT_DB)) {
    fs.rmSync(OUTPUT_DB);
  }

  const db = new Database(OUTPUT_DB);
  db.pragma('journal_mode = WAL');

  createSchema(db);
  insertFoods(db, foods);

  // Quick verification query on the built DB
  const testCount = db.prepare('SELECT COUNT(*) as count FROM foods').get() as { count: number };
  const ftsTest = db.prepare('SELECT food_id FROM foods_fts WHERE foods_fts MATCH ?').all('แอปเปิ้ล');

  db.close();

  // 2. Build Client JSON
  generateClientData(foods);

  const duration = Date.now() - startTime;
  console.log(`🎉 [build-db] Database build complete in ${duration}ms:`);
  console.log(`   - SQLite DB:     ${path.relative(ROOT_DIR, OUTPUT_DB)} (${testCount.count} foods, FTS5 OK)`);
  console.log(`   - Client JSON:   ${path.relative(ROOT_DIR, OUTPUT_JSON)}`);
}

// Execute if run directly
main();
