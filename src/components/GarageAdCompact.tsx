import { Phone, ExternalLink } from 'lucide-react';
import { CLOSURE, GARAGE_AD } from '@/lib/constants';
import { AdCtaLink, RedkLogo } from './GarageAdShared';

/** Bandeau pub garage — version compacte (footer). */
export default function GarageAdCompactInner() {
  return (
    <div className="mb-10 sm:mb-12">
      <div className="rounded-2xl border border-orange-500/25 bg-gradient-to-r from-orange-950/30 to-slate-900/80 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex min-w-0 flex-1 items-start gap-4">
            <RedkLogo size="compact" />
            <div className="min-w-0">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-orange-400/90">
                {GARAGE_AD.badge}
              </p>
              <p className="text-base font-bold text-slate-100 sm:text-lg">{GARAGE_AD.title}</p>
              <p className="mt-1 line-clamp-2 text-sm text-slate-400">
                {CLOSURE.active ? GARAGE_AD.messageDuringClosure : GARAGE_AD.description}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:shrink-0">
            <a
              href={GARAGE_AD.phoneHref}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-orange-400 touch-manipulation"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {GARAGE_AD.phone}
            </a>
            <AdCtaLink
              href={GARAGE_AD.url}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-orange-400/50 touch-manipulation"
            >
              {GARAGE_AD.urlLabel}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </AdCtaLink>
          </div>
        </div>
      </div>
    </div>
  );
}
