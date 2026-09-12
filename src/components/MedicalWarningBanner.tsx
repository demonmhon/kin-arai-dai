import React from 'react';
import { Paper, Group, Text, Box, List } from '@mantine/core';
import { AlertTriangle } from 'lucide-react';

interface MedicalWarningBannerProps {
  diseaseId?: string;
}

export const MedicalWarningBanner: React.FC<MedicalWarningBannerProps> = ({ diseaseId = 'ckd' }) => {
  const isGout = diseaseId === 'gout';
  const isChole = diseaseId === 'cholecystectomy';

  if (isChole) {
    return (
      <Paper
        p="md"
        radius="lg"
        style={{
          backgroundColor: '#eff6ff',
          border: '1px solid #bfdbfe',
        }}
      >
        <Group align="flex-start" gap="sm" wrap="nowrap">
          <Box style={{ color: '#2563eb', marginTop: 2 }}>
            <AlertTriangle size={24} />
          </Box>
          <Box style={{ flex: 1 }}>
            <Text fw={700} size="xs" c="#1e3a8a" mb={4}>
              คำเตือนสำคัญพิเศษสำหรับผู้ที่ตัดถุงน้ำดี (Post-Cholecystectomy):
            </Text>
            <List size="xs" c="#1e40af" spacing={4} styles={{ item: { lineHeight: 1.5 } }}>
              <List.Item>
                <Text span fw={600}>
                  แบ่งการกินอาหารไขมันเป็นมื้อเล็กๆ หลายมื้อ ดีกว่ากินไขมันก้อนใหญ่ทีเดียว:
                </Text>{' '}
                เนื่องจากไม่มีถุงน้ำดีกักเก็บและปล่อยน้ำดีเข้มข้น น้ำดีจากตับจะหยดลงลำไส้ทีละน้อยอย่างต่อเนื่อง การทานไขมันปริมาณมากในมื้อเดียวจะย่อยไม่ทัน ทำให้แน่นท้อง อืดท้อง และกระตุ้นการขับถ่ายเหลว
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  ระวังอาการท้องเสียเรื้อรังจากกรดน้ำดี (Bile Acid Diarrhea):
                </Text>{' '}
                ผู้ผ่าตัดบางรายอาจมีกรดน้ำดีไหลลงสู่ลำไส้ใหญ่มากเกินไป ทำให้ลำไส้บีบตัวและขับถ่ายเหลวเป็นมัน หากมีอาการต่อเนื่องจำเป็นต้องคุมปริมาณไขมันอย่างต่อเนื่องนานกว่าคนอื่นและปรึกษาแพทย์
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  การทนต่ออาหารเป็นเรื่องเฉพาะบุคคล (Individual Tolerance):
                </Text>{' '}
                ไม่มีข้อ "ห้ามกิน" ตายตัวแบบโรคไต ผู้ตัดถุงน้ำดีส่วนใหญ่จะค่อยๆ ปรับตัวและกลับไปทานอาหารปกติได้ภายในไม่กี่เดือน ให้สังเกตการตอบสนองของร่างกายตนเองและค่อยๆ ปรับเพิ่มอาหารทีละน้อย
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  เสริมใยอาหารชนิดละลายน้ำ (Soluble Fiber):
                </Text>{' '}
                เช่น ข้าวโอ๊ต กล้วย แอปเปิ้ล แครอท ช่วยดูดซับกรดน้ำดีส่วนเกินในลำไส้ ทำให้อุจจาระจับตัวเป็นก้อน ลดอาการถ่ายเหลวได้อย่างเป็นธรรมชาติ
              </List.Item>
            </List>
          </Box>
        </Group>
      </Paper>
    );
  }

  if (isGout) {
    return (
      <Paper
        p="md"
        radius="lg"
        style={{
          backgroundColor: '#fff1f2',
          border: '1px solid #fecdd3',
        }}
      >
        <Group align="flex-start" gap="sm" wrap="nowrap">
          <Box style={{ color: '#e11d48', marginTop: 2 }}>
            <AlertTriangle size={24} />
          </Box>
          <Box style={{ flex: 1 }}>
            <Text fw={700} size="xs" c="#881337" mb={4}>
              คำเตือนสำคัญพิเศษสำหรับภาวะโรคเกาต์ (Gout):
            </Text>
            <List size="xs" c="#9f1239" spacing={4} styles={{ item: { lineHeight: 1.5 } }}>
              <List.Item>
                <Text span fw={600}>
                  งดเบียร์และเครื่องดื่มแอลกอฮอล์เด็ดขาด:
                </Text>{' '}
                เบียร์มียีสต์และสารกัวโนซีนสูงมาก และแอลกอฮอล์ยังยับยั้งไตไม่ให้ขับยูริก เพียงแก้วเดียวสามารถกระตุ้นให้ข้ออักเสบรุนแรงได้ทันที
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  งดเครื่องในสัตว์ สัตว์ปีก และน้ำต้มกระดูก/ซุปก้อน:
                </Text>{' '}
                สารพิวรีนละลายน้ำได้ดี การซดน้ำซุปก๋วยเตี๋ยวหรือน้ำต้มกระดูกเคี่ยวนานทำให้ได้รับพิวรีนเข้มข้นเทียบเท่าการกินเครื่องใน
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  ระวังน้ำตาลฟรุกโตสสูง (HFCS) ในน้ำอัดลม/ชาหวาน:
                </Text>{' '}
                น้ำตาลฟรุกโตสเร่งการสลายพลังงานในตับ ทำให้ร่างกายสังเคราะห์กรดยูริกเพิ่มขึ้นอย่างรวดเร็ว
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  ดื่มน้ำเปล่าสะอาดวันละ 2 - 3 ลิตร:
                </Text>{' '}
                น้ำเป็นกลไกธรรมชาติที่ดีที่สุดในการเจือจางผลึกยูริกและช่วยขับออกทางปัสสาวะ ช่วยป้องกันโรคนิ่วในไต
              </List.Item>
            </List>
          </Box>
        </Group>
      </Paper>
    );
  }

  return (
    <Paper
      p="md"
      radius="lg"
      style={{
        backgroundColor: '#fff1f2',
        border: '1px solid #fecdd3',
      }}
    >
      <Group align="flex-start" gap="sm" wrap="nowrap">
        <Box style={{ color: '#e11d48', marginTop: 2 }}>
          <AlertTriangle size={24} />
        </Box>
        <Box style={{ flex: 1 }}>
          <Text fw={700} size="xs" c="#881337" mb={4}>
            คำเตือนสำคัญพิเศษสำหรับผู้ที่ต้องดูแลไตทุกระยะ:
          </Text>
          <List size="xs" c="#9f1239" spacing={4} styles={{ item: { lineHeight: 1.5 } }}>
            <List.Item>
              <Text span fw={600}>
                ห้ามรับประทานมะเฟืองเด็ดขาด:
              </Text>{' '}
              มีสารพิษ Caramboxin และออกซาเลตสูงมาก ไตที่เสื่อมไม่สามารถขับได้ อาจชัก โคม่า หรือเป็นอันตรายถึงชีวิต
            </List.Item>
            <List.Item>
              <Text span fw={600}>
                ระวังเกลือ/ซีอิ๊ว "ลดโซเดียม":
              </Text>{' '}
              มักทดแทนด้วย "โพแทสเซียมคลอไรด์" ซึ่งทำให้โพแทสเซียมในเลือดสูงวิกฤต หัวใจหยุดเต้นเฉียบพลันได้ ให้ใช้ซีอิ๊วขาวธรรมดาแต่ตวงช้อนชาแทน
            </List.Item>
            <List.Item>
              <Text span fw={600}>
                คำว่า "ทานได้ (สีเขียว)":
              </Text>{' '}
              หมายถึงปลอดภัยจากแร่ธาตุส่วนเกิน แต่ต้องรับประทานในปริมาณที่พอดีตามพลังงานที่ร่างกายต้องการ ไม่ควรทานอย่างใดอย่างหนึ่งมากเกินไป
            </List.Item>
          </List>
        </Box>
      </Group>
    </Paper>
  );
};
