import Link from 'next/link';
import BrandLogo from './BrandLogo';
import { Locale, Dictionary } from '@/lib/content/types';

interface FooterProps {
  lang: Locale;
  dictionary: Dictionary;
}

export default function Footer({ lang, dictionary }: FooterProps) {
  const currentYear = 2026;
  const isId = lang === 'id';

  return (
    <footer className="mt-auto bg-[#071322] border-t border-stone-800/90 text-stone-300 relative overflow-hidden">
      {/* Subtle Ambient Background Glow */}
      <div 
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-sky-950/20 via-transparent to-transparent pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Multi-Column Footer Grid */}
        <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 border-b border-stone-800/80">
          {/* Column 1: Brand & Identity (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href={`/${lang}`}
              className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md py-1"
              aria-label={dictionary.common.brand}
            >
              <BrandLogo inverse />
            </Link>

            <p className="text-sm text-stone-400 leading-relaxed font-normal max-w-sm pt-1">
              {isId
                ? 'Firma penasihat dan konsultasi terpadu yang membantu bisnis, pendiri usaha, dan enterprise modern menyelaraskan kepatuhan pajak, administrasi payroll & HR, serta transformasi solusi digital.'
                : 'An integrated advisory firm dedicated to helping businesses, founders, and modern enterprises streamline tax compliance, payroll & HR management, and digital solution systems.'}
            </p>

            {/* Operational Location & NDA Badges */}
            <div className="space-y-2 text-xs text-stone-400 font-mono pt-1">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Based in Bali, Indonesia</span>
              </div>
             
            </div>
          </div>

          {/* Column 2: Layanan Utama / Core Services (lg:col-span-3) - Tanpa Nomor */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              {isId ? 'Layanan Utama' : 'Core Services'}
            </h4>
            <ul className="space-y-4 text-sm text-stone-400">
              <li>
                <Link
                  href={`/${lang}/service#tax-accounting`}
                  className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all group"
                >
                  <span className="font-medium text-stone-200 group-hover:text-amber-300 transition-colors">
                    Tax &amp; Accounting
                  </span>
                </Link>
                <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">
                  {isId ? 'Kepatuhan pajak, & pembukuan rutin' : 'Tax compliance, advisory & bookkeeping'}
                </p>
              </li>
              <li>
                <Link
                  href={`/${lang}/service#payroll`}
                  className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all group"
                >
                  <span className="font-medium text-stone-200 group-hover:text-amber-300 transition-colors">
                    Payroll &amp; HR Management
                  </span>
                </Link>
                <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">
                  {isId ? 'Kalkulasi gaji, BPJS, & kepatuhan tenaga kerja' : 'Salary calculations, payslips & HR compliance'}
                </p>
              </li>
              <li>
                <Link
                  href={`/${lang}/service#it`}
                  className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all group"
                >
                  <span className="font-medium text-stone-200 group-hover:text-amber-300 transition-colors">
                    Digital Solution
                  </span>
                </Link>
                <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">
                  {isId ? 'Website modern, otomatisasi proses, & solusi digital' : 'Modern websites, process automation & digital systems'}
                </p>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigasi / Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              {isId ? 'Navigasi' : 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400 font-medium">
              <li>
                <Link href={`/${lang}`} className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  {dictionary.common.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about`} className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  {dictionary.common.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/service`} className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  {dictionary.common.nav.service}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  {dictionary.common.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Kontak & Konsultasi / Connect (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              {isId ? 'Kontak & Konsultasi' : 'Contact & Advisory'}
            </h4>

            <p className="text-sm text-stone-400 leading-relaxed font-normal">
              {isId
                ? 'Konsultasi awal untuk memetakan prioritas dan menyusun proposal kerja yang terukur sesuai kebutuhan bisnis Anda.'
                : 'Initial consultation to map priorities and structure a tailored scope of work for your business.'}
            </p>

            {/* Business Hours */}
            <div className="space-y-1 text-xs text-stone-400 font-mono">
              <div className="text-stone-300 font-semibold">{isId ? 'Jam Layanan' : 'Advisory Hours'}:</div>
              <div>{isId ? 'Senin – Jumat' : 'Monday – Friday'}: 09:00 – 17:00 WITA</div>
              <div className="text-stone-500">{isId ? 'Sabtu – Minggu / Libur: Janji Temu' : 'Sat – Sun / Holidays: By Appointment'}</div>
            </div>

            {/* Social Circle Icons */}
            <div className="pt-1">
              <span className="text-xs text-stone-400 font-mono block mb-2">{isId ? 'Saluran Profesional' : 'Professional Channels'}:</span>
              <div className="flex items-center gap-2.5">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn 3.SEC Business, Tax & Digital Solution"
                  className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#B91C1C] hover:text-white text-stone-300 flex items-center justify-center transition-all border border-stone-700/60 shadow-2xs"
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
                  aria-label="Instagram 3.SEC Business, Tax & Digital Solution"
                  className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#B91C1C] hover:text-white text-stone-300 flex items-center justify-center transition-all border border-stone-700/60 shadow-2xs"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Contact Page Link */}
                <Link
                  href={`/${lang}/contact`}
                  aria-label="Kontak 3.SEC Business, Tax & Digital Solution"
                  className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#B91C1C] hover:text-white text-stone-300 flex items-center justify-center transition-all border border-stone-700/60 shadow-2xs"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Meta Bar */}
        <div className="py-8 flex flex-col lg:flex-row items-center justify-between gap-5 text-xs text-stone-400">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <p>
              &copy; {currentYear} <span className="text-stone-200 font-medium">3.SEC Business, Tax &amp; Digital Solution</span>. {dictionary.common.rights}
            </p>
            <span className="hidden sm:inline text-stone-700">|</span>
            <span className="text-stone-500 font-mono">
              Tax &amp; Accounting • Payroll &amp; HR • Digital Solution
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Language Switcher Pill */}
            <div className="flex items-center bg-stone-900 border border-stone-800 rounded-full p-1 text-[11px] font-mono font-semibold">
              <Link
                href="/id"
                className={`px-3 py-1 rounded-full transition-all ${
                  isId ? 'bg-amber-400 text-[#071322] font-bold shadow-xs' : 'text-stone-400 hover:text-white'
                }`}
              >
                ID
              </Link>
              <Link
                href="/en"
                className={`px-3 py-1 rounded-full transition-all ${
                  !isId ? 'bg-amber-400 text-[#071322] font-bold shadow-xs' : 'text-stone-400 hover:text-white'
                }`}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
