import type { Metadata } from 'next';
import { Lora, Plus_Jakarta_Sans, Geist_Mono, Caveat } from 'next/font/google';
import { notFound } from 'next/navigation';
import { isValidLocale, getDictionary, LOCALES } from '@/lib/content';
import { Locale } from '@/lib/content/types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
  return {
    title: dict.meta.homeTitle,
    description: dict.meta.homeDesc,
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
        <SmoothScroll>
          <GSAPReveal />
          <Header lang={validLang} dictionary={dict} />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer lang={validLang} dictionary={dict} />
        </SmoothScroll>
      </body>
    </html>
  );
}
