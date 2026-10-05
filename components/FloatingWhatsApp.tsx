'use client';

import { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react';
import Image from 'next/image';
import { Locale, Dictionary } from '@/lib/content/types';

interface FloatingWhatsAppProps {
  lang: Locale;
  dictionary?: Dictionary;
}

export default function FloatingWhatsApp({ lang, dictionary }: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isId = lang === 'id';
  const whatsappNumber = '62123456789';

  const defaultGreeting =
    dictionary?.whatsappMessages?.general ||
    (isId
      ? 'Halo 3.SEC Business, Tax & Digital Solution, saya ingin berkonsultasi mengenai kebutuhan bisnis kami.'
      : 'Hello 3.SEC Business, Tax & Digital Solution, I would like to discuss my business needs.');

  // Handle smooth hover open / close with debounce to prevent accidental dismissals
  const handleMouseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Only close on mouse leave if the textarea is not focused and there is no typed text
    if (!isFocused && message.trim().length === 0) {
      leaveTimeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 350);
    }
  };

  // Toggle on click
  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 100);
    }
  };

  // Send message to WhatsApp wa.me link
  const handleSend = (e?: FormEvent) => {
    if (e) e.preventDefault();
    const textToSend = message.trim() || defaultGreeting;
    const encoded = encodeURIComponent(textToSend);
    const targetUrl = `https://wa.me/${whatsappNumber}?text=${encoded}`;

    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    setMessage('');
    setIsOpen(false);
  };

  // Allow Enter to send (Shift+Enter for newline)
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleGlobalKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, [isOpen]);

  return (
    <aside
      aria-label="WhatsApp Chat Widget"
      className="fixed bottom-5 sm:bottom-7 right-5 sm:right-7 z-50 flex flex-col items-end select-none pointer-events-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. Floating WhatsApp Chat Box Popup */}
      <div
        className={`w-[calc(100vw-2.5rem)] sm:w-96 max-w-sm rounded-3xl bg-white shadow-2xl border border-stone-200/90 overflow-hidden transition-all duration-300 transform origin-bottom-right mb-3.5 ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none hidden'
        }`}
      >
        {/* Chat Box Header: WhatsApp Green / Emerald Gradient */}
        <div className="bg-gradient-to-r from-[#0F766E] to-[#115E59] text-white p-4 sm:p-4.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* 3.SEC Avatar / Badge */}
            <div className="relative w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0">
              <svg
                className="w-6 h-6"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M4 9L17 28L13 34L2 13L4 9Z" fill="#38BDF8" />
                <path d="M17 28L11 9H17.5L21.5 21L17 28Z" fill="#F87171" />
                <path d="M21.5 21L26.5 9H33L24 30.5L21.5 21Z" fill="#FBBF24" />
              </svg>
              {/* Online Green Indicator Dot */}
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0F766E]" />
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white leading-tight">
                3.SEC Advisory
              </span>
              <span className="text-[11px] text-emerald-100/90 font-medium flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                {isId ? 'Online • Biasanya membalas cepat' : 'Online • Replies promptly'}
              </span>
            </div>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Tutup Chat"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/90 flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chat Box Body: Subtle Pattern with Official Initial Greeting Bubble */}
        <div className="bg-[#EFEAE2] p-4 sm:p-5 space-y-3.5 max-h-64 overflow-y-auto">
          {/* Date Stamp */}
          <div className="text-center">
            <span className="text-[10px] uppercase font-mono px-2.5 py-1 rounded-md bg-white/70 text-stone-600 shadow-2xs">
              {isId ? 'Hari ini' : 'Today'}
            </span>
          </div>

          {/* Incoming Message Bubble */}
          <div className="flex items-start gap-2 max-w-[90%]">
            <div className="bg-white rounded-2xl rounded-tl-xs p-3.5 shadow-sm border border-stone-200/60 text-xs sm:text-[13px] text-stone-800 leading-relaxed relative">
              <p className="font-medium text-[#0F766E] text-[11px] mb-1 font-mono uppercase tracking-wider">
                3.SEC Business Advisory
              </p>
              <p>
                {isId
                  ? 'Halo! Selamat datang di 3.SEC Business, Tax & Digital Solution. Ada yang bisa kami bantu seputar kebutuhan bisnis, akuntansi, pajak, atau solusi digital Anda?'
                  : 'Hello! Welcome to 3.SEC Business, Tax & Digital Solution. How can our advisory team assist with your business, tax, or digital needs today?'}
              </p>
              <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-stone-500 font-mono">
                <span>09:41</span>
                <span className="text-emerald-600">✓✓</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Box Input Area */}
        <form onSubmit={handleSend} className="p-3 bg-white border-t border-stone-200 flex items-end gap-2">
          <textarea
            ref={textareaRef}
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            placeholder={isId ? 'Tulis pesan Anda di sini...' : 'Type your message here...'}
            className="flex-1 text-xs sm:text-sm text-stone-800 bg-stone-50 border border-stone-300 rounded-2xl px-3.5 py-2.5 resize-none focus:outline-none focus:ring-2 focus:ring-[#0F766E]/50 focus:border-[#0F766E] transition-all placeholder:text-stone-600"
          />

          <button
            type="submit"
            aria-label="Kirim Pesan WhatsApp"
            className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shrink-0 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            {/* Paper Airplane / Send Icon */}
            <svg className="w-5 h-5 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </form>
      </div>

      {/* 2. Floating Action Button (FAB) Trigger */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* Floating Text Pill on Desktop (Visible when closed) */}
        {!isOpen && (
          <div
            onClick={toggleOpen}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-stone-200/90 shadow-lg text-xs font-semibold text-[#0B192C] cursor-pointer hover:border-emerald-300 hover:shadow-xl transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{isId ? 'Konsultasi WhatsApp' : 'Chat on WhatsApp'}</span>
          </div>
        )}

        {/* WhatsApp Icon FAB Button using public/icon/whatsapp.svg */}
        <button
          type="button"
          onClick={toggleOpen}
          aria-label={isOpen ? 'Tutup Chat WhatsApp' : 'Buka Chat WhatsApp'}
          aria-expanded={isOpen}
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-xl shadow-stone-900/15 hover:shadow-emerald-950/25 hover:scale-105 active:scale-95 transition-all duration-300 border border-stone-200/80 cursor-pointer"
        >
          {/* Subtle Radar Pulse Ring */}
          {!isOpen && (
            <span className="absolute -inset-1 rounded-full bg-[#67C15E]/30 animate-ping pointer-events-none" />
          )}

          {/* User's WhatsApp SVG Icon */}
          <Image
            src="/icon/whatsapp.svg"
            alt="WhatsApp 3.SEC"
            width={48}
            height={48}
            priority
            className="w-10 h-10 sm:w-11 sm:h-11 relative z-10 drop-shadow-xs"
          />
        </button>
      </div>
    </aside>
  );
}
