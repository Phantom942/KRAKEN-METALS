'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import FadeIn from './FadeIn';
import { faqItems } from '@/lib/faqData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 bg-slate-900/50">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 mb-6">
            <HelpCircle className="w-4 h-4 text-cyan-400" aria-hidden />
            <span className="text-sm text-slate-400">Questions fréquentes</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
            Kraken Metals en quelques réponses
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Tout ce que vous devez savoir sur notre atelier de soudage à Ivry-sur-Seine.
          </p>
        </FadeIn>

        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <FadeIn key={i} delay={i * 30}>
              <details
                className="group rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition-colors"
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-5 px-5 sm:px-6 text-left font-medium text-slate-200 hover:text-cyan-400 transition-colors">
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180`}
                    aria-hidden
                  />
                </summary>
                <div className="px-5 sm:px-6 pb-5 pt-0">
                  <p className="text-slate-400 leading-relaxed">{item.answer}</p>
                </div>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
