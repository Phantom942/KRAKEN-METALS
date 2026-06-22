import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import GarageAdFeatured from '@/components/GarageAdFeatured';
import Hero from '@/components/Hero';
import { SITE } from '@/lib/constants';
import { faqItems } from '@/lib/faqData';

const About = dynamic(() => import('@/components/About'), { loading: () => <section className="min-h-[400px]" /> });
const Services = dynamic(() => import('@/components/Services'), { loading: () => <section className="min-h-[400px]" /> });
const Contact = dynamic(() => import('@/components/Contact'), { loading: () => <section className="min-h-[400px]" /> });
const FAQ = dynamic(() => import('@/components/FAQ'), { loading: () => <section className="min-h-[200px]" /> });
const Footer = dynamic(() => import('@/components/Footer'));

/** FAQ Schema pour recommandations IA (ChatGPT, Perplexity, Google AI Overview). */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export function generateStaticParams() {
  return [{ slug: [] }, { slug: ['services'] }, { slug: ['contact'] }, { slug: ['apropos'] }];
}

export const metadata: Metadata = {
  alternates: {
    canonical: SITE.url.endsWith('/') ? SITE.url : `${SITE.url}/`,
  },
};

export default function CatchAllPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <Hero />
      <GarageAdFeatured />
      <About />
      <Services />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}
