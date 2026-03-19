import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { SITE } from '@/lib/constants';

const About = dynamic(() => import('@/components/About'), { loading: () => <section className="min-h-[400px]" /> });
const Services = dynamic(() => import('@/components/Services'), { loading: () => <section className="min-h-[400px]" /> });
const Contact = dynamic(() => import('@/components/Contact'), { loading: () => <section className="min-h-[400px]" /> });
const Footer = dynamic(() => import('@/components/Footer'));

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
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
