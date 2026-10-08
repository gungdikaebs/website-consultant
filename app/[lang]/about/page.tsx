import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isValidLocale, getDictionary } from '@/lib/content';
import { Locale } from '@/lib/content/types';
import TeamSection from '@/components/TeamSection';
import PageBreadcrumb from '@/components/PageBreadcrumb';

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
    <div className="py-12 sm:py-16 lg:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
      {/* 1. Header: Authoritative Editorial Opening */}
      <section className="space-y-8">
        <PageBreadcrumb
          primary={dict.about.breadcrumbPrimary || (validLang === 'id' ? 'Tentang 3.SEC' : 'About 3.SEC')}
          secondary={dict.about.breadcrumbSecondary || (validLang === 'id' ? 'Esensi & Prinsip Pendampingan' : 'Essence & Advisory Ethos')}
        />

        <div className="space-y-6">
          <h1 className="font-[family-name:var(--font-lora)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B192C] tracking-tight leading-[1.14]">
            {dict.about.h1}
          </h1>

          {/* Editorial Pull Quote */}
          <div className="border-l-2 border-amber-400 pl-6 sm:pl-8 py-1">
            <p className="text-lg sm:text-xl text-stone-700 font-normal leading-relaxed font-[family-name:var(--font-lora)] italic">
              &ldquo;{dict.about.profile}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 2. Architectural Photography Visual */}
      <section className="space-y-3">
        <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm bg-stone-100 group">
          <Image
            src="/images/about-workspace.jpg"
            alt="Suasana ruang kerja dan konsultasi 3.SEC Business, Tax & Digital Solution"
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover group-hover:scale-102 transition-transform duration-700"
          />
        </div>
        <div className="flex items-center justify-between text-xs text-stone-500 font-mono pt-1">
          <span>
            {validLang === 'id'
              ? 'Gbr 1.0 — Ruang Pertemuan Konsultasi Strategis'
              : 'Fig 1.0 — Strategic Consultation & Advisory Setting'}
          </span>
          <span className="hidden sm:inline text-stone-400">3.SEC Business, Tax &amp; Digital Solution</span>
        </div>
      </section>

      {/* 3. The Advisory Thesis: Purpose & Philosophy */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 pt-6 border-t border-stone-200">
        <div className="md:col-span-4 space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0284C7]">
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
          {dict.about.purposeBodySecondary && (
            <p className="pt-2">
              {dict.about.purposeBodySecondary}
            </p>
          )}
        </div>
      </section>

      {/* 4. Working Principles: Clean Editorial Manifesto List */}
      <section className="space-y-8 pt-6 border-t border-stone-200">
        <div className="space-y-2 max-w-xl">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0284C7]">
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
              <div className="md:col-span-2 font-mono text-xs text-stone-400 font-semibold tracking-wider">
                [{String(idx + 1).padStart(2, '0')}]
              </div>
              <div className="md:col-span-4">
                <h3 className="font-[family-name:var(--font-lora)] text-xl sm:text-2xl font-bold text-[#0B192C]">
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
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0284C7]">
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

          <div className="bg-[#FBFBF9] border border-stone-200/90 rounded-2xl p-6 sm:p-7 space-y-2.5">
            <h4 className="font-bold text-sm text-[#0B192C]">
              {validLang === 'id' ? 'Komitmen Etika & Ketepatan Kerja' : 'Ethical Standard & Delivery Quality'}
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {validLang === 'id'
                ? 'Kami tidak menggunakan klaim artifisial. Setiap rekomendasi pajak, rancangan sistem digital, dan kalkulasi penggajian disusun secara langsung oleh praktisi berpengalaman yang memahami regulasi dan dinamika operasional lapangan.'
                : 'We operate with candid rigor. Every tax advisory memorandum, digital system architecture, and payroll computation is prepared directly by experienced professionals who understand real-world regulatory and operational requirements.'}
            </p>
          </div>
        </div>
      </section>

      {/* 6. Meet the Team Carousel */}
      {dict.about.teamMembers && dict.about.teamMembers.length > 0 && (
        <TeamSection
          lang={validLang}
          eyebrow={dict.about.teamEyebrow}
          heading={dict.about.teamSectionHeading}
          subheading={dict.about.teamSectionSubheading}
          members={dict.about.teamMembers}
        />
      )}

      {/* 7. Closing CTA: Solid Editorial Card (No decorative gradients or AI glow effects) */}
      <section className="pt-8 sm:pt-12 border-t border-stone-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 py-8 sm:py-12 px-6 sm:px-10 rounded-2xl sm:rounded-3xl bg-white border border-stone-200/90 shadow-2xs">
          <div className="space-y-2 max-w-lg">
            <span className="font-mono text-xs font-bold tracking-widest text-[#0284C7] uppercase">
              {validLang === 'id' ? 'Langkah Awal' : 'Next Step'}
            </span>
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
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3 rounded-full bg-[#B91C1C] hover:bg-[#991B1B] text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all active:scale-95 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C]"
          >
            <span>{dict.common.cta.primary}</span>
            <span className="text-base font-sans">&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
