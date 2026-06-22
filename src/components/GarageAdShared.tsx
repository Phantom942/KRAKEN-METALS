import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GARAGE_AD } from '@/lib/constants';

export function isExternalHref(href: string) {
  return href.startsWith('http://') || href.startsWith('https://');
}

export function AdCtaLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  if (isExternalHref(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/** Logo RED-K — dimensions fixes (évite le bug Image fill plein écran). */
export function RedkLogo({ size = 'featured' }: { size?: 'featured' | 'compact' }) {
  if (size === 'compact') {
    return (
      <Image
        src={GARAGE_AD.logo}
        alt={GARAGE_AD.logoAlt}
        width={56}
        height={56}
        className="h-14 w-14 shrink-0 rounded-xl border border-orange-400/25 bg-[#2a2a2a] object-contain p-1.5"
      />
    );
  }

  return (
    <Image
      src={GARAGE_AD.logo}
      alt={GARAGE_AD.logoAlt}
      width={320}
      height={320}
      className="h-36 w-36 sm:h-40 sm:w-40 shrink-0 rounded-2xl border border-orange-400/25 bg-[#2a2a2a] object-contain p-3 shadow-lg shadow-black/40"
    />
  );
}
