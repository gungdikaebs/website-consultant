import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isValidLocale, getDictionary, getServices } from '@/lib/content';
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
    title: dict.meta.serviceTitle,
    description: dict.meta.serviceDesc,
  };
}

export default async function ServicePage({
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

  return (
    <div className="flex flex-col gap-16 sm:gap-24 lg:gap-32 py-12 sm:py-16 lg:py-20">
      {/* 1. Page Header & Quick Navigation with Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Intro & Anchor Navigation */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
              {validLang === 'id' ? 'Layanan 3.SEC / Direktori Layanan' : 'Layanan 3.SEC / Our Services'}
            </span>
            <h1 className="font-[family-name:var(--font-lora)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B192C] tracking-tight leading-[1.14]">
              {dict.service.h1}
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed font-normal">
              {dict.service.intro}
            </p>

            {/* In-page Anchor Navigation Pills */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono mb-3">
                {dict.service.navLabel}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {services.map((srv) => (
                  <a
                    key={srv.id}
                    href={`#${srv.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-300 text-xs sm:text-sm font-semibold text-[#0B192C] hover:border-[#0F766E] hover:text-[#0F766E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] shadow-2xs"
                  >
                    <span className="font-mono text-xs font-bold text-[#0F766E]">{srv.index}</span>
                    <span>{srv.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Image from Pinterest Reference */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/90 shadow-md bg-stone-100 group">
              <Image
                src="/images/service-hero-bg.jpg"
                alt="3.SEC Client Satisfaction & Strategic Partnership"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Detailed Service Sections with IDs for direct anchors */}
      <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {services.map((srv) => (
          <section
            key={srv.id}
            id={srv.id}
            className="scroll-mt-28 rounded-3xl bg-white border border-stone-200/90 p-8 sm:p-12 lg:p-14 shadow-xs"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
              {/* Left Column: Index, Title, and Context */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-stone-300">
                    {srv.index}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#F0FDFA] text-[#0F766E] border border-[#CCFBF1]">
                    {srv.tag}
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 className="font-[family-name:var(--font-lora)] text-2xl sm:text-3xl font-bold text-[#0B192C] tracking-tight">
                    {srv.title}
                  </h2>
                  <h3 className="text-lg font-semibold text-stone-700 leading-snug">
                    {srv.sectionHeading}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-stone-600">
                  {srv.sectionSummary}
                </p>

                {/* Section Specific Consultation CTA */}
                <div className="pt-4">
                  <Link
                    href={`/${validLang}/contact?service=${srv.id}`}
                    className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-full bg-[#0B192C] hover:bg-[#1E2E45] text-white font-semibold text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B192C]"
                  >
                    {srv.cta}
                  </Link>
                </div>
              </div>

              {/* Right Column: Scope & Deliverables */}
              <div className="lg:col-span-7 space-y-8 bg-stone-50/70 p-6 sm:p-8 rounded-2xl border border-stone-200/80">
                {/* Draft Scope */}
                <div className="space-y-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0F766E] font-mono">
                    {dict.service.scopeLabel}
                  </h4>
                  <ul className="space-y-3">
                    {srv.draftScope.map((item, idx) => {
                      const hasDivider = item.includes(' — ');
                      if (hasDivider) {
                        const [title, ...rest] = item.split(' — ');
                        const desc = rest.join(' — ');
                        return (
                          <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0 mt-2" />
                            <span>
                              <strong className="font-semibold text-[#0B192C]">{title}</strong>
                              <span className="text-stone-400 mx-1.5">&mdash;</span>
                              <span className="text-stone-600">{desc}</span>
                            </span>
                          </li>
                        );
                      }
                      return (
                        <li key={idx} className="flex items-start gap-3 text-sm text-stone-700 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Deliverables to discuss */}
                <div className="pt-6 border-t border-stone-200 space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
                    {dict.service.deliverablesLabel}
                  </h4>
                  <p className="text-sm leading-relaxed text-stone-600">
                    {srv.deliverables}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 3. Shared Collaboration Process & Visitor Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl bg-stone-100/70 border border-stone-200/90 text-[#0B192C] p-8 sm:p-12 lg:p-14 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
                {dict.service.sharedProcessHeading}
              </span>
              <h2 className="font-[family-name:var(--font-lora)] text-2xl sm:text-3xl font-bold tracking-tight text-[#0B192C]">
                {validLang === 'id' ? 'Tiga langkah kerja sama terpadu' : 'Three structured collaboration steps'}
              </h2>
            </div>

            <Link
              href={`/${validLang}/contact`}
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-full bg-[#0B192C] hover:bg-[#1E2E45] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs shrink-0 self-start sm:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B192C]"
            >
              <span>{validLang === 'id' ? 'Mulai Konsultasi' : 'Start Consultation'}</span>
              <span className="ml-1.5 font-sans">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dict.service.sharedProcess.map((stepText, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-stone-200/80 space-y-3 shadow-2xs hover:border-stone-300 transition-colors">
                <span className="font-mono text-xs text-[#0F766E] font-bold block">
                  {validLang === 'id' ? 'LANGKAH' : 'STEP'} 0{idx + 1}
                </span>
                <p className="text-sm text-stone-600 leading-relaxed font-normal">
                  {stepText}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-stone-200/70 text-xs text-stone-500">
            <p>
              * {dict.service.visitorNote}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
