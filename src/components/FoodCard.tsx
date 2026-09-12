import React from 'react';
import { Card, Group, Text, Badge, Box } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { FoodItem, KidneyStageId } from '../types/food';
import { getFoodAdvice } from '../utils/foodAdvice';

interface FoodCardProps {
  food: FoodItem;
  currentStage: KidneyStageId;
  currentDiseaseId?: string;
  onOpenDetail: (food: FoodItem) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({
  food,
  currentStage,
  currentDiseaseId = 'ckd',
  onOpenDetail,
}) => {
  const stageInfo = getFoodAdvice(food, currentDiseaseId, currentStage);

  const getLevelConfig = (lvl: string) => {
    switch (lvl) {
      case 'safe':
        return {
          label: 'ทานได้ (ปลอดภัย)',
          badgeBg: '#ecfdf5',
          badgeColor: '#065f46',
          badgeBorder: '#a7f3d0',
          dot: '#10b981',
          hoverBorder: '#34d399',
        };
      case 'caution':
        return {
          label: 'ระวัง (คุมปริมาณ)',
          badgeBg: '#fffbeb',
          badgeColor: '#92400e',
          badgeBorder: '#fde68a',
          dot: '#f59e0b',
          hoverBorder: '#fbbf24',
        };
      case 'danger':
      default:
        return {
          label: 'ควรหลีกเลี่ยง',
          badgeBg: '#fef2f2',
          badgeColor: '#991b1b',
          badgeBorder: '#fecaca',
          dot: '#ef4444',
          hoverBorder: '#f87171',
        };
    }
  };

  const conf = getLevelConfig(stageInfo.level);

  return (
    <Card
      p="md"
      radius="lg"
      withBorder
      className="food-card"
      onClick={() => onOpenDetail(food)}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderColor: '#e2e8f0',
        backgroundColor: '#ffffff',
      }}
    >
      <Box>
        {/* Badge Header */}
        <Group justify="space-between" mb="xs">
          <Badge
            size="sm"
            styles={{
              root: {
                backgroundColor: conf.badgeBg,
                color: conf.badgeColor,
                border: `1px solid ${conf.badgeBorder}`,
                fontWeight: 600,
                textTransform: 'none',
              },
            }}
          >
            <Group gap={6} wrap="nowrap">
              <Box
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: conf.dot,
                }}
              />
              <Text size="xs" span>
                {conf.label}
              </Text>
            </Group>
          </Badge>

          <Badge size="xs" variant="light" color="gray" radius="sm">
            {food.categoryName}
          </Badge>
        </Group>

        {/* Image or Colored Placeholder Box & Name */}
        <Group align="flex-start" gap="sm" mb="xs" wrap="nowrap">
          {food.imageUrl ? (
            <Box
              style={{
                width: 68,
                height: 68,
                borderRadius: 12,
                overflow: 'hidden',
                flexShrink: 0,
                backgroundColor: '#f1f5f9',
                border: '1px solid #e2e8f0',
              }}
            >
              <img
                src={food.imageUrl}
                alt={food.name}
                loading="lazy"
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
                width: 68,
                height: 68,
                borderRadius: 12,
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: '32px',
                userSelect: 'none',
              }}
            >
              {food.icon || '🍽️'}
            </Box>
          )}

          <Box style={{ flex: 1 }}>
            <Text fw={700} size="sm" c="slate.9" lh={1.3}>
              {food.name}
            </Text>
            {/* Stage Advice */}
            <Box
              p="xs"
              mt={6}
              style={{
                borderRadius: 8,
                backgroundColor: '#f8fafc',
                border: '1px solid #f1f5f9',
              }}
            >
              <Text size="xs" c="slate.7" lh={1.4} lineClamp={2}>
                <Text span fw={600} c="slate.8">
                  คำแนะนำ:{' '}
                </Text>
                {stageInfo.advice}
              </Text>
            </Box>
          </Box>
        </Group>
      </Box>

      {/* Footer */}
      <Box pt="xs" mt="xs" style={{ borderTop: '1px solid #f1f5f9' }}>
        <Group justify="space-between">
          <Group gap={4}>
            {stageInfo.tags.slice(0, 1).map((tag) => (
              <Badge key={tag} size="xs" variant="outline" color="gray" radius="sm">
                #{tag}
              </Badge>
            ))}
          </Group>

          <Group gap={4} c="emerald.7">
            <Text size="xs" fw={600}>
              ดูเหตุผล & ที่มา
            </Text>
            <IconArrowRight size={14} />
          </Group>
        </Group>
      </Box>
    </Card>
  );
};
