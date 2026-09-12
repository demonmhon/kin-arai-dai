import { CholecystectomyStage, CholecystectomyStageId } from '../types/food';

export const cholecystectomyStages: Record<CholecystectomyStageId, CholecystectomyStage> = {
  chole_maintenance: {
    id: 'chole_maintenance',
    name: 'ระยะทั่วไป / ปรับตัวแล้ว (Maintenance)',
    badge: 'ทั่วไป / ปรับตัวแล้ว',
    color: 'emerald',
    focus: 'กระจายมื้อไขมัน เลี่ยงมื้อหนักไขมันสูงจัด',
    summary:
      'ระบบทางเดินอาหารปรับตัวได้ดีแล้ว ทานอาหารได้หลากหลายตามปกติ เน้นแบ่งการกินอาหารไขมันเป็นมื้อเล็กๆ หลายมื้อ ดีกว่ากินไขมันก้อนใหญ่ทีเดียว และสังเกตการตอบสนองของร่างกาย (Individual Tolerance)',
  },
  chole_recovery: {
    id: 'chole_recovery',
    name: 'ระยะพักฟื้นแรกเริ่ม / ท้องเสียง่าย (Early Recovery / Bile Sensitivity)',
    badge: 'พักฟื้นแรกเริ่ม / ท้องเสียง่าย',
    color: 'amber',
    focus: 'ไขมันต่ำมาก อาหารอ่อนย่อยง่าย เลี่ยงของทอด',
    summary:
      'ช่วง 1-4 สัปดาห์แรกหลังผ่าตัด หรือผู้ที่มีภาวะท้องเสียเรื้อรังจากกรดน้ำดี (Bile Acid Diarrhea) ต้องจำกัดของมัน ของทอด แกงกะทิ อย่างเคร่งครัด ทานอาหารย่อยง่ายและเน้นใยอาหารชนิดละลายน้ำ',
  },
};
