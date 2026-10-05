import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isValidLocale, getDictionary, getServices } from '@/lib/content';
import { Locale } from '@/lib/content/types';
import ServiceCard from '@/components/ServiceCard';
import FAQAccordion from '@/components/FAQAccordion';
import ClientsGrid from '@/components/ClientsGrid';
import TestimonialsSection from '@/components/TestimonialsSection';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.meta.homeTitle,
    description: dict.meta.homeDesc,
  };
}

export default async function HomePage({
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
  const services = getServices(validLang);
  const isId = validLang === 'id';

  // 4-Column Credibility Metrics (inspired by Navis reference)
  const heroMetrics = isId ? [
    { value: '3-in-1', label: 'Pilar Terpadu', desc: 'Tax & Accounting, IT Consultant, dan Payroll dalam satu tim.' },
    { value: '1 Kontak', label: 'Titik Koordinasi', desc: 'Satu saluran terintegrasi tanpa fragmentasi komunikasi.' },
    { value: '100%', label: 'Kepatuhan Regulasi', desc: 'Akurasi pelaporan, standar SAK/IFRS, dan keamanan data.' },
    { value: 'Global', label: 'Skala Layanan', desc: 'Mendukung operasional bisnis, startup, dan enterprise modern.' },
  ] : [
    { value: '3-in-1', label: 'Unified Pillars', desc: 'Tax & Accounting, IT, and Payroll coordinated under one partner.' },
    { value: '1 Point', label: 'Strategic Contact', desc: 'Single point of contact without fragmented vendor friction.' },
    { value: '100%', label: 'Regulatory Adherence', desc: 'Verified accounting standards, strict compliance, and data security.' },
    { value: 'Global', label: 'Scalable Scope', desc: 'Designed for international ventures, startups, and growing enterprises.' },
  ];

  return (
    <div className="flex flex-col gap-20 sm:gap-28 lg:gap-36 pb-20">
      {/* 1. Hero Section: Clean Light Modern Consulting (Refined Aesthetic matching Navis) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-4 w-full space-y-12 sm:space-y-16">
        {/* Asymmetric Split Header Row: Top-Aligned with Precise Baseline */}
        <div data-gsap="fade-up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left: Modern Clean Headline */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-bold text-[#0B192C] tracking-tight leading-[1.12]">
              {isId ? 'Panduan strategis, solusi terpadu.' : 'Expert guidance, tailored solutions.'}
            </h1>
          </div>

          {/* Right: Top-aligned Sub-headline & Modern Pill Buttons */}
          <div className="lg:col-span-5 space-y-5 lg:pl-2 pt-1 lg:pt-2.5">
            <p className="text-[15px] sm:text-base text-stone-600 leading-relaxed font-normal">
              {isId
                ? 'Kembangkan operasional bisnis Anda melalui sinergi tiga pilar terpadu: Tax & Accounting, arsitektur IT, dan manajemen Payroll yang dirancang untuk mendukung pertumbuhan berkelanjutan.'
                : 'Easily adapt to changes and scale your operations with our integrated advisory infrastructure across Tax, IT, and Payroll, designed to support your business growth.'}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href={`/${validLang}/contact`}
                className="inline-flex items-center justify-center min-h-[46px] px-6 py-2.5 rounded-full bg-[#0B192C] hover:bg-[#1E2E45] text-white font-semibold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B192C]"
              >
                <span>{isId ? 'Mulai Konsultasi' : 'Get Started'}</span>
                <span className="ml-1.5 font-sans">&rarr;</span>
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center min-h-[46px] px-6 py-2.5 rounded-full border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-50 text-[#0B192C] font-semibold text-xs sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B192C]"
              >
                {isId ? 'Jelajahi Layanan' : 'Explore Services'}
              </a>
            </div>
          </div>
        </div>

        {/* Centerpiece Landscape Photo with Cinematic Aspect Ratio */}
        <div data-gsap="fade-up" className="space-y-10 sm:space-y-14">
          <div className="relative aspect-[16/9] sm:aspect-[2.2/1] lg:aspect-[2.4/1] w-full rounded-[28px] sm:rounded-[36px] overflow-hidden border border-stone-200/90 shadow-sm bg-stone-100 group">
            <Image
              src="/images/hero-consulting.jpg"
              alt="Kolaborasi tim konsultan profesional Wirasa Business & Advisory"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>

          {/* 4-Column Minimalist Metrics Bar */}
          <div data-gsap="stagger-group" className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-2">
            {heroMetrics.map((metric, idx) => (
              <div key={idx} className="space-y-1.5 border-l-2 border-[#0F766E]/40 pl-4 sm:pl-6">
                <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B192C] tracking-tight">
                  {metric.value}
                </div>
                <div className="font-semibold text-xs sm:text-sm text-[#0B192C]">
                  {metric.label}
                </div>
                <p className="text-xs text-stone-600 leading-relaxed max-w-xs">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Section: Discover our commitment to excellence (Split Alternating Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div data-gsap="fade-up" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Narrative Commitment */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full border border-stone-200 bg-stone-50 text-xs font-mono font-medium text-[#0F766E] uppercase tracking-wider">
              <span>{isId ? 'KOMITMEN / EXPERTISE' : 'EXPERTISE & COMMITMENT'}</span>
            </div>

            <h2 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B192C] tracking-tight leading-[1.16]">
              {isId
                ? 'Komitmen kami pada ketepatan dan pertumbuhan bisnis.'
                : 'Discover our commitment to business excellence.'}
            </h2>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              {dict.home.approachBody}
            </p>

            <div className="pt-2">
              <Link
                href={`/${validLang}/about`}
                className="inline-flex items-center justify-center min-h-[46px] px-6 py-2.5 rounded-full bg-[#0B192C] hover:bg-[#1E2E45] text-white font-semibold text-xs sm:text-sm transition-all active:scale-95 shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B192C]"
              >
                <span>{isId ? 'Pelajari Pendekatan Kami' : 'Learn About Us'}</span>
                <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Column: High Quality Discussion Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-stone-200/90 group bg-stone-100">
              <Image
                src="/images/commitment-discussion.jpg"
                alt="Pertemuan konsultasi strategis bersama Wirasa"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section: Explore our comprehensive service offerings */}
      <section id="services" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div data-gsap="fade-up" className="space-y-4 max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full border border-stone-200 bg-stone-50 text-xs font-mono font-medium text-[#0F766E] uppercase tracking-wider">
            <span>{isId ? 'BIDANG LAYANAN / SERVICES' : 'CORE OFFERINGS'}</span>
          </div>
          <h2 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B192C] tracking-tight leading-[1.16]">
            {isId ? 'Jelajahi tiga pilar layanan terpadu kami.' : 'Explore our comprehensive service offerings.'}
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            {dict.home.servicesIntro}
          </p>
        </div>

        {/* 3 Pillars Grid with Equal Prominence */}
        <div data-gsap="stagger-group" className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              lang={validLang}
            />
          ))}
        </div>
      </section>

      {/* 4. Clients Section: 2-Row Infinite Smooth Sliding Marquee */}
      <ClientsGrid
        eyebrow={dict.home.clientsEyebrow}
        heading={dict.home.clientsHeading}
        subheading={dict.home.clientsSubheading}
        clients={dict.home.clientsList}
        lang={validLang}
      />

      {/* 5. Testimonials Section: Verified Client Experiences */}
      <TestimonialsSection
        eyebrow={dict.home.testimonialsEyebrow}
        heading={dict.home.testimonialsHeading}
        subheading={dict.home.testimonialsSubheading}
        testimonials={dict.home.testimonialsList}
      />

      {/* 6. FAQ Section: 2-Column Clean Card Layout */}
      <FAQAccordion
        items={dict.home.faqs}
        lang={validLang}
        heading={dict.home.faqHeading}
        subheading={dict.home.faqIntro}
      />

      {/* 7. Closing Editorial CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="p-8 sm:p-14 lg:p-16 rounded-3xl bg-stone-100/70 border border-stone-200/90 text-[#0B192C] relative overflow-hidden">
          <div className="max-w-2xl space-y-6 relative z-10">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
              {isId ? 'Langkah Berikutnya' : 'Next Step'}
            </span>
            <h2 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl font-bold tracking-tight text-[#0B192C] leading-tight">
              {dict.home.closingHeading}
            </h2>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              {dict.home.closingBody}
            </p>
            <div className="pt-2">
              <Link
                href={`/${validLang}/contact`}
                className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 rounded-full bg-[#0B192C] hover:bg-[#1E2E45] text-white font-semibold text-sm transition-all active:scale-95 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B192C]"
              >
                {dict.common.cta.primary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
