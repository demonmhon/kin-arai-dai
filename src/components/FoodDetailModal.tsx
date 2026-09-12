import React from 'react';
import {
  Modal,
  Box,
  Group,
  Text,
  Badge,
  ActionIcon,
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
import {
  Hospital,
  Stethoscope,
  AlertTriangle,
  Camera,
  X,
  UtensilsCrossed,
} from 'lucide-react';
import { FoodItem } from '../types/food';
import { getStageMeta } from '../utils/diseaseHelper';
import { getFoodAdvice } from '../utils/foodAdvice';
import { diseases } from '../data/diseases';

interface FoodDetailModalProps {
  food: FoodItem | null;
  currentStage: string;
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
  const stageMeta = getStageMeta(currentDiseaseId, currentStage);
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
      yOffset="4vh"
      styles={{
        content: {
          maxHeight: 'calc(92vh)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        },
        body: {
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          overflow: 'hidden',
          minHeight: 0,
        },
      }}
    >
      {/* Modal Gradient Header (Sticky at top) */}
      <Box
        p={{ base: 'md', sm: 'lg' }}
        style={{
          background: getHeaderGradient(adviceInfo.level),
          color: '#ffffff',
          position: 'relative',
          flexShrink: 0,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          zIndex: 10,
        }}
      >
        <Group justify="space-between" align="center" wrap="nowrap" gap="sm">
          <Group gap="sm" wrap="nowrap" style={{ flex: 1, minWidth: 0 }}>
            {food.imageUrl ? (
              <Box
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: 14,
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
                  width: 58,
                  height: 58,
                  borderRadius: 14,
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  backdropFilter: 'blur(8px)',
                  fontSize: '30px',
                  userSelect: 'none',
                }}
              >
                {food.icon ? food.icon : <UtensilsCrossed size={28} color="#ffffff" />}
              </Box>
            )}
            <Box style={{ flex: 1, minWidth: 0 }}>
              <Group gap="xs" mb={4} wrap="wrap">
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
              <Text fw={700} fz={{ base: 18, sm: 22 }} c="white" style={{ lineHeight: 1.25 }}>
                {food.name}
              </Text>
            </Box>
          </Group>

          <ActionIcon
            variant="subtle"
            color="gray"
            size={34}
            radius="xl"
            onClick={onClose}
            aria-label="ปิดหน้าต่าง"
            title="ปิดหน้าต่าง"
            styles={{
              root: {
                backgroundColor: 'rgba(0, 0, 0, 0.22)',
                color: '#ffffff',
                backdropFilter: 'blur(8px)',
                flexShrink: 0,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.38)',
                },
              },
            }}
          >
            <X size={18} />
          </ActionIcon>
        </Group>
      </Box>

      {/* Modal Scrollable Body */}
      <Box
        p={{ base: 'md', sm: 'lg' }}
        style={{
          overflowY: 'auto',
          flex: 1,
          WebkitOverflowScrolling: 'touch',
        }}
      >
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
            <Group gap="xs" mb={4} align="center">
              <Stethoscope size={16} color="#4338ca" />
              <Text size="xs" fw={700} c="#312e81">
                คำแนะนำเฉพาะ:{' '}
                <Text span style={{ textDecoration: 'underline' }}>
                  {currentDiseaseId === 'ckd' || currentDiseaseId === 'gout' ? stageMeta.name : diseaseMeta.name}
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
          <Box pt="xs" style={{ borderTop: '1px solid #f1f5f9' }}>
            <Text size="xs" fw={600} c="dimmed" mb="xs">
              แหล่งข้อมูลทางการแพทย์ที่นำมาใช้อ้างอิงประกอบ {adviceInfo.sources && adviceInfo.sources.length > 0 ? `(${adviceInfo.sources.length} แหล่ง):` : ':'}
            </Text>
            {adviceInfo.sources && adviceInfo.sources.length > 0 ? (
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
                      className="reference-source-card"
                      style={{
                        backgroundColor: '#f8fafc',
                        borderColor: '#e2e8f0',
                        cursor: 'pointer',
                      }}
                    >
                      <Group justify="space-between">
                        <Group gap="sm">
                          <Box
                            style={{
                              width: 36,
                              height: 36,
                              borderRadius: 10,
                              backgroundColor: '#ecfdf5',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <Hospital size={20} color="#059669" />
                          </Box>
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
            ) : (
              <Paper
                p="sm"
                radius="md"
                withBorder
                style={{
                  backgroundColor: '#f8fafc',
                  borderColor: '#e2e8f0',
                }}
              >
                <Group gap="xs" align="center">
                  <AlertTriangle size={15} color="#d97706" />
                  <Text size="xs" c="dimmed">
                    ยังไม่มีลิงก์แหล่งข้อมูลจำเพาะที่ผ่านการตรวจสอบโดยตรงสำหรับรายการนี้
                  </Text>
                </Group>
              </Paper>
            )}
          </Box>

          {/* Image CC license credit */}
          {food.imageCredit && (
            <Group gap={6} align="center" pt="xs" style={{ borderTop: '1px dashed #e2e8f0' }}>
              <Camera size={13} color="#64748b" />
              <Text size="xs" c="dimmed">
                สิทธิ์การใช้งานภาพ: {food.imageCredit}
              </Text>
            </Group>
          )}
        </Stack>
      </Box>
    </Modal>
  );
};
