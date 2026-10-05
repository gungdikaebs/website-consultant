'use client';

import { useState } from 'react';
import { FAQItem, Locale } from '@/lib/content/types';

interface FAQAccordionProps {
  items: FAQItem[];
  lang?: Locale;
  heading?: string;
  subheading?: string;
}

export default function FAQAccordion({
  items,
  lang = 'id',
  heading,
  subheading,
}: FAQAccordionProps) {
  // First item open by default like the reference mockup
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const isId = lang === 'id';

  // Split into 2 balanced columns (Left: 0, 1, 2; Right: 3, 4, 5)
  const midpoint = Math.ceil(items.length / 2);
  const leftColumn = items.slice(0, midpoint);
  const rightColumn = items.slice(midpoint);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      {/* Header matching the reference design */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div data-gsap="fade-up" className="space-y-3 max-w-2xl">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 bg-[#F0FDFA] text-xs font-mono font-medium text-[#0F766E]">
            <span className="uppercase tracking-wider">FAQS</span>
          </div>

          <h2 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B192C] tracking-tight leading-[1.15]">
            {heading || (isId ? 'Pertanyaan yang Sering Diajukan' : 'Frequently asked question')}
          </h2>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl">
            {subheading || (isId
              ? 'Temukan jawaban ringkas seputar kolaborasi, keamanan data, dan mekanisme konsultasi bersama 3.SEC .'
              : 'Here’s everything you need to know about our advisory workflows, data security, and how to get started.')}
          </p>
        </div>

       
      </div>

      {/* 2-Column Grid of Clean Card Accordions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-start">
        {/* Left Column */}
        <div className="space-y-4">
          {leftColumn.map((item, idx) => {
            const actualIndex = idx;
            const isOpen = openIndices.includes(actualIndex);
            return (
              <div
                key={actualIndex}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-stone-50 border-stone-200 shadow-2xs'
                    : 'bg-stone-50/70 border-stone-200/60 hover:bg-stone-50 hover:border-stone-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(actualIndex)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] rounded-2xl"
                >
                  <span className="font-bold text-sm sm:text-base text-[#0B192C] leading-snug">
                    {item.question}
                  </span>
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center text-stone-500 font-mono text-lg font-light select-none">
                    {isOpen ? '—' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {rightColumn.map((item, idx) => {
            const actualIndex = midpoint + idx;
            const isOpen = openIndices.includes(actualIndex);
            return (
              <div
                key={actualIndex}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-stone-50 border-stone-200 shadow-2xs'
                    : 'bg-stone-50/70 border-stone-200/60 hover:bg-stone-50 hover:border-stone-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(actualIndex)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] rounded-2xl"
                >
                  <span className="font-bold text-sm sm:text-base text-[#0B192C] leading-snug">
                    {item.question}
                  </span>
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center text-stone-500 font-mono text-lg font-light select-none">
                    {isOpen ? '—' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
