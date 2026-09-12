import { FoodItem } from '../types/food';

export const foods: FoodItem[] = [
  // ================= 🍎 ผลไม้ (FRUITS) =================
  {
    id: 'apple',
    name: 'แอปเปิ้ล (เขียว/แดง)',
    category: 'fruit',
    categoryName: 'ผลไม้',
    icon: '🍎',
    imageUrl: '/images/foods/apple.jpg',
    imageCredit: 'Photo by Tom Hermans on Unsplash (CC0/Free License)',
    tags: ['โพแทสเซียมต่ำ', 'กากใยสูง', 'มีเพคติน'],
    reason:
      'โพแทสเซียมต่ำมาก (ประมาณ 100-120 มก./ผล) มีสารเพคตินช่วยลดระดับคอเลสเตอรอลในเลือด ปลอดภัยต่อไตทุกระยะ',
    advice: 'รับประทานวันละ 1/2 ถึง 1 ผล ปอกเปลือกออกจะช่วยลดโพแทสเซียมลงได้อีกขั้น',
    keywords: ['แอปเปิ้ล', 'apple', 'ผลไม้', 'ผลไม้โพแทสเซียมต่ำ', 'ของว่าง', 'ของหวาน'],
    source: {
      name: 'สมาคมโรคไตแห่งประเทศไทย',
      url: 'https://www.nephrothai.org/',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานได้ตามปกติ 1-2 ผล/วัน' },
      stage3: { level: 'safe', advice: 'ทานได้วันละ 1 ผลขนาดกลาง' },
      stage4_5_pre: { level: 'safe', advice: 'ทานได้วันละ 1/2 - 1 ผล ควรปอกเปลือก' },
      dialysis: { level: 'safe', advice: 'ทานได้วันละ 1/2 - 1 ผล ระวังเรื่องน้ำในผลไม้' },
    },
  },
  {
    id: 'rose-apple',
    name: 'ชมพู่',
    category: 'fruit',
    categoryName: 'ผลไม้',
    icon: '🍐',
    imageUrl: '/images/foods/rose-apple.jpg',
    imageCredit: 'Wikimedia Commons (CC BY-SA 3.0)',
    tags: ['โพแทสเซียมต่ำ', 'น้ำตาลน้อย', 'สดชื่น'],
    reason:
      'ผลไม้โพแทสเซียมต่ำมาก เนื้อกรอบฉ่ำน้ำ ไม่เพิ่มภาระขับโพแทสเซียมให้ไต',
    advice: 'ทานครั้งละ 2-3 ผล (หากบวมน้ำหรือฟอกไตให้ระวังปริมาณน้ำในเนื้อชมพู่)',
    keywords: ['ชมพู่', 'ผลไม้', 'ผลไม้ไทย', 'ผลไม้โพแทสเซียมต่ำ', 'ของว่าง'],
    source: {
      name: 'ฝ่ายโภชนาการ โรงพยาบาลรามาธิบดี',
      url: 'https://www.rama.mahidol.ac.th/ramachannel/',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานได้ตามชอบ 3-4 ผล' },
      stage3: { level: 'safe', advice: 'ทานได้มื้อละ 2-3 ผล' },
      stage4_5_pre: { level: 'safe', advice: 'ทานได้ครั้งละ 1-2 ผล' },
      dialysis: { level: 'safe', advice: 'ทานได้ 1-2 ผล (นับรวมในโควตาน้ำดื่มประจำวัน)' },
    },
  },
  {
    id: 'pineapple',
    name: 'สับปะรด',
    category: 'fruit',
    categoryName: 'ผลไม้',
    icon: '🍍',
    imageUrl: '/images/foods/pineapple.jpg',
    imageCredit: 'Photo by Pineapple Supply Co. on Unsplash (CC0/Free License)',
    tags: ['โพแทสเซียมต่ำ', 'เอนไซม์ย่อยโปรตีน'],
    reason:
      'มีโพแทสเซียมต่ำเมื่อเทียบกับผลไม้รสหวานอื่น และมีเอนไซม์โบรมีเลนช่วยย่อยอาหาร',
    advice: 'ทานครั้งละ 4-6 ชิ้นพอดีคำ เลี่ยงสับปะรดกระป๋องในน้ำเชื่อม',
    keywords: ['สับปะรด', 'ผลไม้', 'ผลไม้เปรี้ยว', 'ของหวาน'],
    source: {
      name: 'National Kidney Foundation (NKF)',
      url: 'https://www.kidney.org/atoz/content/kidney-friendly-fruits',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานได้ 6-8 ชิ้นคำ' },
      stage3: { level: 'safe', advice: 'ทานได้ 4-6 ชิ้นคำ' },
      stage4_5_pre: { level: 'safe', advice: 'ทานได้ 3-4 ชิ้นคำพอดี' },
      dialysis: { level: 'safe', advice: 'ทานได้ 4 ชิ้นคำ' },
    },
  },
  {
    id: 'guava',
    name: 'ฝรั่ง',
    category: 'fruit',
    categoryName: 'ผลไม้',
    icon: '🍈',
    imageUrl: '/images/foods/guava.jpg',
    imageCredit: 'Photo by Midori on Wikimedia Commons (CC BY-SA 3.0)',
    tags: ['โพแทสเซียมปานกลาง', 'วิตามินซีสูง'],
    reason:
      'มีวิตามินซีสูงมาก แต่มีโพแทสเซียมในระดับปานกลางค่อนข้างสูง (ประมาณ 180-250 มก./100 กรัม)',
    advice: 'ทานครั้งละ 1/4 - 1/2 ลูก ไม่จิ้มพริกเกลือ',
    keywords: ['ฝรั่ง', 'ผลไม้', 'วิตามินซี', 'ของว่าง'],
    source: {
      name: 'คณะแพทยศาสตร์ศิริราชพยาบาล',
      url: 'https://www.si.mahidol.ac.th/',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานได้ 1/2 ถึง 1 ผล' },
      stage3: { level: 'caution', advice: 'คุมปริมาณครั้งละ 1/3 - 1/2 ผล สัปดาห์ละ 2-3 ครั้ง' },
      stage4_5_pre: { level: 'danger', advice: 'ควรหลีกเลี่ยง เพราะโพแทสเซียมสะสมไวมากในระยะนี้' },
      dialysis: { level: 'caution', advice: 'ทานได้นานๆ ครั้ง ครั้งละ 2-3 ชิ้นคำ' },
    },
  },
  {
    id: 'papaya',
    name: 'มะละกอสุก',
    category: 'fruit',
    categoryName: 'ผลไม้',
    icon: '🥭',
    imageUrl: '/images/foods/papaya.jpg',
    imageCredit: 'Photo by Unsplash (CC0/Free License)',
    tags: ['โพแทสเซียมปานกลาง', 'ช่วยระบาย'],
    reason:
      'ช่วยการขับถ่าย แต่มีโพแทสเซียมปานกลาง หากทานมากระดับโพแทสเซียมในเลือดจะสูงขึ้น',
    advice: 'ทานครั้งละไม่เกิน 4-5 ชิ้นคำพอดี',
    keywords: ['มะละกอ', 'มะละกอสุก', 'ผลไม้'],
    source: {
      name: 'โรงพยาบาลรามาธิบดี',
      url: 'https://www.rama.mahidol.ac.th/ramachannel/',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานได้ 6-8 ชิ้นคำ' },
      stage3: { level: 'caution', advice: 'จำกัด 4-5 ชิ้นคำ' },
      stage4_5_pre: { level: 'caution', advice: 'จำกัด 3-4 ชิ้นคำ หรือเลี่ยงหากโพแทสเซียมในเลือดเกิน 5.0' },
      dialysis: { level: 'caution', advice: 'จำกัด 3-4 ชิ้นคำ' },
    },
  },
  {
    id: 'starfruit',
    name: 'มะเฟือง (อันตรายถึงชีวิต!)',
    category: 'fruit',
    categoryName: 'ผลไม้',
    icon: '⭐',
    imageUrl: '/images/foods/starfruit.jpg',
    imageCredit: 'Wikimedia Commons (CC BY-SA 3.0)',
    tags: ['สารพิษ Caramboxin', 'ออกซาเลตสูงจัด', 'ห้ามเด็ดขาดทุกระยะ'],
    reason:
      'มีสารพิษต่อระบบประสาทชื่อ Caramboxin ไตที่เสื่อมจะไม่สามารถขับออกได้ ทำให้สะอึกรุนแรง ชัก โคม่า ไตวายเฉียบพลัน และเสียชีวิตได้',
    advice: '❌ ห้ามรับประทานเด็ดขาดทุกระยะ ไม่ว่าจะสด คั้นน้ำ หรือแปรรูป',
    keywords: ['มะเฟือง', 'น้ำมะเฟือง', 'ผลไม้', 'สารพิษ', 'ห้ามกิน'],
    source: {
      name: 'สมาคมโรคไตแห่งประเทศไทย (ประกาศเตือนภัยมะเฟือง)',
      url: 'https://www.nephrothai.org/',
    },
    stages: {
      stage1_2: { level: 'danger', advice: 'ห้ามรับประทานเด็ดขาด' },
      stage3: { level: 'danger', advice: 'ห้ามรับประทานเด็ดขาด' },
      stage4_5_pre: { level: 'danger', advice: 'อันตรายถึงชีวิต! ห้ามรับประทานเด็ดขาด' },
      dialysis: { level: 'danger', advice: 'อันตรายถึงชีวิต! ห้ามรับประทานเด็ดขาด' },
    },
  },
  {
    id: 'banana',
    name: 'กล้วยทุกชนิด (กล้วยหอม, น้ำว้า, ไข่)',
    category: 'fruit',
    categoryName: 'ผลไม้',
    icon: '🍌',
    imageUrl: '/images/foods/banana.jpg',
    imageCredit: 'Photo by Rodrigo dos Reis on Unsplash (CC0/Free License)',
    tags: ['โพแทสเซียมสูงมาก', 'เสี่ยงหัวใจเต้นผิดจังหวะ'],
    reason:
      'กล้วยมีโพแทสเซียมสูงมาก (350-450 มก./100g) ทำให้โพแทสเซียมในเลือดพุ่งสูง เสี่ยงต่อภาวะหัวใจเต้นผิดจังหวะหรือหัวใจวาย',
    advice: 'ควรหลีกเลี่ยงในระยะไตเสื่อมปานกลางถึงรุนแรง',
    keywords: ['กล้วย', 'กล้วยหอม', 'กล้วยน้ำว้า', 'กล้วยไข่', 'ผลไม้'],
    source: {
      name: 'สมาคมโรคไตแห่งประเทศไทย',
      url: 'https://www.nephrothai.org/',
    },
    stages: {
      stage1_2: { level: 'caution', advice: 'ทานได้วันละ 1 ลูก (หากผลเลือดปกติ)' },
      stage3: { level: 'danger', advice: 'ควรหลีกเลี่ยง หรือทานไม่เกิน 1/2 ลูกนานๆ ครั้ง' },
      stage4_5_pre: { level: 'danger', advice: 'งดเด็ดขาด โพแทสเซียมสูงจัด เสี่ยงหัวใจวาย' },
      dialysis: { level: 'danger', advice: 'งดเด็ดขาด โพแทสเซียมสะสมไวมากระหว่างรอบฟอก' },
    },
  },
  {
    id: 'durian',
    name: 'ทุเรียน',
    category: 'fruit',
    categoryName: 'ผลไม้',
    icon: '🍈',
    imageUrl: '/images/foods/durian.jpg',
    imageCredit: 'Photo by Hafiz Issadeen on Wikimedia Commons (CC BY-SA 4.0)',
    tags: ['โพแทสเซียมสูงลิ่ว', 'ฟอสฟอรัสสูง', 'น้ำตาลสูง'],
    reason:
      'อุดมด้วยโพแทสเซียม ฟอสฟอรัส และพลังงานเข้มข้น ไตขับไม่ทันอย่างแน่นอน',
    advice: 'งดรับประทานเด็ดขาดสำหรับผู้ป่วยโรคไต',
    keywords: ['ทุเรียน', 'ผลไม้', 'ทุเรียนกวน', 'ผลไม้หวานจัด'],
    source: {
      name: 'กรมอนามัย กระทรวงสาธารณสุข',
      url: 'https://multimedia.anamai.moph.go.th/',
    },
    stages: {
      stage1_2: { level: 'caution', advice: 'ทานได้ไม่เกิน 1 เม็ดเล็กนานๆ ครั้ง' },
      stage3: { level: 'danger', advice: 'ควรหลีกเลี่ยงเด็ดขาด' },
      stage4_5_pre: { level: 'danger', advice: 'ห้ามรับประทานเด็ดขาด' },
      dialysis: { level: 'danger', advice: 'ห้ามรับประทานเด็ดขาด' },
    },
  },
  {
    id: 'orange',
    name: 'ส้ม / น้ำส้มคั้น',
    category: 'fruit',
    categoryName: 'ผลไม้',
    icon: '🍊',
    imageUrl: '/images/foods/orange.jpg',
    imageCredit: 'Photo by Mae Mu on Unsplash (CC0/Free License)',
    tags: ['โพแทสเซียมสูงมาก', 'กรดซิตริก'],
    reason:
      'ส้มและน้ำส้มมีโพแทสเซียมสูงจัด โดยเฉพาะน้ำส้มคั้น 1 แก้วเทียบเท่าส้ม 3-4 ผล ทำให้โพแทสเซียมในเลือดพุ่งขึ้นอย่างรวดเร็ว',
    advice: 'หลีกเลี่ยงน้ำส้มคั้น หากอยากทานส้มสดให้ทานไม่เกิน 1 ผลเล็กในระยะแรก',
    keywords: ['ส้ม', 'น้ำส้ม', 'ส้มเขียวหวาน', 'ส้มโอ', 'ผลไม้'],
    source: {
      name: 'สมาคมโรคไตแห่งประเทศไทย',
      url: 'https://www.nephrothai.org/',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานผลสดได้วันละ 1 ผล เลี่ยงน้ำส้มคั้น' },
      stage3: { level: 'caution', advice: 'ทานได้ไม่เกิน 1 ผลเล็ก งดน้ำส้มคั้น' },
      stage4_5_pre: { level: 'danger', advice: 'หลีกเลี่ยงเด็ดขาด โพแทสเซียมสูงเกินไตขับ' },
      dialysis: { level: 'danger', advice: 'หลีกเลี่ยงเด็ดขาด เสี่ยงหัวใจเต้นผิดจังหวะ' },
    },
  },

  // ================= 🥦 ผัก (VEGETABLES) =================
  {
    id: 'cabbage',
    name: 'กะหล่ำปลี',
    category: 'vegetable',
    categoryName: 'ผัก',
    icon: '🥬',
    tags: ['โพแทสเซียมต่ำมาก', 'ไฟเบอร์สูง', 'ปลอดภัยสูงสุด'],
    reason:
      'เป็นผักสีขาว/อ่อนที่มีโพแทสเซียมต่ำมาก โซเดียมต่ำ และมีวิตามิน C, K เหมาะกับโรคไตทุกระยะ',
    advice: 'ทานได้ทั้งผัด ต้ม หรือลวก การนำไปลวกน้ำเดือดแล้วเทน้ำทิ้งจะลดโพแทสเซียมลงได้อีก',
    keywords: ['กะหล่ำปลี', 'ผัก', 'ผักกะหล่ำ', 'ผักใบขาว', 'โพแทสเซียมต่ำ'],
    source: {
      name: 'American Kidney Fund',
      url: 'https://www.kidneyfund.org/',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานได้ตามสบาย' },
      stage3: { level: 'safe', advice: 'ทานได้ดี เหมาะเป็นผักประจำวัน' },
      stage4_5_pre: { level: 'safe', advice: 'ปลอดภัย แนะนำลวกน้ำทิ้งก่อนปรุง' },
      dialysis: { level: 'safe', advice: 'ปลอดภัย แนะนำลวกน้ำทิ้งก่อน' },
    },
  },
  {
    id: 'chinese-cabbage',
    name: 'ผักกาดขาว',
    category: 'vegetable',
    categoryName: 'ผัก',
    icon: '🥬',
    tags: ['โพแทสเซียมต่ำ', 'ย่อยง่าย', 'น้ำเยอะ'],
    reason:
      'ผักสีซีดโพแทสเซียมต่ำ ย่อยง่าย อ่อนโยนต่อทางเดินอาหารและไต',
    advice: 'เหมาะสำหรับทำแกงจืด ต้มจืด หรือผัดผักน้ำมันน้อย',
    keywords: ['ผักกาดขาว', 'ผัก', 'ต้มจืด', 'โพแทสเซียมต่ำ', 'ผักใบอ่อน'],
    source: {
      name: 'สมาคมโรคไตแห่งประเทศไทย',
      url: 'https://www.nephrothai.org/',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานได้ตามปกติ' },
      stage3: { level: 'safe', advice: 'ทานได้ดีทุกวัน' },
      stage4_5_pre: { level: 'safe', advice: 'ทานได้ ปรุงสุกน้ำใส' },
      dialysis: { level: 'safe', advice: 'ทานได้ดี' },
    },
  },
  {
    id: 'cucumber',
    name: 'แตงกวา / แตงร้าน',
    category: 'vegetable',
    categoryName: 'ผัก',
    icon: '🥒',
    tags: ['โพแทสเซียมต่ำ', 'สดชื่น'],
    reason: 'โพแทสเซียมและฟอสฟอรัสต่ำมาก ปลอดภัยสูง',
    advice: 'ปอกเปลือกก่อนรับประทานเพื่อลดโพแทสเซียมที่ผิวเปลือก',
    keywords: ['แตงกวา', 'แตงร้าน', 'ผัก', 'ผักสลัด', 'แตง'],
    source: {
      name: 'กรมอนามัย กระทรวงสาธารณสุข',
      url: 'https://multimedia.anamai.moph.go.th/',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานสดหรือผัดได้ตามชอบ' },
      stage3: { level: 'safe', advice: 'ปอกเปลือกแล้วทานได้' },
      stage4_5_pre: { level: 'safe', advice: 'ปอกเปลือกและทานแต่พอเหมาะ' },
      dialysis: { level: 'safe', advice: 'ปอกเปลือก (ระวังเรื่องน้ำถ้ามีอาการบวม)' },
    },
  },
  {
    id: 'carrot',
    name: 'แครอท',
    category: 'vegetable',
    categoryName: 'ผัก',
    icon: '🥕',
    tags: ['โพแทสเซียมปานกลาง', 'เบต้าแคโรทีน'],
    reason:
      'แครอทดิบมีโพแทสเซียมระดับปานกลางค่อนข้างสูง แต่สามารถลดลงได้ด้วยการหั่นต้มน้ำทิ้ง',
    advice: 'หั่นเป็นลูกเต๋า ต้มในน้ำเดือด 10 นาทีแล้วเทน้ำทิ้งก่อนนำไปปรุงอาหาร',
    keywords: ['แครอท', 'ผัก', 'ผักสีส้ม', 'ต้มซุป'],
    source: {
      name: 'National Kidney Foundation',
      url: 'https://www.kidney.org/',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานได้ตามปกติ' },
      stage3: { level: 'caution', advice: 'ต้มลวกน้ำทิ้งก่อนรับประทาน' },
      stage4_5_pre: { level: 'caution', advice: 'จำกัดปริมาณ ต้องต้มน้ำทิ้งเท่านั้น' },
      dialysis: { level: 'caution', advice: 'จำกัดปริมาณ ต้มน้ำทิ้ง' },
    },
  },
  {
    id: 'spinach-tamlueng',
    name: 'ผักโขม / ตำลึง / ผักคะน้า / บรอกโคลี',
    category: 'vegetable',
    categoryName: 'ผัก',
    icon: '🌿',
    tags: ['โพแทสเซียมสูงมาก', 'ออกซาเลตสูง'],
    reason:
      'ผักใบเขียวเข้มมีโพแทสเซียมสูงมาก เมื่อทำให้สุกและยุบตัวจะได้รับโพแทสเซียมปริมาณมหาศาล',
    advice: 'เปลี่ยนมาใช้ผักกาดขาวหรือกะหล่ำปลีแทน',
    keywords: ['ตำลึง', 'ผักโขม', 'คะน้า', 'บรอกโคลี', 'ผักใบเขียวเข้ม', 'ผัก'],
    source: {
      name: 'สมาคมโรคไตแห่งประเทศไทย',
      url: 'https://www.nephrothai.org/',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานได้ปกติ แต่ต้มลวกดีกว่าทานสด' },
      stage3: { level: 'caution', advice: 'เลี่ยงทานบ่อย หรือต้องต้มน้ำทิ้งอย่างน้อย 2 ครั้ง' },
      stage4_5_pre: { level: 'danger', advice: 'หลีกเลี่ยงเด็ดขาด เสี่ยงหัวใจเต้นผิดจังหวะ' },
      dialysis: { level: 'danger', advice: 'หลีกเลี่ยงเด็ดขาด' },
    },
  },
  {
    id: 'pumpkin',
    name: 'ฟักทอง',
    category: 'vegetable',
    categoryName: 'ผัก',
    icon: '🎃',
    tags: ['โพแทสเซียมสูงมาก', 'คาร์โบไฮเดรต'],
    reason:
      'มีโพแทสเซียมสูงมาก แม้จะต้มแล้วก็ยังมีความเข้มข้นสูงในเนื้อ',
    advice: 'ควรหลีกเลี่ยงทั้งในอาหารคาวและของหวานไทย (แกงบวด, สังขยา)',
    keywords: ['ฟักทอง', 'ผัก', 'ขนมไทย', 'แกงบวด'],
    source: {
      name: 'โรงพยาบาลรามาธิบดี',
      url: 'https://www.rama.mahidol.ac.th/ramachannel/',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานได้พอเหมาะ' },
      stage3: { level: 'caution', advice: 'ทานได้แต่น้อย ครั้งละ 1-2 ชิ้นเล็ก' },
      stage4_5_pre: { level: 'danger', advice: 'หลีกเลี่ยงเด็ดขาด' },
      dialysis: { level: 'danger', advice: 'หลีกเลี่ยงเด็ดขาด' },
    },
  },
  {
    id: 'tomato',
    name: 'มะเขือเทศ / ซอสมะเขือเทศ',
    category: 'vegetable',
    categoryName: 'ผัก',
    icon: '🍅',
    tags: ['โพแทสเซียมสูงจัด', 'ไลโคปีน'],
    reason:
      'มะเขือเทศสดและซอสมะเขือเทศเข้มข้นมีโพแทสเซียมสูงมาก ซอสและน้ำพริกอ่องมักทำให้โพแทสเซียมพุ่งขึ้นสูง',
    advice: 'หากต้องการทานสด ให้เลือกมะเขือเทศลูกเล็กไม่เกิน 1-2 ลูก หรือหลีกเลี่ยงในระยะท้าย',
    keywords: ['มะเขือเทศ', 'ซอสมะเขือเทศ', 'ผัก', 'สลัด'],
    source: {
      name: 'American Kidney Fund',
      url: 'https://www.kidneyfund.org/',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานผลสดได้ 1 ลูกกลาง' },
      stage3: { level: 'caution', advice: 'จำกัดปริมาณ เลี่ยงซอสมะเขือเทศเข้มข้น' },
      stage4_5_pre: { level: 'danger', advice: 'หลีกเลี่ยงเด็ดขาด' },
      dialysis: { level: 'danger', advice: 'หลีกเลี่ยงเด็ดขาด' },
    },
  },

  // ================= 🍗 เนื้อสัตว์/โปรตีน (PROTEIN) =================
  {
    id: 'egg-white',
    name: 'ไข่ขาว (สุก)',
    category: 'protein',
    categoryName: 'เนื้อสัตว์/โปรตีน',
    icon: '🥚',
    tags: ['โปรตีนบริสุทธิ์', 'ฟอสฟอรัสต่ำมาก', 'ของเสียยูเรียต่ำ'],
    reason:
      'ไข่ขาวคือโปรตีนคุณภาพสูงสุด (High Biological Value) มีฟอสฟอรัสต่ำมาก ร่างกายดูดซึมซ่อมแซมได้หมด สร้างของเสียน้อยที่สุด',
    advice: 'ไข่ต้ม ไข่ตุ๋นน้ำ หรือไข่ดาวน้ำ (ไม่ทอดน้ำมันท่วม)',
    keywords: ['ไข่ขาว', 'ไข่', 'โปรตีน', 'กล้ามเนื้อ', 'อาหารเสริมโปรตีน'],
    source: {
      name: 'สมาคมโรคไตแห่งประเทศไทย',
      url: 'https://www.nephrothai.org/',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานได้ปกติ 2-3 ฟอง/วัน' },
      stage3: { level: 'safe', advice: 'ทานวันละ 2-3 ฟอง ทดแทนเนื้อสัตว์ติดมัน' },
      stage4_5_pre: {
        level: 'safe',
        advice: 'ดีที่สุด! ทานวันละ 2-3 ฟอง (คำนวณตามน้ำหนักตัวเพื่อไม่ให้โปรตีนรวมเกินเกณฑ์)',
      },
      dialysis: {
        level: 'safe',
        advice: '🌟 จำเป็นมาก! แนะนำทานวันละ 4-6 ฟอง เพื่อชดเชยโปรตีนที่สูญเสียจากการฟอกไต',
      },
    },
  },
  {
    id: 'white-fish',
    name: 'ปลาน้ำจืดเนื้อขาว (ปลากะพง, ปลานิล, ปลาช่อน)',
    category: 'protein',
    categoryName: 'เนื้อสัตว์/โปรตีน',
    icon: '🐟',
    tags: ['โปรตีนย่อยง่าย', 'ฟอสฟอรัสน้อยกว่าเนื้อแดง', 'ไขมันต่ำ'],
    reason:
      'ย่อยง่าย มีพิวรีนและฟอสฟอรัสน้อยกว่าเนื้อหมูหรือเนื้อวัวติดมัน',
    advice: 'นึ่ง ต้ม ลวก หลีกเลี่ยงปลาเค็มหรือปลาแดดเดียวหมักเกลือ',
    keywords: ['ปลา', 'ปลาน้ำจืด', 'ปลานิล', 'ปลากะพง', 'ปลาช่อน', 'เนื้อปลา', 'โปรตีน'],
    source: {
      name: 'โรงพยาบาลศิริราช',
      url: 'https://www.si.mahidol.ac.th/',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานได้ตามชอบ' },
      stage3: { level: 'safe', advice: 'ทานมื้อละ 2-3 ช้อนโต๊ะ' },
      stage4_5_pre: {
        level: 'safe',
        advice: 'ทานมื้อละ 2-3 ช้อนโต๊ะ (ควบคุมน้ำหนักชิ้นเนื้อตามเกณฑ์แพทย์)',
      },
      dialysis: {
        level: 'safe',
        advice: 'ทานได้เต็มที่ มื้อละ 3-4 ช้อนโต๊ะ เพื่อฟื้นฟูกล้ามเนื้อ',
      },
    },
  },
  {
    id: 'chicken-breast',
    name: 'อกไก่ไม่ติดหนัง',
    category: 'protein',
    categoryName: 'เนื้อสัตว์/โปรตีน',
    icon: '🍗',
    tags: ['โปรตีนไขมันต่ำ', 'ฟอสฟอรัสปานกลาง'],
    reason:
      'เป็นเนื้อสัตว์ไม่ติดมันที่ย่อยง่าย มีฟอสฟอรัสน้อยกว่าเนื้อแดง แต่ยังต้องคุมปริมาณในระยะก่อนฟอก',
    advice: 'ปรุงด้วยวิธีต้ม นึ่ง ย่าง ไม่หมักซอสเค็มจัด',
    keywords: ['อกไก่', 'ไก่', 'เนื้อไก่', 'โปรตีน'],
    source: {
      name: 'สมาคมโรคไตแห่งประเทศไทย',
      url: 'https://www.nephrothai.org/',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานได้มื้อละ 3-4 ช้อนโต๊ะ' },
      stage3: { level: 'safe', advice: 'ทานมื้อละ 2-3 ช้อนโต๊ะ' },
      stage4_5_pre: { level: 'caution', advice: 'จำกัดมื้อละ 1-2 ช้อนโต๊ะ สลับกับไข่ขาว' },
      dialysis: { level: 'safe', advice: 'ทานได้มื้อละ 3-4 ช้อนโต๊ะ' },
    },
  },
  {
    id: 'egg-yolk',
    name: 'ไข่แดง',
    category: 'protein',
    categoryName: 'เนื้อสัตว์/โปรตีน',
    icon: '🍳',
    tags: ['ฟอสฟอรัสสูงมาก', 'คอเลสเตอรอล'],
    reason:
      'ไข่แดง 1 ฟองมีฟอสฟอรัสสูง หากไตขับไม่ออก จะสะสมจนดึงแคลเซียมออกจากกระดูก ทำให้คันตามผิวและกระดูกเปราะหักง่าย',
    advice: 'ระยะท้ายควรเน้นทานไข่ขาว และจำกัดหรือเลี่ยงไข่แดง',
    keywords: ['ไข่แดง', 'ไข่', 'ฟอสฟอรัส', 'ไข่ดาว', 'ไข่ต้ม'],
    source: {
      name: 'สมาคมโรคไตแห่งประเทศไทย',
      url: 'https://www.nephrothai.org/',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานได้วันละ 1 ฟอง' },
      stage3: { level: 'caution', advice: 'จำกัดสัปดาห์ละ 2-3 ฟอง' },
      stage4_5_pre: { level: 'danger', advice: 'หลีกเลี่ยงเด็ดขาด หรือไม่เกินสัปดาห์ละ 1 ฟอง' },
      dialysis: { level: 'danger', advice: 'หลีกเลี่ยงเด็ดขาด ฟอสฟอรัสในไข่แดงฟอกออกยากมาก' },
    },
  },
  {
    id: 'processed-meat',
    name: 'เนื้อสัตว์แปรรูป (ไส้กรอก, เบคอน, กุนเชียง, หมูยอ, ลูกชิ้น)',
    category: 'protein',
    categoryName: 'เนื้อสัตว์/โปรตีน',
    icon: '🥓',
    tags: ['ฟอสเฟตสังเคราะห์ (ดูดซึม 100%)', 'โซเดียมสูงจัด', 'อันตราย'],
    reason:
      'ผสมสารฟอสเฟตสังเคราะห์ ร่างกายดูดซึมเข้ากระแสเลือดเกือบ 100% ทำให้ฟอสฟอรัสพุ่งสูงทันที และมีโซเดียมมหาศาลเร่งไตวาย',
    advice: '❌ ควรหลีกเลี่ยงทุกระยะโรค ใช้เนื้อปลาหรือไข่ขาวสดแทน',
    keywords: ['ไส้กรอก', 'เบคอน', 'กุนเชียง', 'หมูยอ', 'ลูกชิ้น', 'เนื้อแปรรูป', 'แฮม'],
    source: {
      name: 'สมาคมโรคไตแห่งประเทศไทย',
      url: 'https://www.nephrothai.org/',
    },
    stages: {
      stage1_2: { level: 'caution', advice: 'ควรลดให้น้อยที่สุด มีโซเดียมและฟอสเฟตสูง' },
      stage3: { level: 'danger', advice: 'หลีกเลี่ยงเด็ดขาด' },
      stage4_5_pre: { level: 'danger', advice: 'ห้ามรับประทานเด็ดขาด' },
      dialysis: { level: 'danger', advice: 'ห้ามรับประทานเด็ดขาด' },
    },
  },
  {
    id: 'organ-meat',
    name: 'เครื่องในสัตว์ (ตับ, ไต, ไส้, ปอด)',
    category: 'protein',
    categoryName: 'เนื้อสัตว์/โปรตีน',
    icon: '🫀',
    tags: ['ฟอสฟอรัสเข้มข้นสูงสุด', 'กรดยูริกสูงจัด'],
    reason:
      'เป็นแหล่งสะสมฟอสฟอรัสและพิวรีนเข้มข้นที่สุด ทำให้ระดับฟอสเฟตในเลือดสูงวิกฤต',
    advice: 'งดเว้นเด็ดขาดสำหรับโรคไตทุกระยะ',
    keywords: ['ตับ', 'เครื่องใน', 'เครื่องในสัตว์', 'ไตไก่', 'หัวใจ', 'ไส้หมู'],
    source: {
      name: 'โรงพยาบาลรามาธิบดี',
      url: 'https://www.rama.mahidol.ac.th/ramachannel/',
    },
    stages: {
      stage1_2: { level: 'caution', advice: 'ไม่แนะนำ ทานได้ไม่เกินเดือนละครั้ง' },
      stage3: { level: 'danger', advice: 'งดเด็ดขาด' },
      stage4_5_pre: { level: 'danger', advice: 'งดเด็ดขาด' },
      dialysis: { level: 'danger', advice: 'งดเด็ดขาด' },
    },
  },

  // ================= 🍚 ข้าว-แป้ง (CARBS) =================
  {
    id: 'glass-noodle',
    name: 'วุ้นเส้น / ก๋วยเตี๋ยวเซี่ยงไฮ้',
    category: 'carb',
    categoryName: 'ข้าว-แป้ง',
    icon: '🍜',
    tags: ['แป้งปลอดโปรตีน (Protein-Free)', 'ฟอสฟอรัสต่ำมาก', 'ให้พลังงานสะอาด'],
    reason:
      'เป็นแป้งปลอดโปรตีน ให้พลังงานแก่ร่างกายโดยไม่สร้างของเสียยูเรีย เหมาะที่สุดสำหรับผู้ป่วยไตที่ต้องจำกัดโปรตีนแต่ต้องการพลังงานไม่ให้น้ำหนักลด',
    advice: 'ใช้ทำต้มจืดวุ้นเส้น ยำรสอ่อน หรือผัดวุ้นเส้นใส่ไข่ขาว',
    keywords: ['วุ้นเส้น', 'เส้นเซี่ยงไฮ้', 'แป้งปลอดโปรตีน', 'ก๋วยเตี๋ยว', 'แป้ง'],
    source: {
      name: 'สมาคมโรคไตแห่งประเทศไทย',
      url: 'https://www.nephrothai.org/',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานได้ดี' },
      stage3: { level: 'safe', advice: 'แนะนำสลับกับข้าวสวย' },
      stage4_5_pre: {
        level: 'safe',
        advice: '🌟 ดีเยี่ยม! ทานเป็นพลังงานหลักเพื่อไม่ให้น้ำหนักลดลง',
      },
      dialysis: { level: 'safe', advice: 'ทานได้ดีร่วมกับไข่ขาว' },
    },
  },
  {
    id: 'white-rice',
    name: 'ข้าวสวยขัดขาว / เส้นเล็ก / เส้นใหญ่',
    category: 'carb',
    categoryName: 'ข้าว-แป้ง',
    icon: '🍚',
    tags: ['ฟอสฟอรัสต่ำกว่าข้าวกล้อง', 'ย่อยง่าย'],
    reason:
      'การขัดสีเอาเปลือกออกทำให้ฟอสฟอรัสและโพแทสเซียมลดลงมาก ปลอดภัยต่อไตมากกว่าข้าวกล้อง',
    advice: 'ทานมื้อละ 1-2 ทัพพี ตามคำแนะนำปริมาณคาร์โบไฮเดรต',
    keywords: ['ข้าวขาว', 'ข้าวสวย', 'เส้นเล็ก', 'เส้นใหญ่', 'ก๋วยเตี๋ยว', 'แป้ง'],
    source: {
      name: 'ฝ่ายโภชนาการ ศิริราชพยาบาล',
      url: 'https://www.si.mahidol.ac.th/',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานได้ตามปกติ' },
      stage3: { level: 'safe', advice: 'ทานได้มื้อละ 1-2 ทัพพี' },
      stage4_5_pre: { level: 'safe', advice: 'ทานได้มื้อละ 1-2 ทัพพี (ดีกว่าข้าวกล้อง)' },
      dialysis: { level: 'safe', advice: 'ทานได้ตามความต้องการพลังงาน' },
    },
  },
  {
    id: 'sago',
    name: 'สาคู / แป้งสลิ่ม / ลอดช่องสิงคโปร์',
    category: 'carb',
    categoryName: 'ข้าว-แป้ง',
    icon: '🥣',
    tags: ['แป้งปลอดโปรตีน', 'พลังงานสะอาด', 'ไร้ของเสีย'],
    reason:
      'ทำจากแป้งมันสำปะหลัง จัดเป็นแป้งปลอดโปรตีน ไม่สร้างภาระยูเรียคั่งในไต',
    advice: 'ต้มใส่น้ำเชื่อมเจือจาง หรือกะทิสดปริมาณน้อยๆ เลี่ยงกะทิข้นจัด',
    keywords: ['สาคู', 'แป้งสลิ่ม', 'ลอดช่อง', 'ขนมหวาน', 'แป้งปลอดโปรตีน'],
    source: {
      name: 'สมาคมโรคไตแห่งประเทศไทย',
      url: 'https://www.nephrothai.org/',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ทานได้พอเหมาะ' },
      stage3: { level: 'safe', advice: 'ทานเป็นของว่างเสริมพลังงาน' },
      stage4_5_pre: { level: 'safe', advice: '🌟 เหมาะมากสำหรับเสริมพลังงานไม่ให้ผอมแห้ง' },
      dialysis: { level: 'safe', advice: 'ทานได้พอเหมาะ' },
    },
  },
  {
    id: 'brown-rice',
    name: 'ข้าวกล้อง / ขนมปังโฮลวีต / ข้าวไรซ์เบอร์รี่',
    category: 'carb',
    categoryName: 'ข้าว-แป้ง',
    icon: '🍞',
    tags: ['ฟอสฟอรัสสูงมาก', 'โพแทสเซียมสูง', 'เยื่อหุ้มเมล็ด'],
    reason:
      'ตรงข้ามกับคนปกติ! เยื่อหุ้มเมล็ดและรำข้าวมีฟอสฟอรัสและโพแทสเซียมสูงมาก ไตเสื่อมขับไม่ได้ จะสะสมจนกระดูกบางและหลอดเลือดตีบ',
    advice: 'เปลี่ยนมาทานข้าวขาว ขนมปังขาว หรือวุ้นเส้นแทน',
    keywords: ['ข้าวกล้อง', 'โฮลวีต', 'ข้าวไรซ์เบอร์รี่', 'ธัญพืช', 'ข้าวโอ๊ต', 'ขนมปัง'],
    source: {
      name: 'โรงพยาบาลรามาธิบดี',
      url: 'https://www.rama.mahidol.ac.th/ramachannel/',
    },
    stages: {
      stage1_2: {
        level: 'safe',
        advice: 'ทานได้ ช่วยคุมเบาหวาน (แต่ควรตรวจเลือดดูฟอสฟอรัสประจำ)',
      },
      stage3: { level: 'caution', advice: 'เริ่มลดปริมาณ และสลับเป็นข้าวขาว' },
      stage4_5_pre: {
        level: 'danger',
        advice: 'หลีกเลี่ยงเด็ดขาด ฟอสฟอรัสสะสมทำลายหลอดเลือดและกระดูก',
      },
      dialysis: { level: 'danger', advice: 'หลีกเลี่ยงเด็ดขาด' },
    },
  },

  // ================= 🧂 เครื่องปรุง (CONDIMENTS) =================
  {
    id: 'herbs',
    name: 'สมุนไพรสด (ข่า ตะไคร้ ใบมะกรูด กระเทียม พริก)',
    category: 'condiment',
    categoryName: 'เครื่องปรุง',
    icon: '🌿',
    tags: ['โซเดียม 0%', 'กลิ่นหอมธรรมชาติ', 'ชูรสปลอดภัย'],
    reason:
      'สมุนไพรสดไม่มีเกลือโซเดียม ช่วยเพิ่มกลิ่นและรสชาติให้อาหารกลมกล่อม เจริญอาหารโดยไม่ต้องพึ่งน้ำปลา',
    advice: 'ใช้ต้มยำน้ำใส พริกสดบีบมะนาว กระเทียมสด เพื่อชูรสแทนผงชูรสหรือซุปก้อน',
    keywords: ['สมุนไพร', 'พริก', 'กระเทียม', 'ข่า', 'ตะไคร้', 'ใบมะกรูด', 'เครื่องปรุง'],
    source: {
      name: 'กรมอนามัย กระทรวงสาธารณสุข',
      url: 'https://multimedia.anamai.moph.go.th/',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ใช้ปรุงแต่งได้เต็มที่' },
      stage3: { level: 'safe', advice: 'ใช้ช่วยชูรสเพื่อลดการใส่เกลือ' },
      stage4_5_pre: {
        level: 'safe',
        advice: 'ปลอดภัยมาก ช่วยให้ทานอาหารรสจืดได้อร่อยขึ้น',
      },
      dialysis: { level: 'safe', advice: 'ปลอดภัยมาก' },
    },
  },
  {
    id: 'soysauce-measured',
    name: 'ซีอิ๊วขาวธรรมดา / น้ำปลาแท้ (แบบตวงช้อน)',
    category: 'condiment',
    categoryName: 'เครื่องปรุง',
    icon: '🥢',
    tags: ['โซเดียมมาตรฐาน', 'ต้องตวงช้อนเท่านั้น'],
    reason:
      'แม้มีโซเดียม แต่สามารถคำนวณและควบคุมปริมาณได้ชัดเจน ปลอดภัยกว่าเกลือลดโซเดียมที่แอบเติมโพแทสเซียม',
    advice: 'ใช้ไม่เกิน 2-3 ช้อนชาต่อวันสำหรับทั้งวัน โดยต้องใช้ช้อนชาตวง ห้ามเหยาะจากขวดโดยตรง',
    keywords: ['ซีอิ๊ว', 'น้ำปลา', 'เกลือ', 'เครื่องปรุง', 'ซอสปรุงรส'],
    source: {
      name: 'สมาคมโรคไตแห่งประเทศไทย',
      url: 'https://www.nephrothai.org/',
    },
    stages: {
      stage1_2: { level: 'caution', advice: 'คุมไม่เกิน 3 ช้อนชา/วัน' },
      stage3: { level: 'caution', advice: 'คุมไม่เกิน 2-3 ช้อนชา/วัน' },
      stage4_5_pre: {
        level: 'caution',
        advice: 'คุมไม่เกิน 1-2 ช้อนชา/วัน ตวงช้อนเท่านั้น',
      },
      dialysis: {
        level: 'caution',
        advice: 'คุมไม่เกิน 1-2 ช้อนชา/วัน ป้องกันภาวะน้ำท่วมปอด',
      },
    },
  },
  {
    id: 'low-sodium-salt',
    name: 'เกลือลดโซเดียม / ซอสโลว์โซเดียม (อันตรายถึงชีวิต!)',
    category: 'condiment',
    categoryName: 'เครื่องปรุง',
    icon: '🧂',
    tags: ['ใส่โพแทสเซียมคลอไรด์แทนเกลือ', 'เสี่ยงหัวใจหยุดเต้น', 'กับดักอันตราย'],
    reason:
      'ผู้ผลิตใส่สาร "โพแทสเซียมคลอไรด์" แทนโซเดียมเพื่อให้มีความเค็ม ในผู้ป่วยไตที่ขับโพแทสเซียมไม่ได้ จะทำให้หัวใจเต้นผิดจังหวะและหยุดเต้นเฉียบพลัน',
    advice: '❌ ห้ามใช้เด็ดขาดทุกระยะ ให้ใช้ซีอิ๊วขาวธรรมดาตวงปริมาณน้อยๆ แทน',
    keywords: ['เกลือลดโซเดียม', 'ซีอิ๊วลดโซเดียม', 'ซอสโลว์โซเดียม', 'เครื่องปรุง', 'เกลือ'],
    source: {
      name: 'สมาคมโรคไตแห่งประเทศไทย (เตือนภัยเกลือลดโซเดียม)',
      url: 'https://www.nephrothai.org/',
    },
    stages: {
      stage1_2: { level: 'danger', advice: 'ห้ามใช้เด็ดขาด' },
      stage3: { level: 'danger', advice: 'ห้ามใช้เด็ดขาด' },
      stage4_5_pre: { level: 'danger', advice: 'อันตรายถึงชีวิต! ห้ามใช้เด็ดขาด' },
      dialysis: { level: 'danger', advice: 'อันตรายถึงชีวิต! ห้ามใช้เด็ดขาด' },
    },
  },

  // ================= ☕ เครื่องดื่ม/ของหวาน (DRINKS) =================
  {
    id: 'water',
    name: 'น้ำเปล่าสะอาด',
    category: 'drink',
    categoryName: 'เครื่องดื่ม/ของหวาน',
    icon: '💧',
    tags: ['ไม่มีสารตกค้าง', 'แร่ธาตุ 0%'],
    reason:
      'น้ำเปล่าสะอาดเป็นของเหลวที่ดีที่สุด ช่วยขับสารพิษโดยไม่เพิ่มภาระแร่ธาตุใดๆ ให้ไต',
    advice:
      'ดื่มตามเกณฑ์ของแต่ละระยะ: ระยะแรกดื่มได้ 1.5-2 ลิตร แต่หากระยะฟอกไตหรือมีอาการบวม ต้องจำกัดตามปริมาณปัสสาวะ',
    keywords: ['น้ำเปล่า', 'น้ำดื่ม', 'น้ำ', 'เครื่องดื่ม'],
    source: {
      name: 'สมาคมโรคไตแห่งประเทศไทย',
      url: 'https://www.nephrothai.org/',
    },
    stages: {
      stage1_2: { level: 'safe', advice: 'ดื่มได้ปกติ 1.5 - 2 ลิตร/วัน' },
      stage3: { level: 'safe', advice: 'ดื่มได้ 1.5 - 2 ลิตร (หากไม่มีอาการบวม)' },
      stage4_5_pre: {
        level: 'caution',
        advice: 'ดื่มได้ตามปริมาณปัสสาวะ + 500 มล. ระวังอาการบวมน้ำและน้ำท่วมปอด',
      },
      dialysis: {
        level: 'caution',
        advice: 'ต้องจำกัดน้ำเข้มงวด ชั่งน้ำหนักทุกวันเพื่อไม่ให้น้ำหนักเกิน 1-1.5 กก. ระหว่างรอบฟอก',
      },
    },
  },
  {
    id: 'coconut-water',
    name: 'น้ำมะพร้าวสด',
    category: 'drink',
    categoryName: 'เครื่องดื่ม/ของหวาน',
    icon: '🥥',
    tags: ['โพแทสเซียมสูงจัด', 'เสี่ยงหัวใจหยุดเต้น'],
    reason:
      'เป็นน้ำเกลือแร่ธรรมชาติที่มีโพแทสเซียมเข้มข้นที่สุด เพียงแก้วเดียวทำให้โพแทสเซียมในเลือดทะลุเกณฑ์วิกฤต',
    advice: 'หลีกเลี่ยงเด็ดขาดสำหรับผู้ป่วยโรคไตระยะกลางถึงระยะท้าย',
    keywords: ['น้ำมะพร้าว', 'มะพร้าว', 'เครื่องดื่ม', 'ผลไม้'],
    source: {
      name: 'โรงพยาบาลรามาธิบดี',
      url: 'https://www.rama.mahidol.ac.th/ramachannel/',
    },
    stages: {
      stage1_2: { level: 'caution', advice: 'ดื่มได้ครั้งคราว แก้วเล็ก' },
      stage3: { level: 'danger', advice: 'หลีกเลี่ยงเด็ดขาด' },
      stage4_5_pre: { level: 'danger', advice: 'ห้ามดื่มเด็ดขาด เสี่ยงหัวใจวาย' },
      dialysis: { level: 'danger', advice: 'ห้ามดื่มเด็ดขาด' },
    },
  },
  {
    id: 'dark-cola',
    name: 'น้ำอัดลมสีดำ (โคล่า) / โกโก้ / ช็อกโกแลต',
    category: 'drink',
    categoryName: 'เครื่องดื่ม/ของหวาน',
    icon: '🥤',
    tags: ['กรดฟอสฟอริกสังเคราะห์', 'ฟอสฟอรัสสูงจัด'],
    reason:
      'น้ำอัดลมสีเข้มใส่กรดฟอสฟอริกสังเคราะห์ ร่างกายดูดซึมได้ 100% เร่งให้กระดูกพรุนและหลอดเลือดแข็งตัวอย่างรวดเร็ว ส่วนโกโก้มีฟอสฟอรัสธรรมชาติสูงมาก',
    advice: 'หลีกเลี่ยงเด็ดขาด ดื่มน้ำเปล่าหรือน้ำสมุนไพรอ่อนๆ ไม่หวานแทน',
    keywords: ['โคล่า', 'เป๊ปซี่', 'โค้ก', 'น้ำอัดลม', 'ช็อกโกแลต', 'โกโก้', 'เครื่องดื่ม'],
    source: {
      name: 'American Kidney Fund',
      url: 'https://www.kidneyfund.org/',
    },
    stages: {
      stage1_2: { level: 'caution', advice: 'ลดให้น้อยลง มีน้ำตาลและฟอสเฟตสูง' },
      stage3: { level: 'danger', advice: 'หลีกเลี่ยงเด็ดขาด' },
      stage4_5_pre: { level: 'danger', advice: 'ห้ามดื่มเด็ดขาด' },
      dialysis: {
        level: 'danger',
        advice: 'ห้ามดื่มเด็ดขาด ฟอสเฟตดูดซึมทันทีและฟอกออกยาก',
      },
    },
  },
];
