import type { Metadata } from 'next';
import { Lora, Plus_Jakarta_Sans, Geist_Mono, Caveat } from 'next/font/google';
import { notFound } from 'next/navigation';
import { isValidLocale, getDictionary, LOCALES } from '@/lib/content';
import { Locale } from '@/lib/content/types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import SmoothScroll from '@/components/SmoothScroll';
import GSAPReveal from '@/components/GSAPReveal';
import '../globals.css';

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
});

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700'],
});

import { SITE_URL } from '@/lib/content/config';
import JsonLd from '@/components/JsonLd';

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    return {};
  }
  const dict = getDictionary(lang);
  const isId = lang === 'id';

  const keywords = isId
    ? [
        'konsultan pajak bali',
        'kantor konsultan pajak denpasar',
        'jasa pembukuan bali',
        'konsultan akuntansi bali',
        'jasa payroll bali',
        'payroll outsourcing bali',
        'pembuatan website bali',
        'konsultan digital bali',
        'tax consultant bali',
        'accounting bali',
        '3.SEC',
        '3.SEC solution',
        '3secsolution',
      ]
    : [
        'tax consultant bali',
        'accounting service bali',
        'business advisory bali',
        'payroll outsourcing bali',
        'digital solution consultant bali',
        'web development bali',
        'corporate tax indonesia',
        '3.SEC',
        '3.SEC solution',
        '3secsolution',
      ];

  const pageTitle = dict.meta.homeTitle;
  const pageDesc = dict.meta.homeDesc;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: pageTitle,
      template: '%s | 3.SEC Solution',
    },
    description: pageDesc,
    keywords,
    authors: [{ name: '3.SEC Business, Tax & Digital Solution', url: SITE_URL }],
    creator: '3.SEC Solution',
    publisher: '3.SEC Business, Tax & Digital Solution',
    category: 'Business & Financial Consulting',
    applicationName: '3.SEC Solution',
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages: {
        'id-ID': `${SITE_URL}/id`,
        'en-US': `${SITE_URL}/en`,
        'x-default': `${SITE_URL}/id`,
      },
    },
    icons: {
      icon: [
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon/logo.png', sizes: '192x192', type: 'image/png' },
      ],
      shortcut: '/icon.svg',
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    manifest: '/manifest.webmanifest',
    openGraph: {
      type: 'website',
      locale: isId ? 'id_ID' : 'en_US',
      alternateLocale: isId ? 'en_US' : 'id_ID',
      url: `${SITE_URL}/${lang}`,
      siteName: '3.SEC Business, Tax & Digital Solution',
      title: pageTitle,
      description: pageDesc,
      images: [
        {
          url: `${SITE_URL}/icon/logo.png`,
          width: 1024,
          height: 1024,
          alt: '3.SEC Business, Tax & Digital Solution',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDesc,
      images: [`${SITE_URL}/icon/logo.png`],
      creator: '@3secsolution',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const validLang = lang as Locale;
  const dict = getDictionary(validLang);

  return (
    <html
      lang={validLang}
      className={`${lora.variable} ${plusJakartaSans.variable} ${geistMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FBFBF9] text-[#334155] font-sans">
        <JsonLd lang={validLang} />
        <SmoothScroll>
          <GSAPReveal />
          <Header lang={validLang} dictionary={dict} />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer lang={validLang} dictionary={dict} />
          <FloatingWhatsApp lang={validLang} dictionary={dict} />
        </SmoothScroll>
      </body>
    </html>
  );
}
