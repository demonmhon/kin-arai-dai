import React from 'react';
import { Paper, Group, Text, Box, List } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';

export const MedicalWarningBanner: React.FC = () => {
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
          <IconAlertTriangle size={24} />
        </Box>
        <Box style={{ flex: 1 }}>
          <Text fw={700} size="xs" c="#881337" mb={4}>
            คำเตือนทางการแพทย์สำคัญพิเศษสำหรับผู้ป่วยโรคไตทุกระยะ:
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
