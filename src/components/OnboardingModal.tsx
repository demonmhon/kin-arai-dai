import React from 'react';
import { SelectionDialog } from './SelectionDialog';
import { OnboardingReason } from '../config/version';

export interface OnboardingModalProps {
  opened: boolean;
  onClose: () => void;
  selectedDiseaseId: string;
  selectedStage: string;
  onConfirm: (diseaseId: string, stageId: string) => void;
  onboardingReason?: OnboardingReason;
}

/**
 * First-visit & new version onboarding dialog.
 * Reuses SelectionDialog in onboarding mode with neutral wording across all health conditions.
 */
export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  opened,
  onClose,
  selectedDiseaseId,
  selectedStage,
  onConfirm,
  onboardingReason = 'first_visit',
}) => {
  return (
    <SelectionDialog
      opened={opened}
      onClose={onClose}
      initialStep={1}
      selectedDiseaseId={selectedDiseaseId}
      selectedStage={selectedStage}
      isOnboarding={true}
      onboardingReason={onboardingReason}
      onConfirm={onConfirm}
    />
  );
};
