import { ContactConfig } from './types';

/**
 * Konfigurasi kontak perusahaan Wirasa Business & Advisory.
 *
 * Catatan Handoff:
 * - Nilai awal seluruh kontak adalah kosong/null.
 * - Nomor WhatsApp jika diisi harus berupa digit internasional tanpa '+', spasi, atau tanda baca (cth: '6281234567890').
 * - Field null/kosong otomatis disembunyikan atau memicu state "detail kontak sedang disiapkan".
 */
export const contactConfig: ContactConfig = {
  whatsappNumber: null, // Kosong hingga nomor resmi diberikan pengguna
  email: null,
  address: null,
  businessHours: null,
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
  message: string,
  lang: 'id' | 'en',
  serviceId?: string
): { href: string; isExternal: boolean } {
  const validNumber = getValidWhatsAppNumber(number);
  if (!validNumber) {
    const fallbackPath = serviceId
      ? `/${lang}/contact?service=${encodeURIComponent(serviceId)}`
      : `/${lang}/contact`;
    return { href: fallbackPath, isExternal: false };
  }

  const encodedText = encodeURIComponent(message);
  return {
    href: `https://wa.me/${validNumber}?text=${encodedText}`,
    isExternal: true,
  };
}
