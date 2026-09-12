---
name: add-food-item
description: >-
  Standard workflow for adding new food items or ingredients to the Kin-Arai-Dai database.
  Covers YAML schema, nutritional assessment across conditions (CKD, Gout, Gallbladder),
  Creative Commons image search, Nanobanana AI image generation, image optimization (sharp),
  and SQLite/JSON database build verification.
---

# Workflow for Adding New Food Items (ขั้นตอนการเพิ่มเมนูอาหารใหม่)

คู่มือปฏิบัติการสำหรับ Agent เมื่อมีการเพิ่มอาหาร วัตถุดิบ หรือเครื่องปรุงใหม่เข้าสู่ฐานข้อมูล Kin-Arai-Dai

---

## 1. การสร้างไฟล์ข้อมูลอาหาร (YAML)

1. บันทึกไฟล์ที่โฟลเดอร์ตามหมวดหมู่ใน `data/`:
   - `data/fruit/` (ผลไม้)
   - `data/vegetable/` (ผัก)
   - `data/protein/` (เนื้อสัตว์/โปรตีน/ถั่ว-เมล็ด)
   - `data/carb/` (ข้าว-แป้ง)
   - `data/condiment/` (เครื่องปรุง/น้ำมัน)
   - `data/drink/` (เครื่องดื่ม/ของหวาน)
   - `data/dish/` (อาหารจานเดียว/ฟาสต์ฟู้ด)
   - `data/supplement/` (อาหารเสริม/สารสกัด)

2. ระบุโครงสร้าง YAML ให้ครบทุกฟิลด์:
   - `id`: รหัสภาษาอังกฤษตัวพิมพ์เล็ก คั่นด้วยขีดกลาง เช่น `peanut`, `salad-roll`
   - `name`: ชื่อภาษาไทย พร้อมวงเล็บภาษาอังกฤษและคำอธิบายบริบท
   - `category`: ตรงกับโฟลเดอร์
   - `categoryName`: ชื่อหมวดภาษาไทย
   - `icon`: อีโมจิประจำเมนู
   - `imageUrl`: `/images/foods/{food-id}.jpg`
   - `imageCredit`: ระบุที่มาของภาพ (CC หรือ Nanobanana AI)
   - `tags`: แท็กคุณลักษณะเด่นด้านโภชนาการ
   - `keywords`: คำค้นหาทั้งภาษาไทย คำพ้อง คำสะกดใกล้เคียง และภาษาอังกฤษ
   - `sources`: แหล่งอ้างอิงทางการแพทย์ที่น่าเชื่อถือ
   - `diseases`: ข้อมูลโภชนาการแยกตามภาวะสุขภาพ (`ckd`, `gout`, `cholecystectomy`) พร้อมคำแนะนำทุกระยะ (safe / caution / danger)

---

## 2. ขั้นตอนการจัดหารูปภาพ (Image Sourcing - CC & Nanobanana AI)

> **กฎเหล็ก:** ห้ามปล่อยให้เมนูอาหารไม่มีรูปภาพเด็ดขาด

### ขั้นที่ 1: ค้นหารูปแบบ Creative Commons (CC) ก่อน
- ค้นหาภาพถ่ายวัตถุดิบ/อาหารจริงจาก Wikimedia Commons หรือแหล่งภาพเสรี
- ตรวจสอบสัญญาอนุญาต เช่น CC0, CC BY, CC BY-SA หรือ Public Domain
- บันทึก `imageCredit`: `Photo by [ชื่อช่างภาพ] on Wikimedia Commons ([License])`

### ขั้นที่ 2: สร้างด้วย Nanobanana AI (`generate_image`)
- หากค้นหา CC ไม่พบ หรือภาพไม่น่ารับประทาน / ไม่ตรงกับรูปแบบอาหารไทย (เช่น ข้าวเหนียวหมูปิ้ง, สลัดโรล, โจ๊ก) ให้ใช้เครื่องมือ `generate_image` (Nanobanana AI)
- ใช้ Prompt ที่ระบุรายละเอียดความน่ารับประทานชัดเจน (เช่น close-up, appetizing food photography, warm natural lighting)
- บันทึก `imageCredit`: `AI-generated illustration by Nanobanana`

### ขั้นที่ 3: ปรับขนาดและ Optimize ด้วย Sharp
- บันทึกไฟล์ที่ `public/images/foods/{food-id}.jpg`
- รันคำสั่งแปลงภาพด้วย `sharp`:
  ```javascript
  await sharp(sourcePath)
    .resize(400, 400, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 82, progressive: true })
    .toFile(`public/images/foods/${foodId}.jpg`);
  ```
- ขนาดภาพต้องเป็น 400x400 สี่เหลี่ยมจัตุรัส ขนาดไฟล์กะทัดรัด (20–50 KB)

---

## 3. การ Rebuild ฐานข้อมูลและการทดสอบ

ทุกครั้งหลังจากเพิ่มไฟล์ YAML และรูปภาพ:
1. รีคอมไพล์ฐานข้อมูล SQLite และไฟล์ JSON:
   ```bash
   npm run build:db
   ```
2. ตรวจสอบความครบถ้วนของรูปภาพ:
   ```bash
   npx tsx scripts/find-missing-images.ts
   ```
   (ต้องแสดงผล Foods missing images: 0)
3. ตรวจสอบการค้นหา Full-Text Search ใน SQLite (FTS5 trigram)
4. ทดสอบความถูกต้องของโปรเจกต์ด้วยการรัน build:
   ```bash
   npm run build
   ```
