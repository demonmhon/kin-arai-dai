import React from 'react';
import {
  Card,
  Stack,
  Group,
  Text,
  Badge,
  Button,
  Box,
  UnstyledButton,
  Divider,
} from '@mantine/core';
import {
  IconAdjustmentsHorizontal,
  IconCheck,
  IconReload,
} from '@tabler/icons-react';
import {
  Apple,
  Broccoli,
  Beef,
  Wheat,
  Sparkles,
  Coffee,
  Soup,
  Utensils,
  Settings,
} from 'lucide-react';
import { FoodCategory, StageLevel } from '../types/food';
import { getStageMeta } from '../utils/diseaseHelper';

interface SidebarFilterProps {
  selectedStage: string;
  selectedDiseaseId?: string;
  onOpenStageModal: () => void;
  currentLevelFilter: StageLevel | 'all';
  onSelectLevel: (level: StageLevel | 'all') => void;
  currentCategory: FoodCategory;
  onSelectCategory: (category: FoodCategory) => void;
  levelCounts: {
    safe: number;
    caution: number;
    danger: number;
    total: number;
  };
  categoryCounts: Record<FoodCategory, number>;
  onResetFilters: () => void;
  isFilterActive: boolean;
}

export const SidebarFilter: React.FC<SidebarFilterProps> = ({
  selectedStage,
  selectedDiseaseId = 'ckd',
  onOpenStageModal,
  currentLevelFilter,
  onSelectLevel,
  currentCategory,
  onSelectCategory,
  levelCounts,
  categoryCounts,
  onResetFilters,
  isFilterActive,
}) => {
  const stage = getStageMeta(selectedDiseaseId, selectedStage);
  const isGout = selectedDiseaseId === 'gout';
  const isChole = selectedDiseaseId === 'cholecystectomy';

  const levels: {
    id: StageLevel | 'all';
    label: string;
    dotColor?: string;
    badgeBg?: string;
    badgeColor?: string;
    count: number;
  }[] = [
    {
      id: 'all',
      label: 'ทั้งหมดทุกเกณฑ์',
      count: levelCounts.total,
    },
    {
      id: 'safe',
      label: 'เขียว: ทานได้ (ปลอดภัย)',
      dotColor: '#10b981',
      badgeBg: '#ecfdf5',
      badgeColor: '#065f46',
      count: levelCounts.safe,
    },
    {
      id: 'caution',
      label: 'เหลือง: คุมปริมาณ (ทานแต่น้อย)',
      dotColor: '#f59e0b',
      badgeBg: '#fffbeb',
      badgeColor: '#92400e',
      count: levelCounts.caution,
    },
    {
      id: 'danger',
      label: 'แดง: ควรหลีกเลี่ยง',
      dotColor: '#ef4444',
      badgeBg: '#fef2f2',
      badgeColor: '#991b1b',
      count: levelCounts.danger,
    },
  ];

  const categories: {
    id: FoodCategory;
    label: string;
    icon?: React.ReactNode;
    count: number;
  }[] = [
    { id: 'all', label: 'ทุกหมวดหมู่อาหาร', icon: <Utensils size={15} />, count: categoryCounts.all },
    { id: 'fruit', label: 'ผลไม้', icon: <Apple size={15} />, count: categoryCounts.fruit },
    { id: 'vegetable', label: 'ผัก', icon: <Broccoli size={15} />, count: categoryCounts.vegetable },
    { id: 'protein', label: 'เนื้อสัตว์/โปรตีน', icon: <Beef size={15} />, count: categoryCounts.protein },
    { id: 'carb', label: 'ข้าว-แป้ง', icon: <Wheat size={15} />, count: categoryCounts.carb },
    { id: 'condiment', label: 'เครื่องปรุง', icon: <Sparkles size={15} />, count: categoryCounts.condiment },
    { id: 'drink', label: 'เครื่องดื่ม/ของหวาน', icon: <Coffee size={15} />, count: categoryCounts.drink },
    { id: 'dish', label: 'อาหารจานเดียว/ฟาสต์ฟู้ด', icon: <Soup size={15} />, count: categoryCounts.dish },
  ];

  return (
    <Card
      p="md"
      radius="lg"
      withBorder
      style={{
        backgroundColor: '#ffffff',
        borderColor: '#e2e8f0',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
      }}
    >
      <Stack gap="md">
        {/* Header with Title & Reset Button */}
        <Group justify="space-between" align="center">
          <Group gap="xs">
            <IconAdjustmentsHorizontal size={18} color="#059669" />
            <Text size="sm" fw={700} c="slate.9">
              ตัวกรองข้อมูล
            </Text>
          </Group>

          {isFilterActive && (
            <Button
              variant="subtle"
              color="gray"
              size="compact-xs"
              leftSection={<IconReload size={12} />}
              onClick={onResetFilters}
            >
              ล้างทั้งหมด
            </Button>
          )}
        </Group>

        {/* 1. Stage Selector Card */}
        <Box
          p="xs"
          style={{
            borderRadius: 10,
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
          }}
        >
          <Group justify="space-between" align="center" mb={4}>
            <Text size="11px" fw={700} c="slate.6" style={{ textTransform: 'uppercase' }}>
              {isGout ? 'สภาวะโรคเกาต์ที่ประเมิน' : isChole ? 'สภาวะหลังตัดถุงน้ำดีที่ประเมิน' : 'ระยะโรคไตที่ประเมิน'}
            </Text>
            <Badge size="xs" color={stage.color as any || 'emerald'} variant="light">
              {stage.badge}
            </Badge>
          </Group>

          <Text size="xs" fw={700} c="slate.9" lineClamp={1}>
            {stage.name}
          </Text>
          <Text size="11px" c="dimmed" lineClamp={1} mt={1}>
            {stage.focus}
          </Text>

          <Button
            fullWidth
            variant="light"
            color="emerald"
            size="xs"
            radius="md"
            mt="xs"
            onClick={onOpenStageModal}
            styles={{
              root: {
                fontWeight: 600,
                fontSize: 11,
              },
            }}
            rightSection={<Settings size={13} />}
          >
            {isGout ? 'เปลี่ยนสภาวะโรคเกาต์' : isChole ? 'เปลี่ยนสภาวะการฟื้นฟู' : 'เปลี่ยนระยะโรคไต'}
          </Button>
        </Box>

        <Divider color="#f1f5f9" />

        {/* 2. Traffic Light Safety Filter */}
        <Box>
          <Text size="xs" fw={700} c="slate.7" mb="xs">
            เกณฑ์สีความปลอดภัย:
          </Text>

          <Stack gap={4}>
            {levels.map((lvl) => {
              const isSelected = currentLevelFilter === lvl.id;

              return (
                <UnstyledButton
                  key={lvl.id}
                  onClick={() => onSelectLevel(lvl.id)}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: 10,
                    backgroundColor: isSelected ? '#f1f5f9' : 'transparent',
                    border: isSelected ? '1px solid #cbd5e1' : '1px solid transparent',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <Group justify="space-between" align="center" wrap="nowrap">
                    <Group gap="xs" wrap="nowrap">
                      {lvl.dotColor ? (
                        <Box
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            backgroundColor: lvl.dotColor,
                            boxShadow: `0 0 4px ${lvl.dotColor}80`,
                          }}
                        />
                      ) : (
                        <Box
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            backgroundColor: '#94a3b8',
                          }}
                        />
                      )}
                      <Text
                        size="xs"
                        fw={isSelected ? 700 : 500}
                        c={isSelected ? 'slate.9' : 'slate.7'}
                        lineClamp={1}
                      >
                        {lvl.label}
                      </Text>
                    </Group>

                    <Group gap={4} wrap="nowrap">
                      <Badge
                        size="xs"
                        variant={isSelected ? 'filled' : 'light'}
                        color={isSelected ? 'dark' : 'gray'}
                        styles={{ root: { fontSize: 10, minWidth: 24, padding: '0 4px' } }}
                      >
                        {lvl.count}
                      </Badge>
                      {isSelected && <IconCheck size={14} color="#059669" />}
                    </Group>
                  </Group>
                </UnstyledButton>
              );
            })}
          </Stack>
        </Box>

        <Divider color="#f1f5f9" />

        {/* 3. Food Category Filter */}
        <Box>
          <Text size="xs" fw={700} c="slate.7" mb="xs">
            หมวดหมู่อาหาร:
          </Text>

          <Stack gap={4}>
            {categories.map((cat) => {
              const isSelected = currentCategory === cat.id;

              return (
                <UnstyledButton
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: 10,
                    backgroundColor: isSelected ? '#ecfdf5' : 'transparent',
                    border: isSelected ? '1px solid #a7f3d0' : '1px solid transparent',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <Group justify="space-between" align="center" wrap="nowrap">
                    <Group gap="xs" wrap="nowrap">
                      {cat.icon && (
                        <Box
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: isSelected ? '#059669' : '#64748b',
                          }}
                        >
                          {cat.icon}
                        </Box>
                      )}
                      <Text
                        size="xs"
                        fw={isSelected ? 700 : 500}
                        c={isSelected ? '#065f46' : 'slate.7'}
                        lineClamp={1}
                      >
                        {cat.label}
                      </Text>
                    </Group>

                    <Group gap={4} wrap="nowrap">
                      <Badge
                        size="xs"
                        variant={isSelected ? 'filled' : 'light'}
                        color={isSelected ? 'emerald' : 'gray'}
                        styles={{ root: { fontSize: 10, minWidth: 24, padding: '0 4px' } }}
                      >
                        {cat.count}
                      </Badge>
                      {isSelected && <IconCheck size={14} color="#059669" />}
                    </Group>
                  </Group>
                </UnstyledButton>
              );
            })}
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
};
