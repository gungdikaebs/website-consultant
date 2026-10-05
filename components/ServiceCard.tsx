import Link from 'next/link';
import { Locale, ServiceDetail } from '@/lib/content/types';

interface ServiceCardProps {
  service: ServiceDetail;
  lang: Locale;
}

export default function ServiceCard({ service, lang }: ServiceCardProps) {
  return (
    <article className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:border-[#0F766E]/50 hover:shadow-md transition-all duration-300">
      <div>
        {/* Top Header: Index & Tag */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <span className="font-mono text-sm font-semibold tracking-wider text-stone-400 group-hover:text-[#0F766E] transition-colors">
            {service.index}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#F0FDFA] text-[#0F766E] border border-[#CCFBF1]">
            {service.tag}
          </span>
        </div>

        {/* Title: Editorial Serif */}
        <h3 className="font-[family-name:var(--font-lora)] text-xl sm:text-2xl font-bold text-[#0B192C] tracking-tight mb-3 group-hover:text-[#0F766E] transition-colors">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm leading-relaxed text-stone-600 mb-8">
          {service.shortDesc}
        </p>
      </div>

      {/* Direct Anchor Action */}
      <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
        <Link
          href={`/${lang}/service#${service.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B192C] group-hover:text-[#0F766E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] rounded-md py-1"
        >
          <span>{lang === 'id' ? 'Lihat Cakupan' : 'View Scope'}</span>
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
