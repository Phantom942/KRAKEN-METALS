import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "KRAKEN METALS | Soudage de précision à Ivry-sur-Seine (94) - Paris & Île-de-France",
  description: "Artisan soudeur à Ivry-sur-Seine (Val-de-Marne). Soudage de précision, métallerie et réparation métallique. Intervention rapide sur Paris, Petite Couronne et Grand Paris. Réactivité exceptionnelle.",
  keywords: "soudage précision, métallerie, soudure TIG, soudure MIG, réparation métallique, artisan soudeur, Ivry-sur-Seine, Val-de-Marne, Paris, Île-de-France, ferronnerie art, tuyauterie industrielle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-slate-950 text-slate-200">
        {children}
      </body>
    </html>
  );
}
