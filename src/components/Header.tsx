'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { SITE } from '@/lib/constants';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '#apropos', label: 'À Propos' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#hero') {
      window.history.replaceState(null, '', window.location.pathname || '/');
    }
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      const first = menuRef.current?.querySelector<HTMLElement>('a[href]');
      first?.focus();
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const menu = menuRef.current;
    if (!isMobileMenuOpen || !menu) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusables = menu.querySelectorAll<HTMLElement>('a[href], button');
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    menu.addEventListener('keydown', handleKeyDown);
    return () => menu.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const goToTop = (e: React.MouseEvent) => {
    if (window.location.hash === '#hero' || window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0 });
      window.history.replaceState(null, '', window.location.pathname || '/');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="/" onClick={goToTop} className="text-lg sm:text-xl font-bold tracking-tight metallic-text hover:opacity-90 transition-opacity py-3 -my-3">
            {SITE.name.toUpperCase()}
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={link.href === '/' ? goToTop : undefined} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                {link.label}
              </a>
            ))}
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-5 py-2.5 rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              <Phone size={18} />
              Appeler
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 -m-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-200 hover:text-cyan-400 transition-colors active:scale-95"
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-haspopup="menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div id="mobile-menu" ref={menuRef} className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-800 animate-fade-in animate-visible">
          <div className="px-4 py-4 pb-[calc(1rem+env(safe-area-inset-bottom))] flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { if (link.href === '/') goToTop(e); setIsMobileMenuOpen(false); }}
                className="py-3.5 px-2 -mx-2 text-slate-300 hover:text-cyan-400 active:bg-slate-800/50 rounded-lg transition-colors font-medium text-base"
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE.phoneHref}
              className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 active:scale-[0.98] text-slate-950 font-semibold px-5 py-4 rounded-xl transition-all mt-2 min-h-[48px]"
            >
              <Phone size={20} />
              Appeler
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
