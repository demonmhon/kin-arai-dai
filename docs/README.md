# Kin Arai Dai — Documentation

ศูนย์รวมเอกสารสถาปัตยกรรมระบบ การตัดสินใจในการออกแบบ (ADR) และแนวทางการพัฒนาสำหรับโปรเจกต์ **"กินอะไรได้?" (Kin Arai Dai)**

---

## 📑 สารบัญเอกสาร (Documentation Index)

### 🏛️ การตัดสินใจเชิงสถาปัตยกรรมและดีไซน์ (Architecture & Design Decision Records)
ดูรายการทั้งหมดได้ที่ [`docs/adr/`](./adr/README.md)
- **[ADR 0001: เลือกใช้ Noto Sans Thai เป็นแบบอักษรหลักของระบบ](./adr/0001-typography-noto-sans-thai.md)**
  - บันทึกการตัดสินใจเลือกฟอนต์ Noto Sans Thai แทนฟอนต์เดิม (Prompt)
  - หลักฐานภาพถ่ายเปรียบเทียบ Side-by-Side บนหน้าจอมือถือจริง
  - แนวทางการใช้งาน Automation Script (`scripts/capture-comparison.ts`) ร่วมกับ Headless Chrome + Sharp

---

## 📁 โครงสร้างโฟลเดอร์ใน `docs/`

```text
docs/
├── adr/                                     # Architecture & Design Decision Records
│   ├── README.md                            # ดัชนีรวม ADR ทั้งหมด
│   └── 0001-typography-noto-sans-thai.md   # ADR 0001
├── images/                                  # ภาพถ่ายประกอบเอกสาร
│   ├── font_comparison_catalog.png
│   └── font_comparison_selection.png
└── README.md                                # หน้าสารบัญภาพรวม (ไฟล์นี้)
```
