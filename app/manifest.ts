import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '3.SEC Business, Tax & Digital Solution',
    short_name: '3.SEC Solution',
    description:
      'Firma penasihat dan konsultasi terpadu Tax & Accounting, Payroll & HR, serta Digital Solution di Bali.',
    start_url: '/id',
    display: 'standalone',
    background_color: '#0B192C',
    theme_color: '#0B192C',
    icons: [
      {
        src: '/icon/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
