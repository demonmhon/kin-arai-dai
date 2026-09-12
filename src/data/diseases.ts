import { Disease } from '../types/food';

export const diseases: Disease[] = [
  {
    id: 'ckd',
    name: 'โรคไตเรื้อรัง (CKD)',
    icon: '🩺',
    status: 'active',
    summary: 'แบ่งตามระยะ 1-5 และระยะฟอกไต คุมโพแทสเซียม ฟอสฟอรัส โซเดียม และปริมาณโปรตีน',
    badgeText: 'เปิดใช้งานอยู่',
  },
  {
    id: 'diabetes',
    name: 'โรคเบาหวาน (Diabetes)',
    icon: '🩸',
    status: 'upcoming',
    summary: 'เน้นดัชนีน้ำตาล (Glycemic Index) คาร์โบไฮเดรต และน้ำตาลแฝง',
    badgeText: 'เร็วๆ นี้',
  },
  {
    id: 'gout',
    name: 'โรคเกาต์ (Gout / กรดยูริกสูง)',
    icon: '🦶',
    status: 'upcoming',
    summary: 'เน้นปริมาณสารพิวรีน ยอดผัก สัตว์ปีก แอลกอฮอล์ และน้ำตาลฟรุกโตส',
    badgeText: 'เร็วๆ นี้',
  },
  {
    id: 'hypertension',
    name: 'โรคความดันโลหิตสูง & โรคหัวใจ',
    icon: '❤️',
    status: 'upcoming',
    summary: 'เน้นรูปแบบอาหาร DASH Diet คุมเค็ม โซเดียม และไขมันอิ่มตัว',
    badgeText: 'เร็วๆ นี้',
  },
  {
    id: 'gerd',
    name: 'กรดไหลย้อน & แผลในกระเพาะ',
    icon: '🔥',
    status: 'upcoming',
    summary: 'เน้นหลีกเลี่ยงอาหารรสจัด ของทอด ช็อกโกแลต คาเฟอีน และผลไม้รสเปรี้ยว',
    badgeText: 'เร็วๆ นี้',
  },
];
