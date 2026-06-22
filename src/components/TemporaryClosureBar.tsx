import { CalendarClock, Car, ExternalLink } from 'lucide-react';
import { CLOSURE, GARAGE_AD } from '@/lib/constants';

/** Bandeau visible sur toutes les pages quand CLOSURE.active est true. */
export default function TemporaryClosureBar() {
  if (!CLOSURE.active) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="bg-amber-600/90 border-b border-amber-500/40 text-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 text-center text-sm sm:text-base">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <div className="inline-flex items-center gap-2 font-semibold">
              <CalendarClock className="w-4 h-4 shrink-0" aria-hidden />
              <span>{CLOSURE.headline}</span>
            </div>
            <span className="hidden sm:inline text-slate-950/40" aria-hidden>
              |
            </span>
            <p className="text-slate-950/90 font-medium max-w-2xl">{CLOSURE.message}</p>
          </div>
          {GARAGE_AD.active && (
            <a
              href={GARAGE_AD.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/15 hover:bg-slate-950/25 border border-slate-950/20 font-semibold text-slate-950 transition-colors touch-manipulation"
            >
              <Car className="w-4 h-4 shrink-0" aria-hidden />
              <span>
                {GARAGE_AD.name} reste ouvert — {GARAGE_AD.urlLabel}
              </span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
