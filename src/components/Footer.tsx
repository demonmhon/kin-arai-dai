import React from 'react';
import { Box, Container, Text, Group, Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      py="xl"
      mt="xl"
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0',
      }}
    >
      <Container size={1600}>
        <Box style={{ textAlign: 'center' }}>
          <Group justify="center" gap="xs" mb={8} wrap="wrap">
            <Text size="xs" fw={700} c="slate.7">
              กินอะไรได้บ้าง (Food Safety Checker)
            </Text>
            <Text size="xs" c="dimmed">
              •
            </Text>
            <Anchor
              component={Link}
              to="/references"
              size="xs"
              c="emerald.7"
              fw={600}
            >
              แหล่งข้อมูลอ้างอิงทางการแพทย์ (References)
            </Anchor>
          </Group>

          <Text size="11px" c="dimmed" style={{ maxWidth: 680, margin: '0 auto' }} lh={1.6}>
            ข้อจำกัดความรับผิดชอบ: ผู้จัดทำไม่ใช่แพทย์โดยตรง ข้อมูลในเว็บไซต์นี้จัดทำขึ้นเพื่อรวบรวมและสรุปความรู้ทางโภชนาการเพื่อเป็นประโยชน์เบื้องต้นแก่ผู้ใช้งาน ผู้ดูแล และผู้ที่ใส่ใจสุขภาพเท่านั้น ไม่ใช่การยืนยันข้อมูลหรือทดแทนการวินิจฉัยและการรักษาจากแพทย์ผู้เชี่ยวชาญหรือนักกำหนดอาหารวิชาชีพ โปรดปรึกษาแพทย์ประจำตัวของท่านก่อนปรับเปลี่ยนอาหารเสมอ
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
