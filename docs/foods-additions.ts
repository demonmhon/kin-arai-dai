// ================================================================
// 📌 ไฟล์นี้คือ "ของที่ควรเพิ่ม" ต่อจาก foods.ts เดิม
// ก่อนใช้งาน: คัดลอกแต่ละ object ไปวางต่อท้าย array `foods` ใน foods.ts
// (ยังใช้ schema เดิมทุกฟิลด์ ไม่ต้องแก้ type ยกเว้นจุดที่ระบุไว้ด้านล่าง)
// ================================================================

import { FoodItem } from '../types/food';

// ⚠️ หมายเหตุเรื่อง category:
// รายการด้านล่างใช้ category เดิมที่มีอยู่แล้ว (fruit / vegetable / protein / carb / condiment / drink)
// แต่ "นม/ผลิตภัณฑ์นม" กับ "เมนูสำเร็จรูป" ควรพิจารณาเพิ่มเป็น category ใหม่ในอนาคต
// เช่น 'dairy' และ 'dish' ใน types/food.ts เพราะตอนนี้ต้อง "ยัด" นมไว้ใน protein ไปก่อน

export const foodsAdditions: FoodItem[] = [
  // ================= 🥑 ผลไม้ที่ยังขาด =================
  {
    id: 'avocado',
    name: 'อะโวคาโด',
    category: 'fruit',
    categoryName: 'ผลไม้',
    icon: '🥑',
    tags: ['โพแทสเซียมสูงมาก', 'ไขมันดีสูง'],
    reason:
      'แม้จะมีไขมันดีและใยอาหารสูง แต่อะโวคาโดมีโพแทสเซียมสูงมาก (สูงกว่ากล้วยเมื่อเทียบต่อน้ำหนัก) ผู้ป่วยไตขับออกไม่ทัน',
    advice: 'จำกัดปริมาณอย่างเข้มงวด โดยเฉพาะระยะที่โพแทสเซียมในเลือดเริ่มสูง',
    keywords: ['อะโวคาโด', 'avocado', 'ผลไม้', 'ไขมันดี', 'สลัด'],
    source: {
      name: 'National Kidney Foundation (เอกสารเจาะลึกเรื่องอะโวคาโด)',
      url: 'https://www.kidney.org/sites/default/files/441-9152_2210_patflyer_superfood-avocado.pdf',
    },
    stages: {
      stage1_2: { level: 'caution', advice: 'ทานได้ครั้งละ 2-3 ช้อนโต๊ะ ไม่บ่อย' },
      stage3: { level: 'caution', advice: 'จำกัดครั้งละ 1-2 ช้อนโต๊ะ สัปดาห์ละ 1-2 ครั้ง' },
      stage4_5_pre: { level: 'danger', advice: 'ควรหลีกเลี่ยง โพแทสเซียมสูงเกินไตขับ' },
      dialysis: { level: 'danger', advice: 'ควรหลีกเลี่ยง' },
    },
  },

  // ================= 🥔 ผัก/หัวที่ยังขาด =================
  {
    id: 'potato',
    name: 'มันฝรั่ง',
    category: 'vegetable',
    categoryName: 'ผัก',
    icon: '🥔',
    tags: ['โพแทสเซียมสูงมาก', 'ลดได้ด้วยการแช่/ต้มทิ้งน้ำ'],
    reason:
      'มันฝรั่งมีโพแทสเซียมสูงมาก โดยเฉพาะเปลือกและเนื้อใกล้เปลือก แต่สามารถลดปริมาณลงได้มากด้วยการหั่นแช่น้ำและต้มทิ้งน้ำก่อนปรุง',
    advice: 'ปอกเปลือก หั่นชิ้นเล็ก แช่น้ำอย่างน้อย 2 ชั่วโมง แล้วต้มทิ้งน้ำก่อนนำไปปรุงต่อ',
    keywords: ['มันฝรั่ง', 'potato', 'ผัก', 'เฟรนช์ฟราย', 'มันบด'],
    source: {
      name: 'National Kidney Foundation (บทความ Root Vegetables)',
      url: 'https://www.kidney.org/kidney-topics/root-vegetables',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานได้ตามปกติ (แนะนำต้มทิ้งน้ำก่อน)' },
      stage3: { level: 'caution', advice: 'ต้องแช่น้ำ+ต้มทิ้งน้ำก่อนเสมอ ทานแต่พอเหมาะ' },
      stage4_5_pre: { level: 'danger', advice: 'ควรหลีกเลี่ยง แม้ลดโพแทสเซียมแล้วยังเสี่ยงสูง' },
      dialysis: { level: 'danger', advice: 'ควรหลีกเลี่ยง' },
    },
  },
  {
    id: 'mushroom',
    name: 'เห็ดทุกชนิด (เห็ดฟาง, เห็ดนางฟ้า, เห็ดหอม)',
    category: 'vegetable',
    categoryName: 'ผัก',
    icon: '🍄',
    tags: ['โพแทสเซียมสูง', 'ฟอสฟอรัสปานกลาง-สูง'],
    reason:
      'เห็ดมีโพแทสเซียมและฟอสฟอรัสค่อนข้างสูงเมื่อเทียบกับผักทั่วไป โดยเฉพาะเห็ดหอมแห้ง',
    advice: 'ทานได้ในปริมาณน้อยเป็นครั้งคราว หลีกเลี่ยงเห็ดหอมแห้งที่นำมาต้มน้ำซุปเข้มข้น',
    keywords: ['เห็ด', 'เห็ดฟาง', 'เห็ดนางฟ้า', 'เห็ดหอม', 'ผัก'],
    source: {
      name: 'National Kidney Foundation (บทความ Potassium in Your CKD Diet)',
      url: 'https://www.kidney.org/kidney-topics/potassium-your-ckd-diet',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานได้ตามปกติ' },
      stage3: { level: 'caution', advice: 'จำกัดปริมาณ ครั้งละ 3-4 ดอก' },
      stage4_5_pre: { level: 'danger', advice: 'ควรหลีกเลี่ยง โดยเฉพาะเห็ดหอมแห้ง' },
      dialysis: { level: 'caution', advice: 'ทานได้น้อยมากเป็นครั้งคราว' },
    },
  },

  // ================= 🐟 โปรตีนทางเลือก/นม ที่ยังขาด =================
  {
    id: 'cow-milk',
    name: 'นมวัว (จืด/หวาน/พร่องมันเนย)',
    category: 'protein',
    categoryName: 'เนื้อสัตว์/โปรตีน',
    icon: '🥛',
    tags: ['ฟอสฟอรัสสูงมาก', 'โพแทสเซียมสูง', 'ควรจำกัดทุกระยะ'],
    reason:
      'นมวัวมีทั้งฟอสฟอรัสและโพแทสเซียมสูงมากในปริมาณเข้มข้น เป็นสาเหตุหลักที่ทำให้ค่าฟอสเฟตในเลือดของผู้ป่วยไตพุ่งสูงหากดื่มเป็นประจำ',
    advice: 'จำกัดปริมาณอย่างเข้มงวด พิจารณาเปลี่ยนเป็นนมสูตรเฉพาะโรคไตหรือดื่มในปริมาณน้อยมาก',
    keywords: ['นมวัว', 'นม', 'นมสด', 'นมจืด', 'นมหวาน', 'เครื่องดื่ม'],
    source: {
      name: 'National Kidney Foundation (บทความ Dairy and Our Kidneys)',
      url: 'https://www.kidney.org/kidney-topics/dairy-and-our-kidneys',
    },
    stages: {
      stage1_2: { level: 'caution', advice: 'ดื่มได้ไม่เกิน 1 แก้วเล็ก/วัน' },
      stage3: { level: 'caution', advice: 'จำกัดไม่เกิน 1/2 แก้ว/วัน หรือน้อยกว่า' },
      stage4_5_pre: { level: 'danger', advice: 'ควรหลีกเลี่ยง หรือเลือกนมสูตรเฉพาะโรคไตแทน' },
      dialysis: { level: 'danger', advice: 'ควรหลีกเลี่ยง ฟอสฟอรัสสะสมเร็วมาก' },
    },
  },
  {
    id: 'soy-milk-unsweetened',
    name: 'นมถั่วเหลือง (สูตรไม่หวาน/ไม่เสริมแคลเซียม)',
    category: 'drink',
    categoryName: 'เครื่องดื่ม/ของหวาน',
    icon: '🥛',
    tags: ['ฟอสฟอรัสน้อยกว่านมวัว', 'โปรตีนพืช'],
    reason:
      'มีฟอสฟอรัสและโพแทสเซียมต่ำกว่านมวัวพอสมควร เป็นทางเลือกที่ดีกว่าสำหรับผู้ที่ต้องจำกัดฟอสฟอรัส แต่สูตรเสริมแคลเซียม/เสริมสารอาหารบางยี่ห้ออาจมีฟอสฟอรัสสูงขึ้น ควรอ่านฉลาก',
    advice: 'เลือกสูตรไม่หวาน ไม่เสริมแคลเซียม และดื่มในปริมาณพอเหมาะ',
    keywords: ['นมถั่วเหลือง', 'นมถั่ว', 'เครื่องดื่ม', 'โปรตีนพืช'],
    source: {
      name: 'National Kidney Foundation (บทความ Plant Based Milk and Kidney Disease)',
      url: 'https://www.kidney.org/kidney-topics/milk-alternatives',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ดื่มได้ตามปกติ เลือกสูตรไม่หวาน' },
      stage3: { level: 'safe', advice: 'ดื่มได้วันละ 1 แก้ว' },
      stage4_5_pre: { level: 'caution', advice: 'จำกัดปริมาณ เลือกสูตรไม่เสริมแคลเซียม' },
      dialysis: { level: 'caution', advice: 'จำกัดปริมาณ' },
    },
  },
  {
    id: 'tofu',
    name: 'เต้าหู้ (เต้าหู้ขาว/เต้าหู้หลอด)',
    category: 'protein',
    categoryName: 'เนื้อสัตว์/โปรตีน',
    icon: '🧊',
    tags: ['โปรตีนพืชคุณภาพดี', 'ฟอสฟอรัสปานกลาง'],
    reason:
      'เป็นโปรตีนทางเลือกที่ย่อยง่าย มีฟอสฟอรัสน้อยกว่าเนื้อสัตว์แปรรูปและถั่วเมล็ดแห้ง เหมาะเป็นโปรตีนสลับมื้อ',
    advice: 'ทานสลับกับไข่ขาวและเนื้อปลา ปรุงแบบต้ม นึ่ง หรือผัดน้ำมันน้อย',
    keywords: ['เต้าหู้', 'เต้าหู้ขาว', 'เต้าหู้หลอด', 'โปรตีนพืช'],
    source: {
      name: 'National Kidney Foundation (บทความ Tofu and Kidney Disease)',
      url: 'https://www.kidney.org/kidney-topics/tofu',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานได้ตามปกติ' },
      stage3: { level: 'safe', advice: 'ทานมื้อละ 2-3 ช้อนโต๊ะ สลับกับเนื้อสัตว์' },
      stage4_5_pre: { level: 'caution', advice: 'จำกัดปริมาณตามโควตาโปรตีนรวมต่อวัน' },
      dialysis: { level: 'safe', advice: 'ทานได้ดี เป็นโปรตีนเสริม' },
    },
  },
  {
    id: 'shrimp',
    name: 'กุ้ง',
    category: 'protein',
    categoryName: 'เนื้อสัตว์/โปรตีน',
    icon: '🍤',
    tags: ['พิวรีนสูง', 'คอเลสเตอรอลสูง', 'ฟอสฟอรัสปานกลาง'],
    reason:
      'กุ้งมีคอเลสเตอรอลและพิวรีนค่อนข้างสูง (สำคัญมากถ้ามีโรคเก๊าท์ร่วมด้วย) แต่โพแทสเซียมและฟอสฟอรัสอยู่ในระดับปานกลาง ทานได้ในปริมาณจำกัด',
    advice: 'ทานได้ในปริมาณพอเหมาะ ไม่ทานพร้อมส่วนหัวหรือมันกุ้ง หลีกเลี่ยงหากมีโรคเก๊าท์ร่วม',
    keywords: ['กุ้ง', 'อาหารทะเล', 'โปรตีน', 'กุ้งเผา', 'กุ้งแช่น้ำปลา'],
    source: {
      name: 'National Kidney Foundation (บทความ Shellfish)',
      url: 'https://www.kidney.org/kidney-topics/shellfish',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานได้มื้อละ 4-5 ตัวขนาดกลาง' },
      stage3: { level: 'caution', advice: 'จำกัดมื้อละ 3-4 ตัว ไม่บ่อย' },
      stage4_5_pre: { level: 'caution', advice: 'จำกัดปริมาณตามโควตาโปรตีนรวม' },
      dialysis: { level: 'safe', advice: 'ทานได้มื้อละ 4-5 ตัว เพื่อเสริมโปรตีน' },
    },
  },

  // ================= 🍜 ข้าว-แป้ง ที่ยังขาด =================
  {
    id: 'instant-noodle',
    name: 'บะหมี่กึ่งสำเร็จรูป',
    category: 'carb',
    categoryName: 'ข้าว-แป้ง',
    icon: '🍥',
    tags: ['โซเดียมสูงจัด', 'ฟอสเฟตสังเคราะห์', 'อันตราย'],
    reason:
      'ผงปรุงรสมีโซเดียมสูงมากในซองเดียว และเส้นมักผสมสารฟอสเฟตเพื่อความเหนียวนุ่ม ซึ่งร่างกายดูดซึมได้เกือบทั้งหมด',
    advice: 'หลีกเลี่ยงหรือทานนานๆ ครั้ง ใช้ผงปรุงรสไม่เกินครึ่งซอง และเติมผักลวก/ไข่ขาวแทนการเติมเครื่องปรุงเพิ่ม',
    keywords: ['บะหมี่กึ่งสำเร็จรูป', 'มาม่า', 'ไวไว', 'ยำยำ', 'บะหมี่ซอง'],
    source: {
      name: 'โรงพยาบาลพระรามเก้า (บทความอาหารผู้ป่วยโรคไตวายเรื้อรัง)',
      url: 'https://praram9.com/th/articles/food-for-ckd-patients',
    },
    stages: {
      stage1_2: { level: 'caution', advice: 'ทานได้นานๆ ครั้ง ใช้ผงปรุงรสน้อยกว่าครึ่งซอง' },
      stage3: { level: 'danger', advice: 'ควรหลีกเลี่ยง โซเดียมสูงเกินไป' },
      stage4_5_pre: { level: 'danger', advice: 'ห้ามรับประทาน' },
      dialysis: { level: 'danger', advice: 'ห้ามรับประทาน เสี่ยงบวมน้ำและฟอสเฟตพุ่ง' },
    },
  },

  // ================= 🧂 เครื่องปรุง/อาหารหมักดอง ที่ยังขาด =================
  {
    id: 'fermented-fish',
    name: 'ปลาร้า / ปลาเจ่า / น้ำปลาร้า',
    category: 'condiment',
    categoryName: 'เครื่องปรุง',
    icon: '🫙',
    tags: ['โซเดียมสูงจัดที่สุด', 'อันตราย'],
    reason:
      'เป็นเครื่องปรุงที่มีโซเดียมเข้มข้นที่สุดในอาหารไทย เพียงช้อนเดียวอาจเทียบเท่าโซเดียมทั้งวันที่ควรได้รับ',
    advice: '❌ ควรหลีกเลี่ยงทุกระยะ ใช้สมุนไพรสดหรือน้ำมะนาวชูรสแทน',
    keywords: ['ปลาร้า', 'ปลาเจ่า', 'น้ำปลาร้า', 'ส้มตำ', 'เครื่องปรุง'],
    source: {
      name: 'โรงพยาบาลศิริราช ปิยมหาราชการุณย์ (บทความโรคไต ภัยเงียบจากความเค็ม)',
      url: 'https://www.siphhospital.com/th/news/article/share/sodium-and-kidney-disease',
    },
    stages: {
      stage1_2: { level: 'danger', advice: 'ควรหลีกเลี่ยง โซเดียมสูงมาก' },
      stage3: { level: 'danger', advice: 'ห้ามรับประทาน' },
      stage4_5_pre: { level: 'danger', advice: 'ห้ามรับประทานเด็ดขาด' },
      dialysis: { level: 'danger', advice: 'ห้ามรับประทานเด็ดขาด' },
    },
  },
  {
    id: 'pickled-vegetable',
    name: 'ผักดอง / ไชโป๊ว / กิมจิ',
    category: 'condiment',
    categoryName: 'เครื่องปรุง',
    icon: '🥒',
    tags: ['โซเดียมสูงมาก'],
    reason:
      'กระบวนการดองใช้เกลือปริมาณมาก ทำให้โซเดียมสูงมากแม้จะเป็นผัก และยังมีโพแทสเซียมจากน้ำดองสะสมด้วย',
    advice: 'หลีกเลี่ยงหรือทานปริมาณน้อยมาก ล้างน้ำก่อนทานเพื่อลดโซเดียมบางส่วน',
    keywords: ['ผักดอง', 'ไชโป๊ว', 'กิมจิ', 'ผักกาดดอง', 'เครื่องปรุง'],
    source: {
      name: 'โรงพยาบาลศิริราช ปิยมหาราชการุณย์ (บทความโรคไต ภัยเงียบจากความเค็ม)',
      url: 'https://www.siphhospital.com/th/news/article/share/sodium-and-kidney-disease',
    },
    stages: {
      stage1_2: { level: 'caution', advice: 'ทานได้น้อยมาก ล้างน้ำก่อน' },
      stage3: { level: 'danger', advice: 'ควรหลีกเลี่ยง' },
      stage4_5_pre: { level: 'danger', advice: 'ห้ามรับประทาน' },
      dialysis: { level: 'danger', advice: 'ห้ามรับประทาน' },
    },
  },

  // ================= ☕ เครื่องดื่มที่ยังขาด =================
  {
    id: 'coffee',
    name: 'กาแฟ (ดำ/ใส่นม)',
    category: 'drink',
    categoryName: 'เครื่องดื่ม/ของหวาน',
    icon: '☕',
    tags: ['คาเฟอีน', 'โพแทสเซียมปานกลางถ้าไม่ใส่นม'],
    reason:
      'กาแฟดำมีโพแทสเซียมไม่สูงมากหากดื่มในปริมาณพอเหมาะ แต่หากใส่นมหรือครีมเทียมจะเพิ่มฟอสฟอรัสและโพแทสเซียมตามไปด้วย',
    advice: 'ดื่มกาแฟดำแทนกาแฟใส่นม จำกัดไม่เกินวันละ 1-2 แก้ว',
    keywords: ['กาแฟ', 'กาแฟดำ', 'คาเฟอีน', 'เครื่องดื่ม'],
    source: {
      name: 'National Kidney Foundation (บทความ Coffee and Kidney Disease: Is it Safe?)',
      url: 'https://www.kidney.org/news-stories/coffee-and-kidney-disease-it-safe',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ดื่มได้ตามปกติ ไม่เกิน 2-3 แก้ว/วัน' },
      stage3: { level: 'caution', advice: 'ดื่มกาแฟดำ ไม่เกิน 1-2 แก้ว/วัน' },
      stage4_5_pre: { level: 'caution', advice: 'จำกัดเป็นกาแฟดำเท่านั้น ไม่เกิน 1 แก้ว/วัน' },
      dialysis: { level: 'caution', advice: 'นับรวมในโควตาน้ำดื่มประจำวัน' },
    },
  },
];
