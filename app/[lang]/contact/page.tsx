import { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale, getDictionary } from '@/lib/content';
import { Locale } from '@/lib/content/types';
import ContactSelector from '@/components/ContactSelector';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.meta.contactTitle,
    description: dict.meta.contactDesc,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const validLang = lang as Locale;
  const dict = getDictionary(validLang);

  return (
    <div className="flex flex-col gap-12 sm:gap-16 py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* 1. Header & Lead */}
      <section className="max-w-3xl space-y-4">
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
          Kontak & Konsultasi / Contact
        </span>
        <h1 className="font-[family-name:var(--font-lora)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B192C] tracking-tight leading-[1.14]">
          {dict.contact.h1}
        </h1>
        <p className="text-lg sm:text-xl text-stone-600 leading-relaxed font-normal">
          {dict.contact.intro}
        </p>
      </section>

      {/* 2. Interactive Selector & WhatsApp Contact Surface */}
      <Suspense fallback={<div className="h-96 w-full rounded-2xl bg-stone-100 animate-pulse" />}>
        <ContactSelector lang={validLang} dictionary={dict} />
      </Suspense>
    </div>
  );
}
