import React from 'react';
import {
  Stethoscope,
  Footprints,
  Droplet,
  HeartPulse,
  Flame,
  Activity,
  UtensilsCrossed,
} from 'lucide-react';

/**
 * Returns a crisp Lucide SVG icon corresponding to a disease ID.
 */
export function getDiseaseLucideIcon(diseaseId: string, size = 20): React.ReactNode {
  switch (diseaseId) {
    case 'ckd':
      return <Stethoscope size={size} />;
    case 'gout':
      return <Footprints size={size} />;
    case 'cholecystectomy':
      return <UtensilsCrossed size={size} />;
    case 'diabetes':
      return <Droplet size={size} />;
    case 'hypertension':
      return <HeartPulse size={size} />;
    case 'gerd':
      return <Flame size={size} />;
    default:
      return <Activity size={size} />;
  }
}
