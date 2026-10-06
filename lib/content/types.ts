export type Locale = 'id' | 'en';

export type ServiceId = 'tax-accounting' | 'it' | 'payroll';

export type ServiceInquiry = 'general' | ServiceId;

export interface ContactConfig {
  whatsappNumber: string | null;
  email: string | null;
  address: string | null;
  businessHours: string | null;
}

export interface ServiceDetail {
  id: ServiceId;
  index: string;
  title: string;
  tag: string;
  shortDesc: string;
  sectionHeading: string;
  sectionSummary: string;
  draftScope: string[];
  deliverables: string;
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ApproachPoint {
  title: string;
  desc: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface ClientItem {
  name: string;
  category: string;
  location?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  serviceCategory: string;
  rating: number;
  avatarUrl?: string;
}

export interface WhyPillar {
  title: string;
  desc: string;
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface Dictionary {
  meta: {
    homeTitle: string;
    homeDesc: string;
    serviceTitle: string;
    serviceDesc: string;
    aboutTitle: string;
    aboutDesc: string;
    contactTitle: string;
    contactDesc: string;
  };
  common: {
    brand: string;
    nav: {
      home: string;
      service: string;
      about: string;
      contact: string;
    };
    cta: {
      primary: string;
      services: string;
      about: string;
      consultation: string;
      discuss: string;
      getInTouch?: string;
      learnMore?: string;
    };
    footerSummary: string;
    rights: string;
    languageLabel: string;
  };
  home: {
    heroEyebrow: string;
    heroH1: string;
    heroH1Lead?: string;
    heroH1Accent?: string;
    heroBody: string;
    heroScriptBadge?: string;
    servicesHeading: string;
    servicesIntro: string;
    aboutEyebrow?: string;
    aboutHeadingLead?: string;
    aboutHeadingAccent?: string;
    aboutSummary?: string;
    aboutScriptBadge?: string;
    aboutMetrics?: MetricItem[];
    whyEyebrow?: string;
    whyHeadingLead?: string;
    whyHeadingAccent?: string;
    whyPillars?: WhyPillar[];
    clientsEyebrow: string;
    clientsHeading: string;
    clientsSubheading: string;
    clientsList: ClientItem[];
    testimonialsEyebrow: string;
    testimonialsHeading: string;
    testimonialsSubheading: string;
    testimonialsList: TestimonialItem[];
    approachHeading: string;
    approachBody: string;
    approachPoints: ApproachPoint[];
    processHeading: string;
    processSteps: ProcessStep[];
    faqHeading: string;
    faqIntro: string;
    faqs: FAQItem[];
    closingHeading: string;
    closingBody: string;
  };
  service: {
    h1: string;
    intro: string;
    navLabel: string;
    deliverablesLabel: string;
    scopeLabel: string;
    sharedProcessHeading: string;
    sharedProcess: string[];
    visitorNote: string;
  };
  about: {
    h1: string;
    profile: string;
    purposeHeading: string;
    purposeBody: string;
    purposeBodySecondary?: string;
    approachHeading: string;
    approachPoints: ApproachPoint[];
    teamHeading: string;
    teamBody: string;
    closingCta: string;
  };
  contact: {
    h1: string;
    intro: string;
    selectorLabel: string;
    options: {
      id: ServiceInquiry;
      label: string;
      desc: string;
    }[];
    supportingHeading: string;
    supportingPoints: string[];
    primaryContactLabel: string;
    whatsappCta: string;
    noNumberNotice: string;
    optionalLabels: {
      email: string;
      address: string;
      hours: string;
    };
  };
  whatsappMessages: Record<ServiceInquiry, string>;
}
