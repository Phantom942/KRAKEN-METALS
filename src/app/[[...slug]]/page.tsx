import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

const About = dynamic(() => import('@/components/About'), { loading: () => <section className="min-h-[400px]" /> });
const Services = dynamic(() => import('@/components/Services'), { loading: () => <section className="min-h-[400px]" /> });
const Contact = dynamic(() => import('@/components/Contact'), { loading: () => <section className="min-h-[400px]" /> });
const Footer = dynamic(() => import('@/components/Footer'));

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
