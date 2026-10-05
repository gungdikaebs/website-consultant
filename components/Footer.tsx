import Link from 'next/link';
import { Locale, Dictionary } from '@/lib/content/types';
import { servicesData } from '@/lib/content/services';

interface FooterProps {
  lang: Locale;
  dictionary: Dictionary;
}

export default function Footer({ lang, dictionary }: FooterProps) {
  const currentYear = 2026;
  const isId = lang === 'id';
  const services = servicesData[lang];

  return (
    <footer className="mt-auto bg-[#0B192C] border-t border-stone-800 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Purpose (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href={`/${lang}`}
              className="inline-block space-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded"
            >
              <span className="text-2xl font-bold tracking-tight text-white font-[family-name:var(--font-lora)] block">
                Wirasa
              </span>
              <span className="text-[11px] uppercase tracking-widest text-teal-400 font-mono block">
                Business &amp; Advisory
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-stone-300 max-w-sm">
              {isId
                ? 'Mitra konsultasi strategis terpadu untuk Tax & Accounting, arsitektur IT, dan manajemen payroll bagi bisnis modern.'
                : 'Integrated strategic advisory for Tax & Accounting, modern IT systems, and payroll management for growing ventures.'}
            </p>

            <div className="pt-2 text-xs font-mono text-stone-400">
              <span>{isId ? 'Satu mitra. Tiga kebutuhan esensial.' : 'One partner. Three core essentials.'}</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-sm text-white tracking-tight">
              {isId ? 'Navigasi' : 'Quick Links'}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={`/${lang}`}
                  className="hover:text-white transition-colors"
                >
                  {dictionary.common.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/about`}
                  className="hover:text-white transition-colors"
                >
                  {dictionary.common.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/service`}
                  className="hover:text-white transition-colors"
                >
                  {dictionary.common.nav.service}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/contact`}
                  className="hover:text-white transition-colors"
                >
                  {dictionary.common.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-sm text-white tracking-tight">
              {isId ? 'Layanan Kami' : 'Our Services'}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/${lang}/service#${srv.id}`}
                    className="hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-xs font-mono text-teal-400 group-hover:text-teal-300 transition-colors">
                      {srv.index}
                    </span>
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-sm text-white tracking-tight">
              {isId ? 'Hubungi Kami' : 'Contact Us'}
            </h4>
            <div className="space-y-3 text-sm text-stone-300">
              <p className="leading-relaxed">
                {isId
                  ? 'Konsultasi pendahuluan dan diskusi kebutuhan bisnis Anda.'
                  : 'Exploratory consultations and strategic business inquiries.'}
              </p>
              <div className="pt-1">
                <Link
                  href={`/${lang}/contact`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-teal-300 transition-colors group"
                >
                  <span>{isId ? 'Buka Halaman Kontak' : 'Go to Contact Page'}</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Clean Editorial Separation */}
        <div className="mt-12 sm:mt-14 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            &copy; {currentYear} Wirasa Business &amp; Advisory. {dictionary.common.rights}
          </p>

          <div className="flex items-center gap-6">
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
