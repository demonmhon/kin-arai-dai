import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Container,
  Card,
  Badge,
  Title,
  Text,
  ThemeIcon,
  Button,
  Group,
} from '@mantine/core';
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
  Navigate,
} from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { ReferencesPage } from './components/ReferencesPage';
import { CatalogPage } from './components/CatalogPage';
import { FoodDetailModal } from './components/FoodDetailModal';
import { SelectionDialog } from './components/SelectionDialog';
import { EducationalModal } from './components/EducationalModal';
import { OnboardingModal } from './components/OnboardingModal';

import { FoodItem, KidneyStageId } from './types/food';
import { diseases } from './data/diseases';
import {
  slugToDiseaseAndStage,
  STAGE_TO_SLUG,
  slugToConditionId,
  resolveConditionStage,
} from './utils/url';
import { getStageMeta } from './utils/diseaseHelper';
import { getDiseaseLucideIcon } from './utils/diseaseIcons';

const STORAGE_KEYS = {
  DISEASE: 'kin_selected_disease',
  STAGE: 'kin_selected_stage',
  HAS_INITIALIZED: 'kin_has_profile',
};

interface StageCatalogRouteProps {
  selectedDiseaseId: string;
  selectedStage: string;
  onOpenStageModal: () => void;
  onOpenDetail: (food: FoodItem) => void;
  onRouteActive: (diseaseId: string, stageId: string) => void;
}

const StageCatalogRoute: React.FC<StageCatalogRouteProps> = ({
  onOpenStageModal,
  onOpenDetail,
  onRouteActive,
}) => {
  const { stageSlug } = useParams<{ stageSlug: string }>();
  const matchedRoute = stageSlug ? slugToDiseaseAndStage(stageSlug) : null;

  useEffect(() => {
    if (matchedRoute) {
      onRouteActive(matchedRoute.diseaseId, matchedRoute.stageId);
    }
  }, [matchedRoute?.diseaseId, matchedRoute?.stageId, onRouteActive]);

  if (!matchedRoute) {
    return <Navigate to="/" replace />;
  }

  return (
    <CatalogPage
      selectedStage={matchedRoute.stageId}
      selectedDiseaseId={matchedRoute.diseaseId}
      onOpenStageModal={onOpenStageModal}
      onOpenDetail={onOpenDetail}
    />
  );
};

interface ConditionCatalogRouteProps {
  onOpenStageModal: () => void;
  onOpenDetail: (food: FoodItem) => void;
  onRouteActive: (diseaseId: string, stageId: string) => void;
  onOpenSelectionDialog: (diseaseId?: string) => void;
}

const ConditionCatalogRoute: React.FC<ConditionCatalogRouteProps> = ({
  onOpenStageModal,
  onOpenDetail,
  onRouteActive,
  onOpenSelectionDialog,
}) => {
  const { conditionSlug, stageSlug } = useParams<{ conditionSlug: string; stageSlug?: string }>();
  const conditionId = conditionSlug ? slugToConditionId(conditionSlug) : null;
  const stageId = conditionId ? resolveConditionStage(conditionId, stageSlug) : null;

  const matchedDisease = conditionId ? diseases.find((d) => d.id === conditionId) : null;

  useEffect(() => {
    if (conditionId && stageId && matchedDisease?.status === 'active') {
      onRouteActive(conditionId, stageId);
    }
  }, [conditionId, stageId, matchedDisease?.status, onRouteActive]);

  if (!conditionId || !matchedDisease) {
    return <Navigate to="/" replace />;
  }

  // If condition is upcoming (e.g. diabetes, hypertension, gerd)
  if (matchedDisease.status !== 'active') {
    return (
      <Container size="md" py="xl" my="xl">
        <Card p="xl" radius="xl" withBorder style={{ backgroundColor: '#ffffff', textAlign: 'center' }}>
          <ThemeIcon size={64} radius="xl" color="gray" variant="light" mx="auto" mb="md">
            {getDiseaseLucideIcon(conditionId, 32)}
          </ThemeIcon>
          <Badge size="md" color="gray" variant="light" mb="xs">
            {matchedDisease.badgeText}
          </Badge>
          <Title order={2} fz={{ base: 22, sm: 26 }} fw={700} c="slate.9" mb="xs">
            {matchedDisease.name}
          </Title>
          <Text size="sm" c="dimmed" style={{ maxWidth: 520, margin: '0 auto' }} mb="lg" lh={1.6}>
            {matchedDisease.summary}
            <br />
            ทีมงานและนักกำหนดอาหารกำลังจัดทำและตรวจสอบความถูกต้องของข้อมูลอ้างอิงทางการแพทย์ เพื่อเปิดให้บริการในเร็วๆ นี้
          </Text>
          <Group justify="center" gap="sm">
            <Button variant="default" radius="xl" onClick={() => onOpenSelectionDialog()}>
              ดูภาวะสุขภาพที่เปิดให้บริการแล้ว
            </Button>
          </Group>
        </Card>
      </Container>
    );
  }

  return (
    <CatalogPage
      selectedStage={stageId || 'stage4_5_pre'}
      selectedDiseaseId={conditionId}
      onOpenStageModal={onOpenStageModal}
      onOpenDetail={onOpenDetail}
    />
  );
};

export const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Selected disease and stage state
  const [selectedDiseaseId, setSelectedDiseaseId] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.DISEASE) || 'ckd';
    } catch {
      return 'ckd';
    }
  });

  const [selectedStage, setSelectedStage] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.STAGE);
      if (saved) return saved;
    } catch {}
    return 'stage4_5_pre';
  });

  // Modals state
  const [onboardingOpen, setOnboardingOpen] = useState<boolean>(() => {
    // Only show onboarding on root / if user has never initialized a profile
    if (typeof window !== 'undefined' && window.location.pathname !== '/') {
      return false;
    }
    try {
      const hasProfile = localStorage.getItem(STORAGE_KEYS.HAS_INITIALIZED);
      return !hasProfile;
    } catch {
      return false;
    }
  });

  const [detailFood, setDetailFood] = useState<FoodItem | null>(null);
  const [guideModalOpen, setGuideModalOpen] = useState<boolean>(false);

  // Shared disease + stage selection dialog (step 1: disease, step 2: stage), used by both
  // the landing page CTA and the global navbar's disease/stage pills.
  const [selectionDialogOpen, setSelectionDialogOpen] = useState<boolean>(false);
  const [selectionDialogStep, setSelectionDialogStep] = useState<1 | 2>(1);
  const [selectionDialogDiseaseId, setSelectionDialogDiseaseId] = useState<string | undefined>(undefined);

  const openDiseaseSelection = useCallback((diseaseId?: string) => {
    setSelectionDialogStep(1);
    setSelectionDialogDiseaseId(diseaseId);
    setSelectionDialogOpen(true);
  }, []);

  const openStageSelection = useCallback(() => {
    setSelectionDialogStep(2);
    setSelectionDialogDiseaseId(undefined);
    setSelectionDialogOpen(true);
  }, []);

  // Callback to sync active disease and stage from URL permalink
  const handleRouteActive = useCallback((diseaseId: string, stageId: string) => {
    setSelectedDiseaseId(diseaseId);
    setSelectedStage(stageId);
    try {
      localStorage.setItem(STORAGE_KEYS.DISEASE, diseaseId);
      localStorage.setItem(STORAGE_KEYS.STAGE, stageId);
      localStorage.setItem(STORAGE_KEYS.HAS_INITIALIZED, 'true');
    } catch {}
  }, []);

  const handleSelectStage = (diseaseId: string, stg: string) => {
    handleRouteActive(diseaseId, stg);
    const slug = STAGE_TO_SLUG[stg] || 'ckd-stage-1';
    navigate(`/${slug}${location.search}`);
  };

  // Determine current active disease metadata
  const currentDisease = diseases.find((d) => d.id === selectedDiseaseId) || diseases[0];
  const currentStageMeta = getStageMeta(selectedDiseaseId, selectedStage);

  // Active view check for Navbar layout
  const isLandingView = location.pathname === '/' || location.pathname === '/references';

  return (
    <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navbar */}
      <Navbar
        currentDiseaseName={currentDisease.name}
        currentStageBadge={!isLandingView ? currentStageMeta.badge : undefined}
        isLandingView={isLandingView}
        onOpenDiseaseModal={openDiseaseSelection}
        onOpenStageModal={openStageSelection}
        onOpenGuideModal={() => setGuideModalOpen(true)}
        onGoHome={() => navigate('/')}
      />

      {/* Main Routed Content Area */}
      <Box style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Routes>
          {/* Landing / Intention Page */}
          <Route
            path="/"
            element={
              <LandingPage
                onSelectCkdStage={(stage) => handleSelectStage('ckd', stage)}
                onOpenSelectionDialog={openDiseaseSelection}
                onOpenGuideModal={() => setGuideModalOpen(true)}
                onNavigateReferences={() => navigate('/references')}
              />
            }
          />

          {/* Medical References Page */}
          <Route
            path="/references"
            element={
              <ReferencesPage
                onNavigateHome={() => navigate('/')}
                onNavigateCatalog={() => handleSelectStage(selectedDiseaseId, selectedStage)}
              />
            }
          />

          {/* Canonical Condition Routes e.g. /conditions/cholecystectomy, /conditions/gout, /conditions/ckd */}
          <Route
            path="/conditions/:conditionSlug"
            element={
              <ConditionCatalogRoute
                onOpenStageModal={openStageSelection}
                onOpenDetail={(food) => setDetailFood(food)}
                onRouteActive={handleRouteActive}
                onOpenSelectionDialog={openDiseaseSelection}
              />
            }
          />
          <Route
            path="/conditions/:conditionSlug/:stageSlug"
            element={
              <ConditionCatalogRoute
                onOpenStageModal={openStageSelection}
                onOpenDetail={(food) => setDetailFood(food)}
                onRouteActive={handleRouteActive}
                onOpenSelectionDialog={openDiseaseSelection}
              />
            }
          />

          {/* Disease Stage Permalinks e.g. /ckd-stage-1, /gout-remission, /gout-flare */}
          <Route
            path="/:stageSlug"
            element={
              <StageCatalogRoute
                selectedDiseaseId={selectedDiseaseId}
                selectedStage={selectedStage}
                onOpenStageModal={openStageSelection}
                onOpenDetail={(food) => setDetailFood(food)}
                onRouteActive={handleRouteActive}
              />
            }
          />

          {/* Wildcard Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>

      {/* Footer */}
      <Footer onOpenGuideModal={() => setGuideModalOpen(true)} />

      {/* Food Detail Modal */}
      <FoodDetailModal
        food={detailFood}
        currentStage={selectedStage}
        currentDiseaseId={selectedDiseaseId}
        opened={!!detailFood}
        onClose={() => setDetailFood(null)}
      />

      {/* Shared Disease + Stage Selection Dialog (Step 1: Disease -> Step 2: Stage) */}
      <SelectionDialog
        opened={selectionDialogOpen}
        onClose={() => setSelectionDialogOpen(false)}
        initialStep={selectionDialogStep}
        initialDiseaseId={selectionDialogDiseaseId}
        selectedDiseaseId={selectedDiseaseId}
        selectedStage={selectedStage}
        onConfirm={(diseaseId, stageId) => handleSelectStage(diseaseId, stageId)}
      />

      {/* Educational Guide Modal */}
      <EducationalModal
        opened={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
      />

      {/* First-Visit Onboarding Modal (Kidney Focus) */}
      <OnboardingModal
        opened={onboardingOpen}
        onClose={() => setOnboardingOpen(false)}
        currentStage={(selectedStage as KidneyStageId) || 'stage4_5_pre'}
        onConfirmStage={(stg) => {
          setOnboardingOpen(false);
          handleSelectStage('ckd', stg);
        }}
      />
    </Box>
  );
};

export default App;
