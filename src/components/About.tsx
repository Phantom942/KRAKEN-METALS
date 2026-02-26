import Image from 'next/image';
import { Wrench, Zap } from 'lucide-react';
import FadeIn from './FadeIn';

export default function About() {
  return (
    <section id="apropos" className="py-16 sm:py-24 lg:py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <Image
                src="/about-welder.png"
                alt="Soudeur en action - soudage de précision en atelier"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl shadow-black/50 w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cyan-500/20 rounded-2xl border border-cyan-400/30 flex items-center justify-center">
                <Zap className="w-12 h-12 text-cyan-400" />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 mb-6">
                <Wrench className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-slate-400">À propos de nous</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
                Un magicien du métal à votre service
              </h2>
              <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed">
                Notre maître soudeur cumule des années d&apos;expérience en soudage de précision.
                Il réalise l&apos;impossible : du dépannage express à la pièce unique sur mesure,
                en passant par les projets techniques les plus complexes.
              </p>
              <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
                Basé à Ivry-sur-Seine (94), idéalement desservi pour intervenir rapidement auprès des clients parisiens et du Val-de-Marne.
                Chaque réalisation est une signature de qualité, avec une réactivité exceptionnelle pour vos urgences.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 text-sm font-medium">
                  Réactivité exceptionnelle
                </span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 text-sm font-medium">
                  Proximité géographique
                </span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 text-sm font-medium">
                  Paris & banlieue
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
