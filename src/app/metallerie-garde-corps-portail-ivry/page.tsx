import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SeoCtas from '@/components/SeoCtas';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Métallerie à Ivry (94) | Portail, garde-corps, escalier',
  description:
    "Métallerie à Ivry-sur-Seine : portails, garde-corps, escaliers, structures métalliques. Fabrication/réparation sur mesure. Devis 24h. Paris & 94.",
  alternates: { canonical: `${SITE.url}/metallerie-garde-corps-portail-ivry/` },
};

export default function MetallerieIvryPage() {
  const whatsappText =
    "Bonjour, je souhaite un devis pour un portail / garde-corps / escalier à Ivry-sur-Seine. Pouvez-vous me rappeler ?";

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Métallerie : portail, garde-corps, escalier à Ivry-sur-Seine',
    provider: { '@type': 'LocalBusiness', name: SITE.name, url: SITE.url },
    areaServed: ['Ivry-sur-Seine', 'Val-de-Marne', 'Paris', 'Île-de-France'],
    serviceType: ['Métallerie', 'Ferronnerie', 'Garde-corps', 'Portails', 'Escaliers', 'Structures métalliques'],
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Header />

      <section className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-100 tracking-tight">
            Métallerie à <span className="text-cyan-400">Ivry-sur-Seine</span> : portails & garde-corps
          </h1>
          <p className="mt-5 text-slate-400 text-base sm:text-lg max-w-2xl">
            Kraken Metals conçoit, fabrique et répare vos ouvrages métalliques : portails, garde-corps, escaliers, structures et pièces sur mesure.
            Atelier à Ivry (94), interventions possibles sur Paris et Île-de-France.
          </p>

          <SeoCtas whatsappText={whatsappText} className="mt-8" />

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6">
              <h2 className="text-xl font-semibold text-slate-100 mb-2">Ouvrages sur mesure</h2>
              <p className="text-slate-400">
                Garde-corps, rampes, portails, clôtures, escaliers : nous adaptons la conception à vos contraintes (prise de cotes, renforts, finitions).
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6">
              <h2 className="text-xl font-semibold text-slate-100 mb-2">Réparation et renfort</h2>
              <p className="text-slate-400">
                Soudure de reprise, remise en état, renforts structurels. Solution rapide si vous devez sécuriser un ouvrage existant.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-slate-900/50 border border-slate-800 p-6">
            <h2 className="text-xl font-semibold text-slate-100 mb-3">Pour un devis sous 24h</h2>
            <p className="text-slate-400">
              Envoyez des photos, dimensions approximatives, et l&apos;adresse du chantier (Ivry/Paris/94). Nous confirmons la faisabilité et planifions la suite.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

