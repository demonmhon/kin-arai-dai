import React from 'react';
import {
  Modal,
  Box,
  Group,
  Text,
  Badge,
  Button,
  Stack,
  Anchor,
  Paper,
} from '@mantine/core';
import {
  IconExternalLink,
  IconBulb,
  IconActivity,
  IconCheck,
} from '@tabler/icons-react';
import { FoodItem, KidneyStageId } from '../types/food';
import { kidneyStages } from '../data/kidneyStages';
import { getFoodAdvice } from '../utils/foodAdvice';
import { diseases } from '../data/diseases';

interface FoodDetailModalProps {
  food: FoodItem | null;
  currentStage: KidneyStageId;
  currentDiseaseId?: string;
  opened: boolean;
  onClose: () => void;
}

export const FoodDetailModal: React.FC<FoodDetailModalProps> = ({
  food,
  currentStage,
  currentDiseaseId = 'ckd',
  opened,
  onClose,
}) => {
  if (!food) return null;

  const adviceInfo = getFoodAdvice(food, currentDiseaseId, currentStage);
  const stageMeta = kidneyStages[currentStage];
  const diseaseMeta = diseases.find((d) => d.id === currentDiseaseId) || diseases[0];

  const getHeaderGradient = (lvl: string) => {
    switch (lvl) {
      case 'safe':
        return 'linear-gradient(135deg, #059669 0%, #10b981 100%)';
      case 'caution':
        return 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)';
      case 'danger':
      default:
        return 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)';
    }
  };

  const getLevelLabel = (lvl: string) => {
    switch (lvl) {
      case 'safe':
        return 'ทานได้ (ปลอดภัย)';
      case 'caution':
        return 'ระวัง (คุมปริมาณ)';
      case 'danger':
      default:
        return 'ควรหลีกเลี่ยง';
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="lg"
      radius="xl"
      withCloseButton={false}
      padding={0}
      styles={{
        content: {
          overflow: 'hidden',
        },
      }}
    >
      {/* Modal Gradient Header */}
      <Box
        p="lg"
        style={{
          background: getHeaderGradient(adviceInfo.level),
          color: '#ffffff',
          position: 'relative',
        }}
      >
        <Group justify="space-between" align="flex-start">
          <Group gap="md">
            {food.imageUrl ? (
              <Box
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  flexShrink: 0,
                }}
              >
                <img
                  src={food.imageUrl}
                  alt={food.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </Box>
            ) : (
              <Box
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  backdropFilter: 'blur(8px)',
                  fontSize: '34px',
                  userSelect: 'none',
                }}
              >
                {food.icon || '🍽️'}
              </Box>
            )}
            <Box>
              <Group gap="xs" mb={4}>
                <Badge
                  size="xs"
                  styles={{
                    root: {
                      backgroundColor: 'rgba(255, 255, 255, 0.25)',
                      color: '#ffffff',
                      backdropFilter: 'blur(8px)',
                      textTransform: 'none',
                    },
                  }}
                >
                  {getLevelLabel(adviceInfo.level)}
                </Badge>
                <Text size="xs" c="rgba(255, 255, 255, 0.85)">
                  หมวด: {food.categoryName}
                </Text>
              </Group>
              <Text fw={700} size="xl" c="white">
                {food.name}
              </Text>
            </Box>
          </Group>

          <Button
            variant="subtle"
            color="gray"
            size="xs"
            radius="xl"
            onClick={onClose}
            styles={{
              root: {
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                color: '#ffffff',
                padding: '4px 10px',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.35)',
                },
              },
            }}
          >
            ✕ ปิด
          </Button>
        </Group>
      </Box>

      {/* Modal Body */}
      <Box p="lg">
        <Stack gap="md">
          {/* Specific Stage / Condition Advice */}
          <Paper
            p="md"
            radius="lg"
            style={{
              backgroundColor: '#eef2ff',
              border: '1px solid #e0e7ff',
            }}
          >
            <Group gap="xs" mb={4}>
              <Text size="sm">🎯</Text>
              <Text size="xs" fw={700} c="#312e81">
                คำแนะนำเฉพาะ:{' '}
                <Text span style={{ textDecoration: 'underline' }}>
                  {currentDiseaseId === 'ckd' ? stageMeta.name : diseaseMeta.name}
                </Text>
              </Text>
            </Group>
            <Text size="xs" c="#1e1b4b" lh={1.6}>
              {adviceInfo.advice}
            </Text>
          </Paper>

          {/* Clinical Reason */}
          <Paper
            p="md"
            radius="lg"
            style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
            }}
          >
            <Group gap="xs" mb={6}>
              <IconActivity size={16} color="#475569" />
              <Text size="xs" fw={700} c="slate.8">
                ทำไมถึงอยู่ในเกณฑ์นี้? (กลไก & เหตุผลทางการแพทย์)
              </Text>
            </Group>
            <Text size="xs" c="slate.7" lh={1.6}>
              {adviceInfo.reason}
            </Text>
          </Paper>

          {/* Nutrition Tags */}
          {adviceInfo.tags && adviceInfo.tags.length > 0 && (
            <Box>
              <Text size="xs" fw={600} c="dimmed" mb={6}>
                สารอาหารสำคัญที่เกี่ยวข้อง:
              </Text>
              <Group gap="xs">
                {adviceInfo.tags.map((tag) => (
                  <Badge
                    key={tag}
                    size="sm"
                    variant="light"
                    color="gray"
                    radius="md"
                    leftSection={<IconCheck size={12} />}
                    styles={{
                      root: {
                        textTransform: 'none',
                        fontWeight: 500,
                      },
                    }}
                  >
                    {tag}
                  </Badge>
                ))}
              </Group>
            </Box>
          )}

          {/* Serving / Cooking Advice */}
          <Paper
            p="md"
            radius="lg"
            style={{
              backgroundColor: '#f0fdf4',
              border: '1px solid #dcfce7',
            }}
          >
            <Group gap="xs" mb={6}>
              <IconBulb size={16} color="#059669" />
              <Text size="xs" fw={700} c="#065f46">
                วิธีรับประทานและการปรุงอย่างปลอดภัย
              </Text>
            </Group>
            <Text size="xs" c="#047857" lh={1.6}>
              {adviceInfo.advice}
            </Text>
          </Paper>

          {/* Credible Source Links */}
          {adviceInfo.sources && adviceInfo.sources.length > 0 && (
            <Box pt="xs" style={{ borderTop: '1px solid #f1f5f9' }}>
              <Text size="xs" fw={600} c="dimmed" mb="xs">
                แหล่งข้อมูลทางการแพทย์ที่นำมาใช้อ้างอิงประกอบ ({adviceInfo.sources.length} แหล่ง):
              </Text>
              <Stack gap="xs">
                {adviceInfo.sources.map((src, idx) => (
                  <Anchor
                    key={idx}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="never"
                  >
                    <Paper
                      p="sm"
                      radius="md"
                      withBorder
                      style={{
                        backgroundColor: '#f8fafc',
                        borderColor: '#e2e8f0',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <Group justify="space-between">
                        <Group gap="sm">
                          <Text size="xl">🏥</Text>
                          <Box>
                            <Text size="xs" fw={700} c="slate.8">
                              {src.name}
                            </Text>
                            <Text size="10px" c="dimmed">
                              คลิกเพื่อเปิดดูข้อมูลและงานวิจัยเพิ่มเติมจากแหล่งที่มา
                            </Text>
                          </Box>
                        </Group>
                        <IconExternalLink size={16} color="#059669" />
                      </Group>
                    </Paper>
                  </Anchor>
                ))}
              </Stack>
            </Box>
          )}

          {/* Image CC license credit */}
          {food.imageCredit && (
            <Text size="11px" c="dimmed">
              📷 สิทธิ์การใช้งานภาพ: {food.imageCredit}
            </Text>
          )}

          {/* Close button */}
          <Group justify="flex-end" mt="xs">
            <Button variant="default" size="sm" radius="xl" onClick={onClose}>
              ปิดหน้าต่าง
            </Button>
          </Group>
        </Stack>
      </Box>
    </Modal>
  );
};
