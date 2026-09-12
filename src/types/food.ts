export type StageLevel = 'safe' | 'caution' | 'danger';

export type KidneyStageId = 'stage1_2' | 'stage3' | 'stage4_5_pre' | 'dialysis';

export type FoodCategory =
  | 'all'
  | 'fruit'
  | 'vegetable'
  | 'protein'
  | 'carb'
  | 'condiment'
  | 'drink';

export interface ReferenceSource {
  name: string;
  url: string;
}

export interface StageAdvice {
  level: StageLevel;
  advice: string;
}

export interface FoodItem {
  id: string;
  name: string;
  category: Exclude<FoodCategory, 'all'>;
  categoryName: string;
  icon: string;
  tags: string[];
  reason: string;
  advice: string;
  keywords: string[];
  source: ReferenceSource;
  stages: Record<KidneyStageId, StageAdvice>;
  imageUrl?: string;
  imageCredit?: string;
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

export interface Disease {
  id: string;
  name: string;
  icon: string;
  status: 'active' | 'upcoming';
  summary: string;
  badgeText: string;
}
