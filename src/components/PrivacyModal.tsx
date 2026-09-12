import React, { useState } from 'react';
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
  ThemeIcon,
  Divider,
  Alert,
} from '@mantine/core';
import {
  ShieldCheck,
  Cookie,
  Database,
  UserX,
  EyeOff,
  Trash2,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { STORAGE_KEYS } from '../config/version';

interface PrivacyModalProps {
  opened: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ opened, onClose }) => {
  const [cleared, setCleared] = useState(false);

  const handleClearLocalStorage = () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.DISEASE);
      localStorage.removeItem(STORAGE_KEYS.STAGE);
      localStorage.removeItem(STORAGE_KEYS.HAS_INITIALIZED);
      localStorage.removeItem(STORAGE_KEYS.APP_VERSION);
      localStorage.removeItem(STORAGE_KEYS.CONDITIONS_SIGNATURE);
      setCleared(true);
      setTimeout(() => {
        setCleared(false);
        onClose();
        window.location.reload();
      }, 1200);
    } catch (e) {
      console.error('Failed to clear storage:', e);
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Box>
          <Badge size="xs" variant="light" color="emerald" mb={4}>
            ความโปร่งใส & ความเป็นส่วนตัว (Privacy Notice)
          </Badge>
          <Text fw={700} size="md" c="slate.9">
            การคุ้มครองข้อมูลและความเป็นส่วนตัวของคุณ
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
        {/* Main Privacy Stance */}
        <Paper
          p="sm"
          radius="md"
          style={{
            backgroundColor: '#ecfdf5',
            border: '1px solid #d1fae5',
          }}
        >
          <Group gap="xs" align="center" mb={4}>
            <ShieldCheck size={18} color="#059669" />
            <Text size="xs" fw={700} c="#065f46">
              จุดยืนของเรา: ให้ความสำคัญกับความเป็นส่วนตัวของคุณสูงสุด (Privacy First)
            </Text>
          </Group>
          <Text size="xs" c="#047857" lh={1.6}>
            เว็บไซต์ <strong>"กินอะไรได้"</strong> พัฒนาขึ้นในฐานะเครื่องมือสาธารณะ (Open Public Tool) เรายึดมั่นในหลักการ <em>Data Minimization</em> และ <em>Privacy by Design</em> โดยไม่เก็บรวบรวมข้อมูลส่วนบุคคลใด ๆ ทั้งสิ้น
          </Text>
        </Paper>

        {/* 4 Core Privacy Guarantees */}
        <Box>
          <Text size="xs" fw={700} c="slate.8" mb="xs">
            การทำงานและสิทธิ์คุ้มครองข้อมูลของคุณ:
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xs">
            <Paper p="xs" radius="md" withBorder style={{ backgroundColor: '#f8fafc' }}>
              <Group gap={8} align="flex-start">
                <ThemeIcon size={26} radius="md" color="emerald" variant="light">
                  <Cookie size={15} />
                </ThemeIcon>
                <Box style={{ flex: 1 }}>
                  <Text size="xs" fw={700} c="slate.9">
                    ไม่มีการใช้คุกกี้ (Zero Cookies)
                  </Text>
                  <Text size="11px" c="dimmed" mt={2} lh={1.4}>
                    เราไม่ฝัง ไม่สร้าง และไม่อ่าน Cookies ใด ๆ บนเครื่องของคุณ จึงไม่มี Cookie Tracking หรือแถบขอความยินยอมกวนใจ
                  </Text>
                </Box>
              </Group>
            </Paper>

            <Paper p="xs" radius="md" withBorder style={{ backgroundColor: '#f8fafc' }}>
              <Group gap={8} align="flex-start">
                <ThemeIcon size={26} radius="md" color="blue" variant="light">
                  <Database size={15} />
                </ThemeIcon>
                <Box style={{ flex: 1 }}>
                  <Text size="xs" fw={700} c="slate.9">
                    บันทึกเฉพาะในเครื่องคุณ (Local Only)
                  </Text>
                  <Text size="11px" c="dimmed" mt={2} lh={1.4}>
                    ข้อมูลโรคและระยะที่ท่านเลือกถูกบันทึกใน LocalStorage บนเบราว์เซอร์เครื่องนี้เท่านั้น ไม่มีการส่งกลับมายังเซิร์ฟเวอร์
                  </Text>
                </Box>
              </Group>
            </Paper>

            <Paper p="xs" radius="md" withBorder style={{ backgroundColor: '#f8fafc' }}>
              <Group gap={8} align="flex-start">
                <ThemeIcon size={26} radius="md" color="teal" variant="light">
                  <UserX size={15} />
                </ThemeIcon>
                <Box style={{ flex: 1 }}>
                  <Text size="xs" fw={700} c="slate.9">
                    ไม่เก็บข้อมูลระบุตัวตน (No PII)
                  </Text>
                  <Text size="11px" c="dimmed" mt={2} lh={1.4}>
                    ไม่มีระบบสมัครสมาชิก ไม่ขอชื่อ อีเมล เบอร์โทร หรือข้อมูลสุขภาพที่สามารถเชื่อมโยงถึงตัวบุคคลได้
                  </Text>
                </Box>
              </Group>
            </Paper>

            <Paper p="xs" radius="md" withBorder style={{ backgroundColor: '#f8fafc' }}>
              <Group gap={8} align="flex-start">
                <ThemeIcon size={26} radius="md" color="violet" variant="light">
                  <EyeOff size={15} />
                </ThemeIcon>
                <Box style={{ flex: 1 }}>
                  <Text size="xs" fw={700} c="slate.9">
                    ไม่มีระบบสถิติติดตาม (No Analytics)
                  </Text>
                  <Text size="11px" c="dimmed" mt={2} lh={1.4}>
                    ไม่มี Google Analytics, Facebook Pixel, หรือ Third-party Tracker ใด ๆ พฤติกรรมการสืบค้นข้อมูลเป็นส่วนตัว 100%
                  </Text>
                </Box>
              </Group>
            </Paper>
          </SimpleGrid>
        </Box>

        {/* What is stored in LocalStorage */}
        <Paper p="sm" radius="md" withBorder style={{ backgroundColor: '#ffffff' }}>
          <Group gap={6} align="center" mb={6}>
            <Lock size={15} color="#475569" />
            <Text size="xs" fw={700} c="slate.8">
              ข้อมูลทางเทคนิคที่บันทึกไว้ในเบราว์เซอร์ของคุณ (LocalStorage):
            </Text>
          </Group>
          <Stack gap={4}>
            <Text size="11px" c="dimmed" lh={1.5}>
              • <strong>โรคและระยะที่เลือก:</strong> เพื่อให้เวลาคุณกลับมาใช้งานใหม่ ไม่ต้องกดเลือกซ้ำ
            </Text>
            <Text size="11px" c="dimmed" lh={1.5}>
              • <strong>สถานะการเข้าใช้งานครั้งแรก:</strong> เพื่อไม่ให้หน้าต่างต้อนรับเด้งขึ้นมาซ้ำซ้อน
            </Text>
            <Text size="11px" c="dimmed" lh={1.5}>
              • <strong>เวอร์ชันข้อมูล:</strong> เพื่อแจ้งเตือนให้ทราบเมื่อมีการอัปเดตเกณฑ์โภชนาการใหม่
            </Text>
          </Stack>
        </Paper>

        {/* Clear Data Action */}
        <Paper p="sm" radius="md" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <Group justify="space-between" align="center" wrap="wrap" gap="xs">
            <Box>
              <Text size="xs" fw={600} c="slate.8">
                ต้องการล้างข้อมูลการตั้งค่าทั้งหมด?
              </Text>
              <Text size="11px" c="dimmed">
                คุณสามารถลบค่าโรคและระยะที่บันทึกไว้ในเบราว์เซอร์นี้ได้ตลอดเวลา
              </Text>
            </Box>
            <Button
              variant="light"
              color="red"
              size="xs"
              radius="xl"
              leftSection={<Trash2 size={13} />}
              onClick={handleClearLocalStorage}
              disabled={cleared}
            >
              {cleared ? 'ล้างข้อมูลสำเร็จแล้ว...' : 'ล้างข้อมูลในเครื่องนี้'}
            </Button>
          </Group>

          {cleared && (
            <Alert
              icon={<CheckCircle2 size={16} />}
              color="emerald"
              variant="light"
              radius="md"
              mt="xs"
              py="xs"
            >
              <Text size="xs" c="emerald.9">
                ล้างข้อมูล LocalStorage ในเครื่องเรียบร้อยแล้ว ระบบจะรีเฟรชหน้าเว็บอัตโนมัติ...
              </Text>
            </Alert>
          )}
        </Paper>

        <Divider my={2} color="#f1f5f9" />

        {/* Legal & Compliance note */}
        <Group justify="space-between" align="center">
          <Text size="11px" c="dimmed" style={{ maxWidth: 460, lineHeight: 1.4 }}>
            สอดคล้องตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) และมาตรฐานสากลด้านการเคารพสิทธิความเป็นส่วนตัว
          </Text>
          <Button variant="filled" color="emerald" size="xs" radius="xl" onClick={onClose}>
            ปิดหน้าต่าง
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};
