'use client';

import { usePathname } from 'next/navigation';
import { GARAGE_AD } from '@/lib/constants';
import GarageAdCompactInner from './GarageAdCompact';

/** Masque le bandeau compact sur l'accueil (bandeau featured déjà affiché). */
export default function GarageAdCompactClient() {
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '';
  if (!GARAGE_AD.active || !GARAGE_AD.showCompactInFooter || isHome) return null;
  return <GarageAdCompactInner />;
}
