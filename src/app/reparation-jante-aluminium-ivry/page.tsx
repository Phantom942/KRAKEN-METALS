import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SeoCtas from '@/components/SeoCtas';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Réparation jante aluminium Ivry (94) | Soudure alu | Devis',
  description:
    "Réparation de jantes aluminium à Ivry : fissure, rebord, soudure alu. Travail propre et durable. Devis sous 24h. Paris & Val-de-Marne.",
  alternates: { canonical: `${SITE.url}/reparation-jante-aluminium-ivry/` },
};

export default function ReparationJanteAluIvryPage() {
  const whatsappText =
    "Bonjour, j'ai une jante aluminium à réparer (fissure/rebord). Pouvez-vous me faire un devis ? Je peux envoyer des photos.";

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Réparation jantes aluminium à Ivry-sur-Seine',
    provider: { '@type': 'AutoRepair', name: SITE.name, url: SITE.url },
    areaServed: ['Ivry-sur-Seine', 'Val-de-Marne', 'Paris', 'Île-de-France'],
    serviceType: ['Réparation jantes aluminium', 'Soudure aluminium'],
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Header />

      <section className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-100 tracking-tight">
            Réparation de <span className="text-cyan-400">jantes aluminium</span> à Ivry (94)
          </h1>
          <p className="mt-5 text-slate-400 text-base sm:text-lg max-w-2xl">
            Une jante alu fissurée ou abîmée ? Kraken Metals réalise la soudure aluminium et la remise en état selon le cas, avec un travail propre.
            Dépôt à l&apos;atelier à Ivry-sur-Seine (94), proche de Paris.
          </p>

          <SeoCtas whatsappText={whatsappText} className="mt-8" />

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6">
              <h2 className="text-xl font-semibold text-slate-100 mb-2">Soudure aluminium maîtrisée</h2>
              <p className="text-slate-400">
                L&apos;aluminium demande une préparation et une technique spécifiques (TIG). Nous évaluons la zone à réparer et proposons la solution la plus sûre.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6">
              <h2 className="text-xl font-semibold text-slate-100 mb-2">Ce qu&apos;il faut envoyer</h2>
              <p className="text-slate-400">
                Photos de la jante (de près + de loin), taille/diamètre si possible, et la nature du dommage (fissure, rebord, choc). Devis sous 24h.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-slate-900/50 border border-slate-800 p-6">
            <h2 className="text-xl font-semibold text-slate-100 mb-3">Zone : Paris & Val-de-Marne</h2>
            <p className="text-slate-400">
              Ivry-sur-Seine, Paris, Vitry, Villejuif, Charenton, Alfortville… Dépôt facile à l&apos;atelier, accès rapide depuis Paris Sud.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

