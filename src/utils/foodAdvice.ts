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

  // 2. Specialized evaluation for Cholecystectomy (Post-Gallbladder Removal)
  if (diseaseId === 'cholecystectomy') {
    const isRecovery = stageId === 'chole_recovery';
    const isHighFat = ((): boolean => {
      const highFatIds = new Set([
        'khao-kha-mu',
        'fried-chicken',
        'pad-krapow-crispy-pork',
        'pad-see-ew',
        'hamburger',
        'kuay-tiew-nam-tok',
        'processed-meat',
        'organ-meat',
        'egg-yolk',
        'beer',
        'cow-milk',
        'dark-cola',
        'thai-tea',
      ]);
      if (highFatIds.has(food.id)) return true;
      const text = `${food.name} ${food.category} ${(food.tags || []).join(' ')} ${(food.keywords || []).join(' ')}`.toLowerCase();
      return (
        text.includes('ทอด') ||
        text.includes('มันหมู') ||
        text.includes('ขาหมู') ||
        text.includes('หมูกรอบ') ||
        text.includes('ไขมันสูง') ||
        text.includes('กะทิ') ||
        text.includes('เครื่องใน')
      );
    })();

    const isLowFat = ['fruit', 'vegetable', 'carb'].includes(food.category) ||
      ['chicken-breast', 'egg-white', 'white-fish', 'water', 'soy-milk-unsweetened', 'green-tea-matcha'].includes(food.id);

    const choleSources: ReferenceSource[] = [
      {
        name: 'Mayo Clinic: Cholecystectomy diet (Gallbladder removal)',
        url: 'https://www.mayoclinic.org/tests-procedures/cholecystectomy/expert-answers/gallbladder-removal-diet/faq-20057813',
      },
      {
        name: 'โรงพยาบาลศิริราช ปิยมหาราชการุณย์: โภชนาการหลังผ่าตัดถุงน้ำดี',
        url: 'https://www.siphhospital.com/',
      },
    ];

    if (isHighFat) {
      if (isRecovery) {
        return {
          level: 'danger',
          advice: 'ช่วงพักฟื้นหรือมีอาการท้องเสียง่าย ควรงดของทอดและอาหารไขมันสูง น้ำดียังไม่พร้อมย่อยไขมันปริมาณมาก',
          reason: 'ไม่มีถุงน้ำดีกักเก็บน้ำดีเข้มข้น ไขมันปริมาณมากในมื้อเดียวที่ย่อยไม่หมดจะกระตุ้นให้ลำไส้บีบตัวและเกิดอาการท้องเสียรุนแรง (Bile acid diarrhea)',
          sources: choleSources,
          tags: ['ไขมันสูง', 'ย่อยยาก', ...(food.tags || [])],
        };
      }
      return {
        level: 'caution',
        advice: 'ทานได้ปริมาณน้อย แนะนำแบ่งการกินอาหารไขมันเป็นมื้อเล็กๆ หลายมื้อ ดีกว่ากินไขมันก้อนใหญ่ทีเดียว',
        reason: 'หลังผ่าตัดถุงน้ำดี น้ำดีจะไหลรินเรื่อยๆ การกินของมันมื้อใหญ่จะทำให้แน่นท้องและท้องเสียได้ เป็นเรื่องความทนทานเฉพาะบุคคล (Individual tolerance)',
        sources: choleSources,
        tags: ['ควรแบ่งมื้อ', 'คุมปริมาณไขมัน', ...(food.tags || [])],
      };
    }

    if (isLowFat) {
      return {
        level: 'safe',
        advice: 'ทานได้ตามปกติ ไขมันต่ำ ย่อยง่าย ปลอดภัยสำหรับผู้ผ่าตัดถุงน้ำดี',
        reason: 'อาหารมีปริมาณไขมันต่ำ ร่างกายไม่ต้องอาศัยน้ำดีเข้มข้นในการย่อย ไม่กระตุ้นอาการแน่นท้องหรือขับถ่ายเหลว',
        sources: choleSources,
        tags: ['ไขมันต่ำ', 'ย่อยง่าย', ...(food.tags || [])],
      };
    }

    return {
      level: isRecovery ? 'caution' : 'safe',
      advice: isRecovery
        ? 'ทานได้แต่พอดี ทานอาหารอ่อนย่อยง่าย และสังเกตการตอบสนองของระบบย่อยอาหาร'
        : 'ทานได้ตามปกติ กระจายการทานเป็นมื้อเล็กๆ หลายมื้อ และสังเกตการตอบสนองของร่างกาย (Individual Tolerance)',
      reason: 'ผู้ตัดถุงน้ำดีส่วนใหญ่กลับมาทานอาหารได้ปกติภายในไม่กี่เดือน ให้สังเกตความทนต่ออาหารแต่ละชนิดของตนเอง',
      sources: choleSources,
      tags: ['สังเกตอาการตนเอง', ...(food.tags || [])],
    };
  }

  // 3. Backward compatibility fallback for legacy flat fields
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
