# Kin Arai Dai (กินอะไรได้บ้าง) 🥗

**กินอะไรได้บ้าง** — เว็บแอปพลิเคชันสำหรับให้ข้อมูลเบื้องต้นเกี่ยวกับอาหารและวัตถุดิบ ประกอบการดูแลตนเองตามภาวะสุขภาพ/โรคประจำตัว เพื่อเป็นแนวทางประกอบการตัดสินใจในชีวิตประจำวัน รองรับหลายภาวะสุขภาพพร้อมกันผ่านสถาปัตยกรรม Multi-Condition โดยแต่ละภาวะแบ่งคำแนะนำตามระยะ/ช่วงอาการของตนเอง

---

## ✨ จุดเด่นและฟีเจอร์หลัก (Key Features)

- 🌐 **รองรับหลายภาวะสุขภาพ (Multi-Condition Architecture)**
  - **เปิดใช้งานแล้ว**: โรคไตเรื้อรัง (CKD), โรคเกาต์ (Gout), ผู้ที่ตัดถุงน้ำดี (Post-Cholecystectomy)
  - **เร็วๆ นี้**: โรคเบาหวาน, โรคความดันโลหิตสูง/โรคหัวใจ, กรดไหลย้อน
  - แต่ละภาวะมี "ระยะ/ช่วงอาการ" ของตัวเอง เช่น CKD แบ่ง 4 ระยะ (1-2, 3, 4-5 ก่อนฟอก, ฟอกไต), เกาต์แบ่งช่วงปกติ/ช่วงกำเริบ, ผู้ตัดถุงน้ำดีแบ่งช่วงพักฟื้น/ช่วงคุมอาหารปกติ
  - เลือกภาวะและระยะผ่าน **Dialog แบบ 2 ขั้นตอน** (เลือกภาวะ → เลือกระยะ) ที่ใช้ร่วมกันทั้งหน้า Landing และ Navbar

- 🔗 **URL Permalink ที่จำสถานะได้ (Shareable & SEO-friendly Routes)**
  - แต่ละภาวะ/ระยะมี URL เฉพาะที่แชร์ต่อได้ทันที เช่น `/ckd-stage-4-5`, `/gout-flare`, `/cholecystectomy-recovery`
  - รองรับ Canonical Route แบบ `/conditions/:conditionSlug/:stageSlug` ควบคู่กัน
  - บันทึกภาวะ/ระยะที่เลือกไว้ใน `localStorage` เพื่อจดจำการใช้งานครั้งล่าสุด

- 🚦 **ระบบ 3 สี เข้าใจง่าย (Traffic Light System)**
  - 🟢 **สีเขียว (ทานได้)**: ปลอดภัยตามเกณฑ์ของภาวะนั้นๆ (รับประทานในปริมาณที่พอดี)
  - 🟡 **สีเหลือง (คุมปริมาณ)**: ทานแต่น้อย จำกัดปริมาณ ไม่ถึงกับต้องอด
  - 🔴 **สีแดง (ควรหลีกเลี่ยง)**: มีความเสี่ยงสูง หรือเสี่ยงต่อภาวะแทรกซ้อน
  - ระดับสีและคำแนะนำของอาหารแต่ละชนิดปรับเปลี่ยนแบบไดนามิกตามภาวะและระยะที่เลือก

- 🛍️ **แถบตัวกรองสไตล์ E-Commerce พร้อม Pagination (Sidebar Filter)**
  - แถบตัวกรองด้านข้างแบบ Sticky รวมการกรองตามเกณฑ์สีความปลอดภัยและหมวดหมู่อาหาร
  - แสดงตัวนับจำนวนรายการอาหารที่ตรงกับแต่ละเงื่อนไขแบบเรียลไทม์ พร้อมแบ่งหน้า (Pagination) และรองรับจอ FHD
  - แถบสรุปตัวกรองที่เลือกอยู่ (Active Filter Badges) คลิกปลดทีละรายการได้
  - รองรับหน้าจอมือถือด้วยปุ่ม **ตัวกรอง & เกณฑ์สี** ที่สไลด์ออกมาเป็น Drawer

- 🔍 **ค้นหาอาหารและหมวดหมู่อัจฉริยะ (Smart Food Search)**
  - ค้นหาได้ทั้งชื่ออาหารตรงๆ วัตถุดิบ หรือพิมพ์คำกว้างๆ เช่น `"ผลไม้"`, `"ผัก"`, `"ไข่ขาว"`, `"เครื่องปรุง"`
  - ค้นหาแบบ Full-Text Search (SQLite FTS5 trigram) ทนต่อการพิมพ์ผิด/พิมพ์ไม่ครบคำ
  - ปุ่มค้นหาด่วน (Quick Suggestion Tags) ใต้ช่องค้นหา

- 📋 **ข้อมูลเชิงลึกและแหล่งอ้างอิงประกอบ (Food Detail Modal)**
  - กลไกทางการแพทย์: เหตุผลที่อาหารจัดอยู่ในเกณฑ์นั้นๆ และผลกระทบต่อร่างกายตามภาวะที่เลือก
  - สารอาหาร/แร่ธาตุสำคัญที่เกี่ยวข้อง (เช่น โพแทสเซียม, ฟอสฟอรัส, โซเดียม, พิวรีน, ไขมัน)
  - วิธีรับประทานและการปรุงอาหารอย่างปลอดภัย
  - ลิงก์แหล่งข้อมูลประกอบจากหน่วยงานที่น่าเชื่อถือ เช่น สมาคมโรคไตแห่งประเทศไทย, รพ.รามาธิบดี, รพ.ศิริราช, American Kidney Fund พร้อมหน้า **แหล่งอ้างอิงทั้งหมด (References Page)** แยกต่างหาก

- 📸 **ภาพถ่ายจริงสัญญาอนุญาต Creative Commons + ไอคอน (lucide-react)**
  - หมวดผลไม้ เครื่องดื่ม และเมนูอาหารหลายรายการแสดงภาพถ่ายจริงที่ได้รับอนุญาตแบบ Creative Commons (CC / CC0) พร้อมระบุที่มาของภาพ
  - ไอคอนของอาหาร/ภาวะสุขภาพย้ายมาใช้ `lucide-react` แทน Emoji เพื่อความสม่ำเสมอของ UI

- ⚠️ **กล่องเตือนภัยทางการแพทย์สำคัญ (Medical Warnings)**
  - เตือนภัยการห้ามรับประทาน **มะเฟือง** เด็ดขาด (สารพิษ Caramboxin และออกซาเลตสูง)
  - เตือนภัยกับดัก **เกลือ/ซีอิ๊วลดโซเดียม** ที่มักใส่โพแทสเซียมคลอไรด์ทดแทน

- 👋 **Onboarding & Educational Modal**
  - Modal แนะนำการใช้งานครั้งแรก ให้เลือกระยะโรคไตเบื้องต้น
  - Modal อธิบายเกณฑ์แร่ธาตุ/สารสำคัญและความหมายของแต่ละระยะ/ช่วงอาการ

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/)
- **UI Component Library**: [Mantine UI (v7)](https://mantine.dev/)
  - `@mantine/core`, `@mantine/hooks`, `postcss-preset-mantine`
- **Icons**: `lucide-react` (หลัก), `@tabler/icons-react`
- **Data Pipeline (Build-time)**: YAML source files → `better-sqlite3` (SQLite + FTS5 trigram full-text search) + generated JSON สำหรับ Hydration ฝั่ง Client (`js-yaml`, `glob`, `tsx`)
- **Typography**: [Prompt](https://fonts.google.com/specimen/Prompt) (Google Fonts)
- **Styling**: Vanilla CSS + PostCSS Modules

---

## 🗂️ สถาปัตยกรรมข้อมูล (Data Architecture)

ข้อมูลอาหารต้นฉบับเก็บเป็นไฟล์ YAML แยกตามหมวดหมู่ที่ `data/` (เช่น `fruit/`, `vegetable/`, `protein/`, `carb/`, `condiment/`, `drink/`, `dish/`) แต่ละไฟล์คือ 1 รายการอาหาร ระบุคำแนะนำแยกตาม "โรค" (`diseases.ckd`, `diseases.gout`, `diseases.cholecystectomy`, ...) และแต่ละโรคระบุคำแนะนำแยกตาม "ระยะ" (`stages`) พร้อมระดับสี เหตุผล และแหล่งอ้างอิง

เมื่อรัน `npm run dev` หรือ `npm run build`, สคริปต์ `scripts/build-db.ts` จะ:
1. อ่านและตรวจสอบ (validate) ไฟล์ YAML ทั้งหมดใน `data/**`
2. สร้างฐานข้อมูล SQLite พร้อม FTS5 trigram สำหรับค้นหา ที่ `public/app.db`
3. สร้างไฟล์ `src/data/generated/foods.json` สำหรับ Hydrate ฝั่ง Client แบบไม่ต้องรอ Query

ทำให้การเพิ่ม/แก้ไขอาหารทำได้โดยแก้ไฟล์ YAML เท่านั้น ไม่ต้องแก้โค้ด TypeScript

---

## 📁 โครงสร้างโฟลเดอร์ (Project Structure)

```text
kin-arai-dai/
├── data/                      # แหล่งข้อมูลอาหารต้นฉบับ (YAML แยกตามหมวดหมู่)
│   ├── fruit/ vegetable/ protein/ carb/
│   ├── condiment/ drink/ dish/
├── scripts/
│   ├── build-db.ts               # Build Pipeline: YAML -> SQLite + generated JSON
│   └── ...                       # สคริปต์ช่วยดาวน์โหลด/ย้ายข้อมูลรูปภาพและ metadata
├── public/
│   ├── app.db                     # SQLite DB ที่ build แล้ว (FTS5 full-text search)
│   └── images/foods/              # รูปภาพอาหารสัญญาอนุญาต Creative Commons
├── src/
│   ├── components/           # UI Components
│   │   ├── Navbar.tsx              # แถบเมนูด้านบน
│   │   ├── LandingPage.tsx         # หน้าแรก เลือกภาวะสุขภาพและ CTA
│   │   ├── ConditionHubHeader.tsx  # ส่วนหัวสรุปภาวะ/ระยะที่กำลังดูอยู่
│   │   ├── CatalogPage.tsx         # หน้าแสดงรายการอาหารพร้อมตัวกรองและ Pagination
│   │   ├── SidebarFilter.tsx       # แถบตัวกรองเกณฑ์สีและหมวดหมู่สไตล์ E-commerce
│   │   ├── FoodCard.tsx            # การ์ดแสดงรายการอาหาร
│   │   ├── FoodDetailModal.tsx     # Modal รายละเอียดอาหาร เหตุผล และแหล่งอ้างอิง
│   │   ├── SelectionDialog.tsx     # Dialog 2 ขั้นตอน: เลือกภาวะ -> เลือกระยะ
│   │   ├── EducationalModal.tsx    # Modal อธิบายเกณฑ์แร่ธาตุ/สารสำคัญและระยะ
│   │   ├── OnboardingModal.tsx     # Modal แนะนำการใช้งานครั้งแรก
│   │   ├── ReferencesPage.tsx      # หน้ารวมแหล่งอ้างอิงทางการแพทย์ทั้งหมด
│   │   ├── MedicalWarningBanner.tsx # กล่องเตือนภัยมะเฟืองและเกลือลดโซเดียม
│   │   └── Footer.tsx              # ข้อจำกัดความรับผิดชอบทางการแพทย์
│   ├── data/                 # Data & Metadata
│   │   ├── generated/foods.json    # ไฟล์ที่สร้างจาก build-db.ts (auto-generated)
│   │   ├── diseases.ts             # รายชื่อภาวะสุขภาพที่เปิดใช้งาน/กำลังจะมา
│   │   ├── kidneyStages.ts         # ข้อมูลระยะโรคไต 4 ระยะ
│   │   ├── goutStages.ts           # ข้อมูลช่วงอาการโรคเกาต์
│   │   ├── cholecystectomyStages.ts# ข้อมูลช่วงอาการผู้ตัดถุงน้ำดี
│   │   └── conditionGuides.ts      # เนื้อหาประกอบคำอธิบายแต่ละภาวะ
│   ├── utils/
│   │   ├── url.ts                  # แปลง URL slug <-> โรค/ระยะ และ parse query params
│   │   ├── diseaseHelper.ts        # Helper ดึง metadata ของระยะตามโรค
│   │   ├── diseaseIcons.tsx        # Mapping ไอคอน lucide-react ตามโรค
│   │   └── foodAdvice.ts           # Logic ดึงคำแนะนำ/ระดับสีของอาหารตามโรค+ระยะ
│   ├── types/
│   │   └── food.ts                 # TypeScript Interfaces & Types
│   ├── App.tsx                # Main Application + React Router Routes
│   ├── main.tsx                # React Root & MantineProvider
│   ├── theme.ts                # Mantine Theme Configuration
│   └── index.css               # Global Styles
├── index.html
├── package.json
├── vercel.json                # SPA rewrite rules สำหรับ Vercel
├── tsconfig.json
└── vite.config.ts
```

---

## 🔗 โครงสร้าง URL (Routing)

| Route | คำอธิบาย |
| --- | --- |
| `/` | หน้า Landing เลือกภาวะสุขภาพ |
| `/references` | หน้ารวมแหล่งอ้างอิงทางการแพทย์ |
| `/conditions/:conditionSlug` | หน้ารายการอาหารตามภาวะ (ระยะ default) เช่น `/conditions/gout` |
| `/conditions/:conditionSlug/:stageSlug` | หน้ารายการอาหารตามภาวะและระยะ |
| `/:stageSlug` | Permalink สั้นตามระยะ เช่น `/ckd-stage-1`, `/gout-flare`, `/cholecystectomy-recovery` |

รองรับ Query Params เพิ่มเติม: `?keywords=`, `?category=`, `?level=` สำหรับแชร์ผลการค้นหา/กรองแบบเจาะจง

---

## 🚀 การติดตั้งและรันโปรเจกต์ (Getting Started)

### ความต้องการพื้นฐาน
- **Node.js**: เวอร์ชัน 18 ขึ้นไป (แนะนำ v20 หรือ v22)
- **npm** หรือ **pnpm** หรือ **yarn**

### 1. ติดตั้ง Dependencies
```bash
npm install
```

### 2. รัน Dev Server สำหรับทดสอบในเครื่อง
```bash
npm run dev
```
สคริปต์นี้จะ build ฐานข้อมูลจาก YAML ก่อนอัตโนมัติ แล้วเปิดเบราว์เซอร์ไปที่ `http://localhost:5173`

### 3. Build ฐานข้อมูลจาก YAML เพียงอย่างเดียว (ไม่ build ทั้งแอป)
```bash
npm run build:db
```

### 4. ตรวจสอบ Type & Build สำหรับ Production
```bash
npm run build
```

### 5. พรีวิว Production Build
```bash
npm run preview
```

---

## 🚢 การ Deploy ขึ้น Vercel

โปรเจกต์นี้ใช้โครงสร้างมาตรฐานของ **Vite + React** สามารถ Deploy บน [Vercel](https://vercel.com/) ได้ทันที:
1. เชื่อมต่อ Git Repository บน Vercel Dashboard
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. `vercel.json` กำหนด Rewrite ทุก Path กลับไปที่ `/` เพื่อให้ Client-side Routing (React Router) ทำงานถูกต้อง

---

## ⚠️ ข้อจำกัดความรับผิดชอบทางการแพทย์ (Medical Disclaimer)

ข้อมูลและคำแนะนำทั้งหมดในเว็บไซต์นี้จัดทำขึ้นเพื่อให้ข้อมูลและความรู้ด้านโภชนาการเบื้องต้นเท่านั้น **ไม่สามารถใช้ทดแทนการตรวจวินิจฉัย การสั่งจ่ายยา หรือคำแนะนำเฉพาะบุคคลจากแพทย์ผู้เชี่ยวชาญหรือนักกำหนดอาหารวิชาชีพได้** ภาวะสุขภาพของผู้ป่วยแต่ละรายมีความแตกต่างกัน จึงควรปรึกษาแพทย์ประจำตัวของท่านก่อนปรับเปลี่ยนรูปแบบอาหารเสมอ

---

## 📄 ลิขสิทธิ์และสัญญาอนุญาต (License & Attributions)

- **Source Code**: MIT License
- **รูปภาพอาหาร**:
  - เผยแพร่ภายใต้สัญญาอนุญาต Creative Commons (CC BY-SA 3.0 / CC BY-SA 4.0 / CC0 / Unsplash Free License) โดยมีการระบุชื่อผู้สร้างสรรค์และแหล่งที่มาในข้อมูลของอาหารแต่ละรายการ
