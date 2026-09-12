import { FoodItem, ReferenceSource, StageLevel } from '../types/food';

export interface FoodAdviceResult {
  level: StageLevel;
  advice: string;
  reason: string;
  sources: ReferenceSource[];
  tags: string[];
}

/**
 * Returns advice, risk level, reason, and medical reference sources
 * for a specific food item under a specific disease and stage context.
 *
 * Fully supports multi-disease architecture and backward-compatible fallback.
 */
export function getFoodAdvice(
  food: FoodItem,
  diseaseId: string = 'ckd',
  stageId?: string
): FoodAdviceResult {
  const profile = food.diseases?.[diseaseId];

  if (profile) {
    // 1. Determine stage advice
    let stageAdvice = stageId ? profile.stages[stageId] : undefined;
    if (!stageAdvice) {
      stageAdvice = profile.stages.default;
    }
    if (!stageAdvice) {
      // Pick first available stage advice if neither specific stage nor default exists
      const stagesList = Object.values(profile.stages).filter(Boolean);
      if (stagesList.length > 0) {
        stageAdvice = stagesList[0];
      }
    }

    const level: StageLevel = stageAdvice?.level || 'caution';
    const advice: string = stageAdvice?.advice || 'ควรปรึกษาแพทย์หรือผู้เชี่ยวชาญก่อนรับประทาน';
    const reason: string = profile.reason || food.reason || '';
    let sources: ReferenceSource[] = [];
    if (profile.sources && profile.sources.length > 0) {
      sources = profile.sources;
    } else if (food.sources && food.sources.length > 0) {
      sources = food.sources;
    } else if (food.source) {
      sources = [food.source];
    }

    const tags: string[] = profile.tags && profile.tags.length > 0 ? profile.tags : (food.tags || []);

    return {
      level,
      advice,
      reason,
      sources,
      tags,
    };
  }

  // 2. Backward compatibility fallback for legacy flat fields
  if (food.stages) {
    const legacyStageAdvice = stageId
      ? (food.stages as Record<string, { level: StageLevel; advice: string }>)[stageId]
      : Object.values(food.stages)[0];

    const sources: ReferenceSource[] =
      (food.sources && food.sources.length > 0)
        ? food.sources
        : (food.source ? [food.source] : []);

    return {
      level: legacyStageAdvice?.level || 'caution',
      advice: legacyStageAdvice?.advice || food.advice || 'คุมปริมาณและทานแต่พอดี',
      reason: food.reason || '',
      sources,
      tags: food.tags || [],
    };
  }

  // 3. Fallback when no information exists for the requested disease
  const fallbackSources: ReferenceSource[] =
    (food.sources && food.sources.length > 0)
      ? food.sources
      : (food.source ? [food.source] : []);

  return {
    level: 'caution',
    advice: 'ยังไม่มีข้อมูลจำเพาะสำหรับโรคนี้ ควรปรึกษาแพทย์ประจำตัว',
    reason: 'อยู่ระหว่างรวบรวมข้อมูลทางการแพทย์ที่ผ่านการรับรอง',
    sources: fallbackSources,
    tags: food.tags || [],
  };
}
