import Link from 'next/link';
import { Locale, Dictionary } from '@/lib/content/types';
interface FooterProps {
  lang: Locale;
  dictionary: Dictionary;
}

export default function Footer({ lang, dictionary }: FooterProps) {
  const currentYear = 2026;
  const isId = lang === 'id';

  return (
    <footer className="mt-auto bg-[#071322] border-t border-stone-800 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Row: Brand with Cursive Script + Nav Links + Socials */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-stone-800/80">
          {/* Brand Identity & Cursive Signature */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Link
              href={`/${lang}`}
              className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md py-1"
            >
              {/* Prism Monogram */}
              <svg
                className="w-9 h-9 shrink-0"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M4 9L17 28L13 34L2 13L4 9Z" fill="#38BDF8" />
                <path d="M17 28L11 9H17.5L21.5 21L17 28Z" fill="#F87171" />
                <path d="M21.5 21L26.5 9H33L24 30.5L21.5 21Z" fill="#FBBF24" />
              </svg>

              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white block leading-tight">
                  3.SEC
                </span>
                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold block leading-tight">
                  Business, Tax &amp; Digital Solution
                </span>
              </div>
            </Link>

            {/* Subtle Divider */}
            <div className="hidden sm:block w-[1px] h-8 bg-stone-700" />

            {/* Handwritten Signature in Gold */}
            <span className="font-[family-name:var(--font-caveat)] text-2xl sm:text-3xl text-amber-400 tracking-wide select-none">
              Let&apos;s Build Your Next Chapter
            </span>
          </div>

          {/* Navigation & Social Icons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 w-full lg:w-auto justify-between">
            <nav className="flex flex-wrap items-center gap-5 sm:gap-6 text-xs sm:text-sm font-medium text-stone-400">
              <Link href={`/${lang}`} className="hover:text-white transition-colors">
                {dictionary.common.nav.home}
              </Link>
              <Link href={`/${lang}/about`} className="hover:text-white transition-colors">
                {dictionary.common.nav.about}
              </Link>
              <Link href={`/${lang}/service`} className="hover:text-white transition-colors">
                {dictionary.common.nav.service}
              </Link>
              <Link href={`/${lang}#why-us`} className="hover:text-white transition-colors">
                {isId ? 'Keunggulan' : 'Why Us'}
              </Link>
              <Link href={`/${lang}/contact`} className="hover:text-white transition-colors">
                {dictionary.common.nav.contact}
              </Link>
            </nav>

            {/* Social Circle Icons */}
            <div className="flex items-center gap-2.5">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn 3.SEC Consulting"
                className="w-9 h-9 rounded-full bg-stone-800/80 hover:bg-[#B91C1C] hover:text-white text-stone-300 flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram 3.SEC Consulting"
                className="w-9 h-9 rounded-full bg-stone-800/80 hover:bg-[#B91C1C] hover:text-white text-stone-300 flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Contact / Email */}
              <Link
                href={`/${lang}/contact`}
                aria-label="Kontak 3.SEC Consulting"
                className="w-9 h-9 rounded-full bg-stone-800/80 hover:bg-[#B91C1C] hover:text-white text-stone-300 flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Subtle Tags */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            &copy; {currentYear} 3.SEC Business, Tax &amp; Digital Solution. {dictionary.common.rights}
          </p>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-stone-500 font-mono">
              Tax &amp; Accounting • Payroll &amp; HR • Digital Solution
            </span>

            <Link
              href={lang === 'id' ? '/en' : '/id'}
              className="hover:text-white transition-colors font-medium font-mono"
            >
              {lang === 'id' ? 'Switch to English (EN)' : 'Beralih ke Bahasa Indonesia (ID)'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
