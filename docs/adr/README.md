# Architecture & Design Decision Records (ADR)

โฟลเดอร์นี้ใช้บันทึกการตัดสินใจเชิงสถาปัตยกรรมและการออกแบบ (Architecture & Design Decisions) ของโปรเจกต์ **กินอะไรได้? (Kin Arai Dai)** เพื่อเก็บบริบท เหตุผล และหลักฐานเชิงประจักษ์ของการเปลี่ยนแปลงสำคัญ ป้องกันการลืมเหตุผลและช่วยให้ผู้ร่วมพัฒนาเข้าใจทิศทางของระบบ

---

## 📑 รายการบันทึกการตัดสินใจ (ADR Index)

| รหัส | หัวข้อการตัดสินใจ | สถานะ | วันที่ |
|---|---|---|---|
| [ADR 0001](./0001-typography-noto-sans-thai.md) | เลือกใช้ Noto Sans Thai เป็นแบบอักษรหลักของระบบ | `Accepted` | 2026-09-12 |

---

## 📝 รูปแบบการบันทึก (Format)

เอกสาร ADR ในโปรเจกต์นี้อ้างอิงมาตรฐาน [Markdown Architectural Decision Records (MADR)](https://adr.github.io/madr/) โดยมีโครงสร้างหลักดังนี้:
1. **บริบทและปัญหา (Context and Problem Statement)**
2. **ปัจจัยในการตัดสินใจ (Decision Drivers)**
3. **ทางเลือกที่พิจารณา (Considered Options)**
4. **มติการตัดสินใจ (Decision Outcome) & ผลกระทบ (Consequences)**
5. **ข้อดี-ข้อเสียของแต่ละทางเลือก (Pros and Cons)**
6. **หลักฐานเปรียบเทียบเชิงประจักษ์ (Visual Evidence - ถ้ามี)**
7. **การนำไปปรับใช้ในโค้ด (Implementation Details)**
