import React from 'react';
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
  Alert,
} from '@mantine/core';
import { IconCheck, IconInfoCircle } from '@tabler/icons-react';
import { KidneyStageId } from '../types/food';
import { kidneyStages } from '../data/kidneyStages';

interface KidneyStageModalProps {
  opened: boolean;
  onClose: () => void;
  selectedStage: KidneyStageId;
  onSelectStage: (stage: KidneyStageId) => void;
}

export const KidneyStageModal: React.FC<KidneyStageModalProps> = ({
  opened,
  onClose,
  selectedStage,
  onSelectStage,
}) => {
  const currentStageInfo = kidneyStages[selectedStage];
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

  const handleSelect = (key: KidneyStageId) => {
    onSelectStage(key);
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Box>
          <Badge size="xs" variant="light" color="emerald" mb={4}>
            ระยะของโรคไต (CKD Stage)
          </Badge>
          <Text fw={700} size="md" c="slate.9">
            เลือกระยะของโรคไต เพื่อปรับเกณฑ์อาหาร
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
          การทำงานของไตในแต่ละระยะส่งผลต่อการกรองแร่ธาตุ (โพแทสเซียม, ฟอสฟอรัส, โซเดียม) และปริมาณโปรตีนที่ร่างกายต้องการ:
        </Text>

        {/* 4 Stages Grid */}
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
          {stageKeys.map((key) => {
            const item = kidneyStages[key];
            const isSelected = selectedStage === key;
            const styling = getStageColorTheme(key, isSelected);

            return (
              <Card
                key={key}
                p="md"
                radius="lg"
                withBorder
                onClick={() => handleSelect(key)}
                style={{
                  cursor: 'pointer',
                  borderColor: styling.border,
                  borderWidth: isSelected ? 2 : 1,
                  backgroundColor: styling.bg,
                  transition: 'all 0.15s ease',
                }}
              >
                <Group justify="space-between" align="flex-start" mb={4}>
                  <Text size="sm" fw={700} c="slate.9">
                    {key === 'stage1_2'
                      ? 'ระยะที่ 1 - 2'
                      : key === 'stage3'
                      ? 'ระยะที่ 3 (3a - 3b)'
                      : key === 'stage4_5_pre'
                      ? 'ระยะ 4 - 5 (ก่อนฟอก)'
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
                    {isSelected && <IconCheck size={16} color={styling.dot} />}
                  </Group>
                </Group>

                <Text size="xs" c="dimmed" mb="sm" lh={1.4}>
                  {item.summary.slice(0, 85)}...
                </Text>

                <Group gap={6} mt="auto">
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

        {/* Active Stage Detailed Summary */}
        <Alert
          icon={<IconInfoCircle size={18} />}
          color="emerald"
          variant="light"
          radius="md"
          styles={{
            root: {
              backgroundColor: '#f8fafc',
              borderColor: '#e2e8f0',
            },
            message: {
              fontSize: 12,
              color: '#334155',
              lineHeight: 1.6,
            },
          }}
        >
          <Text span fw={700} c="slate.9">
            {currentStageInfo.name} ({currentStageInfo.egfr}):{' '}
          </Text>
          <Text span c="slate.7">
            {currentStageInfo.summary}
          </Text>
        </Alert>

        <Group justify="flex-end" mt="xs">
          <Button variant="filled" color="emerald" size="sm" radius="xl" onClick={onClose}>
            ตกลง / นำเกณฑ์นี้ไปใช้
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};
