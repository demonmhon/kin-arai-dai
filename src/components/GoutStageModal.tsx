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
import { IconCheck, IconAlertTriangle, IconShieldCheck } from '@tabler/icons-react';
import { GoutStageId } from '../types/food';
import { goutStages } from '../data/goutStages';

interface GoutStageModalProps {
  opened: boolean;
  onClose: () => void;
  selectedStage: GoutStageId;
  onSelectStage: (stage: GoutStageId) => void;
}

export const GoutStageModal: React.FC<GoutStageModalProps> = ({
  opened,
  onClose,
  selectedStage,
  onSelectStage,
}) => {
  const currentStageInfo = goutStages[selectedStage] || goutStages.gout_remission;
  const stageKeys: GoutStageId[] = ['gout_remission', 'gout_flare'];

  const getStageColorTheme = (id: GoutStageId, isSelected: boolean) => {
    switch (id) {
      case 'gout_remission':
        return {
          border: isSelected ? '#10b981' : '#e2e8f0',
          bg: isSelected ? '#ecfdf5' : '#ffffff',
          badgeBg: '#d1fae5',
          badgeColor: '#065f46',
          dot: '#10b981',
          icon: <IconShieldCheck size={20} color="#059669" />,
        };
      case 'gout_flare':
        return {
          border: isSelected ? '#ef4444' : '#e2e8f0',
          bg: isSelected ? '#fef2f2' : '#ffffff',
          badgeBg: '#fee2e2',
          badgeColor: '#991b1b',
          dot: '#ef4444',
          icon: <IconAlertTriangle size={20} color="#dc2626" />,
        };
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Box>
          <Badge size="xs" variant="light" color="emerald" mb={4}>
            ระยะของโรคเกาต์ (Gout Condition)
          </Badge>
          <Text fw={700} size="md" c="slate.9">
            เลือกสภาวะของโรคเกาต์ เพื่อปรับเกณฑ์อาหาร
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
          ในขณะที่ข้ออักเสบกำเริบ (ปวด บวม แดง) ร่างกายจะไวต่อสารพิวรีนสูงมาก จึงต้องคุมอาหารเข้มงวดยิ่งกว่าช่วงปกติ:
        </Text>

        {/* 2 Stages Grid */}
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
          {stageKeys.map((key) => {
            const item = goutStages[key];
            const isSelected = selectedStage === key;
            const styling = getStageColorTheme(key, isSelected);

            return (
              <Card
                key={key}
                p="md"
                radius="lg"
                withBorder
                onClick={() => onSelectStage(key)}
                style={{
                  cursor: 'pointer',
                  borderColor: styling.border,
                  borderWidth: isSelected ? 2 : 1,
                  backgroundColor: styling.bg,
                  transition: 'all 0.15s ease',
                }}
              >
                <Group justify="space-between" align="flex-start" mb={4}>
                  <Group gap="xs">
                    {styling.icon}
                    <Text size="sm" fw={700} c="slate.9">
                      {key === 'gout_remission' ? 'ช่วงปกติ / ระยะสงบ' : 'ช่วงข้ออักเสบกำเริบ'}
                    </Text>
                  </Group>
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
                  {item.summary.slice(0, 95)}...
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
          icon={selectedStage === 'gout_flare' ? <IconAlertTriangle size={18} /> : <IconShieldCheck size={18} />}
          color={selectedStage === 'gout_flare' ? 'red' : 'emerald'}
          variant="light"
          radius="md"
          styles={{
            root: {
              backgroundColor: selectedStage === 'gout_flare' ? '#fff5f5' : '#f0fdf4',
              borderColor: selectedStage === 'gout_flare' ? '#fed7d7' : '#dcfce7',
            },
            message: {
              fontSize: 12,
              color: '#334155',
              lineHeight: 1.6,
            },
          }}
        >
          <Text span fw={700} c="slate.9">
            {currentStageInfo.name}:{' '}
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
