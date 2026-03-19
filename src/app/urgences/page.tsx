import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Zap, Clock, MapPin, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/constants';

const urgencesFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "KRAKEN METALS intervient-il en urgence pour la soudure ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Oui. KRAKEN METALS propose une intervention sous 24h pour les urgences de soudure. Appelez le ${SITE.phone} ou contactez-nous par WhatsApp pour une réponse immédiate. Réactivité garantie à Paris, Ivry, Vitry, Villejuif, Charenton et tout le Val-de-Marne.`,
      },
    },
    {
      '@type': 'Question',
      name: "Où trouver un soudeur en urgence à Ivry-sur-Seine ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: `KRAKEN METALS est un atelier de soudage de précision au 9 rue Michelet, 94200 Ivry-sur-Seine. Intervention sous 24h possible. Contact : ${SITE.phone}. Ouvert 7j/7 de 9h à 20h.`,
      },
    },
    {
      '@type': 'Question',
      name: "Quel numéro appeler pour une soudure urgente dans le 94 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Pour une intervention de soudure en urgence dans le Val-de-Marne (94), contactez KRAKEN METALS au ${SITE.phone}. L'atelier à Ivry-sur-Seine intervient sous 24h sur Paris et toute l'Île-de-France.`,
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'Soudure en urgence | Intervention sous 24h | Kraken Metals Ivry',
  description:
    "Besoin d'un soudeur en urgence ? Kraken Metals intervient sous 24h à Paris, Ivry, Vitry, Villejuif et le Val-de-Marne. Réparation métallique, dépannage express. Réactivité garantie.",
  alternates: {
    canonical: `${SITE.url}/urgences/`,
  },
};

export default function UrgencesPage() {
  const whatsappUrl = `https://wa.me/33648745668?text=${encodeURIComponent("Bonjour, j'ai besoin d'une intervention en urgence pour une soudure. Merci.")}`;

  return (
    <main className="min-h-screen bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(urgencesFaqSchema) }}
      />
      <Header />

      <section className="relative min-h-[85dvh] flex flex-col items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-16 px-5 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" aria-hidden />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl" aria-hidden />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-sm font-medium mb-8 animate-pulse">
            <Zap className="w-4 h-4" aria-hidden />
            Réactivité garantie
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-100 leading-tight">
            Soudure en <span className="text-amber-400">urgence</span>
          </h1>

          <p className="mt-6 text-xl sm:text-2xl text-cyan-400 font-semibold">
            Intervention sous 24h
          </p>

          <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Panne, fuite, pièce cassée ? Notre atelier à Ivry-sur-Seine intervient rapidement
            sur Paris et toute l&apos;Île-de-France. Appelez ou envoyez un message pour une réponse immédiate.
          </p>

          <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={SITE.phoneHref}
              aria-label={`Appeler en urgence ${SITE.phone}`}
              className="inline-flex items-center justify-center gap-3 min-h-[56px] w-full sm:w-auto bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-slate-950 font-bold text-lg px-10 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/30 touch-manipulation"
            >
              <Phone className="w-6 h-6" aria-hidden />
              {SITE.phone}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter par WhatsApp"
              className="inline-flex items-center justify-center gap-3 min-h-[56px] w-full sm:w-auto border-2 border-emerald-500 hover:border-emerald-400 hover:bg-emerald-500/10 text-emerald-400 font-semibold px-10 py-4 rounded-xl transition-all touch-manipulation"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>

          <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-cyan-400" aria-hidden />
              </div>
              <div className="text-left">
                <p className="font-semibold text-slate-200">Ouvert 7j/7</p>
                <p className="text-sm text-slate-400">Lun - Dim : 9h - 20h</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-cyan-400" aria-hidden />
              </div>
              <div className="text-left">
                <p className="font-semibold text-slate-200">Zone d&apos;intervention</p>
                <p className="text-sm text-slate-400">Paris, 94, Île-de-France</p>
              </div>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-10 text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium"
          >
            <ArrowRight className="w-4 h-4 rotate-180" aria-hidden />
            Voir tous nos services
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
