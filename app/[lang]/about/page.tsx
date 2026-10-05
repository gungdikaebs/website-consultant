import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isValidLocale, getDictionary } from '@/lib/content';
import { Locale } from '@/lib/content/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.meta.aboutTitle,
    description: dict.meta.aboutDesc,
  };
}

export default async function AboutPage({
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
    <div className="py-12 sm:py-20 lg:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
      {/* 1. Monograph Header: Calm, Authoritative Editorial Opening */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-stone-200/90 pb-4">
          <span className="font-mono text-xs font-medium tracking-widest text-[#0F766E] uppercase">
            {validLang === 'id' ? 'Tentang Wirasa' : 'About Wirasa'}
          </span>
          <span className="text-stone-300 font-mono text-xs">/</span>
          <span className="font-mono text-xs tracking-wider text-stone-500 uppercase">
            {validLang === 'id' ? 'Eseni & Prinsip Pendampingan' : 'Essence & Advisory Ethos'}
          </span>
        </div>

        <div className="space-y-6">
          <h1 className="font-[family-name:var(--font-lora)] text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0B192C] tracking-tight leading-[1.14]">
            {dict.about.h1}
          </h1>

          <p className="text-xl sm:text-2xl text-stone-600 font-normal leading-relaxed max-w-3xl font-[family-name:var(--font-lora)] italic">
            &ldquo;{dict.about.profile}&rdquo;
          </p>
        </div>
      </section>

      {/* 2. Full-Width Architectural Visual: Pure Photography without Floating Gimmicks */}
      <section className="space-y-4">
        <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/80 bg-stone-100">
          <Image
            src="/images/about-workspace.jpg"
            alt="Suasana ruang kerja dan konsultasi Wirasa Business & Advisory"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-between text-xs text-stone-600 font-mono pt-1">
          <span>
            {validLang === 'id'
              ? 'Gbr 1.0 — Ruang Pertemuan Konsultasi Strategis'
              : 'Fig 1.0 — Strategic Consultation & Advisory Setting'}
          </span>
          <span className="hidden sm:inline">Wirasa Business &amp; Advisory</span>
        </div>
      </section>

      {/* 3. The Advisory Thesis: Sinergi Tiga Pilar */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 pt-6 border-t border-stone-200">
        <div className="md:col-span-4 space-y-3">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
            {validLang === 'id' ? 'Tujuan & Filosofi' : 'Purpose & Philosophy'}
          </span>
          <h2 className="font-[family-name:var(--font-lora)] text-2xl sm:text-3xl font-bold text-[#0B192C] leading-snug">
            {dict.about.purposeHeading}
          </h2>
        </div>

        <div className="md:col-span-8 space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg font-normal">
          <p>
            {dict.about.purposeBody}
          </p>
          <p className="text-stone-600 text-sm sm:text-base">
            {validLang === 'id'
              ? 'Dalam lanskap bisnis modern, pemisahan yang kaku antara pelaporan pajak, arsitektur IT, dan tata kelola penggajian sering kali menimbulkan gesekan koordinasi. Kami menghubungkan ketiganya agar para pendiri bisnis dapat memfokuskan energi pada pertumbuhan tanpa mengabaikan kepatuhan dan keandalan sistem.'
              : 'In modern commerce, rigid separations between tax compliance, IT systems, and payroll management often generate costly friction. We integrate these core pillars so founders can focus their energy on core growth while maintaining rigorous compliance and system stability.'}
          </p>
        </div>
      </section>

      {/* 4. Working Principles: Clean Editorial Manifesto List (No AI badges or generic cards) */}
      <section className="space-y-10 pt-6 border-t border-stone-200">
        <div className="space-y-2 max-w-xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
            {validLang === 'id' ? 'Prinsip Kerja' : 'Working Principles'}
          </span>
          <h2 className="font-[family-name:var(--font-lora)] text-2xl sm:text-3xl font-bold text-[#0B192C]">
            {dict.about.approachHeading}
          </h2>
        </div>

        <div className="divide-y divide-stone-200">
          {dict.about.approachPoints.map((point, idx) => (
            <div
              key={idx}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group"
            >
              <div className="md:col-span-2 font-mono text-xs text-stone-600 font-semibold tracking-wider">
                [{String(idx + 1).padStart(2, '0')}]
              </div>
              <div className="md:col-span-4">
                <h3 className="font-[family-name:var(--font-lora)] text-xl sm:text-2xl font-bold text-[#0B192C] group-hover:text-[#0F766E] transition-colors">
                  {point.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-stone-600 leading-relaxed text-sm sm:text-base font-normal">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Team Statement: Grounded & Authentic Experience */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 pt-6 border-t border-stone-200">
        <div className="md:col-span-4 space-y-3">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
            {validLang === 'id' ? 'Kredibilitas Praktik' : 'Professional Grounding'}
          </span>
          <h2 className="font-[family-name:var(--font-lora)] text-2xl sm:text-3xl font-bold text-[#0B192C] leading-snug">
            {dict.about.teamHeading}
          </h2>
        </div>

        <div className="md:col-span-8 space-y-6">
          <p className="text-stone-700 leading-relaxed text-base sm:text-lg">
            {dict.about.teamBody}
          </p>

          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-6 sm:p-7 space-y-3">
            <h4 className="font-semibold text-sm text-[#0B192C]">
              {validLang === 'id' ? 'Komitmen Etika & Ketepatan Kerja' : 'Ethical Standard & Delivery Quality'}
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {validLang === 'id'
                ? 'Kami tidak menggunakan klaim artifisial. Setiap rekomendasi pajak, spesifikasi teknis IT, dan kalkulasi penggajian disusun secara langsung oleh praktisi berpengalaman yang memahami regulasi dan dinamika operasional lapangan.'
                : 'We operate with candid rigor. Every tax advisory memorandum, technical system architecture, and payroll computation is prepared directly by experienced professionals who understand real-world regulatory and operational requirements.'}
            </p>
          </div>
        </div>
      </section>

      {/* 6. Dignified, Quiet Closing (No screaming sales banner) */}
      <section className="pt-12 sm:pt-16 border-t border-stone-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 py-8 sm:py-12 px-6 sm:px-10 rounded-2xl bg-stone-100/70 border border-stone-200/90">
          <div className="space-y-2 max-w-lg">
            <h3 className="font-[family-name:var(--font-lora)] text-2xl sm:text-3xl font-bold text-[#0B192C] tracking-tight">
              {dict.about.closingCta}
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              {validLang === 'id'
                ? 'Percakapan awal membantu kami memahami konteks bisnis Anda sebelum membahas ruang lingkup pekerjaan.'
                : 'An exploratory dialogue helps us understand your business context before establishing clear scopes.'}
            </p>
          </div>
          <Link
            href={`/${validLang}/contact`}
            className="inline-flex items-center justify-center min-h-[48px] px-7 py-3 rounded-full bg-[#0B192C] hover:bg-[#1E2E45] text-white font-semibold text-sm transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B192C]"
          >
            {dict.common.cta.primary}
          </Link>
        </div>
      </section>
    </div>
  );
}
