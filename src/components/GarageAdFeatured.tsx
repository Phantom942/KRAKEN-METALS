import { Car, Phone, ArrowRight, Wrench, Disc3, Fuel, ExternalLink } from 'lucide-react';
import { SITE, CLOSURE, GARAGE_AD } from '@/lib/constants';
import { AdCtaLink, RedkLogo } from './GarageAdShared';

const serviceIcons = [Fuel, Disc3, Wrench, Car] as const;

function whatsappHref(text: string) {
  return `https://wa.me/33648745668?text=${encodeURIComponent(text)}`;
}

/** Bandeau pub garage — version mise en avant (page d'accueil). */
export default function GarageAdFeatured() {
  if (!GARAGE_AD.active) return null;

  return (
    <section
      id="garage"
      aria-label={`Publicité — ${GARAGE_AD.title}`}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-orange-950/40 via-slate-950 to-slate-950 border-y border-orange-500/20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-slate-900/80 shadow-2xl shadow-orange-950/30">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent"
            aria-hidden
          />
          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10 lg:p-10">
            <div className="min-w-0">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-400/40 bg-orange-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-300">
                  <Car className="h-3.5 w-3.5" aria-hidden />
                  {GARAGE_AD.badge}
                </span>
                {CLOSURE.active && GARAGE_AD.openDuringClosure && (
                  <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                    Ouvert pendant la fermeture Kraken Metals
                  </span>
                )}
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl lg:text-4xl">
                {GARAGE_AD.title}
              </h2>
              <p className="mt-2 text-lg font-medium text-orange-300/90 sm:text-xl">{GARAGE_AD.subtitle}</p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                {CLOSURE.active ? GARAGE_AD.messageDuringClosure : GARAGE_AD.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                {GARAGE_AD.services.map((service, i) => {
                  const Icon = serviceIcons[i % serviceIcons.length];
                  return (
                    <li
                      key={service}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-2 text-sm text-slate-300"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-orange-400" aria-hidden />
                      {service}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={GARAGE_AD.phoneHref}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-bold text-slate-950 shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 touch-manipulation"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                  {GARAGE_AD.ctaLabel}
                </a>
                <a
                  href={whatsappHref(GARAGE_AD.whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border-2 border-emerald-500/60 px-6 py-3 font-semibold text-emerald-400 transition-all hover:border-emerald-400 hover:bg-emerald-500/10 touch-manipulation"
                >
                  WhatsApp
                </a>
                <AdCtaLink
                  href={GARAGE_AD.secondaryCtaHref}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border-2 border-slate-600 px-6 py-3 font-semibold text-slate-200 transition-all hover:border-orange-400/60 touch-manipulation"
                >
                  {GARAGE_AD.secondaryCtaLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </AdCtaLink>
              </div>

              {GARAGE_AD.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  {GARAGE_AD.links.map((link) => (
                    <AdCtaLink
                      key={link.href}
                      href={link.href}
                      className="text-orange-400/90 underline decoration-orange-500/40 underline-offset-2 transition-colors hover:text-orange-300 hover:decoration-orange-400"
                    >
                      {link.label}
                    </AdCtaLink>
                  ))}
                </div>
              )}
            </div>

            <aside className="hidden shrink-0 flex-col items-center gap-3 text-center lg:flex lg:w-[220px]">
              <RedkLogo size="featured" />
              <a
                href={GARAGE_AD.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-400 transition-colors hover:text-orange-300"
              >
                {GARAGE_AD.urlLabel}
                <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
              </a>
              <p className="max-w-[200px] text-xs leading-snug text-slate-500 sm:text-sm">
                {SITE.address}, {SITE.city}
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
