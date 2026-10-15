import { ContactConfig } from './types';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://3secsolution.com';

/**
 * Konfigurasi kontak perusahaan 3.SEC Business, Tax & Digital Solution.
 */
export const contactConfig: ContactConfig = {
  whatsappNumber: '6285126944143', // Nomor resmi WhatsApp
  email: 'info@3secsolution.com',
  address: 'Jalan Gelogor Carik Gang Ratnasari II No 16, Pemogan, Denpasar Selatan, Bali',
  businessHours: 'Senin – Jumat: 9 AM – 9 PM WITA',
};

export const businessLocation = {
  streetAddress: 'Jalan Gelogor Carik Gang Ratnasari II No 16, Pemogan',
  addressLocality: 'Denpasar Selatan',
  addressRegion: 'Bali',
  postalCode: '80221',
  addressCountry: 'ID',
  latitude: -8.7042,
  longitude: 115.1986,
};

/**
 * Validasi nomor WhatsApp perusahaan: hanya digit internasional.
 */
export function getValidWhatsAppNumber(number: string | null): string | null {
  if (!number) return null;
  const cleaned = number.replace(/\D/g, '');
  if (cleaned.length < 8 || cleaned.length > 15) return null;
  return cleaned;
}

/**
 * Menghasilkan link WhatsApp atau fallback ke halaman Kontak jika nomor belum tersedia.
 */
export function buildWhatsAppLink(
  number: string | null,
  message?: string,
  lang: 'id' | 'en' = 'id',
  serviceId?: string
): { href: string; isExternal: boolean } {
  const validNumber = getValidWhatsAppNumber(number);
  if (!validNumber) {
    const fallbackPath = serviceId
      ? `/${lang}/contact?service=${encodeURIComponent(serviceId)}`
      : `/${lang}/contact`;
    return { href: fallbackPath, isExternal: false };
  }

  if (!message) {
    return {
      href: `https://wa.me/${validNumber}`,
      isExternal: true,
    };
  }

  const encodedText = encodeURIComponent(message);
  return {
    href: `https://wa.me/${validNumber}?text=${encodedText}`,
    isExternal: true,
  };
}
