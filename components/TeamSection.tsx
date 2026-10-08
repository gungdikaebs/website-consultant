import Image from 'next/image';
import { Locale, TeamMember } from '@/lib/content/types';

interface TeamSectionProps {
  lang: Locale;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  members: TeamMember[];
}

export default function TeamSection({
  lang,
  eyebrow,
  heading,
  subheading,
  members,
}: TeamSectionProps) {
  const isId = lang === 'id';

  return (
    <section className="space-y-8 sm:space-y-10 pt-6 border-t border-stone-200">
      {/* Header Row: Title & Subtitle without Swiper controls */}
      <div className="space-y-3 max-w-2xl">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0B192C]" />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-stone-600">
            {eyebrow || (isId ? 'Tim Kami' : 'Our Team')}
          </span>
        </div>

        <h2 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B192C] tracking-tight leading-tight">
          {heading || (isId ? 'Kenali Tim 3.SEC' : 'Meet the 3.SEC team')}
        </h2>

        <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
          {subheading ||
            (isId
              ? 'Para profesional berdedikasi yang mendukung kesuksesan bisnis Anda dengan keahlian praktis, ketelitian, dan integritas kerja.'
              : 'Meet the talented individuals who drive our clients’ success with their practical expertise, rigor, and dedicated solutions.')}
        </p>
      </div>

      {/* Grid Layout flowing downwards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
        {members.map((member, idx) => (
          <div key={idx} className="group flex flex-col">
            {/* Portrait Image Container */}
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/80 shadow-2xs group-hover:shadow-md transition-all duration-300">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 20vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />

              {/* Subtle Gradient Shade on Mobile Overlay */}
              <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

              {/* Overlaid Floating White Card (< lg screens) */}
              <div className="lg:hidden absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 shadow-md border border-stone-100/90 flex items-center justify-between gap-2">
                <div className="min-w-0 pr-1">
                  <h3 className="font-[family-name:var(--font-lora)] font-bold text-xs sm:text-sm text-[#0B192C] truncate leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-stone-500 font-medium truncate mt-0.5">
                    {member.role}
                  </p>
                </div>

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn ${member.name}`}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-stone-100 hover:bg-[#0B192C] text-[#0B192C] hover:text-white flex items-center justify-center transition-colors shrink-0"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Text & Role Underneath Photo (Large screens lg:) */}
            <div className="hidden lg:flex pt-3 items-start justify-between gap-2">
              <div className="min-w-0 pr-1">
                <h3 className="font-[family-name:var(--font-lora)] font-bold text-sm sm:text-base text-[#0B192C] leading-snug">
                  {member.name}
                </h3>
                <p className="text-xs text-stone-500 font-medium mt-0.5">
                  {member.role}
                </p>
              </div>

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn ${member.name}`}
                  className="w-7 h-7 rounded-lg bg-stone-100 hover:bg-[#0B192C] text-[#0B192C] hover:text-white flex items-center justify-center transition-colors shrink-0 mt-0.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
