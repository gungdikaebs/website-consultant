import Link from 'next/link';
import { Locale, ClientItem } from '@/lib/content/types';

interface ClientsGridProps {
  eyebrow: string;
  heading: string;
  subheading: string;
  clients?: ClientItem[];
  lang: Locale;
}

interface BrandItem {
  id: string;
  name: string;
  category: string;
  accentColor: string;
  logo: React.ReactNode;
}

export default function ClientsGrid({
  eyebrow,
  heading,
  subheading,
  lang,
}: ClientsGridProps) {
  // Curated prominent global enterprise and tech brands
  const brandsRow1: BrandItem[] = [
    {
      id: 'google',
      name: 'Google',
      category: 'Cloud & Technology',
      accentColor: '#4285F4',
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
          <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
        </svg>
      ),
    },
    {
      id: 'github',
      name: 'GitHub',
      category: 'Developer Platform',
      accentColor: '#24292F',
      logo: (
        <svg className="w-5 h-5 shrink-0 fill-current text-[#24292F]" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    },
    {
      id: 'microsoft',
      name: 'Microsoft',
      category: 'Enterprise Software',
      accentColor: '#00A4EF',
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
          <path fill="#F25022" d="M1 1h10v10H1z"/>
          <path fill="#7FBA00" d="M13 1h10v10H13z"/>
          <path fill="#00A4EF" d="M1 13h10v10H1z"/>
          <path fill="#FFB900" d="M13 13h10v10H13z"/>
        </svg>
      ),
    },
    {
      id: 'amazon',
      name: 'Amazon',
      category: 'Global Commerce',
      accentColor: '#FF9900',
      logo: (
        <svg className="w-5 h-5 shrink-0 fill-current text-[#111]" viewBox="0 0 24 24">
          <path d="M13.92 15.65c-2.48 1.83-6.07 2.8-9.19 1.15-.43-.23-.84.27-.47.62 2.69 2.5 7.15 2.87 10.45 1.07.5-.27.05-.98-.79-2.84zM14.6 14.8c.27-.35 1.76.2 2.44.47.2.08.24.25.07.39-1.07.87-2.31 1.17-2.62.83-.35-.38-.2-1.31.11-1.69z"/>
          <path d="M12.9 6.2c-.44.62-.64 1.4-.64 2.34 0 2.23 1.1 3.51 2.92 3.51.98 0 1.76-.39 2.34-1.17v.98h2.07V6.44h-2.07v.97c-.58-.78-1.36-1.21-2.34-1.21-1.02 0-1.84.44-2.28 1z"/>
        </svg>
      ),
    },
    {
      id: 'stripe',
      name: 'Stripe',
      category: 'Financial Infrastructure',
      accentColor: '#635BFF',
      logo: (
        <svg className="w-5 h-5 shrink-0 fill-current text-[#635BFF]" viewBox="0 0 24 24">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.521.5 6.024.5 1.815 3.803 1.815 8.904c0 4.887 3.65 6.782 7.79 8.245 2.805 1.01 3.738 1.667 3.738 2.653 0 .977-.872 1.543-2.345 1.543-2.614 0-5.395-1.127-7.227-2.164L3 24.619c1.948.868 4.793 1.381 8.28 1.381 6.84 0 11.238-3.23 11.238-8.498 0-5.06-3.693-6.936-8.542-8.352z"/>
        </svg>
      ),
    },
    {
      id: 'spotify',
      name: 'Spotify',
      category: 'Digital Streaming',
      accentColor: '#1ED760',
      logo: (
        <svg className="w-5 h-5 shrink-0 fill-current text-[#1ED760]" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      ),
    },
  ];

  const brandsRow2: BrandItem[] = [
    {
      id: 'figma',
      name: 'Figma',
      category: 'Design Systems',
      accentColor: '#A259FF',
      logo: (
        <svg className="w-4 h-5 shrink-0" viewBox="0 0 24 36">
          <path fill="#0ACF83" d="M12 36c6.627 0 12-5.373 12-12V12H12a12 12 0 000 24z"/>
          <path fill="#A259FF" d="M0 24a12 12 0 0012 12V24H0z"/>
          <path fill="#F24E1E" d="M0 12A12 12 0 0012 0H0v12z"/>
          <path fill="#FF7262" d="M12 0h12v12H12V0z"/>
          <path fill="#1ABCFE" d="M12 12h12v12H12V12z"/>
        </svg>
      ),
    },
    {
      id: 'slack',
      name: 'Slack',
      category: 'Collaboration',
      accentColor: '#E01E5A',
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
          <path fill="#E01E5A" d="M5.04 14.77a2.52 2.52 0 10-2.52 2.52h2.52v-2.52zm1.26 0a2.52 2.52 0 105.04 0v-6.3a2.52 2.52 0 10-5.04 0v6.3z"/>
          <path fill="#36C5F0" d="M9.23 5.04a2.52 2.52 0 10-2.52-2.52v2.52h2.52zm0 1.26a2.52 2.52 0 100 5.04h6.3a2.52 2.52 0 100-5.04h-6.3z"/>
          <path fill="#2EB67D" d="M18.96 9.23a2.52 2.52 0 102.52-2.52h-2.52v2.52zm-1.26 0a2.52 2.52 0 10-5.04 0v6.3a2.52 2.52 0 105.04 0v-6.3z"/>
          <path fill="#ECB22E" d="M14.77 18.96a2.52 2.52 0 102.52 2.52v-2.52h-2.52zm0-1.26a2.52 2.52 0 100-5.04h-6.3a2.52 2.52 0 100 5.04h6.3z"/>
        </svg>
      ),
    },
    {
      id: 'notion',
      name: 'Notion',
      category: 'Connected Workspace',
      accentColor: '#000000',
      logo: (
        <svg className="w-5 h-5 shrink-0 fill-current text-[#000]" viewBox="0 0 24 24">
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.093-.373L18.423 2.39c-.56-.42-1.307-.84-2.427-.746L3.805 2.53c-.56.046-.653.373-.42.606l1.074 1.072zm-1.12 3.826v13.806c0 .746.373 1.026 1.213.98l14.288-.84c.84-.047 1.073-.513 1.073-1.166V6.961c0-.653-.28-.933-.886-.886l-14.8.886c-.607.047-.889.373-.889.873zm13.494 1.166l.094 11.288c-.56.28-1.12.42-1.587.42-.747 0-.98-.233-1.54-.933l-5.694-8.864v8.864H6.326V9.108c.607-.327 1.26-.467 1.82-.467.84 0 1.26.327 1.774 1.026l5.507 8.398V9.201h1.402z"/>
        </svg>
      ),
    },
    {
      id: 'hubspot',
      name: 'HubSpot',
      category: 'CRM & Marketing',
      accentColor: '#FF7A59',
      logo: (
        <svg className="w-5 h-5 shrink-0 fill-current text-[#FF7A59]" viewBox="0 0 24 24">
          <path d="M18.16 8.52V6.15a2.22 2.22 0 10-1.78 0v2.37a5.53 5.53 0 00-2.85 1.75L7.96 6.84a2.28 2.28 0 10-1.28 1.23l5.63 3.48a5.57 5.57 0 00-.09 1.02c0 .35.03.69.1 1.02l-5.63 3.48a2.28 2.28 0 101.28 1.23l5.57-3.43a5.53 5.53 0 002.85 1.75v2.37a2.22 2.22 0 101.78 0v-2.37a5.57 5.57 0 000-10.74zm-.89-5.46a.89.89 0 110 1.78.89.89 0 010-1.78zM5.56 8.89a.89.89 0 110-1.78.89.89 0 010 1.78zm0 10a.89.89 0 110-1.78.89.89 0 010 1.78zm11.71 2.22a.89.89 0 110-1.78.89.89 0 010 1.78zM17.27 15a3.34 3.34 0 110-6.67 3.34 3.34 0 010 6.67z"/>
        </svg>
      ),
    },
    {
      id: 'paypal',
      name: 'PayPal',
      category: 'Digital Payments',
      accentColor: '#0079C1',
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
          <path fill="#003087" d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944 1.95a.8.8 0 01.79-.677h7.25c3.212 0 5.463 1.34 5.922 4.195.457 2.84-1.127 5.37-4.108 5.943l-.707.098a.8.8 0 00-.69.79l-.78 4.935-.045.24a.8.8 0 01-.79.663H7.076z"/>
          <path fill="#0079C1" d="M9.227 12.35l.89-5.632a.8.8 0 01.79-.678h5.36c2.756 0 4.58 1.15 4.975 3.595.392 2.438-.968 4.61-3.526 5.102l-.608.084a.8.8 0 00-.69.79l-.82 5.18-.045.24a.8.8 0 01-.79.663H6.877a.641.641 0 01-.633-.74l1.32-8.358a.8.8 0 01.79-.677h.873a.8.8 0 00.773-.629z"/>
        </svg>
      ),
    },
    {
      id: 'miro',
      name: 'Miro',
      category: 'Visual Workspace',
      accentColor: '#050038',
      logo: (
        <svg className="w-5 h-5 shrink-0 fill-current text-[#050038]" viewBox="0 0 24 24">
          <path d="M18.73 3.65l-3.21 4.67 3.2 12.03h3.81L18.73 3.65zm-6.72 0l-3.2 4.67 3.2 12.03h3.81L12.01 3.65zm-6.72 0L2.08 8.32l3.2 12.03H9.1L5.29 3.65z"/>
        </svg>
      ),
    },
  ];

  // Quadruple loops ensure continuous, gapless marquee scrolling across all screen sizes
  const row1Loop = [...brandsRow1, ...brandsRow1, ...brandsRow1, ...brandsRow1];
  const row2Loop = [...brandsRow2, ...brandsRow2, ...brandsRow2, ...brandsRow2];

  return (
    <section className="w-full py-8 overflow-hidden">
      {/* Centered Section Header inspired by reference image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14">
        <div data-gsap="fade-up" className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
              {eyebrow}
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B192C] tracking-tight leading-[1.18]">
            {heading}
          </h2>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>
      </div>

      {/* Sliding Marquee Showcase (2 Rows moving in opposite directions) */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Left & Right Gradient Fade Masks */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-40 z-20 bg-gradient-to-r from-[#FBFBF9] via-[#FBFBF9]/80 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-40 z-20 bg-gradient-to-l from-[#FBFBF9] via-[#FBFBF9]/80 to-transparent"
          aria-hidden="true"
        />

        {/* Row 1: Sliding Left */}
        <div className="flex w-max gap-4 sm:gap-6 animate-marquee-left mb-4 sm:mb-6">
          {row1Loop.map((brand, idx) => (
            <div
              key={`row1-${idx}`}
              className="group relative bg-white border border-stone-200/90 rounded-2xl shadow-2xs hover:shadow-md hover:border-stone-300 transition-all duration-300 min-w-[210px] sm:min-w-[250px] h-[82px] sm:h-[94px] px-6 py-4 flex items-center gap-3.5 shrink-0 overflow-hidden select-none"
            >
              {/* Top Accent Line on Hover (matching brand accent color) */}
              <span
                className="absolute top-0 inset-x-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: brand.accentColor }}
              />

              {/* Brand Logo SVG */}
              <div className="w-10 h-10 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                {brand.logo}
              </div>

              {/* Brand Name & Domain */}
              <div className="min-w-0 flex-1">
                <span className="font-[family-name:var(--font-lora)] text-base sm:text-lg font-bold text-[#0B192C] tracking-tight group-hover:text-[#0F766E] transition-colors block truncate">
                  {brand.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-stone-400 group-hover:text-stone-600 transition-colors block truncate">
                  {brand.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Sliding Right */}
        <div className="flex w-max gap-4 sm:gap-6 animate-marquee-right">
          {row2Loop.map((brand, idx) => (
            <div
              key={`row2-${idx}`}
              className="group relative bg-white border border-stone-200/90 rounded-2xl shadow-2xs hover:shadow-md hover:border-stone-300 transition-all duration-300 min-w-[210px] sm:min-w-[250px] h-[82px] sm:h-[94px] px-6 py-4 flex items-center gap-3.5 shrink-0 overflow-hidden select-none"
            >
              {/* Top Accent Line on Hover */}
              <span
                className="absolute top-0 inset-x-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: brand.accentColor }}
              />

              {/* Brand Logo SVG */}
              <div className="w-10 h-10 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                {brand.logo}
              </div>

              {/* Brand Name & Domain */}
              <div className="min-w-0 flex-1">
                <span className="font-[family-name:var(--font-lora)] text-base sm:text-lg font-bold text-[#0B192C] tracking-tight group-hover:text-[#0F766E] transition-colors block truncate">
                  {brand.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-stone-400 group-hover:text-stone-600 transition-colors block truncate">
                  {brand.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Subtle Consultation Prompt */}
      <div className="text-center pt-8">
        <Link
          href={`/${lang}/contact`}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0F766E] hover:text-[#0B192C] transition-colors group"
        >
          <span>
            {lang === 'id'
              ? 'Ingin bermitra dengan 3.SEC? Diskusikan kebutuhan Anda'
              : 'Interested in partnering with 3.SEC? Discuss your requirements'}
          </span>
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
