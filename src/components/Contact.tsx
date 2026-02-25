import Image from 'next/image';
import { Phone, MapPin, Clock } from 'lucide-react';
import FadeIn from './FadeIn';
import { SITE } from '@/lib/constants';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <FadeIn>
            <Image
              src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80"
              alt="Établi avec outils - atelier de métallerie"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl shadow-black/50 w-full h-auto"
            />
          </FadeIn>

          <FadeIn delay={100}>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
                Prêt à concrétiser votre projet ?
              </h2>
              <p className="mt-6 text-slate-400 text-base sm:text-lg">
                Situé aux portes de Paris, notre atelier d&apos;Ivry-sur-Seine répond à vos besoins les plus exigeants.
                Intervention rapide sur site ou réalisation en atelier pour tous vos projets de métallerie en Île-de-France.
              </p>
              <p className="mt-4 text-slate-400 text-sm">
                Zone d&apos;intervention : Paris, Petite Couronne et Grand Paris. Réactivité exceptionnelle pour les urgences.
              </p>

              <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-6">
                <a
                  href={SITE.phoneHref}
                  className="flex flex-col items-center lg:items-start gap-2 p-5 sm:p-6 rounded-2xl bg-cyan-500/10 border-2 border-cyan-500/50 hover:bg-cyan-500/20 active:scale-[0.99] transition-all group min-h-[100px] touch-manipulation"
                >
                  <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-400 text-sm font-medium">Téléphone</span>
                  <span className="text-2xl sm:text-4xl font-bold text-cyan-400 tracking-tight select-all">
                    {SITE.phone}
                  </span>
                  <span className="text-cyan-400/80 text-sm font-medium">Appuyez pour appeler</span>
                </a>

                <div className="flex flex-col items-center lg:items-start gap-2 p-5 sm:p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
                  <MapPin className="w-10 h-10 text-slate-400" />
                  <span className="text-slate-400 text-sm font-medium">Adresse</span>
                  <span className="text-xl text-slate-200 font-medium">{SITE.address}</span>
                  <span className="text-slate-400 text-sm">{SITE.city}</span>
                </div>

                <div className="flex flex-col items-center lg:items-start gap-2 p-5 sm:p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
                  <Clock className="w-10 h-10 text-slate-400" />
                  <span className="text-slate-400 text-sm font-medium">Horaires</span>
                  <span className="text-slate-200">{SITE.hours.weekdays}</span>
                  <span className="text-slate-400 text-sm">{SITE.hours.saturday}</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
