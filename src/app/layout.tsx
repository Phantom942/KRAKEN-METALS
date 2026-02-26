import type { Metadata } from 'next';
import './globals.css';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "KRAKEN METALS | Soudure de Précision Ivry, Paris 13 & Val-de-Marne",
    template: "%s | KRAKEN METALS",
  },
  description: "Artisan soudeur à Ivry-sur-Seine. Kraken Metals assure vos travaux de métallerie et dépannages à Vitry, Villejuif, Charenton et Paris Sud. Réactivité garantie dans le 94.",
  keywords: ["soudage précision", "métallerie", "soudure TIG", "soudure MIG", "réparation métallique", "artisan soudeur", "Ivry-sur-Seine", "Vitry-sur-Seine", "Villejuif", "Charenton-le-Pont", "Alfortville", "Paris 13", "Val-de-Marne", "Île-de-France"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: SITE.name,
  description: "KRAKEN METALS, expert en soudage TIG et MIG, soudage de précision à Ivry-sur-Seine. Métallerie, réparation métallique. Intervention rapide sur Paris et toute l'Île-de-France.",
  image: `${SITE.url}/og-image.jpg`,
  "@id": SITE.url,
  url: SITE.url,
  telephone: SITE.phoneHref.replace("tel:", ""),
  knowsAbout: ["Soudage TIG", "Soudage MIG", "Acier", "Inox", "Aluminium", "Métallerie", "Réparation métallique"],
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address,
    addressLocality: "Ivry-sur-Seine",
    postalCode: "94200",
    addressRegion: "Val-de-Marne",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", "name": "Ivry-sur-Seine" },
    { "@type": "City", "name": "Vitry-sur-Seine" },
    { "@type": "City", "name": "Villejuif" },
    { "@type": "City", "name": "Charenton-le-Pont" },
    { "@type": "City", "name": "Maisons-Alfort" },
    { "@type": "City", "name": "Alfortville" },
    { "@type": "City", "name": "Choisy-le-Roi" },
    { "@type": "City", "name": "Le Kremlin-Bicêtre" },
    { "@type": "City", "name": "Saint-Maurice" },
    { "@type": "Place", "name": "Paris 13" },
    { "@type": "Place", "name": "Paris 12" },
    { "@type": "Place", "name": "Paris 14" },
    { "@type": "City", "name": "Paris" },
    { "@type": "AdministrativeArea", "name": "Val-de-Marne" },
    { "@type": "AdministrativeArea", "name": "Île-de-France" },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.8145,
    longitude: 2.385,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "20:00",
    },
  ],
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-slate-950 text-slate-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
