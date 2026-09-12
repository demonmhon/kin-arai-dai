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
import { GoutStageModal } from './components/GoutStageModal';
import { FoodDetailModal } from './components/FoodDetailModal';
import { DiseaseModal } from './components/DiseaseModal';
import { EducationalModal } from './components/EducationalModal';
import { OnboardingModal } from './components/OnboardingModal';

import { FoodItem, KidneyStageId, GoutStageId } from './types/food';
import { diseases } from './data/diseases';
import { slugToDiseaseAndStage, STAGE_TO_SLUG } from './utils/url';
import { getStageMeta } from './utils/diseaseHelper';

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
  const [diseaseModalOpen, setDiseaseModalOpen] = useState<boolean>(false);
  const [stageModalOpen, setStageModalOpen] = useState<boolean>(false);
  const [guideModalOpen, setGuideModalOpen] = useState<boolean>(false);

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
                onSelectCkdStage={(stage) => handleSelectStage('ckd', stage)}
                onSelectGoutStage={(stage) => handleSelectStage('gout', stage)}
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
                onNavigateCatalog={() => handleSelectStage(selectedDiseaseId, selectedStage)}
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
                onOpenStageModal={() => setStageModalOpen(true)}
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
      <Footer />

      {/* Food Detail Modal */}
      <FoodDetailModal
        food={detailFood}
        currentStage={selectedStage}
        currentDiseaseId={selectedDiseaseId}
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
            const nextStage = selectedStage.startsWith('stage') || selectedStage === 'dialysis' ? selectedStage : 'stage4_5_pre';
            handleSelectStage('ckd', nextStage);
          } else if (id === 'gout') {
            const nextStage = selectedStage.startsWith('gout') ? selectedStage : 'gout_remission';
            handleSelectStage('gout', nextStage);
          }
        }}
      />

      {/* Educational Guide Modal */}
      <EducationalModal
        opened={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
      />

      {/* Kidney Stage Selection Modal */}
      {selectedDiseaseId === 'ckd' && (
        <KidneyStageModal
          opened={stageModalOpen}
          onClose={() => setStageModalOpen(false)}
          selectedStage={(selectedStage as KidneyStageId) || 'stage4_5_pre'}
          onSelectStage={(stg) => {
            setStageModalOpen(false);
            handleSelectStage('ckd', stg);
          }}
        />
      )}

      {/* Gout Condition Selection Modal */}
      {selectedDiseaseId === 'gout' && (
        <GoutStageModal
          opened={stageModalOpen}
          onClose={() => setStageModalOpen(false)}
          selectedStage={(selectedStage as GoutStageId) || 'gout_remission'}
          onSelectStage={(stg) => {
            setStageModalOpen(false);
            handleSelectStage('gout', stg);
          }}
        />
      )}

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
