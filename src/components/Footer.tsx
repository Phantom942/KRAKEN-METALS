import { MapPin, Phone, Clock, MapPinned } from 'lucide-react';
import { SITE } from '@/lib/constants';
import FadeIn from './FadeIn';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 justify-items-center text-center">
          <FadeIn className="max-w-sm">
            <h3 className="text-lg font-bold metallic-text mb-4">{SITE.name.toUpperCase()}</h3>
            <p className="text-slate-400 text-sm">
              Soudage de précision à Ivry-sur-Seine (94). Métallerie et réparation métallique
              pour Paris et toute la banlieue parisienne. Proximité géographique et réactivité exceptionnelle.
            </p>
          </FadeIn>

          <FadeIn delay={50} className="max-w-sm">
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm flex flex-col items-center">
              <li>
                <a href={SITE.phoneHref} className="flex items-center gap-2 py-2 -my-2 hover:text-cyan-400 transition-colors touch-manipulation">
                  <Phone size={16} />
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center justify-center gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors touch-manipulation underline underline-offset-2 decoration-slate-500 hover:decoration-cyan-400"
                >
                  {SITE.address}, {SITE.city}
                </a>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={100} className="max-w-sm">
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Horaires — Ouvert 7j/7</h4>
            <div className="text-slate-400 text-sm flex items-center justify-center gap-2">
              <Clock size={16} className="shrink-0" />
              <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 items-baseline min-w-0 justify-items-start">
                <dt className="text-slate-300">Lun - Ven :</dt>
                <dd>{SITE.hours.weekdays}</dd>
                <dt className="text-slate-300">Samedi :</dt>
                <dd>{SITE.hours.saturday}</dd>
                <dt className="text-slate-300">Dimanche :</dt>
                <dd>{SITE.hours.sunday}</dd>
              </dl>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={150} className="mt-8 sm:mt-10">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
              <MapPinned size={12} />
              Zone d&apos;intervention rapide
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Basés à Ivry-sur-Seine, nous intervenons sous 24h dans Paris et alentours.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200} className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-slate-400 text-sm sm:text-base text-center">
          <span>© {new Date().getFullYear()} <span className="metallic-text font-semibold">{SITE.name}</span>. Tous droits réservés.</span>
          <a
            href="https://phantomdev.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors font-medium text-base tracking-[0.12em] uppercase"
          >
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
              <path d="M16 4c-6 0-10 5-10 10 0 1.8.6 3.5 1.5 4.8v4.2l2.5-2.5 2 2.5 2-2.5 2.5 2.5v-4.2c.9-1.3 1.5-3 1.5-4.8 0-5-4-10-10-10z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="11" cy="10.5" r="1.2" fill="currentColor" />
              <circle cx="21" cy="10.5" r="1.2" fill="currentColor" />
            </svg>
            Design by PhantomDev
          </a>
        </FadeIn>
      </div>
    </footer>
  );
}
