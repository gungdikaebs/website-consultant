'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Locale, Dictionary, ServiceInquiry } from '@/lib/content/types';
import { contactConfig, buildWhatsAppLink } from '@/lib/content/config';

interface ContactSelectorProps {
  lang: Locale;
  dictionary: Dictionary;
}

const VALID_INQUIRIES: ServiceInquiry[] = ['general', 'tax-accounting', 'it', 'payroll'];

export default function ContactSelector({ lang, dictionary }: ContactSelectorProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Derive selected service directly from query parameter without cascading effects
  const queryParam = searchParams.get('service');
  const selectedService: ServiceInquiry =
    queryParam && (VALID_INQUIRIES as string[]).includes(queryParam)
      ? (queryParam as ServiceInquiry)
      : 'general';

  const handleSelect = (serviceId: ServiceInquiry) => {
    const params = new URLSearchParams(searchParams.toString());
    if (serviceId === 'general') {
      params.delete('service');
    } else {
      params.set('service', serviceId);
    }
    const newQuery = params.toString();
    const newUrl = `/${lang}/contact${newQuery ? `?${newQuery}` : ''}`;
    router.replace(newUrl, { scroll: false });
  };

  const messageText = dictionary.whatsappMessages[selectedService];
  const waLink = buildWhatsAppLink(
    contactConfig.whatsappNumber,
    messageText,
    lang,
    selectedService === 'general' ? undefined : selectedService
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* Left Column: Interactive Service Selector */}
      <div className="lg:col-span-7 space-y-6">
        <div>
          <label className="block text-sm font-semibold uppercase tracking-wider text-stone-500 font-mono mb-3">
            {dictionary.contact.selectorLabel}
          </label>
          <div
            role="radiogroup"
            aria-label={dictionary.contact.selectorLabel}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {dictionary.contact.options.map((option) => {
              const isSelected = selectedService === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => handleSelect(option.id)}
                  className={`p-5 rounded-xl text-left border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] ${
                    isSelected
                      ? 'bg-white border-[#0F766E] shadow-sm ring-1 ring-[#0F766E]'
                      : 'bg-white/80 border-stone-200/90 hover:border-stone-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-base font-bold ${
                        isSelected ? 'text-[#0F766E]' : 'text-[#0B192C]'
                      }`}
                    >
                      {option.label}
                    </span>
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected
                          ? 'border-[#0F766E] bg-[#0F766E]'
                          : 'border-stone-300 bg-white'
                      }`}
                    >
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-stone-600">
                    {option.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Context Card */}
        <div className="p-5 rounded-xl bg-stone-100/70 border border-stone-200 text-xs text-stone-600 space-y-1">
          <p className="font-semibold text-stone-800">
            {lang === 'id' ? 'Topik Diskusi Terpilih:' : 'Selected Discussion Topic:'}
          </p>
          <p className="italic font-mono text-[11px] text-stone-700 bg-white/70 p-2.5 rounded-md border border-stone-200">
            &ldquo;{messageText}&rdquo;
          </p>
          <p className="text-[11px] text-stone-500 pt-1">
            {lang === 'id'
              ? '* Pesan ini dapat Anda ubah atau lengkapi sebelum dikirimkan di WhatsApp.'
              : '* You can freely edit or expand this message before sending on WhatsApp.'}
          </p>
        </div>
      </div>

      {/* Right Column: Contact Channels & Supporting Info */}
      <div className="lg:col-span-5 space-y-6">
        {/* Primary Contact Panel */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-5">
          <h2 className="text-lg font-bold text-[#0B192C] tracking-tight">
            {dictionary.contact.primaryContactLabel}
          </h2>

          {waLink.isExternal ? (
            <div className="space-y-4">
              <a
                href={waLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#0F766E] hover:bg-[#115E59] text-white font-semibold text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.115-.527-1.422-.591-2.339-2.039-2.41-2.133-.071-.094-.575-.765-.575-1.46 0-.694.364-1.035.495-1.177.13-.142.285-.178.38-.178.095 0 .19.001.272.006.088.004.204-.033.319.243.119.286.405.992.441 1.064.036.071.06.155.012.25-.048.095-.072.155-.143.238-.071.083-.15.185-.214.249-.071.071-.145.148-.063.29.083.142.368.608.79 0.984.543.483 1.002.632 1.144.703.143.071.226.06.31-.036.084-.095.357-.417.452-.56.095-.143.19-.119.321-.071.131.048.832.393.975.464.143.071.238.107.273.167.036.06.036.345-.108.75z" />
                </svg>
                <span>{dictionary.contact.whatsappCta}</span>
              </a>
              <p className="text-xs text-stone-500 text-center">
                {lang === 'id'
                  ? 'Percakapan akan dibuka langsung pada aplikasi WhatsApp Anda.'
                  : 'The chat will open directly in your WhatsApp application.'}
              </p>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-900 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                <span className="font-semibold text-xs uppercase tracking-wide text-amber-800">
                  {lang === 'id' ? 'Status Kontak' : 'Contact Status'}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-amber-900/90">
                {dictionary.contact.noNumberNotice}
              </p>
            </div>
          )}

          {/* Optional Info: Email, Address, Business Hours */}
          {(contactConfig.email || contactConfig.address || contactConfig.businessHours) && (
            <div className="pt-4 border-t border-stone-100 space-y-3 text-xs text-stone-600">
              {contactConfig.email && (
                <div>
                  <span className="font-semibold text-stone-800 block">
                    {dictionary.contact.optionalLabels.email}:
                  </span>
                  <a href={`mailto:${contactConfig.email}`} className="text-[#0F766E] hover:underline">
                    {contactConfig.email}
                  </a>
                </div>
              )}
              {contactConfig.address && (
                <div>
                  <span className="font-semibold text-stone-800 block">
                    {dictionary.contact.optionalLabels.address}:
                  </span>
                  <span>{contactConfig.address}</span>
                </div>
              )}
              {contactConfig.businessHours && (
                <div>
                  <span className="font-semibold text-stone-800 block">
                    {dictionary.contact.optionalLabels.hours}:
                  </span>
                  <span>{contactConfig.businessHours}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Supporting Checklist Info */}
        <div className="p-6 rounded-2xl bg-[#0B192C] text-white shadow-xs space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
            {dictionary.contact.supportingHeading}
          </h3>
          <ul className="space-y-2.5 text-xs text-stone-300">
            {dictionary.contact.supportingPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                <span className="font-mono text-[#14B8A6] mt-0.5">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
