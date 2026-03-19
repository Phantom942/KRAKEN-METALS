import { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';

const baseUrl = SITE.url;

/** Site one-page : URL canonique unique pour éviter le duplicate content. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ];
}
