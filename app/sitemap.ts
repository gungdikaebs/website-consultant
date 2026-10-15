import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/content/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/service', '/about', '/contact'];
  const now = new Date();

  return routes.flatMap((route) => [
    {
      url: `${SITE_URL}/id${route}`,
      lastModified: now,
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1.0 : route === '/service' ? 0.9 : 0.8,
      alternates: {
        languages: {
          id: `${SITE_URL}/id${route}`,
          en: `${SITE_URL}/en${route}`,
          'x-default': `${SITE_URL}/id${route}`,
        },
      },
    },
    {
      url: `${SITE_URL}/en${route}`,
      lastModified: now,
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1.0 : route === '/service' ? 0.9 : 0.8,
      alternates: {
        languages: {
          id: `${SITE_URL}/id${route}`,
          en: `${SITE_URL}/en${route}`,
          'x-default': `${SITE_URL}/id${route}`,
        },
      },
    },
  ]);
}
