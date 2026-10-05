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

  const isId = lang === 'id';
  const navItems = [
    { label: dictionary.common.nav.home, href: `/${lang}` },
    { label: dictionary.common.nav.about, href: `/${lang}/about` },
    { label: dictionary.common.nav.service, href: `/${lang}/service` },
    { label: dictionary.common.nav.contact, href: `/${lang}/contact` },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Navigation Bar with subtle backdrop blur */}
      <div className="w-full bg-[#FBFBF9]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo & Text Identity */}
          <Link
            href={`/${lang}`}
            className="group flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-[#B91C1C] rounded-md py-1"
            aria-label={dictionary.common.brand}
          >
            {/* Geometric Prism Icon Logo (Navy, Crimson, Gold facets) */}
            <svg
              className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 transition-transform duration-300 group-hover:scale-105"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M4 9L17 28L13 34L2 13L4 9Z" fill="#0B192C" />
              <path d="M17 28L11 9H17.5L21.5 21L17 28Z" fill="#B91C1C" />
              <path d="M21.5 21L26.5 9H33L24 30.5L21.5 21Z" fill="#D97706" />
            </svg>

            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl text-[#0B192C] tracking-tight group-hover:text-[#B91C1C] transition-colors leading-tight">
                3.SEC
              </span>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-stone-500 group-hover:text-stone-700 transition-colors leading-tight">
                Business, Tax & Digital Solution
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links: Clean Minimal Text */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium"
          >
            {navItems.map((item) => {
              const isHash = item.href.includes('#');
              const isActive =
                !isHash &&
                (item.href === `/${lang}`
                  ? pathname === `/${lang}`
                  : pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    if (item.href === `/${lang}` && pathname === `/${lang}`) {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`py-2 transition-colors focus:outline-none select-none relative ${
                    isActive
                      ? 'text-[#0B192C] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#B91C1C]'
                      : 'text-stone-600 hover:text-[#0B192C]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions: Language & Crimson Pill CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Suspense fallback={<div className="w-16 h-7 bg-stone-100 rounded-full animate-pulse" />}>
              <LanguageSwitcher currentLocale={lang} />
            </Suspense>

            <Link
              href={`/${lang}/contact`}
              aria-current={pathname.startsWith(`/${lang}/contact`) ? 'page' : undefined}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold rounded-full bg-[#B91C1C] text-white hover:bg-[#991B1B] active:scale-95 transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C] focus-visible:ring-offset-2"
            >
              <span>{dictionary.common.cta.getInTouch || (isId ? 'Hubungi Kami' : 'Get in Touch')}</span>
              <span className="text-sm font-sans">&rarr;</span>
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
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-stone-700 hover:text-[#0B192C] hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C]"
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

      {/* Mobile Navigation Drawer */}
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
          <div className="flex items-center gap-2">
            <svg className="w-7 h-7 shrink-0" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 9L17 28L13 34L2 13L4 9Z" fill="#0B192C" />
              <path d="M17 28L11 9H17.5L21.5 21L17 28Z" fill="#B91C1C" />
              <path d="M21.5 21L26.5 9H33L24 30.5L21.5 21Z" fill="#D97706" />
            </svg>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#0B192C] tracking-tight">
                3.SEC
              </span>
              <span className="text-[9px] font-semibold tracking-widest uppercase text-stone-500">
                Business, Tax & Digital Solution
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-stone-600 hover:text-[#0B192C] hover:bg-stone-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C]"
            aria-label="Tutup navigasi"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Nav Links */}
        <div className="px-6 py-6 space-y-2 flex-1">
          {navItems.map((item) => {
            const isHash = item.href.includes('#');
            const isActive =
              !isHash &&
              (item.href === `/${lang}`
                ? pathname === `/${lang}`
                : pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-rose-50 text-[#B91C1C] font-semibold'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-[#B91C1C]" />}
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-6 border-t border-stone-200 bg-stone-50/80 space-y-3 shrink-0">
          <Link
            href={`/${lang}/contact`}
            aria-current={pathname.startsWith(`/${lang}/contact`) ? 'page' : undefined}
            onClick={() => setMobileMenuOpen(false)}
            className="w-full min-h-[48px] flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-semibold rounded-full bg-[#B91C1C] text-white hover:bg-[#991B1B] active:scale-95 transition-all shadow-sm"
          >
            <span>{dictionary.common.cta.getInTouch || (isId ? 'Hubungi Kami' : 'Get in Touch')}</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
