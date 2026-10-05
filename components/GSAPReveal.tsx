'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GSAPReveal() {
  const pathname = usePathname();
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    // Respect user's motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    // Use gsap.context for safe React cleanup
    ctxRef.current = gsap.context(() => {
      // 1. Hero Reveal (Page load)
      const heroItems = document.querySelectorAll('[data-gsap="hero-item"]');
      if (heroItems.length > 0) {
        gsap.fromTo(
          heroItems,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            clearProps: 'transform',
          }
        );
      }

      // 2. Staggered Scroll Triggers for Cards & Grids
      const staggerGroups = document.querySelectorAll('[data-gsap="stagger-group"]');
      staggerGroups.forEach((group) => {
        const children = group.children;
        if (children.length > 0) {
          gsap.fromTo(
            children,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: group,
                start: 'top 85%',
                once: true,
              },
              clearProps: 'transform',
            }
          );
        }
      });

      // 3. Section Headers Reveal
      const sectionHeaders = document.querySelectorAll('[data-gsap="fade-up"]');
      sectionHeaders.forEach((header) => {
        gsap.fromTo(
          header,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: header,
              start: 'top 88%',
              once: true,
            },
            clearProps: 'transform',
          }
        );
      });

      // 4. Hero Background Optical Parallax (Ultra-smooth with Lenis scrub)
      const heroSection = document.querySelector('[data-gsap="hero-section"]');
      const heroBg = document.querySelector('[data-gsap="hero-parallax-bg"]');
      if (heroSection && heroBg) {
        gsap.fromTo(
          heroBg,
          { yPercent: -8 },
          {
            yPercent: 14,
            ease: 'none',
            scrollTrigger: {
              trigger: heroSection,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
    });

    return () => {
      if (ctxRef.current) {
        ctxRef.current.revert();
      }
    };
  }, [pathname]);

  return null;
}
