import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SeoCtas from '@/components/SeoCtas';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: "Soudeur à Ivry-sur-Seine (94) | Devis 24h | Kraken Metals",
  description:
    "Soudeur à Ivry-sur-Seine (94) : TIG, MIG-MAG, arc. Métallerie et réparations (acier, inox, alu). Devis sous 24h. Zone Paris & Val-de-Marne.",
  alternates: { canonical: `${SITE.url}/soudeur-ivry-sur-seine/` },
};

export default function SoudeurIvryPage() {
  const whatsappText =
    "Bonjour, je cherche un soudeur à Ivry-sur-Seine. Pouvez-vous me rappeler pour un devis ?";

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Soudeur à Ivry-sur-Seine (94)',
    provider: { '@type': 'LocalBusiness', name: SITE.name, url: SITE.url },
    areaServed: ['Ivry-sur-Seine', 'Val-de-Marne', 'Paris', 'Île-de-France'],
    serviceType: ['Soudage TIG', 'Soudage MIG-MAG', "Soudage à l'électrode", 'Réparation métallique'],
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Header />

      <section className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-100 tracking-tight">
            Soudeur à <span className="text-cyan-400">Ivry-sur-Seine</span> (94)
          </h1>
          <p className="mt-5 text-slate-400 text-base sm:text-lg max-w-2xl">
            Besoin d&apos;un soudeur fiable près de Paris ? Kraken Metals intervient à Ivry-sur-Seine et dans tout le Val-de-Marne
            pour vos réparations, dépannages et projets de métallerie. Devis sous 24h.
          </p>

          <SeoCtas whatsappText={whatsappText} className="mt-8" />

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6">
              <h2 className="text-xl font-semibold text-slate-100 mb-2">Soudure TIG, MIG-MAG, arc</h2>
              <p className="text-slate-400">
                Travail sur acier, inox et aluminium. Soudure propre, précise et durable, adaptée aux pièces fines comme aux assemblages
                plus robustes.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6">
              <h2 className="text-xl font-semibold text-slate-100 mb-2">Réparations & dépannage</h2>
              <p className="text-slate-400">
                Pièce cassée, renfort à refaire, fissure sur aluminium : diagnostic rapide et réparation soignée. Intervention possible en urgence.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-slate-900/50 border border-slate-800 p-6">
            <h2 className="text-xl font-semibold text-slate-100 mb-3">Zone d&apos;intervention</h2>
            <p className="text-slate-400">
              Ivry-sur-Seine, Vitry-sur-Seine, Villejuif, Charenton-le-Pont, Alfortville, Maisons-Alfort, Choisy-le-Roi, Le Kremlin-Bicêtre,
              Saint-Maurice et Paris (12, 13, 14). Déplacements dans toute l&apos;Île-de-France selon le projet.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

