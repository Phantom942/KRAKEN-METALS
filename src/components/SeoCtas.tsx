import Link from 'next/link';
import { Phone, Zap, FileText } from 'lucide-react';
import { SITE } from '@/lib/constants';

type Props = {
  whatsappText: string;
  className?: string;
};

export default function SeoCtas({ whatsappText, className = '' }: Props) {
  const whatsappUrl = `https://wa.me/33648745668?text=${encodeURIComponent(whatsappText)}`;

  return (
    <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${className}`}>
      <a
        href={SITE.phoneHref}
        aria-label={`Appeler ${SITE.phone}`}
        className="inline-flex items-center justify-center gap-2 min-h-[48px] bg-cyan-500 hover:bg-cyan-400 active:scale-[0.98] text-slate-950 font-semibold px-7 py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/20 touch-manipulation"
      >
        <Phone className="w-5 h-5" aria-hidden />
        Appeler
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 min-h-[48px] border-2 border-emerald-500 hover:border-emerald-400 hover:bg-emerald-500/10 active:scale-[0.98] text-emerald-400 font-semibold px-7 py-4 rounded-xl transition-all touch-manipulation"
      >
        <Zap className="w-5 h-5" aria-hidden />
        WhatsApp
      </a>
      <Link
        href="/devis/"
        className="inline-flex items-center justify-center gap-2 min-h-[48px] border-2 border-slate-600 hover:border-cyan-400 active:scale-[0.98] text-slate-200 font-semibold px-7 py-4 rounded-xl transition-colors touch-manipulation"
      >
        <FileText className="w-5 h-5" aria-hidden />
        Devis
      </Link>
    </div>
  );
}

