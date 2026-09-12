import { diseases } from '../data/diseases';

/**
 * Current Application Version.
 * Bump this version when releasing updates. When this version differs from
 * what the user has stored in their browser, or when active conditions change,
 * the onboarding / condition selection dialog will automatically appear.
 */
export const APP_VERSION = '0.2.0';

/**
 * Generates a fingerprint/signature of all active diseases.
 * If a new health condition is enabled (e.g. status changes to 'active'),
 * this signature will change and automatically prompt the dialog.
 */
export const CONDITIONS_SIGNATURE = diseases
  .filter((d) => d.status === 'active')
  .map((d) => d.id)
  .sort()
  .join(',');

export const STORAGE_KEYS = {
  DISEASE: 'kin_selected_disease',
  STAGE: 'kin_selected_stage',
  HAS_INITIALIZED: 'kin_has_profile',
  APP_VERSION: 'kin_app_version',
  CONDITIONS_SIGNATURE: 'kin_conditions_signature',
} as const;

export type OnboardingReason = 'first_visit' | 'new_version' | null;

/**
 * Checks if the condition & stage selection dialog should be shown:
 * - 'first_visit': User has never initialized a profile
 * - 'new_version': Stored app version or active conditions signature differs from current
 * - null: Profile is up to date with the latest version
 */
export function checkOnboardingRequired(): OnboardingReason {
  if (typeof window === 'undefined') return null;

  try {
    const hasProfile = localStorage.getItem(STORAGE_KEYS.HAS_INITIALIZED);
    const savedVersion = localStorage.getItem(STORAGE_KEYS.APP_VERSION);
    const savedSignature = localStorage.getItem(STORAGE_KEYS.CONDITIONS_SIGNATURE);

    // If user has never initialized a profile at all -> first visit
    if (!hasProfile) {
      return 'first_visit';
    }

    // If app version or condition set has changed -> new version update
    if (savedVersion !== APP_VERSION || savedSignature !== CONDITIONS_SIGNATURE) {
      return 'new_version';
    }

    return null;
  } catch {
    return null;
  }
}

/**
 * Marks onboarding or version update check as completed in localStorage.
 */
export function markOnboardingCompleted(diseaseId?: string, stageId?: string) {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEYS.HAS_INITIALIZED, 'true');
    localStorage.setItem(STORAGE_KEYS.APP_VERSION, APP_VERSION);
    localStorage.setItem(STORAGE_KEYS.CONDITIONS_SIGNATURE, CONDITIONS_SIGNATURE);
    if (diseaseId) {
      localStorage.setItem(STORAGE_KEYS.DISEASE, diseaseId);
    }
    if (stageId) {
      localStorage.setItem(STORAGE_KEYS.STAGE, stageId);
    }
  } catch {}
}
