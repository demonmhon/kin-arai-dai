import { KidneyStageId, FoodCategory, StageLevel } from '../types/food';

/**
 * Maps KidneyStageId to a user-friendly and clean URL slug
 */
export const STAGE_TO_SLUG: Record<KidneyStageId, string> = {
  stage1_2: 'ckd-stage-1',
  stage3: 'ckd-stage-3',
  stage4_5_pre: 'ckd-stage-4-5',
  dialysis: 'ckd-dialysis',
};

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
];

/**
 * Normalize and match a URL path to a KidneyStageId
 */
export function slugToKidneyStage(pathSegment: string): KidneyStageId | null {
  const clean = pathSegment.toLowerCase().trim().replace(/^\/+|\/+$/g, '');

  // Exact mappings
  if (clean === 'ckd-stage-1' || clean === 'ckd-stage-2' || clean === 'ckd-stage-1-2' || clean === 'stage-1' || clean === 'stage-2') {
    return 'stage1_2';
  }
  if (clean === 'ckd-stage-3' || clean === 'ckd-stage-3a' || clean === 'ckd-stage-3b' || clean === 'stage-3') {
    return 'stage3';
  }
  if (clean === 'ckd-stage-4-5' || clean === 'ckd-stage-4' || clean === 'ckd-stage-5' || clean === 'stage-4' || clean === 'stage-5' || clean === 'ckd-stage-4-5-pre') {
    return 'stage4_5_pre';
  }
  if (clean === 'ckd-dialysis' || clean === 'ckd-stage-dialysis' || clean === 'dialysis') {
    return 'dialysis';
  }
  if (clean === 'ckd') {
    return 'stage4_5_pre'; // Default stage for CKD
  }

  return null;
}

export interface ParsedUrlState {
  isReferences: boolean;
  isHome: boolean;
  isPermalink: boolean;
  diseaseId: string;
  stageId: KidneyStageId | null;
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
  const matchedStage = slugToKidneyStage(pathSegment);
  const isPermalink = matchedStage !== null;

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
    diseaseId: 'ckd',
    stageId: matchedStage,
    searchTerm,
    category,
    level,
  };
}

export interface BuildUrlOptions {
  path?: string;
  diseaseId?: string;
  stageId?: KidneyStageId;
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
  if (options.stageId) {
    basePath = `/${STAGE_TO_SLUG[options.stageId] || 'ckd-stage-1'}`;
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
