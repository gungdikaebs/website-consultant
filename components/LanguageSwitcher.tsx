'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Locale } from '@/lib/content/types';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getTargetHref = (targetLocale: Locale) => {
    // pathname format: /id/service, /en/about, /id, etc.
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) {
      return `/${targetLocale}`;
    }
    // Replace first segment if it's a locale
    if (segments[0] === 'id' || segments[0] === 'en') {
      segments[0] = targetLocale;
    } else {
      segments.unshift(targetLocale);
    }
    const newPath = '/' + segments.join('/');
    const queryString = searchParams.toString();
    return queryString ? `${newPath}?${queryString}` : newPath;
  };

  return (
    <div
      role="group"
      aria-label="Pilihan bahasa / Language selection"
      className="inline-flex items-center rounded-full bg-stone-100 p-1 border border-stone-200 text-xs font-medium tracking-wide"
    >
      <Link
        href={getTargetHref('id')}
        aria-current={currentLocale === 'id' ? 'true' : undefined}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
          currentLocale === 'id'
            ? 'bg-[#0B192C] text-white shadow-xs font-semibold'
            : 'text-stone-600 hover:text-[#0B192C]'
        }`}
      >
        ID
      </Link>
      <span className="text-stone-300 select-none">|</span>
      <Link
        href={getTargetHref('en')}
        aria-current={currentLocale === 'en' ? 'true' : undefined}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
          currentLocale === 'en'
            ? 'bg-[#0B192C] text-white shadow-xs font-semibold'
            : 'text-stone-600 hover:text-[#0B192C]'
        }`}
      >
        EN
      </Link>
    </div>
  );
}
