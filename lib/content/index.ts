import { notFound } from 'next/navigation';
import { Locale, Dictionary, ServiceDetail } from './types';
import { idDictionary } from './id';
import { enDictionary } from './en';
import { servicesData } from './services';

export const LOCALES: Locale[] = ['id', 'en'];
export const DEFAULT_LOCALE: Locale = 'id';

export function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

export function getDictionary(locale: string): Dictionary {
  if (locale === 'id') return idDictionary;
  if (locale === 'en') return enDictionary;
  notFound();
}

export function getServices(locale: string): ServiceDetail[] {
  if (locale === 'id') return servicesData.id;
  if (locale === 'en') return servicesData.en;
  notFound();
}
