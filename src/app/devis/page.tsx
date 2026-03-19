'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/constants';

const PROJECT_TYPES = [
  { value: '', label: 'Sélectionnez un type de projet' },
  { value: 'ferronnerie', label: 'Ferronnerie (portail, rampe, garde-corps…)' },
  { value: 'metallerie', label: 'Métallerie / assemblage' },
  { value: 'reparation', label: 'Réparation / dépannage' },
  { value: 'tuyauterie', label: 'Tuyauterie industrielle' },
  { value: 'piece-sur-mesure', label: 'Pièce sur mesure / prototype' },
  { value: 'autre', label: 'Autre' },
];

export default function DevisPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const nom = formData.get('nom') as string;
    const telephone = formData.get('telephone') as string;
    const email = formData.get('email') as string;
    const typeProjet = formData.get('typeProjet') as string;
    const message = formData.get('message') as string;
    const urgence = formData.get('urgence') === 'on';

    const typeLabel = PROJECT_TYPES.find((p) => p.value === typeProjet)?.label || typeProjet;

    const subject = `Devis - ${typeLabel}${urgence ? ' [URGENCE]' : ''}`;
    const body = [
      `Demande de devis depuis le site kraken-metals.fr`,
      '',
      `Nom : ${nom}`,
      `Téléphone : ${telephone}`,
      `Email : ${email}`,
      `Type de projet : ${typeLabel}`,
      urgence ? `Urgence : Oui` : '',
      '',
      `Description du projet :`,
      message,
    ]
      .filter(Boolean)
      .join('\n');

    const mailtoUrl = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setLoading(true);
    window.location.href = mailtoUrl;
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 500);
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <Header />

      <section className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 mb-6">
              <FileText className="w-4 h-4 text-cyan-400" aria-hidden />
              <span className="text-sm text-slate-400">Demande gratuite</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
              Demande de devis
            </h1>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Décrivez votre projet et nous vous recontacterons sous 24h.
            </p>
          </div>

          {sent ? (
            <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/30 p-8 text-center">
              <p className="text-cyan-400 font-semibold text-lg">
                Votre client mail s&apos;est ouvert.
              </p>
              <p className="mt-2 text-slate-400 text-sm">
                Envoyez l&apos;email pour finaliser votre demande. Nous vous répondrons rapidement.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                Modifier ma demande
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8"
            >
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-slate-300 mb-2">
                  Nom ou entreprise *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                  placeholder="Votre nom ou raison sociale"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-slate-300 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                    placeholder="06 12 34 56 78"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                    placeholder="votre@email.fr"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="typeProjet" className="block text-sm font-medium text-slate-300 mb-2">
                  Type de projet *
                </label>
                <select
                  id="typeProjet"
                  name="typeProjet"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                >
                  {PROJECT_TYPES.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Description du projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors resize-y min-h-[120px]"
                  placeholder="Décrivez votre projet : dimensions, matériaux, délai souhaité, photos si possible..."
                />
              </div>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="urgence"
                  className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-cyan-500 focus:ring-cyan-500/50"
                />
                <span className="text-sm text-slate-400">
                  Besoin d&apos;une intervention en urgence (sous 24h)
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto flex items-center justify-center gap-2 min-h-[48px] bg-cyan-500 hover:bg-cyan-400 disabled:opacity-70 text-slate-950 font-semibold px-8 py-4 rounded-xl transition-all touch-manipulation"
              >
                {loading ? (
                  'Ouverture de votre messagerie...'
                ) : (
                  <>
                    <Send className="w-5 h-5" aria-hidden />
                    Envoyer ma demande
                  </>
                )}
              </button>

              <p className="text-slate-500 text-xs">
                Votre demande ouvrira votre client mail. Envoyez l&apos;email pour nous contacter.
                Réponse sous 24h garantie.
              </p>
            </form>
          )}

          <div className="mt-8 text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              <ArrowRight className="w-4 h-4 rotate-180" aria-hidden />
              Retour au contact
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
