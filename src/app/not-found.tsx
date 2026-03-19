import Link from 'next/link';
import { Wrench, Home, Phone, Zap, FileText, MapPin, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/constants';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-5 py-24 sm:py-32">
        <div className="text-center max-w-2xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 mb-8">
            <Wrench className="w-10 h-10 text-slate-500" aria-hidden />
          </div>
          <h1 className="text-7xl sm:text-8xl font-bold text-cyan-400/80 mb-4">404</h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-200 mb-2">
            Page introuvable
          </h2>
          <p className="text-slate-400 mb-2">
            Cette page n&apos;existe pas ou a été déplacée.
          </p>
          <p className="text-slate-500 text-sm mb-10">
            Vous êtes sur le site de KRAKEN METALS — soudage de précision à Ivry-sur-Seine.
            Voici les pages qui pourraient vous intéresser :
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
            <Link
              href="/"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                <Home className="w-6 h-6 text-cyan-400" aria-hidden />
              </div>
              <div>
                <p className="font-medium text-slate-200">Accueil</p>
                <p className="text-sm text-slate-500">Présentation de notre atelier</p>
              </div>
            </Link>
            <Link
              href="/urgences/"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 transition-colors">
                <Zap className="w-6 h-6 text-amber-400" aria-hidden />
              </div>
              <div>
                <p className="font-medium text-slate-200">Urgences</p>
                <p className="text-sm text-slate-500">Intervention sous 24h</p>
              </div>
            </Link>
            <Link
              href="/devis/"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                <FileText className="w-6 h-6 text-cyan-400" aria-hidden />
              </div>
              <div>
                <p className="font-medium text-slate-200">Demande de devis</p>
                <p className="text-sm text-slate-500">Formulaire gratuit, réponse sous 24h</p>
              </div>
            </Link>
            <Link
              href="/#contact"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                <Mail className="w-6 h-6 text-cyan-400" aria-hidden />
              </div>
              <div>
                <p className="font-medium text-slate-200">Contact</p>
                <p className="text-sm text-slate-500">Email, téléphone, adresse</p>
              </div>
            </Link>
          </div>

          <div className="rounded-xl bg-slate-900/50 border border-slate-800 p-4 sm:p-6 mb-10 text-left">
            <p className="text-sm font-medium text-slate-300 mb-3">Besoin d&apos;aide tout de suite ?</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                <Phone className="w-5 h-5 shrink-0" aria-hidden />
                {SITE.phone}
              </a>
              <a
                href={SITE.mapsUrlWeb}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <MapPin className="w-5 h-5 shrink-0" aria-hidden />
                {SITE.address}, {SITE.city}
              </a>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-4 rounded-xl transition-all"
          >
            <Home className="w-5 h-5" aria-hidden />
            Retour à l&apos;accueil
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
