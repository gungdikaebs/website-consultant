import { SITE_URL, contactConfig, businessLocation } from '@/lib/content/config';
import { Locale } from '@/lib/content/types';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface JsonLdProps {
  lang: Locale;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FaqItem[];
  includeBusinessInfo?: boolean;
}

export default function JsonLd({
  lang,
  breadcrumbs,
  faqs,
  includeBusinessInfo = true,
}: JsonLdProps) {
  const isId = lang === 'id';

  // 1. Organization & ProfessionalService / LocalBusiness Schema
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness', 'AccountingService'],
    '@id': `${SITE_URL}#organization`,
    name: '3.SEC Business, Tax & Digital Solution',
    alternateName: ['3.SEC Solution', '3.SEC Consulting', '3SEC'],
    description: isId
      ? 'Firma penasihat dan konsultan terpadu untuk Tax & Accounting, Payroll & HR, serta Digital Solution di Bali, Indonesia.'
      : 'Integrated business advisory firm for Tax & Accounting, Payroll & HR, and Digital Solution systems in Bali, Indonesia.',
    url: `${SITE_URL}/${lang}`,
    logo: `${SITE_URL}/icon/logo.png`,
    image: `${SITE_URL}/icon/logo.png`,
    telephone: `+${contactConfig.whatsappNumber}`,
    email: contactConfig.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessLocation.streetAddress,
      addressLocality: businessLocation.addressLocality,
      addressRegion: businessLocation.addressRegion,
      postalCode: businessLocation.postalCode,
      addressCountry: businessLocation.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessLocation.latitude,
      longitude: businessLocation.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '21:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/3secsolution/',
      'https://linkedin.com',
    ],
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Bali',
      },
      {
        '@type': 'Country',
        name: 'Indonesia',
      },
      {
        '@type': 'GeoShape',
        name: 'Global / Remote Clients',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isId ? 'Layanan Konsultasi 3.SEC' : '3.SEC Advisory Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isId ? 'Konsultan Pajak & Akuntansi' : 'Tax & Accounting Advisory',
            description: isId
              ? 'Penyusunan laporan keuangan, kepatuhan SPT pajak bulanan dan tahunan, audit, dan tax planning.'
              : 'Financial reporting, monthly & annual tax compliance, bookkeeping, and strategic tax planning.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isId ? 'Solusi Digital & Website' : 'Digital Solution & Web Systems',
            description: isId
              ? 'Pengembangan website modern, otomatisasi proses bisnis, dan infrastruktur sistem digital.'
              : 'Modern web application development, workflow automation, and digital infrastructure.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isId ? 'Pengelolaan Payroll & HR' : 'Payroll & HR Administration',
            description: isId
              ? 'Administrasi penggajian karyawan, kepatuhan BPJS Ketenagakerjaan/Kesehatan, dan pelaporan PPh 21.'
              : 'Employee payroll processing, BPJS compliance, and payroll tax calculation.',
          },
        },
      ],
    },
  };

  // 2. BreadcrumbList Schema (if provided)
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url.startsWith('http') ? crumb.url : `${SITE_URL}${crumb.url}`,
    })),
  } : null;

  // 3. FAQPage Schema (if provided) - Crucial for Google Rich Snippets!
  const faqSchema = faqs && faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  // 4. WebSite Schema
  const websiteSchema = includeBusinessInfo ? {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '3.SEC Business, Tax & Digital Solution',
    url: `${SITE_URL}/${lang}`,
    inLanguage: lang === 'id' ? 'id-ID' : 'en-US',
    publisher: {
      '@id': `${SITE_URL}#organization`,
    },
  } : null;

  return (
    <>
      {includeBusinessInfo && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      )}
      {websiteSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
