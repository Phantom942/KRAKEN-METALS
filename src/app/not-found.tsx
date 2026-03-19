import Link from 'next/link';
import { Wrench, Home, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/constants';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-5 py-24 sm:py-32">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 mb-8">
            <Wrench className="w-10 h-10 text-slate-500" aria-hidden />
          </div>
          <h1 className="text-7xl sm:text-8xl font-bold text-cyan-400/80 mb-4">404</h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-200 mb-2">
            Page introuvable
          </h2>
          <p className="text-slate-400 mb-10">
            Cette page n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil ou contactez-nous directement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-4 rounded-xl transition-all"
            >
              <Home className="w-5 h-5" aria-hidden />
              Accueil
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 min-h-[48px] border-2 border-slate-600 hover:border-cyan-400 text-slate-200 font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden />
              {SITE.phone}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
