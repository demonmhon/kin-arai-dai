import { KidneyStageId, GoutStageId, CholecystectomyStageId } from '../types/food';
import { kidneyStages } from '../data/kidneyStages';
import { goutStages } from '../data/goutStages';
import { cholecystectomyStages } from '../data/cholecystectomyStages';

export interface GenericStageMeta {
  id: string;
  name: string;
  badge: string;
  color: string;
  summary: string;
  focus: string;
  extraInfo?: string;
}

/**
 * Returns unified stage metadata for either CKD, Gout, or Cholecystectomy (or future conditions)
 */
export function getStageMeta(diseaseId: string = 'ckd', stageId?: string): GenericStageMeta {
  if (diseaseId === 'gout') {
    const validStage = (stageId && goutStages[stageId as GoutStageId])
      ? goutStages[stageId as GoutStageId]
      : goutStages.gout_remission;

    return {
      id: validStage.id,
      name: validStage.name,
      badge: validStage.badge,
      color: validStage.color,
      summary: validStage.summary,
      focus: validStage.focus,
    };
  }

  if (diseaseId === 'cholecystectomy') {
    const validStage = (stageId && cholecystectomyStages[stageId as CholecystectomyStageId])
      ? cholecystectomyStages[stageId as CholecystectomyStageId]
      : cholecystectomyStages.chole_maintenance;

    return {
      id: validStage.id,
      name: validStage.name,
      badge: validStage.badge,
      color: validStage.color,
      summary: validStage.summary,
      focus: validStage.focus,
    };
  }

  // Default to CKD
  const validStage = (stageId && kidneyStages[stageId as KidneyStageId])
    ? kidneyStages[stageId as KidneyStageId]
    : kidneyStages.stage4_5_pre;

  return {
    id: validStage.id,
    name: validStage.name,
    badge: validStage.badge,
    color: validStage.color,
    summary: validStage.summary,
    focus: validStage.focus,
    extraInfo: validStage.egfr,
  };
}

/**
 * Returns default stage ID for a given disease
 */
export function getDefaultStageForDisease(diseaseId: string): string {
  if (diseaseId === 'gout') {
    return 'gout_remission';
  }
  if (diseaseId === 'cholecystectomy') {
    return 'chole_maintenance';
  }
  return 'stage4_5_pre';
}
