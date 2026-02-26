import type { Metadata } from 'next';
import './globals.css';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "KRAKEN METALS | Soudage de précision à Ivry-sur-Seine (94) - Paris & Île-de-France",
    template: "%s | KRAKEN METALS",
  },
  description: "Artisan soudeur à Ivry-sur-Seine (Val-de-Marne). Soudage de précision, métallerie et réparation métallique. Ouvert 7j/7, intervention rapide sur Paris, Petite Couronne et Grand Paris.",
  keywords: ["soudage précision", "métallerie", "soudure TIG", "soudure MIG", "réparation métallique", "artisan soudeur", "Ivry-sur-Seine", "Val-de-Marne", "Paris", "Île-de-France", "ferronnerie", "tuyauterie industrielle"],
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
    title: "KRAKEN METALS | Soudage de précision à Ivry-sur-Seine",
    description: "Artisan soudeur à Ivry-sur-Seine. Soudage de précision, métallerie, réparation métallique. Ouvert 7j/7. Paris & Île-de-France.",
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
    title: "KRAKEN METALS | Soudage de précision à Ivry-sur-Seine",
    description: "Artisan soudeur, métallerie, réparation métallique. Ouvert 7j/7. Paris & Île-de-France.",
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
  "@type": "LocalBusiness",
  name: SITE.name,
  image: `${SITE.url}/og-image.jpg`,
  "@id": SITE.url,
  url: SITE.url,
  telephone: SITE.phoneHref.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address,
    addressLocality: "Ivry-sur-Seine",
    postalCode: "94200",
    addressRegion: "Val-de-Marne",
    addressCountry: "FR",
  },
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
