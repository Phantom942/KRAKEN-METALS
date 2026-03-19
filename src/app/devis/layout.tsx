import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Demande de devis | Kraken Metals - Soudage Ivry',
  description:
    'Demandez votre devis gratuit pour soudage, métallerie, ferronnerie. Réponse sous 24h. Kraken Metals, atelier à Ivry-sur-Seine.',
  alternates: {
    canonical: `${SITE.url}/devis/`,
  },
};

export default function DevisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
