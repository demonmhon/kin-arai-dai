export type StageLevel = 'safe' | 'caution' | 'danger';

export type KidneyStageId = 'stage1_2' | 'stage3' | 'stage4_5_pre' | 'dialysis';

export type FoodCategory =
  | 'all'
  | 'fruit'
  | 'vegetable'
  | 'protein'
  | 'carb'
  | 'condiment'
  | 'drink'
  | 'dish';

export interface ReferenceSource {
  name: string;
  url: string;
}

export interface StageAdvice {
  level: StageLevel;
  advice: string;
}

export type DiseaseStageAdvice = StageAdvice;

export interface DiseaseProfile {
  reason: string;
  tags?: string[];
  sources: ReferenceSource[];
  stages: {
    default?: DiseaseStageAdvice;
    [stageId: string]: DiseaseStageAdvice | undefined;
  };
}

export interface FoodItem {
  id: string;
  name: string;
  category: Exclude<FoodCategory, 'all'>;
  categoryName: string;
  icon: string;
  tags: string[];
  keywords: string[];
  imageUrl?: string;
  imageCredit?: string;
  sources?: ReferenceSource[];
  diseases: {
    ckd?: DiseaseProfile;
    gout?: DiseaseProfile;
    diabetes?: DiseaseProfile;
    [diseaseId: string]: DiseaseProfile | undefined;
  };
  // Optional legacy fields for backward compatibility during migration
  reason?: string;
  advice?: string;
  source?: ReferenceSource;
  stages?: Record<KidneyStageId, StageAdvice>;
}

export interface KidneyStage {
  id: KidneyStageId;
  name: string;
  badge: string;
  color: 'blue' | 'amber' | 'red' | 'grape';
  summary: string;
  egfr: string;
  focus: string;
}

export type GoutStageId = 'gout_remission' | 'gout_flare';

export interface GoutStage {
  id: GoutStageId;
  name: string;
  badge: string;
  color: 'emerald' | 'red';
  summary: string;
  focus: string;
}

export type DiseaseStageId = KidneyStageId | GoutStageId;

export interface Disease {
  id: string;
  name: string;
  icon: string;
  status: 'active' | 'upcoming';
  summary: string;
  badgeText: string;
}

