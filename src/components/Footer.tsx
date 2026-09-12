import React from 'react';
import { Box, Container, Text, Group, Anchor } from '@mantine/core';

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
      <Container size="lg">
        <Box style={{ textAlign: 'center' }}>
          <Group justify="center" gap="xs" mb={6}>
            <Text size="xs" fw={700} c="slate.7">
              กินอะไรได้บ้าง (Food Safety Checker)
            </Text>
            <Text size="xs" c="dimmed">
              •
            </Text>
            <Anchor
              href="https://www.nephrothai.org/"
              target="_blank"
              rel="noopener noreferrer"
              size="xs"
              c="emerald.7"
              fw={600}
            >
              สมาคมโรคไตแห่งประเทศไทย (The Nephrology Society of Thailand)
            </Anchor>
          </Group>

          <Text size="11px" c="dimmed" style={{ maxWidth: 650, margin: '0 auto' }} lh={1.6}>
            ข้อจำกัดความรับผิดชอบทางการแพทย์: ข้อมูลในเว็บไซต์นี้จัดทำขึ้นเพื่อให้ความรู้ทางโภชนาการเบื้องต้นเท่านั้น ไม่สามารถทดแทนการวินิจฉัย การรักษา หรือคำแนะนำเฉพาะบุคคลจากแพทย์ผู้เชี่ยวชาญหรือนักกำหนดอาหารวิชาชีพได้ หากมีข้อสงสัยเกี่ยวกับภาวะสุขภาพควรปรึกษาแพทย์ประจำตัวของท่านเสมอ
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
