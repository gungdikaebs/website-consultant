'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { TestimonialItem } from '@/lib/content/types';

interface TestimonialsSectionProps {
  eyebrow: string;
  heading: string;
  subheading: string;
  testimonials: TestimonialItem[];
}

export default function TestimonialsSection({
  eyebrow,
  heading,
  subheading,
  testimonials,
}: TestimonialsSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update button states and active index accurately
  const checkScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const scrollLeft = el.scrollLeft;
    const maxScroll = el.scrollWidth - el.clientWidth;

    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < maxScroll - 15);

    // Calculate active slide index based on first fully/mostly visible card
    const cardElements = Array.from(el.querySelectorAll<HTMLElement>('[data-card-index]'));
    if (cardElements.length === 0) return;

    let closestIdx = 0;
    let minDistance = Infinity;

    cardElements.forEach((card, idx) => {
      const distance = Math.abs(card.offsetLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    setActiveIndex(closestIdx);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScrollState();
    el.addEventListener('scroll', checkScrollState, { passive: true });
    window.addEventListener('resize', checkScrollState);

    return () => {
      el.removeEventListener('scroll', checkScrollState);
      window.removeEventListener('resize', checkScrollState);
    };
  }, [checkScrollState]);

  // Scroll to a specific card index smoothly
  const scrollToCard = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>(`[data-card-index="${index}"]`);
    if (card) {
      el.scrollTo({
        left: card.offsetLeft,
        behavior: 'smooth',
      });
    }
  };

  // Scroll left or right by one card step
  const handleScrollStep = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const cardElements = Array.from(el.querySelectorAll<HTMLElement>('[data-card-index]'));
    if (cardElements.length === 0) return;

    const cardWidth = cardElements[0].offsetWidth + 24; // width + gap
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;

    el.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-[#FBFBF9] via-[#F4F4F1]/60 to-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section: Title on Left & Navigation Arrows on Right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
          <div data-gsap="fade-up" className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
                {eyebrow}
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B192C] tracking-tight leading-[1.16]">
              {heading}
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl">
              {subheading}
            </p>
          </div>

          {/* Navigation Arrows: Left outline & Right solid navy */}
          <div data-gsap="fade-up" className="flex items-center gap-3 shrink-0 self-start md:self-end pb-1">
            <button
              type="button"
              onClick={() => handleScrollStep('left')}
              disabled={!canScrollLeft}
              aria-label="Previous testimonial"
              className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] ${
                canScrollLeft
                  ? 'bg-white border-stone-200 text-[#0B192C] shadow-2xs hover:bg-stone-50 hover:border-stone-300 active:scale-95 cursor-pointer'
                  : 'bg-stone-100/80 border-stone-200/60 text-stone-300 cursor-not-allowed'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => handleScrollStep('right')}
              disabled={!canScrollRight}
              aria-label="Next testimonial"
              className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] ${
                canScrollRight
                  ? 'bg-[#0B192C] hover:bg-[#0F766E] text-white shadow-md hover:shadow-lg active:scale-95 cursor-pointer'
                  : 'bg-stone-200 text-stone-400 cursor-not-allowed'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track: 3 cards visible on desktop, 2 on tablet, 1 on mobile */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory focus:outline-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((item, index) => {
            return (
              <div
                key={item.id}
                data-card-index={index}
                className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-3xl bg-white border border-stone-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-lg hover:border-[#0F766E]/40 transition-all duration-300"
              >
                {/* Card Top: Stylized Quote Icon & 5 Star Rating */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    {/* Big Decorative SVG Quote Icon */}
                    <svg
                      className="w-8 h-8 text-teal-600/30"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>

                    {/* 5-Star Rating */}
                    <div className="flex items-center gap-1 text-amber-400" aria-label={`${item.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current drop-shadow-2xs"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="text-stone-700 text-sm sm:text-[15px] leading-relaxed line-clamp-5 min-h-[105px]">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Card Bottom: Client Avatar + Name + Designation */}
                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5 min-w-0">
                    {/* Portrait Photo Avatar */}
                    {item.avatarUrl ? (
                      <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-stone-200/90 shadow-2xs">
                        <Image
                          src={item.avatarUrl}
                          alt={item.author}
                          fill
                          sizes="44px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0B192C] to-[#1E3E62] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs ring-2 ring-white">
                        {item.author
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .slice(0, 2)}
                      </div>
                    )}

                    <div className="min-w-0">
                      <div className="font-bold text-sm text-[#0B192C] truncate">
                        {item.author}
                      </div>
                      <div className="text-xs text-stone-500 truncate">
                        {item.role} at <span className="font-medium text-stone-700">{item.company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {testimonials.map((_, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={index}
                type="button"
                onClick={() => scrollToCard(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] ${
                  isActive
                    ? 'w-7 bg-[#0F766E]'
                    : 'w-2 bg-stone-300 hover:bg-stone-400'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
