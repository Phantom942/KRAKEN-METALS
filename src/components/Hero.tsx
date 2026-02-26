import { ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] min-h-[100svh] flex items-center justify-center overflow-hidden pt-[env(safe-area-inset-top)]"
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
          alt="Soudage de précision - atelier industriel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-8 opacity-0 animate-fade-up-delay-2">
          <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
          <span className="text-sm text-slate-300">Artisanat & Expertise</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-100 leading-tight tracking-tight opacity-0 animate-fade-up-delay-3">
          L&apos;Art de la
          <span className="block text-cyan-400">Fusion</span>
        </h1>

        <p className="mt-6 text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto font-light opacity-0 animate-fade-up-delay-5">
          Précision Industrielle & Savoir-faire Artisanal
        </p>

        <p className="mt-4 sm:mt-6 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base opacity-0 animate-fade-up-delay-6">
          Situé aux portes de Paris, notre atelier d&apos;Ivry-sur-Seine répond à vos besoins les plus exigeants.
          Intervention rapide sur site ou réalisation en atelier pour tous vos projets de métallerie en Île-de-France.
        </p>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center opacity-0 animate-fade-up-delay-8">
          <a
            href="#contact"
            className="inline-flex items-center justify-center min-h-[48px] bg-cyan-500 hover:bg-cyan-400 active:scale-[0.98] text-slate-950 font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/25 touch-manipulation"
          >
            Nous contacter
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center min-h-[48px] border-2 border-slate-500 hover:border-cyan-400 text-slate-200 font-semibold px-8 py-4 rounded-xl transition-colors active:scale-[0.98] touch-manipulation"
          >
            Nos services
          </a>
        </div>
      </div>

      <a
        href="#apropos"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 p-3 -m-3 text-slate-400 hover:text-cyan-400 transition-colors touch-manipulation animate-bounce"
        style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
