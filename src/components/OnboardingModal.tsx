import React, { useState } from 'react';
import {
  Modal,
  Box,
  Text,
  Badge,
  Button,
  Stack,
  SimpleGrid,
  Card,
  Group,
} from '@mantine/core';
import {
  Check,
  Save,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
} from 'lucide-react';
import { KidneyStageId } from '../types/food';
import { kidneyStages } from '../data/kidneyStages';
import { Logo } from './Logo';

interface OnboardingModalProps {
  opened: boolean;
  onClose: () => void;
  currentStage: KidneyStageId;
  onConfirmStage: (stage: KidneyStageId) => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  opened,
  onClose,
  currentStage,
  onConfirmStage,
}) => {
  const [tempStage, setTempStage] = useState<KidneyStageId>(currentStage);
  const stageKeys: KidneyStageId[] = ['stage1_2', 'stage3', 'stage4_5_pre', 'dialysis'];

  const getStageColorTheme = (id: KidneyStageId, isSelected: boolean) => {
    switch (id) {
      case 'stage1_2':
        return {
          border: isSelected ? '#3b82f6' : '#e2e8f0',
          bg: isSelected ? '#eff6ff' : '#ffffff',
          badgeBg: '#dbeafe',
          badgeColor: '#1e40af',
          dot: '#3b82f6',
        };
      case 'stage3':
        return {
          border: isSelected ? '#f59e0b' : '#e2e8f0',
          bg: isSelected ? '#fffbeb' : '#ffffff',
          badgeBg: '#fef3c7',
          badgeColor: '#92400e',
          dot: '#f59e0b',
        };
      case 'stage4_5_pre':
        return {
          border: isSelected ? '#ef4444' : '#e2e8f0',
          bg: isSelected ? '#fef2f2' : '#ffffff',
          badgeBg: '#fee2e2',
          badgeColor: '#991b1b',
          dot: '#ef4444',
        };
      case 'dialysis':
        return {
          border: isSelected ? '#a855f7' : '#e2e8f0',
          bg: isSelected ? '#faf5ff' : '#ffffff',
          badgeBg: '#f3e8ff',
          badgeColor: '#6b21a8',
          dot: '#a855f7',
        };
    }
  };

  const handleConfirm = () => {
    onConfirmStage(tempStage);
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      closeOnClickOutside={true}
      size="lg"
      radius="xl"
      padding="lg"
      withCloseButton={true}
      title={
        <Group gap="xs">
          <Logo size={28} />
          <Box>
            <Text fw={700} size="sm" c="slate.9">
              กินอะไรได้?
            </Text>
          </Box>
        </Group>
      }
      styles={{
        header: {
          borderBottom: '1px solid #f1f5f9',
          paddingBottom: 10,
        },
      }}
    >
      <Stack gap="md" pt="xs">
        {/* Welcome Header */}
        <Box style={{ textAlign: 'center' }} py="xs">
          <Badge size="sm" variant="light" color="emerald" mb={6}>
            ยินดีต้อนรับ / ตั้งค่าครั้งแรก
          </Badge>
          <Text fw={700} fz={{ base: 18, sm: 20 }} c="slate.9" mb={4}>
            คุณหรือคนที่คุณดูแล อยู่ในระยะใดของโรคไต?
          </Text>
          <Text size="xs" c="dimmed" style={{ maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
            การทำงานของไตในแต่ละระยะมีความต้องการแร่ธาตุและโปรตีนต่างกัน
            กรุณาเลือกระยะเพื่อแสดงเกณฑ์ไฟจราจร{' '}
            <Text span fw={600} c="#10b981" style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
              <CheckCircle2 size={13} /> เขียว
            </Text>{' '}
            •{' '}
            <Text span fw={600} c="#f59e0b" style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
              <AlertCircle size={13} /> เหลือง
            </Text>{' '}
            •{' '}
            <Text span fw={600} c="#ef4444" style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
              <AlertTriangle size={13} /> แดง
            </Text>{' '}
            ที่ปลอดภัยสำหรับคุณ
          </Text>
        </Box>

        {/* 4 Stages Selection Grid */}
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
          {stageKeys.map((key) => {
            const item = kidneyStages[key];
            const isSelected = tempStage === key;
            const styling = getStageColorTheme(key, isSelected);

            return (
              <Card
                key={key}
                p="md"
                radius="lg"
                withBorder
                onClick={() => setTempStage(key)}
                style={{
                  cursor: 'pointer',
                  borderColor: styling.border,
                  borderWidth: isSelected ? 2 : 1,
                  backgroundColor: styling.bg,
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Group justify="space-between" align="flex-start" mb={4}>
                    <Text size="sm" fw={700} c="slate.9">
                      {key === 'stage1_2'
                        ? 'ระยะที่ 1 - 2'
                        : key === 'stage3'
                          ? 'ระยะที่ 3 (3a - 3b)'
                          : key === 'stage4_5_pre'
                            ? 'ระยะ 4 - 5 (ก่อนฟอกไต)'
                            : 'ฟอกเลือด / ล้างไต'}
                    </Text>
                    <Group gap={6}>
                      <Badge
                        size="xs"
                        styles={{
                          root: {
                            backgroundColor: styling.badgeBg,
                            color: styling.badgeColor,
                            fontWeight: 600,
                            textTransform: 'none',
                          },
                        }}
                      >
                        {item.badge}
                      </Badge>
                      {isSelected && <Check size={16} color={styling.dot} />}
                    </Group>
                  </Group>

                  <Text size="11px" c="dimmed" mb="xs" lh={1.4}>
                    {item.summary.slice(0, 80)}...
                  </Text>
                </Box>

                <Group gap={6} mt="xs">
                  <Box
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: styling.dot,
                    }}
                  />
                  <Text size="xs" fw={600} c="slate.8">
                    {item.focus}
                  </Text>
                </Group>
              </Card>
            );
          })}
        </SimpleGrid>

        {/* Action Button & Privacy Note */}
        <Stack gap="xs" mt="xs">
          <Button
            fullWidth
            size="md"
            color="emerald"
            radius="xl"
            leftSection={<Save size={18} />}
            onClick={handleConfirm}
            styles={{
              root: {
                fontWeight: 600,
                fontSize: 14,
              },
            }}
          >
            บันทึกและเริ่มต้นค้นหาอาหาร
          </Button>

          <Button
            variant="subtle"
            color="gray"
            size="xs"
            onClick={onClose}
          >
            ยังไม่เลือกตอนนี้
          </Button>

          <Group justify="center" gap={6} c="dimmed">
            <ShieldCheck size={15} />
            <Text size="11px" c="dimmed">
              บันทึกข้อมูลเฉพาะในเบราว์เซอร์นี้ (คุณสามารถกดเปลี่ยนระยะได้ตลอดเวลาที่แถบด้านบน)
            </Text>
          </Group>
        </Stack>
      </Stack>
    </Modal>
  );
};
