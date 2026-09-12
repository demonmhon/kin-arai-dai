import React, { useState, useEffect, useCallback } from 'react';
import { Box } from '@mantine/core';
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
import { KidneyStageModal } from './components/KidneyStageModal';
import { FoodDetailModal } from './components/FoodDetailModal';
import { DiseaseModal } from './components/DiseaseModal';
import { EducationalModal } from './components/EducationalModal';
import { OnboardingModal } from './components/OnboardingModal';

import { FoodItem, KidneyStageId } from './types/food';
import { kidneyStages } from './data/kidneyStages';
import { diseases } from './data/diseases';
import { slugToKidneyStage, STAGE_TO_SLUG } from './utils/url';

const STORAGE_KEYS = {
  DISEASE: 'kin_selected_disease',
  STAGE: 'kin_selected_stage',
  HAS_INITIALIZED: 'kin_has_profile',
};

// Route wrapper for /:stageSlug
interface StageCatalogRouteProps {
  onOpenStageModal: () => void;
  onOpenDetail: (food: FoodItem) => void;
  onStageActive: (stage: KidneyStageId) => void;
}

const StageCatalogRoute: React.FC<StageCatalogRouteProps> = ({
  onOpenStageModal,
  onOpenDetail,
  onStageActive,
}) => {
  const { stageSlug } = useParams<{ stageSlug: string }>();
  const matchedStage = stageSlug ? slugToKidneyStage(stageSlug) : null;

  useEffect(() => {
    if (matchedStage) {
      onStageActive(matchedStage);
    }
  }, [matchedStage, onStageActive]);

  if (!matchedStage) {
    return <Navigate to="/" replace />;
  }

  return (
    <CatalogPage
      selectedStage={matchedStage}
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

  const [selectedStage, setSelectedStage] = useState<KidneyStageId>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.STAGE) as KidneyStageId;
      if (saved && kidneyStages[saved]) return saved;
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
  const [diseaseModalOpen, setDiseaseModalOpen] = useState<boolean>(false);
  const [stageModalOpen, setStageModalOpen] = useState<boolean>(false);
  const [guideModalOpen, setGuideModalOpen] = useState<boolean>(false);

  // Callback to sync active stage from URL param
  const handleStageActive = useCallback((stage: KidneyStageId) => {
    setSelectedStage(stage);
    setSelectedDiseaseId('ckd');
    try {
      localStorage.setItem(STORAGE_KEYS.STAGE, stage);
      localStorage.setItem(STORAGE_KEYS.DISEASE, 'ckd');
      localStorage.setItem(STORAGE_KEYS.HAS_INITIALIZED, 'true');
    } catch {}
  }, []);

  const handleSelectStage = (stg: KidneyStageId) => {
    handleStageActive(stg);
    navigate(`/${STAGE_TO_SLUG[stg]}${location.search}`);
  };

  // Determine current active disease metadata
  const currentDisease = diseases.find((d) => d.id === selectedDiseaseId) || diseases[0];

  // Active view check for Navbar layout
  const isLandingView = location.pathname === '/' || location.pathname === '/references';

  return (
    <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navbar */}
      <Navbar
        currentDiseaseName={currentDisease.name}
        currentStageBadge={!isLandingView ? kidneyStages[selectedStage].badge : undefined}
        isLandingView={isLandingView}
        onOpenDiseaseModal={() => setDiseaseModalOpen(true)}
        onOpenStageModal={() => setStageModalOpen(true)}
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
                onSelectCkdStage={(stage) => handleSelectStage(stage)}
                onOpenStageModal={() => setStageModalOpen(true)}
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
                onNavigateCatalog={() => handleSelectStage(selectedStage)}
              />
            }
          />

          {/* Disease Stage Permalinks e.g. /ckd-stage-1, /ckd-stage-3, /ckd-stage-4-5, /ckd-dialysis */}
          <Route
            path="/:stageSlug"
            element={
              <StageCatalogRoute
                onOpenStageModal={() => setStageModalOpen(true)}
                onOpenDetail={(food) => setDetailFood(food)}
                onStageActive={handleStageActive}
              />
            }
          />

          {/* Wildcard Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>

      {/* Footer */}
      <Footer />

      {/* Food Detail Modal */}
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
        onSelectDisease={(id) => {
          setSelectedDiseaseId(id);
          setDiseaseModalOpen(false);
          if (id === 'ckd') {
            navigate(`/${STAGE_TO_SLUG[selectedStage]}${location.search}`);
          }
        }}
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
          setStageModalOpen(false);
          handleSelectStage(stg);
        }}
      />

      {/* First-Visit Onboarding Modal */}
      <OnboardingModal
        opened={onboardingOpen}
        onClose={() => setOnboardingOpen(false)}
        currentStage={selectedStage}
        onConfirmStage={(stg) => {
          setOnboardingOpen(false);
          handleSelectStage(stg);
        }}
      />
    </Box>
  );
};

export default App;
