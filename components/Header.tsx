'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale, Dictionary } from '@/lib/content/types';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  lang: Locale;
  dictionary: Dictionary;
}

export default function Header({ lang, dictionary }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle ESC key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: dictionary.common.nav.home, href: `/${lang}` },
    { label: dictionary.common.nav.service, href: `/${lang}/service` },
    { label: dictionary.common.nav.about, href: `/${lang}/about` },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Navigation Bar with subtle backdrop blur */}
      <div className="w-full bg-[#FBFBF9]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Text Identity */}
          <Link
            href={`/${lang}`}
            className="group flex flex-col focus-visible:ring-2 focus-visible:ring-[#0F766E] rounded-md py-1"
            aria-label={dictionary.common.brand}
          >
            <span className="font-bold text-xl sm:text-2xl text-[#0B192C] tracking-tight group-hover:text-[#0F766E] transition-colors">
              Wirasa
            </span>
            <span className="text-[11px] font-medium tracking-widest uppercase text-stone-500 group-hover:text-stone-700 transition-colors">
              Business & Advisory
            </span>
          </Link>

          {/* Desktop Navigation Links: Clean Minimal Text */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden md:flex items-center gap-8 text-sm font-medium"
          >
            {navItems.map((item) => {
              const isActive =
                item.href === `/${lang}`
                  ? pathname === `/${lang}`
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    if (item.href === `/${lang}` && pathname === `/${lang}`) {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`py-2 transition-colors focus:outline-none select-none ${
                    isActive
                      ? 'text-[#0B192C] font-semibold'
                      : 'text-stone-600 hover:text-[#0B192C]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions: Language & Consultation CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Suspense fallback={<div className="w-16 h-7 bg-stone-100 rounded-full animate-pulse" />}>
              <LanguageSwitcher currentLocale={lang} />
            </Suspense>

            <Link
              href={`/${lang}/contact`}
              aria-current={pathname.startsWith(`/${lang}/contact`) ? 'page' : undefined}
              className="inline-flex items-center justify-center px-5 py-2 text-xs font-semibold rounded-full bg-[#0B192C] text-white hover:bg-[#1E2E45] active:bg-[#07101D] transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B192C] focus-visible:ring-offset-2"
            >
              {dictionary.common.cta.consultation}
            </Link>
          </div>

          {/* Mobile Header Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <Suspense fallback={<div className="w-14 h-7 bg-stone-100 rounded-full" />}>
              <LanguageSwitcher currentLocale={lang} />
            </Suspense>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-stone-700 hover:text-[#0B192C] hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
              aria-expanded={mobileMenuOpen}
              aria-label="Buka navigasi"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#071322]/70 backdrop-blur-xs md:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer: Full-height Solid Slide-over Sheet */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs sm:max-w-sm bg-[#FBFBF9] border-l border-stone-200 shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between h-[100dvh] overflow-y-auto ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi mobile"
      >
        {/* Drawer Header */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-stone-200 shrink-0">
          <div className="flex flex-col">
            <span className="font-bold text-xl text-[#0B192C] tracking-tight">
              Wirasa
            </span>
            <span className="text-[10px] font-medium tracking-widest uppercase text-stone-500">
              Business & Advisory
            </span>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-stone-600 hover:text-[#0B192C] hover:bg-stone-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
            aria-label="Tutup navigasi"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Body */}
        <div className="p-6 space-y-6 flex-1">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3 font-mono">
              Navigasi Halaman
            </p>
            <div className="flex flex-col space-y-1.5">
              {navItems.map((item) => {
                const isActive =
                  item.href === `/${lang}`
                    ? pathname === `/${lang}`
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`min-h-[48px] flex items-center justify-between px-4 py-3 rounded-xl text-base transition-colors ${
                      isActive
                        ? 'bg-[#0B192C] text-white font-semibold shadow-xs'
                        : 'text-stone-700 hover:bg-stone-200/60 hover:text-[#0B192C] font-medium'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#14B8A6]" />
                    ) : (
                      <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Language Switcher Section inside drawer */}
          <div className="pt-4 border-t border-stone-200">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3 font-mono">
              Bahasa / Language
            </p>
            <Suspense fallback={<div className="w-16 h-8 bg-stone-100 rounded-full" />}>
              <LanguageSwitcher currentLocale={lang} />
            </Suspense>
          </div>
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-6 border-t border-stone-200 bg-[#F3F4F1] space-y-3 shrink-0">
          <Link
            href={`/${lang}/contact`}
            aria-current={pathname.startsWith(`/${lang}/contact`) ? 'page' : undefined}
            onClick={() => setMobileMenuOpen(false)}
            className="w-full min-h-[48px] flex items-center justify-center px-4 py-3 text-sm font-semibold rounded-full bg-[#0B192C] text-white hover:bg-[#1E2E45] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B192C]"
          >
            {dictionary.common.cta.consultation}
          </Link>

          <p className="text-xs text-stone-500 text-center leading-relaxed">
            {dictionary.common.footerSummary}
          </p>
        </div>
      </div>
    </header>
  );
}
