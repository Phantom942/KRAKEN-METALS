import type { Metadata } from 'next';
import './globals.css';
import { SITE } from '@/lib/constants';
import { jsonLd } from '@/lib/structuredData';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "KRAKEN METALS | Soudure de Précision Ivry, Paris 13 & Val-de-Marne",
    template: "%s | KRAKEN METALS",
  },
  description: "KRAKEN METALS : atelier de soudage de précision à Ivry-sur-Seine (94). Soudure TIG, MIG-MAG, réparation métallique, ferronnerie. Intervention sous 24h. Paris, Vitry, Villejuif, Val-de-Marne, Île-de-France.",
  keywords: ["soudage précision", "métallerie", "soudure TIG", "soudure MIG", "réparation métallique", "artisan soudeur", "soudeur urgence", "Ivry-sur-Seine", "Vitry-sur-Seine", "Villejuif", "Charenton-le-Pont", "Alfortville", "Paris 13", "Val-de-Marne", "Île-de-France", "ferronnerie"],
  authors: [{ name: "KRAKEN METALS", url: SITE.url }],
  creator: "KRAKEN METALS",
  publisher: "KRAKEN METALS",
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE.url,
    siteName: "KRAKEN METALS",
    title: "KRAKEN METALS | Soudure de Précision Ivry, Paris 13 & Val-de-Marne",
    description: "Artisan soudeur à Ivry-sur-Seine. Métallerie et dépannages à Vitry, Villejuif, Charenton, Paris Sud. Réactivité garantie dans le 94.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KRAKEN METALS - Atelier de soudage de précision à Ivry-sur-Seine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KRAKEN METALS | Soudure de Précision Ivry, Paris 13 & Val-de-Marne",
    description: "Artisan soudeur à Ivry. Métallerie à Vitry, Villejuif, Charenton, Paris Sud. Réactivité garantie dans le 94.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "9jIj_fTnDjmo-zUr0Cadk5ztrW1yHaIO-vY4rzHwLBg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="geo.region" content="FR-IDF" />
        <meta name="geo.placename" content="Ivry-sur-Seine" />
        <meta name="geo.position" content="48.8145;2.385" />
        <meta name="ICBM" content="48.8145, 2.385" />
        <meta name="business:contact_data:locality" content="Ivry-sur-Seine" />
        <meta name="business:contact_data:region" content="Val-de-Marne" />
        <meta name="business:contact_data:country_name" content="France" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </head>
      <body className="antialiased min-h-screen bg-slate-950 text-slate-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
