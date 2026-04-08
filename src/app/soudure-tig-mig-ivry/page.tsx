import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SeoCtas from '@/components/SeoCtas';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Soudure TIG & MIG-MAG à Ivry (94) | Acier Inox Alu',
  description:
    "Soudure TIG et MIG-MAG à Ivry-sur-Seine : acier, inox, aluminium. Pièces fines, assemblages, réparations. Devis sous 24h. Paris & 94.",
  alternates: { canonical: `${SITE.url}/soudure-tig-mig-ivry/` },
};

export default function TigMigIvryPage() {
  const whatsappText =
    'Bonjour, je souhaite un devis pour une soudure TIG/MIG-MAG à Ivry-sur-Seine. Je peux envoyer des photos.';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Soudure TIG & MIG-MAG à Ivry-sur-Seine',
    provider: { '@type': 'LocalBusiness', name: SITE.name, url: SITE.url },
    areaServed: ['Ivry-sur-Seine', 'Val-de-Marne', 'Paris', 'Île-de-France'],
    serviceType: ['Soudage TIG', 'Soudage MIG-MAG'],
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Header />

      <section className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-100 tracking-tight">
            Soudure <span className="text-cyan-400">TIG</span> & <span className="text-cyan-400">MIG-MAG</span> à Ivry (94)
          </h1>
          <p className="mt-5 text-slate-400 text-base sm:text-lg max-w-2xl">
            Pour une soudure nette et durable (acier, inox, aluminium), Kraken Metals réalise vos assemblages, réparations et pièces sur mesure
            à Ivry-sur-Seine, avec intervention possible à Paris et dans tout le Val-de-Marne.
          </p>

          <SeoCtas whatsappText={whatsappText} className="mt-8" />

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6">
              <h2 className="text-xl font-semibold text-slate-100 mb-2">TIG : précision maximale</h2>
              <p className="text-slate-400">
                Idéal pour les pièces fines, l&apos;inox et l&apos;aluminium. Finition soignée pour des soudures propres (projets visibles, ferronnerie,
                pièces techniques).
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6">
              <h2 className="text-xl font-semibold text-slate-100 mb-2">MIG-MAG : productivité & robustesse</h2>
              <p className="text-slate-400">
                Parfait pour la métallerie, les structures et les assemblages. Bon compromis vitesse/solidité pour les chantiers et pièces de série.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-slate-900/50 border border-slate-800 p-6">
            <h2 className="text-xl font-semibold text-slate-100 mb-3">Comment obtenir un devis rapide</h2>
            <p className="text-slate-400">
              Envoyez 2–3 photos, les dimensions, la matière (acier/inox/alu), et le délai souhaité. Nous répondons sous 24h (et plus vite en urgence).
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

