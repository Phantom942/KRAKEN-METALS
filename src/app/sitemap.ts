import { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';

const baseUrl = SITE.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${base}urgences/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
  ];
}
