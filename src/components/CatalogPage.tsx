import React, { useMemo, useState } from 'react';
import {
  Container,
  Stack,
  SimpleGrid,
  Box,
  Text,
  Button,
  Group,
  Paper,
  Grid,
  Drawer,
  Badge,
  Tooltip,
} from '@mantine/core';
import {
  IconAdjustmentsHorizontal,
  IconX,
  IconShare,
  IconCheck,
} from '@tabler/icons-react';
import { useSearchParams } from 'react-router-dom';

import { HeroSearch } from './HeroSearch';
import { SidebarFilter } from './SidebarFilter';
import { FoodCard } from './FoodCard';
import { MedicalWarningBanner } from './MedicalWarningBanner';

import {
  FoodItem,
  FoodCategory,
  StageLevel,
} from '../types/food';
import { foods } from '../data/foods';
import { getStageMeta } from '../utils/diseaseHelper';
import { getFoodAdvice } from '../utils/foodAdvice';

interface CatalogPageProps {
  selectedStage: string;
  selectedDiseaseId?: string;
  onOpenStageModal: () => void;
  onOpenDetail: (food: FoodItem) => void;
}

const VALID_CATEGORIES: FoodCategory[] = [
  'all',
  'fruit',
  'vegetable',
  'protein',
  'carb',
  'condiment',
  'drink',
  'dish',
];

export const CatalogPage: React.FC<CatalogPageProps> = ({
  selectedStage,
  selectedDiseaseId = 'ckd',
  onOpenStageModal,
  onOpenDetail,
}) => {
  const stageMeta = getStageMeta(selectedDiseaseId, selectedStage);
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Read search & filters directly from URL query params
  const searchTerm =
    searchParams.get('keywords') ||
    searchParams.get('keyword') ||
    searchParams.get('q') ||
    searchParams.get('search') ||
    '';

  const rawCategory = (searchParams.get('category') || searchParams.get('cat') || 'all').toLowerCase();
  const categoryFilter: FoodCategory = VALID_CATEGORIES.includes(rawCategory as FoodCategory)
    ? (rawCategory as FoodCategory)
    : 'all';

  const rawLevel = (searchParams.get('level') || searchParams.get('color') || 'all').toLowerCase();
  let levelFilter: StageLevel | 'all' = 'all';
  if (rawLevel === 'safe' || rawLevel === 'green' || rawLevel === 'เขียว') {
    levelFilter = 'safe';
  } else if (rawLevel === 'caution' || rawLevel === 'yellow' || rawLevel === 'เหลือง') {
    levelFilter = 'caution';
  } else if (rawLevel === 'danger' || rawLevel === 'red' || rawLevel === 'แดง') {
    levelFilter = 'danger';
  }

  // Filter setters updating URL query parameters
  const setSearchTerm = (term: string) => {
    const next = new URLSearchParams(searchParams);
    if (term.trim()) {
      next.set('keywords', term);
    } else {
      next.delete('keywords');
      next.delete('keyword');
      next.delete('q');
      next.delete('search');
    }
    setSearchParams(next, { replace: true });
  };

  const setCategoryFilter = (cat: FoodCategory) => {
    const next = new URLSearchParams(searchParams);
    if (cat !== 'all') {
      next.set('category', cat);
    } else {
      next.delete('category');
      next.delete('cat');
    }
    setSearchParams(next, { replace: true });
  };

  const setLevelFilter = (lvl: StageLevel | 'all') => {
    const next = new URLSearchParams(searchParams);
    if (lvl !== 'all') {
      next.set('level', lvl);
    } else {
      next.delete('level');
      next.delete('color');
    }
    setSearchParams(next, { replace: true });
  };

  const handleResetFilters = () => {
    const next = new URLSearchParams(searchParams);
    next.delete('keywords');
    next.delete('keyword');
    next.delete('q');
    next.delete('search');
    next.delete('category');
    next.delete('cat');
    next.delete('level');
    next.delete('color');
    setSearchParams(next, { replace: true });
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    }
  };

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<FoodCategory, number> = {
      all: foods.length,
      fruit: 0,
      vegetable: 0,
      protein: 0,
      carb: 0,
      condiment: 0,
      drink: 0,
      dish: 0,
    };
    foods.forEach((item) => {
      counts[item.category]++;
    });
    return counts;
  }, []);

  // Traffic light counts for current stage
  const levelCounts = useMemo(() => {
    let safe = 0;
    let caution = 0;
    let danger = 0;

    foods.forEach((item) => {
      const advice = getFoodAdvice(item, selectedDiseaseId, selectedStage);
      if (advice.level === 'safe') safe++;
      else if (advice.level === 'caution') caution++;
      else if (advice.level === 'danger') danger++;
    });

    return { safe, caution, danger, total: foods.length };
  }, [selectedStage, selectedDiseaseId]);

  // Filtered foods
  const filteredFoods = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return foods.filter((item) => {
      const advice = getFoodAdvice(item, selectedDiseaseId, selectedStage);
      const currentLevel = advice.level;

      // 1. Level filter
      if (levelFilter !== 'all' && currentLevel !== levelFilter) {
        return false;
      }

      // 2. Category filter
      if (categoryFilter !== 'all' && item.category !== categoryFilter) {
        return false;
      }

      // 3. Search keywords match
      if (term) {
        const matchesName = item.name.toLowerCase().includes(term);
        const matchesCategory = item.categoryName.toLowerCase().includes(term);
        const matchesTags = (advice.tags || item.tags || []).some((tag) =>
          tag.toLowerCase().includes(term)
        );
        const matchesKeywords = item.keywords.some((kw) => kw.toLowerCase().includes(term));
        const matchesReason = (advice.reason || item.reason || '').toLowerCase().includes(term);

        return matchesName || matchesCategory || matchesTags || matchesKeywords || matchesReason;
      }

      return true;
    });
  }, [searchTerm, selectedStage, categoryFilter, levelFilter, selectedDiseaseId]);

  const isFilterActive =
    searchTerm !== '' || categoryFilter !== 'all' || levelFilter !== 'all';

  return (
    <Container size="lg" py="lg" style={{ flex: 1 }}>
      <Stack gap="lg">
        {/* Hero Search Box */}
        <HeroSearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onSelectSuggestion={(val) => setSearchTerm(val)}
          diseaseId={selectedDiseaseId}
        />

        {/* 2-Column Responsive Layout */}
        <Grid gutter="md" align="flex-start">
          {/* Left: Desktop Sticky Sidebar Filters */}
          <Grid.Col span={{ base: 12, md: 4, lg: 3.5 }} visibleFrom="md">
            <Box style={{ position: 'sticky', top: 76 }}>
              <SidebarFilter
                selectedStage={selectedStage}
                selectedDiseaseId={selectedDiseaseId}
                onOpenStageModal={onOpenStageModal}
                currentLevelFilter={levelFilter}
                onSelectLevel={(lvl) => setLevelFilter(lvl)}
                currentCategory={categoryFilter}
                onSelectCategory={(cat) => setCategoryFilter(cat)}
                levelCounts={levelCounts}
                categoryCounts={categoryCounts}
                onResetFilters={handleResetFilters}
                isFilterActive={isFilterActive}
              />
            </Box>
          </Grid.Col>

          {/* Right: Food Cards & Status Bar */}
          <Grid.Col span={{ base: 12, md: 8, lg: 8.5 }}>
            <Stack gap="md">
              {/* Status Bar */}
              <Paper
                p="xs"
                radius="md"
                withBorder
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#e2e8f0',
                }}
              >
                <Group justify="space-between" align="center" wrap="wrap" gap="xs">
                  {/* Mobile Drawer Trigger */}
                  <Button
                    variant="light"
                    color="emerald"
                    size="xs"
                    radius="xl"
                    hiddenFrom="md"
                    leftSection={<IconAdjustmentsHorizontal size={14} />}
                    onClick={() => setMobileDrawerOpen(true)}
                  >
                    ตัวกรอง & เกณฑ์สี ({isFilterActive ? 'เปิดใช้' : 'ทั้งหมด'})
                  </Button>

                  <Text size="xs" fw={600} c="slate.7">
                    {isFilterActive
                      ? `พบ ${filteredFoods.length} รายการ (ในเกณฑ์ของ: ${stageMeta.name.split(' ')[0]} ${stageMeta.name.split(' ')[1] || ''})`
                      : `แสดงทั้งหมด ${filteredFoods.length} รายการ (ตามเกณฑ์ของ: ${stageMeta.name})`}
                  </Text>

                  <Group gap="xs" align="center">
                    <Tooltip label="คัดลอกลิงก์ผลลัพธ์นี้เพื่อแชร์หรือบันทึก" withArrow position="top">
                      <Button
                        variant="light"
                        color={copiedLink ? 'emerald' : 'gray'}
                        size="compact-xs"
                        radius="xl"
                        leftSection={copiedLink ? <IconCheck size={12} /> : <IconShare size={12} />}
                        onClick={handleCopyLink}
                        styles={{
                          root: {
                            fontWeight: 600,
                            fontSize: 11,
                          },
                        }}
                      >
                        {copiedLink ? 'คัดลอกลิงก์แล้ว!' : 'แชร์ลิงก์'}
                      </Button>
                    </Tooltip>

                    {isFilterActive && (
                      <Button
                        variant="subtle"
                        color="gray"
                        size="compact-xs"
                        onClick={handleResetFilters}
                      >
                        ล้างตัวกรอง
                      </Button>
                    )}
                  </Group>
                </Group>

                {/* Active Filter Badges */}
                {isFilterActive && (
                  <Group gap="xs" mt="xs" pt="xs" style={{ borderTop: '1px solid #f1f5f9' }}>
                    <Text size="11px" c="dimmed" fw={500}>
                      ตัวกรองที่เปิดอยู่:
                    </Text>

                    {levelFilter !== 'all' && (
                      <Badge
                        size="sm"
                        variant="light"
                        color={
                          levelFilter === 'safe'
                            ? 'emerald'
                            : levelFilter === 'caution'
                            ? 'amber'
                            : 'red'
                        }
                        rightSection={
                          <IconX
                            size={12}
                            style={{ cursor: 'pointer' }}
                            onClick={() => setLevelFilter('all')}
                          />
                        }
                      >
                        เกณฑ์:{' '}
                        {levelFilter === 'safe'
                          ? 'ทานได้ (เขียว)'
                          : levelFilter === 'caution'
                          ? 'คุมปริมาณ (เหลือง)'
                          : 'หลีกเลี่ยง (แดง)'}
                      </Badge>
                    )}

                    {categoryFilter !== 'all' && (
                      <Badge
                        size="sm"
                        variant="light"
                        color="dark"
                        rightSection={
                          <IconX
                            size={12}
                            style={{ cursor: 'pointer' }}
                            onClick={() => setCategoryFilter('all')}
                          />
                        }
                      >
                        หมวด:{' '}
                        {categoryFilter === 'fruit'
                          ? 'ผลไม้'
                          : categoryFilter === 'vegetable'
                          ? 'ผัก'
                          : categoryFilter === 'protein'
                          ? 'เนื้อสัตว์/โปรตีน'
                          : categoryFilter === 'carb'
                          ? 'ข้าว-แป้ง'
                          : categoryFilter === 'condiment'
                          ? 'เครื่องปรุง'
                          : 'เครื่องดื่ม/ของหวาน'}
                      </Badge>
                    )}

                    {searchTerm && (
                      <Badge
                        size="sm"
                        variant="outline"
                        color="gray"
                        rightSection={
                          <IconX
                            size={12}
                            style={{ cursor: 'pointer' }}
                            onClick={() => setSearchTerm('')}
                          />
                        }
                      >
                        ค้นหา: "{searchTerm}"
                      </Badge>
                    )}
                  </Group>
                )}
              </Paper>

              {/* Food Grid */}
              {filteredFoods.length > 0 ? (
                <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="sm">
                  {filteredFoods.map((food) => (
                    <FoodCard
                      key={food.id}
                      food={food}
                      currentStage={selectedStage}
                      currentDiseaseId={selectedDiseaseId}
                      onOpenDetail={onOpenDetail}
                    />
                  ))}
                </SimpleGrid>
              ) : (
                /* Empty Search State */
                <Paper
                  p="xl"
                  radius="xl"
                  withBorder
                  style={{
                    textAlign: 'center',
                    backgroundColor: '#ffffff',
                    borderColor: '#e2e8f0',
                  }}
                >
                  <Text size="40px" mb="xs">
                    🔍
                  </Text>
                  <Text fw={700} size="md" c="slate.8" mb={4}>
                    ไม่พบรายการอาหารที่ตรงกับคำค้นหา
                  </Text>
                  <Text size="xs" c="dimmed" mb="md" style={{ maxWidth: 400, margin: '0 auto' }}>
                    ลองพิมพ์คำค้นหาที่กว้างขึ้น เช่น "ไข่", "ผลไม้", "ปลา" หรือกดล้างตัวกรองเพื่อดูรายการทั้งหมด
                  </Text>
                  <Button
                    variant="light"
                    color="emerald"
                    size="xs"
                    radius="xl"
                    onClick={handleResetFilters}
                  >
                    ล้างตัวกรองทั้งหมด
                  </Button>
                </Paper>
              )}

              {/* Medical Warning Banner */}
              <MedicalWarningBanner diseaseId={selectedDiseaseId} />
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>

      {/* Mobile Drawer Filter */}
      <Drawer
        opened={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        title={
          <Text fw={700} size="sm" c="slate.9">
            ตัวกรอง & เกณฑ์สีอาหาร
          </Text>
        }
        padding="md"
        size="sm"
        radius="lg"
      >
        <SidebarFilter
          selectedStage={selectedStage}
          selectedDiseaseId={selectedDiseaseId}
          onOpenStageModal={() => {
            setMobileDrawerOpen(false);
            onOpenStageModal();
          }}
          currentLevelFilter={levelFilter}
          onSelectLevel={(lvl) => {
            setLevelFilter(lvl);
            setMobileDrawerOpen(false);
          }}
          currentCategory={categoryFilter}
          onSelectCategory={(cat) => {
            setCategoryFilter(cat);
            setMobileDrawerOpen(false);
          }}
          levelCounts={levelCounts}
          categoryCounts={categoryCounts}
          onResetFilters={() => {
            handleResetFilters();
            setMobileDrawerOpen(false);
          }}
          isFilterActive={isFilterActive}
        />
      </Drawer>
    </Container>
  );
};
