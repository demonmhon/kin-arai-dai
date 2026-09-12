import { KidneyStageId, DiseaseStageId, FoodCategory, StageLevel } from '../types/food';

/**
 * Maps DiseaseStageId to a user-friendly and clean URL slug
 */
export const STAGE_TO_SLUG: Record<string, string> = {
  // CKD
  stage1_2: 'ckd-stage-1',
  stage3: 'ckd-stage-3',
  stage4_5_pre: 'ckd-stage-4-5',
  dialysis: 'ckd-dialysis',
  // Gout
  gout_remission: 'gout-remission',
  gout_flare: 'gout-flare',
  // Cholecystectomy
  chole_maintenance: 'cholecystectomy-maintenance',
  chole_recovery: 'cholecystectomy-recovery',
};

/**
 * Maps condition ID to standard /conditions/{slug} path
 */
export const CONDITION_TO_SLUG: Record<string, string> = {
  ckd: 'ckd',
  gout: 'gout',
  cholecystectomy: 'cholecystectomy',
  diabetes: 'diabetes',
  hypertension: 'hypertension',
  gerd: 'gerd',
};

/**
 * Resolves condition slug to condition ID
 */
export function slugToConditionId(slug: string): string | null {
  const clean = slug.toLowerCase().trim().replace(/^\/+|\/+$/g, '');
  if (clean === 'ckd' || clean === 'kidney' || clean === 'chronic-kidney-disease') return 'ckd';
  if (clean === 'gout') return 'gout';
  if (
    clean === 'cholecystectomy' ||
    clean === 'post-cholecystectomy' ||
    clean === 'gallbladder' ||
    clean === 'chole'
  ) {
    return 'cholecystectomy';
  }
  if (clean === 'diabetes' || clean === 'dm') return 'diabetes';
  if (clean === 'hypertension' || clean === 'ht' || clean === 'heart') return 'hypertension';
  if (clean === 'gerd' || clean === 'acid-reflux') return 'gerd';
  return null;
}

/**
 * Resolves optional stage sub-slug under a specific condition
 */
export function resolveConditionStage(conditionId: string, stageSlug?: string): string {
  if (!stageSlug) {
    if (conditionId === 'gout') return 'gout_remission';
    if (conditionId === 'cholecystectomy') return 'chole_maintenance';
    return 'stage4_5_pre';
  }

  const clean = stageSlug.toLowerCase().trim();

  if (conditionId === 'ckd') {
    if (clean === 'stage-1' || clean === 'stage-2' || clean === 'stage1_2' || clean === 'stage-1-2') return 'stage1_2';
    if (clean === 'stage-3' || clean === 'stage3' || clean === 'stage-3a' || clean === 'stage-3b') return 'stage3';
    if (clean === 'stage-4' || clean === 'stage-5' || clean === 'stage-4-5' || clean === 'stage4_5_pre') return 'stage4_5_pre';
    if (clean === 'dialysis') return 'dialysis';
    return 'stage4_5_pre';
  }

  if (conditionId === 'gout') {
    if (clean === 'flare' || clean === 'gout-flare' || clean === 'acute') return 'gout_flare';
    return 'gout_remission';
  }

  if (conditionId === 'cholecystectomy') {
    if (clean === 'recovery' || clean === 'early' || clean === 'chole-recovery' || clean === 'post-op') return 'chole_recovery';
    return 'chole_maintenance';
  }

  return 'stage4_5_pre';
}

/**
 * Valid food categories
 */
const VALID_CATEGORIES: FoodCategory[] = [
  'all',
  'fruit',
  'vegetable',
  'protein',
  'carb',
  'condiment',
  'drink',
  'dish',
];

export interface ResolvedRoute {
  diseaseId: string;
  stageId: DiseaseStageId;
}

/**
 * Normalize and match a URL path to a diseaseId and stageId
 */
export function slugToDiseaseAndStage(pathSegment: string): ResolvedRoute | null {
  const clean = pathSegment.toLowerCase().trim().replace(/^\/+|\/+$/g, '');

  // 1. CKD stages
  if (
    clean === 'ckd-stage-1' ||
    clean === 'ckd-stage-2' ||
    clean === 'ckd-stage-1-2' ||
    clean === 'stage-1' ||
    clean === 'stage-2'
  ) {
    return { diseaseId: 'ckd', stageId: 'stage1_2' };
  }
  if (
    clean === 'ckd-stage-3' ||
    clean === 'ckd-stage-3a' ||
    clean === 'ckd-stage-3b' ||
    clean === 'stage-3'
  ) {
    return { diseaseId: 'ckd', stageId: 'stage3' };
  }
  if (
    clean === 'ckd-stage-4-5' ||
    clean === 'ckd-stage-4' ||
    clean === 'ckd-stage-5' ||
    clean === 'stage-4' ||
    clean === 'stage-5' ||
    clean === 'ckd-stage-4-5-pre'
  ) {
    return { diseaseId: 'ckd', stageId: 'stage4_5_pre' };
  }
  if (clean === 'ckd-dialysis' || clean === 'ckd-stage-dialysis' || clean === 'dialysis') {
    return { diseaseId: 'ckd', stageId: 'dialysis' };
  }
  if (clean === 'ckd') {
    return { diseaseId: 'ckd', stageId: 'stage4_5_pre' };
  }

  // 2. Gout stages
  if (clean === 'gout' || clean === 'gout-remission' || clean === 'gout-maintenance' || clean === 'gout-normal') {
    return { diseaseId: 'gout', stageId: 'gout_remission' };
  }
  if (clean === 'gout-flare' || clean === 'gout-acute' || clean === 'gout-pain') {
    return { diseaseId: 'gout', stageId: 'gout_flare' };
  }

  // 3. Cholecystectomy stages
  if (
    clean === 'cholecystectomy' ||
    clean === 'cholecystectomy-maintenance' ||
    clean === 'chole-maintenance' ||
    clean === 'gallbladder' ||
    clean === 'chole'
  ) {
    return { diseaseId: 'cholecystectomy', stageId: 'chole_maintenance' };
  }
  if (
    clean === 'cholecystectomy-recovery' ||
    clean === 'chole-recovery'
  ) {
    return { diseaseId: 'cholecystectomy', stageId: 'chole_recovery' };
  }

  return null;
}

/**
 * Normalize and match a URL path to a KidneyStageId (backward compatible)
 */
export function slugToKidneyStage(pathSegment: string): KidneyStageId | null {
  const resolved = slugToDiseaseAndStage(pathSegment);
  if (resolved && resolved.diseaseId === 'ckd') {
    return resolved.stageId as KidneyStageId;
  }
  return null;
}

export interface ParsedUrlState {
  isReferences: boolean;
  isHome: boolean;
  isPermalink: boolean;
  diseaseId: string;
  stageId: DiseaseStageId | null;
  searchTerm: string;
  category: FoodCategory;
  level: StageLevel | 'all';
}

/**
 * Parse current window location (pathname + search query) into app state
 */
export function parseAppUrl(pathname: string, search: string): ParsedUrlState {
  const cleanPath = pathname.toLowerCase().trim().replace(/\/+$/, '') || '/';
  const params = new URLSearchParams(search);

  // 1. References page check
  if (cleanPath === '/references') {
    return {
      isReferences: true,
      isHome: false,
      isPermalink: false,
      diseaseId: 'ckd',
      stageId: null,
      searchTerm: '',
      category: 'all',
      level: 'all',
    };
  }

  // 2. Path segment for stage permalink
  const pathSegment = cleanPath.replace(/^\//, '');
  const matchedRoute = slugToDiseaseAndStage(pathSegment);
  const isPermalink = matchedRoute !== null;

  // 3. Query params: keywords, category, level
  const rawKeyword =
    params.get('keywords') ||
    params.get('keyword') ||
    params.get('q') ||
    params.get('search') ||
    '';
  const searchTerm = rawKeyword.trim();

  // Category
  const rawCategory = (params.get('category') || params.get('cat') || 'all').toLowerCase();
  const category: FoodCategory = VALID_CATEGORIES.includes(rawCategory as FoodCategory)
    ? (rawCategory as FoodCategory)
    : 'all';

  // Level
  const rawLevel = (params.get('level') || params.get('color') || 'all').toLowerCase();
  let level: StageLevel | 'all' = 'all';
  if (rawLevel === 'safe' || rawLevel === 'green' || rawLevel === 'เขียว') {
    level = 'safe';
  } else if (rawLevel === 'caution' || rawLevel === 'yellow' || rawLevel === 'เหลือง') {
    level = 'caution';
  } else if (rawLevel === 'danger' || rawLevel === 'red' || rawLevel === 'แดง') {
    level = 'danger';
  }

  return {
    isReferences: false,
    isHome: cleanPath === '/' && !isPermalink,
    isPermalink,
    diseaseId: matchedRoute ? matchedRoute.diseaseId : 'ckd',
    stageId: matchedRoute ? matchedRoute.stageId : null,
    searchTerm,
    category,
    level,
  };
}

export interface BuildUrlOptions {
  path?: string;
  diseaseId?: string;
  stageId?: DiseaseStageId | string;
  searchTerm?: string;
  category?: FoodCategory;
  level?: StageLevel | 'all';
  isReferences?: boolean;
  isHome?: boolean;
}

/**
 * Builds a canonical permalink URL with path and optional query parameters
 */
export function buildAppUrl(options: BuildUrlOptions): string {
  if (options.isReferences) {
    return '/references';
  }

  if (options.isHome) {
    return '/';
  }

  let basePath = '/';
  if (options.stageId && STAGE_TO_SLUG[options.stageId]) {
    basePath = `/${STAGE_TO_SLUG[options.stageId]}`;
  } else if (options.path) {
    basePath = options.path;
  }

  const params = new URLSearchParams();

  if (options.searchTerm && options.searchTerm.trim()) {
    params.set('keywords', options.searchTerm.trim());
  }

  if (options.category && options.category !== 'all') {
    params.set('category', options.category);
  }

  if (options.level && options.level !== 'all') {
    params.set('level', options.level);
  }

  const queryString = params.toString();
  return queryString ? `${basePath}?${queryString}` : basePath;
}
