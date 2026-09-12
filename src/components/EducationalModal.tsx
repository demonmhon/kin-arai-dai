import React from 'react';
import {
  Modal,
  Box,
  Text,
  Badge,
  Button,
  Stack,
  Paper,
  Group,
  SimpleGrid,
} from '@mantine/core';

interface EducationalModalProps {
  opened: boolean;
  onClose: () => void;
}

export const EducationalModal: React.FC<EducationalModalProps> = ({ opened, onClose }) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Box>
          <Badge size="xs" variant="light" color="emerald" mb={4}>
            ความรู้โภชนาการโรคไต
          </Badge>
          <Text fw={700} size="md" c="slate.9">
            เกณฑ์โภชนาการสำหรับโรคไตแต่ละระยะ
          </Text>
        </Box>
      }
      size="lg"
      radius="xl"
      padding="lg"
      styles={{
        header: {
          borderBottom: '1px solid #f1f5f9',
          paddingBottom: 12,
        },
      }}
    >
      <Stack gap="md" mt="xs">
        <Text size="xs" c="dimmed">
          ความต้องการสารอาหารจะแตกต่างกันอย่างสิ้นเชิงในแต่ละระยะ โดยเฉพาะกฎ 3 แร่ธาตุและโปรตีน:
        </Text>

        {/* 4 Stages Brief */}
        <Stack gap="xs">
          <Paper p="sm" radius="md" style={{ backgroundColor: '#eff6ff', border: '1px solid #dbeafe' }}>
            <Text size="xs" fw={700} c="#1e40af" mb={2}>
              🔹 ระยะ 1-2 (eGFR ≥ 60): ชะลอความเสื่อม
            </Text>
            <Text size="xs" c="#1e3a8a" lh={1.5}>
              ไตยังกรองของเสียได้ดี ยังไม่ต้องงดผักผลไม้หรือไข่แดงอย่างเข้มงวด แต่ให้เน้นลดเค็ม (โซเดียม &lt; 2,000 มก./วัน) และควบคุมโรคต้นเหตุ เช่น เบาหวานและความดันโลหิตสูง
            </Text>
          </Paper>

          <Paper p="sm" radius="md" style={{ backgroundColor: '#fffbeb', border: '1px solid #fef3c7' }}>
            <Text size="xs" fw={700} c="#92400e" mb={2}>
              🔸 ระยะ 3 (eGFR 30-59): เริ่มเฝ้าระวังแร่ธาตุ
            </Text>
            <Text size="xs" c="#78350f" lh={1.5}>
              เริ่มจำกัดโปรตีนเหลือ 0.6 - 0.8 กรัม/กก./วัน ตรวจเลือดติดตามระดับโพแทสเซียมและฟอสฟอรัสสม่ำเสมอ เริ่มเลี่ยงเครื่องในสัตว์และเนื้อสัตว์แปรรูป
            </Text>
          </Paper>

          <Paper p="sm" radius="md" style={{ backgroundColor: '#fef2f2', border: '1px solid #fee2e2' }}>
            <Text size="xs" fw={700} c="#991b1b" mb={2}>
              🔻 ระยะ 4-5 ก่อนฟอก (eGFR &lt; 30): เข้มงวดสูงสุด
            </Text>
            <Text size="xs" c="#7f1d1d" lh={1.5}>
              จำกัดโปรตีนต่ำ (Low-protein diet) เพื่อลดของเสียคั่ง หลีกเลี่ยงผักผลไม้โพแทสเซียมสูงเด็ดขาด เพราะเสี่ยงหัวใจเต้นผิดจังหวะหรือหยุดเต้น และระวังอาการบวมน้ำ
            </Text>
          </Paper>

          <Paper p="sm" radius="md" style={{ backgroundColor: '#faf5ff', border: '1px solid #f3e8ff' }}>
            <Text size="xs" fw={700} c="#6b21a8" mb={2}>
              🟣 ระยะฟอกไต / ล้างไต (Dialysis): ต้องเพิ่มโปรตีน!
            </Text>
            <Text size="xs" c="#581c87" lh={1.5}>
              ขั้นตอนการฟอกเลือดหรือล้างไตจะสูญเสียโปรตีนไปกับกระบวนการ ผู้ป่วยจึงต้องทานโปรตีนคุณภาพสูง (ไข่ขาว, ปลา) เพิ่มขึ้นเป็น 1.2 - 1.4 กรัม/กก./วัน แต่ยังต้องคุมฟอสฟอรัสและน้ำอย่างเคร่งครัด
            </Text>
          </Paper>
        </Stack>

        {/* The 3 key minerals cards */}
        <Box pt="xs">
          <Text size="xs" fw={700} c="slate.8" mb="xs">
            กฎ 3 แร่ธาตุสำคัญที่ต้องทำความเข้าใจ:
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xs">
            <Paper p="xs" radius="md" withBorder style={{ backgroundColor: '#f8fafc' }}>
              <Text size="xs" fw={700} c="slate.9">
                🍌 โพแทสเซียม (K)
              </Text>
              <Text size="11px" c="dimmed" mt={2} lh={1.4}>
                พบในผลไม้หวาน, ผักใบเขียวเข้ม หากสูงเกินไปจะทำให้กล้ามเนื้ออ่อนแรงและหัวใจเต้นผิดจังหวะเฉียบพลัน
              </Text>
            </Paper>

            <Paper p="xs" radius="md" withBorder style={{ backgroundColor: '#f8fafc' }}>
              <Text size="xs" fw={700} c="slate.9">
                🍳 ฟอสฟอรัส (P)
              </Text>
              <Text size="11px" c="dimmed" mt={2} lh={1.4}>
                พบในไข่แดง นม ธัญพืช น้ำอัดลมสีดำ หากคั่งจะดึงแคลเซียมออกจากกระดูก ทำให้คันตามผิวหนังและหลอดเลือดแข็งตัว
              </Text>
            </Paper>

            <Paper p="xs" radius="md" withBorder style={{ backgroundColor: '#f8fafc' }}>
              <Text size="xs" fw={700} c="slate.9">
                🧂 โซเดียม (Na)
              </Text>
              <Text size="11px" c="dimmed" mt={2} lh={1.4}>
                พบในเกลือ น้ำปลา อาหารแปรรูป หากเกินจะดึงน้ำไว้ในหลอดเลือด ทำให้ความดันพุ่ง บวมน้ำ และน้ำท่วมปอด
              </Text>
            </Paper>
          </SimpleGrid>
        </Box>

        <Group justify="flex-end" mt="xs">
          <Button variant="filled" color="emerald" size="xs" radius="xl" onClick={onClose}>
            เข้าใจแล้ว / ปิด
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};
