import { GARAGE_AD } from '@/lib/constants';
import GarageAdCompactClient from './GarageAdCompactClient';

export { default as GarageAdFeatured } from './GarageAdFeatured';

/** Bandeau pub garage — version compacte (footer, pages intérieures). */
export function GarageAdCompact() {
  if (!GARAGE_AD.active || !GARAGE_AD.showCompactInFooter) return null;
  return <GarageAdCompactClient />;
}
