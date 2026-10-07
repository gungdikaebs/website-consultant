import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isValidLocale, getDictionary, getServices } from '@/lib/content';
import { Locale } from '@/lib/content/types';
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

  // 3 Core Services Icons & Badges
  const serviceCardMeta = [
    {
      id: 'tax-accounting',
      iconBg: 'bg-sky-50 text-sky-600 border-sky-100',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'payroll',
      iconBg: 'bg-rose-50 text-rose-600 border-rose-100',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 'it',
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  // Why Choose Us Pillars Icons
  const whyIcons = [
    {
      bg: 'bg-rose-50 text-[#B91C1C] border-rose-100',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      bg: 'bg-sky-50 text-sky-600 border-sky-100',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      bg: 'bg-amber-50 text-amber-600 border-amber-100',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      bg: 'bg-red-50 text-red-600 border-red-100',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-16 sm:gap-24 lg:gap-32 pb-20">
      {/* 1. Hero Section: Refined Bali Regional Advisory Aesthetic */}
      <section className="relative pt-6 sm:pt-12 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/50 via-[#FBFBF9] to-white">
        {/* Subtle Background Organic Lines */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <svg
            className="absolute -top-24 right-0 w-[600px] h-[600px] text-amber-200/40 opacity-70"
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 200C250 80 450 120 580 250C710 380 620 520 480 580"
              stroke="#D97706"
              strokeWidth="2.5"
              strokeDasharray="6 8"
            />
            <path
              d="M160 160C320 60 520 140 620 300C700 440 580 560 420 590"
              stroke="#B91C1C"
              strokeWidth="1.5"
              opacity="0.3"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div data-gsap="fade-up" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Bold Headline & Actions */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2">
                <span className="md:pt-0 pt-8 font-mono text-xs sm:text-sm font-bold tracking-widest text-[#0284C7] uppercase">
                  {dict.home.heroEyebrow}
                </span>
              </div>

              {/* 2-Tone Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold tracking-tight leading-[1.12]">
                <span className="text-[#0B192C] block">
                  {dict.home.heroH1Lead || 'Empowering Business.'}
                </span>
                <span className="text-[#B91C1C] block">
                  {dict.home.heroH1Accent || 'Enabling Growth.'}
                </span>
              </h1>

              {/* Sub-headline / Body */}
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal max-w-xl">
                {dict.home.heroBody}
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                <Link
                  href={`/${validLang}/contact`}
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3 rounded-full bg-[#B91C1C] hover:bg-[#991B1B] text-white font-semibold text-sm shadow-md hover:shadow-xl transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C]"
                >
                  <span>{dict.common.cta.consultation}</span>
                  <span className="text-base font-sans">&rarr;</span>
                </Link>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B192C] hover:text-[#B91C1C] transition-colors group py-2"
                >
                  <span>{dict.common.cta.services}</span>
                  <span className="text-[#D97706] group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Right Column: Ulun Danu Beratan Bali Temple with Flowing Ribbon & Gold Script */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
                {/* Background Doubled Photo (Layered Stack Card) */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-full h-full rounded-[32px] sm:rounded-[44px] overflow-hidden border-4 border-white/90 shadow-xl bg-slate-900 rotate-2 pointer-events-none">
                  <Image
                    src="/images/hero-todo.png"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center opacity-85"
                  />
                  <div className="absolute inset-0 bg-[#0B192C]/20 pointer-events-none" />
                </div>

                {/* Main Hero Photo Container */}
                <div className="relative z-10 aspect-[4/3] rounded-[32px] sm:rounded-[44px] overflow-hidden border-4 border-white shadow-2xl bg-slate-900 group">
                  <Image
                    src="/images/hero-todo.png"
                    alt="Digital Business Solution &amp; Task Management - 3.SEC Business, Tax &amp; Digital Solution"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/25 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Handwritten Script Badge: "Your Growth, Our Priority" */}
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Floating Service Cards: The 3 Core Pillars (Tax & Accounting, Payroll & HR, Digital Solution) */}
      <section id="services" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-10 sm:-mt-16 relative z-30">
        <div data-gsap="stagger-group" className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((srv, idx) => {
            const meta = serviceCardMeta[idx] || serviceCardMeta[0];
            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Icon with Pastel Background */}
                  <div className={`w-13 h-13 rounded-2xl flex items-center justify-center border ${meta.iconBg} shadow-2xs`}>
                    {meta.icon}
                  </div>

                  {/* Title & Tag */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-600 block">
                      {srv.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] tracking-tight group-hover:text-[#B91C1C] transition-colors">
                      {srv.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-stone-600 leading-relaxed font-normal">
                    {srv.shortDesc}
                  </p>
                </div>

                {/* Card CTA: Learn More */}
                <div className="pt-6 border-t border-stone-100 mt-6">
                  <Link
                    href={`/${validLang}/service#${srv.id}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#B91C1C] group-hover:text-[#991B1B] transition-colors"
                  >
                    <span>{dict.common.cta.learnMore || (isId ? 'selengkapnya' : 'Learn More')}</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. About Section: Professional Support for Your Business Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div data-gsap="fade-up" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Organic Workspace Photo with Golden Outline & Handwritten Note */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-[32px] sm:rounded-[40px] overflow-hidden border-2 border-amber-300/80 shadow-lg bg-stone-100 group">
              <Image
                src="/images/about-desk.jpg"
                alt="Workspace 3.SEC Business, Tax & Digital Solution"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

           
          </div>

          {/* Right Column: Narrative & Learn More */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs font-bold tracking-widest text-[#0284C7] uppercase">
                {dict.home.aboutEyebrow || (isId ? 'TENTANG 3.SEC' : 'ABOUT 3.SEC')}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight leading-[1.18]">
              {dict.home.aboutHeadingLead || (isId ? 'Dukungan Profesional untuk' : 'Professional Support for')}{' '}
              <span className="text-[#D97706] block sm:inline">
                {dict.home.aboutHeadingAccent || (isId ? 'Perjalanan Bisnis Anda' : 'Your Business Journey')}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal max-w-2xl">
              {dict.home.aboutSummary || dict.about.profile}
            </p>

            <div className="pt-2">
              <Link
                href={`/${validLang}/about`}
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-full border border-[#D97706] hover:border-[#B45309] bg-white hover:bg-amber-50/50 text-[#0B192C] font-semibold text-xs sm:text-sm transition-all shadow-2xs"
              >
                <span>{dict.common.cta.learnMore || (isId ? 'Selengkapnya' : 'Learn More')}</span>
                <span className="ml-2 font-sans">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section: Practical Solutions. Lasting Value with White Background & Pinterest Image */}
      <section id="why-us" className="relative scroll-mt-24 w-full py-16 sm:py-24 bg-white border-y border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-gsap="fade-up" className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
            <span className="font-mono text-xs font-bold tracking-widest text-[#0284C7] uppercase">
              {dict.home.whyEyebrow || (isId ? 'MENGAPA MEMILIH KAMI' : 'WHY CHOOSE US')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] tracking-tight">
              {dict.home.whyHeadingLead || (isId ? 'Solusi Praktis.' : 'Practical Solutions.')}{' '}
              <span className="text-[#D97706]">
                {dict.home.whyHeadingAccent || (isId ? 'Nilai Berkelanjutan' : 'Lasting Value')}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* 4 Pillars in a 2x2 grid */}
            <div data-gsap="stagger-group" className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {(dict.home.whyPillars || [
                {
                  title: isId ? 'Integritas' : 'Integrity',
                  desc: isId ? 'Kami mengedepankan kepercayaan dan transparansi di setiap langkah.' : 'We value trust and transparency in every step.',
                },
                {
                  title: isId ? 'Solusi Tepat Guna' : 'Tailored Solutions',
                  desc: isId ? 'Setiap bisnis memiliki keunikan, begitu pula strategi yang kami tawarkan.' : 'Every business is unique, so are our strategies.',
                },
                {
                  title: isId ? 'Tim Profesional' : 'Professional Team',
                  desc: isId ? 'Berpengalaman, responsif, dan siap mendampingi kebutuhan Anda.' : 'Experienced, responsive, and ready to help.',
                },
                {
                  title: isId ? 'Kemitraan Jangka Panjang' : 'Long-Term Partnership',
                  desc: isId ? 'Keberhasilan Anda adalah tujuan jangka panjang kami.' : 'Your success is our long-term goal.',
                },
              ]).map((pillar, idx) => {
                const iconMeta = whyIcons[idx] || whyIcons[0];
                return (
                  <div
                    key={idx}
                    className="bg-[#FBFBF9] hover:bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-amber-300/80 transition-all duration-300 text-center flex flex-col items-center space-y-4 group"
                  >
                    <div className={`w-13 h-13 rounded-2xl flex items-center justify-center border ${iconMeta.bg} shadow-2xs group-hover:scale-110 transition-transform`}>
                      {iconMeta.icon}
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-[#0B192C] tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pinterest Reference Photo */}
            <div className="lg:col-span-5">
              <div className="relative aspect-square w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/90 shadow-md bg-stone-100 group">
                <Image
                  src="/images/why-us-bg.jpg"
                  alt="3.SEC Business Advisory & Strategic Growth"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Clients / Sector Credibility Marquee */}
      {/* <ClientsGrid
        lang={validLang}
        eyebrow={dict.home.clientsEyebrow}
        heading={dict.home.clientsHeading}
        subheading={dict.home.clientsSubheading}
        clients={dict.home.clientsList}
      /> */}

      {/* 6. Testimonials Carousel: Authentic Client Voice */}
      <TestimonialsSection
        eyebrow={dict.home.testimonialsEyebrow}
        heading={dict.home.testimonialsHeading}
        subheading={dict.home.testimonialsSubheading}
        testimonials={dict.home.testimonialsList}
      />

      {/* 7. Comprehensive FAQ Section */}
      <FAQAccordion
        lang={validLang}
        heading={dict.home.faqHeading}
        subheading={dict.home.faqIntro}
        items={dict.home.faqs}
      />

      {/* 8. Office Location & Map Section */}
      <section id="location" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-8 sm:space-y-10">
          {/* Header */}
          <div data-gsap="fade-up" className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs font-bold tracking-widest text-[#0284C7] uppercase">
              {dict.home.locationEyebrow || (isId ? 'LOKASI KAMI' : 'OUR LOCATION')}
            </span>
            <h2 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B192C] tracking-tight">
              {dict.home.locationHeading || (isId ? 'Kantor & Area Layanan' : 'Office & Advisory Base')}
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl mx-auto">
              {dict.home.locationSubheading ||
                (isId
                  ? 'Berbasis di Bali, Indonesia — siap mendampingi kebutuhan konsultasi langsung maupun koordinasi jarak jauh untuk bisnis Anda.'
                  : 'Based in Bali, Indonesia — available for in-person meetings and remote advisory sessions for your business.')}
            </p>
          </div>

          {/* Map Container / Iframe Slot */}
          <div className="w-full md:w-[80%] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm bg-stone-100 relative">
            {/* 
              ============================================================
              SLOT IFRAME GOOGLE MAPS
              ============================================================
            */}
            <iframe
              title="Lokasi Kantor 3.SEC - Pemogan, Denpasar Selatan, Bali"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2407.8053938919397!2d115.19098815479545!3d-8.697707124426275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2412bc5bbb48d%3A0x5a3d4fff0021ac9e!2sGg.%20Ratna%20Sari%20II%20No.16%2C%20Pemogan%2C%20Denpasar%20Selatan%2C%20Kota%20Denpasar%2C%20Bali%2080221!5e0!3m2!1sid!2sid!4v1791371404431!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-[360px] sm:h-[450px] lg:h-[500px] border-0 block"
            />
          </div>

          {/* Location Meta Details */}
          <div className="w-full md:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-1.5">
              <span className="font-mono text-xs font-bold text-[#0284C7] uppercase block">
                {isId ? 'Alamat Kantor' : 'Office Address'}
              </span>
              <p className="text-sm font-semibold text-[#0B192C]">
                Gg. Ratna Sari II No.16, Pemogan
              </p>
              <p className="text-xs text-stone-500">
                Denpasar Selatan, Bali 80221
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-1.5">
              <span className="font-mono text-xs font-bold text-[#0284C7] uppercase block">
                {isId ? 'Jadwal Pertemuan' : 'Consultation Hours'}
              </span>
              <p className="text-sm font-semibold text-[#0B192C]">
                {isId ? 'Senin – Jumat (By Appointment)' : 'Mon – Fri (By Appointment)'}
              </p>
              <p className="text-xs text-stone-500">
                {isId ? 'Konfirmasi jadwal via WhatsApp' : 'Scheduled via WhatsApp'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
