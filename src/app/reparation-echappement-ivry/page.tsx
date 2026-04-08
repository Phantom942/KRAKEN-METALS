import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SeoCtas from '@/components/SeoCtas';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: "Réparation échappement Ivry (94) | Soudure rapide | Devis",
  description:
    "Réparation d'échappement à Ivry-sur-Seine : soudure, remise en état, fuites et fissures. Intervention rapide. Paris & Val-de-Marne. Devis 24h.",
  alternates: { canonical: `${SITE.url}/reparation-echappement-ivry/` },
};

export default function ReparationEchappementIvryPage() {
  const whatsappText =
    "Bonjour, j'ai un problème d'échappement (fuite/fissure). Pouvez-vous réparer à Ivry-sur-Seine ? Je peux envoyer des photos.";

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: "Réparation d'échappement à Ivry-sur-Seine",
    provider: { '@type': 'AutoRepair', name: SITE.name, url: SITE.url },
    areaServed: ['Ivry-sur-Seine', 'Val-de-Marne', 'Paris', 'Île-de-France'],
    serviceType: ["Réparation échappement", "Soudure acier", "Soudure inox"],
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Header />

      <section className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-100 tracking-tight">
            Réparation d&apos;<span className="text-cyan-400">échappement</span> à Ivry (94)
          </h1>
          <p className="mt-5 text-slate-400 text-base sm:text-lg max-w-2xl">
            Fuite, bruit anormal, fissure ou patte cassée ? Kraken Metals répare et ressoude votre échappement (auto/moto) avec une remise en état propre,
            à Ivry-sur-Seine. Intervention rapide possible.
          </p>

          <SeoCtas whatsappText={whatsappText} className="mt-8" />

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6">
              <h2 className="text-xl font-semibold text-slate-100 mb-2">Soudure & remise en état</h2>
              <p className="text-slate-400">
                Réparation des fissures, fuites, supports et brides. Objectif : étanchéité, solidité et durée dans le temps (acier/inox selon montage).
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6">
              <h2 className="text-xl font-semibold text-slate-100 mb-2">Devis express</h2>
              <p className="text-slate-400">
                Pour un devis rapide, envoyez une photo de la zone à réparer + le modèle du véhicule. Réponse sous 24h.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-slate-900/50 border border-slate-800 p-6">
            <h2 className="text-xl font-semibold text-slate-100 mb-3">Zone d&apos;intervention</h2>
            <p className="text-slate-400">
              Ivry-sur-Seine, Paris (12/13/14), Vitry, Villejuif, Charenton et tout le Val-de-Marne. Nous vous indiquons la meilleure option :
              dépôt à l&apos;atelier ou intervention selon le cas.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

