import React, { useState, useMemo } from 'react';
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
} from '@mantine/core';
import { IconAdjustmentsHorizontal, IconX } from '@tabler/icons-react';
import { Navbar } from './components/Navbar';
import { HeroSearch } from './components/HeroSearch';
import { SidebarFilter } from './components/SidebarFilter';
import { KidneyStageModal } from './components/KidneyStageModal';
import { FoodCard } from './components/FoodCard';
import { FoodDetailModal } from './components/FoodDetailModal';
import { DiseaseModal } from './components/DiseaseModal';
import { EducationalModal } from './components/EducationalModal';
import { MedicalWarningBanner } from './components/MedicalWarningBanner';
import { Footer } from './components/Footer';

import { FoodItem, FoodCategory, KidneyStageId, StageLevel } from './types/food';
import { foods } from './data/foods';
import { kidneyStages } from './data/kidneyStages';
import { diseases } from './data/diseases';

export const App: React.FC = () => {
  // State
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedStage, setSelectedStage] = useState<KidneyStageId>('stage4_5_pre');
  const [categoryFilter, setCategoryFilter] = useState<FoodCategory>('all');
  const [levelFilter, setLevelFilter] = useState<StageLevel | 'all'>('all');
  const [selectedDiseaseId, setSelectedDiseaseId] = useState<string>('ckd');

  // Modal & Drawer states
  const [detailFood, setDetailFood] = useState<FoodItem | null>(null);
  const [diseaseModalOpen, setDiseaseModalOpen] = useState<boolean>(false);
  const [stageModalOpen, setStageModalOpen] = useState<boolean>(false);
  const [guideModalOpen, setGuideModalOpen] = useState<boolean>(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);

  // Active Disease Name
  const currentDisease = diseases.find((d) => d.id === selectedDiseaseId) || diseases[0];

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
    };
    foods.forEach((item) => {
      counts[item.category]++;
    });
    return counts;
  }, []);

  // Counts for traffic lights based on the current stage
  const levelCounts = useMemo(() => {
    let safe = 0;
    let caution = 0;
    let danger = 0;

    foods.forEach((item) => {
      const stageAdvice = item.stages[selectedStage] || { level: 'caution' };
      if (stageAdvice.level === 'safe') safe++;
      else if (stageAdvice.level === 'caution') caution++;
      else if (stageAdvice.level === 'danger') danger++;
    });

    return { safe, caution, danger, total: foods.length };
  }, [selectedStage]);

  // Filtered Foods
  const filteredFoods = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return foods.filter((item) => {
      const stageAdvice = item.stages[selectedStage] || {
        level: 'caution',
        advice: item.advice,
      };
      const currentLevel = stageAdvice.level;

      // 1. Level Filter
      if (levelFilter !== 'all' && currentLevel !== levelFilter) {
        return false;
      }

      // 2. Category Filter
      if (categoryFilter !== 'all' && item.category !== categoryFilter) {
        return false;
      }

      // 3. Search Term Matching
      if (term) {
        const matchName = item.name.toLowerCase().includes(term);
        const matchCat = item.categoryName.toLowerCase().includes(term);
        const matchKeywords = item.keywords.some((k) => k.toLowerCase().includes(term));
        const matchTags = item.tags.some((t) => t.toLowerCase().includes(term));

        let matchLevelWord = false;
        if (
          term.includes('เขียว') ||
          term.includes('ปลอดภัย') ||
          term.includes('กินได้') ||
          term.includes('ทานได้')
        ) {
          matchLevelWord = currentLevel === 'safe';
        } else if (
          term.includes('เหลือง') ||
          term.includes('ระวัง') ||
          term.includes('คุม')
        ) {
          matchLevelWord = currentLevel === 'caution';
        } else if (
          term.includes('แดง') ||
          term.includes('ห้าม') ||
          term.includes('เลี่ยง') ||
          term.includes('อันตราย')
        ) {
          matchLevelWord = currentLevel === 'danger';
        }

        return matchName || matchCat || matchKeywords || matchTags || matchLevelWord;
      }

      return true;
    });
  }, [searchTerm, selectedStage, categoryFilter, levelFilter]);

  const handleLevelFilterSelect = (level: StageLevel | 'all') => {
    setLevelFilter(level);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setCategoryFilter('all');
    setLevelFilter('all');
  };

  const isFilterActive =
    searchTerm !== '' || categoryFilter !== 'all' || levelFilter !== 'all';

  return (
    <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navigation */}
      <Navbar
        currentDiseaseName={currentDisease.name}
        currentStageBadge={kidneyStages[selectedStage].badge}
        onOpenDiseaseModal={() => setDiseaseModalOpen(true)}
        onOpenStageModal={() => setStageModalOpen(true)}
        onOpenGuideModal={() => setGuideModalOpen(true)}
      />

      {/* Main Content Area */}
      <Container size="lg" py="lg" style={{ flex: 1 }}>
        <Stack gap="lg">
          {/* Hero Banner with Search */}
          <HeroSearch
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onSelectSuggestion={(val) => setSearchTerm(val)}
          />

          {/* Ecommerce Style 2-Column Layout */}
          <Grid gutter="md" align="flex-start">
            {/* Left Column: Sidebar Filters (Desktop) */}
            <Grid.Col span={{ base: 12, md: 4, lg: 3.5 }} visibleFrom="md">
              <Box style={{ position: 'sticky', top: 76 }}>
                <SidebarFilter
                  selectedStage={selectedStage}
                  onOpenStageModal={() => setStageModalOpen(true)}
                  currentLevelFilter={levelFilter}
                  onSelectLevel={handleLevelFilterSelect}
                  currentCategory={categoryFilter}
                  onSelectCategory={(cat) => setCategoryFilter(cat)}
                  levelCounts={levelCounts}
                  categoryCounts={categoryCounts}
                  onResetFilters={handleResetFilters}
                  isFilterActive={isFilterActive}
                />
              </Box>
            </Grid.Col>

            {/* Right Column: Main Content & Food Grid */}
            <Grid.Col span={{ base: 12, md: 8, lg: 8.5 }}>
              <Stack gap="md">
                {/* Status Bar / Mobile Filter Button */}
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
                    {/* Mobile Filter Button (Hidden on md and up) */}
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
                        ? `พบ ${filteredFoods.length} รายการ (ในเกณฑ์ของ: ${kidneyStages[selectedStage].name.split(' ')[0]} ${kidneyStages[selectedStage].name.split(' ')[1] || ''})`
                        : `แสดงทั้งหมด ${filteredFoods.length} รายการ (ตามเกณฑ์ของ: ${kidneyStages[selectedStage].name})`}
                    </Text>

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
                            ? 'เขียว (ทานได้)'
                            : levelFilter === 'caution'
                            ? 'เหลือง (คุมปริมาณ)'
                            : 'แดง (หลีกเลี่ยง)'}
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
                        onOpenDetail={(item) => setDetailFood(item)}
                      />
                    ))}
                  </SimpleGrid>
                ) : (
                  /* Empty State */
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
                      ไม่พบข้อมูลอาหารที่คุณค้นหา
                    </Text>
                    <Text size="xs" c="dimmed" style={{ maxWidth: 400, margin: '0 auto' }} mb="md">
                      ลองคลิกเลือก "ทั้งหมดทุกเกณฑ์" ในแถบด้านข้าง หรือค้นหาด้วยคำกว้างๆ เช่น "ผลไม้", "ไข่ขาว", "ผัก", "เครื่องปรุง"
                    </Text>
                    <Button
                      variant="filled"
                      color="emerald"
                      size="xs"
                      radius="xl"
                      onClick={handleResetFilters}
                    >
                      ดูอาหารทั้งหมด
                    </Button>
                  </Paper>
                )}

                {/* Important Medical Warning Banner */}
                <MedicalWarningBanner />
              </Stack>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>

      {/* Footer */}
      <Footer />

      {/* Mobile Filters Drawer */}
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
          onOpenStageModal={() => {
            setMobileDrawerOpen(false);
            setStageModalOpen(true);
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

      {/* Detail Modal */}
      <FoodDetailModal
        food={detailFood}
        currentStage={selectedStage}
        opened={!!detailFood}
        onClose={() => setDetailFood(null)}
      />

      {/* Disease Selection Modal */}
      <DiseaseModal
        opened={diseaseModalOpen}
        onClose={() => setDiseaseModalOpen(false)}
        selectedDiseaseId={selectedDiseaseId}
        onSelectDisease={setSelectedDiseaseId}
      />

      {/* Educational Guide Modal */}
      <EducationalModal
        opened={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
      />

      {/* Kidney Stage Selection Modal */}
      <KidneyStageModal
        opened={stageModalOpen}
        onClose={() => setStageModalOpen(false)}
        selectedStage={selectedStage}
        onSelectStage={(stg) => {
          setSelectedStage(stg);
        }}
      />
    </Box>
  );
};

export default App;
