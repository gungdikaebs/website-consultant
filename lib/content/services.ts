import { ServiceDetail, Locale } from './types';

export const servicesData: Record<Locale, ServiceDetail[]> = {
  id: [
    {
      id: 'tax-accounting',
      index: '01',
      title: 'Tax & Accounting',
      tag: 'Keuangan & Kepatuhan Pajak',
      shortDesc:
        'Dukungan konsultasi, pembukuan, laporan keuangan, dan administrasi pajak untuk membantu Anda memahami kondisi keuangan bisnis.',
      sectionHeading: 'Pahami keuangan bisnis dengan pencatatan yang terstruktur.',
      sectionSummary:
        'Kami membantu kebutuhan konsultasi dan pengelolaan rutin keuangan serta administrasi pajak berdasarkan kondisi dan ruang lingkup bisnis Anda.',
      draftScope: [
        'Konsultasi kebutuhan accounting dan administrasi pajak.',
        'Pembukuan berdasarkan dokumen dan transaksi yang tersedia.',
        'Penyusunan laporan keuangan sesuai ruang lingkup pekerjaan.',
        'Dukungan administrasi dan pelaporan pajak sesuai kesepakatan layanan.',
      ],
      deliverables:
        'Pembukuan, laporan, atau rekomendasi sesuai layanan yang dipilih; kebutuhan dokumen dan periode pekerjaan ditetapkan pada diskusi awal.',
      cta: 'Diskusikan Tax & Accounting Anda',
    },
    {
      id: 'it',
      index: '02',
      title: 'IT Consultant',
      tag: 'Website & Solusi Digital',
      shortDesc:
        'Konsultasi dan pengembangan website atau aplikasi yang disesuaikan dengan tujuan bisnis, dilengkapi maintenance sesuai kesepakatan.',
      sectionHeading: 'Bangun website dan aplikasi untuk kebutuhan bisnis Anda.',
      sectionSummary:
        'Kami membantu menerjemahkan kebutuhan bisnis menjadi rencana website atau aplikasi, dari pembahasan awal hingga pengembangan dan maintenance yang disepakati.',
      draftScope: [
        'Konsultasi kebutuhan dan penentuan ruang lingkup website/aplikasi.',
        'Pengembangan website untuk profil, layanan, atau kebutuhan bisnis lainnya.',
        'Pengembangan aplikasi sesuai alur kerja yang disepakati.',
        'Maintenance website dan aplikasi sesuai cakupan layanan.',
      ],
      deliverables:
        'Website atau aplikasi dengan fitur, jadwal, dan cara serah terima yang ditetapkan sebelum pengembangan. Maintenance dibahas sebagai bagian dari kesepakatan layanan.',
      cta: 'Diskusikan Kebutuhan IT Anda',
    },
    {
      id: 'payroll',
      index: '03',
      title: 'Payroll Consultant',
      tag: 'Pengelolaan Gaji & Administrasi',
      shortDesc:
        'Pengelolaan perhitungan gaji, slip gaji, dan administrasi terkait agar proses payroll lebih terstruktur.',
      sectionHeading: 'Kelola payroll melalui proses yang lebih tertata.',
      sectionSummary:
        'Kami mendukung pengolahan payroll berdasarkan data karyawan, komponen gaji, dan ketentuan perusahaan yang disepakati.',
      draftScope: [
        'Pengolahan perhitungan gaji berdasarkan data yang diberikan perusahaan.',
        'Penyusunan slip gaji.',
        'Dukungan administrasi terkait pajak karyawan dan BPJS sesuai kesepakatan layanan.',
        'Penyusunan ringkasan payroll untuk kebutuhan perusahaan.',
      ],
      deliverables:
        'Perhitungan, slip gaji, dan ringkasan sesuai periode pekerjaan. Batas waktu penyerahan data dan pemeriksaan hasil disepakati bersama.',
      cta: 'Diskusikan Kebutuhan Payroll Anda',
    },
  ],
  en: [
    {
      id: 'tax-accounting',
      index: '01',
      title: 'Tax & Accounting',
      tag: 'Finance & Tax Administration',
      shortDesc:
        'Advisory, bookkeeping, financial reporting, and tax administration support to help you understand your business finances.',
      sectionHeading: 'Understand your finances through structured records.',
      sectionSummary:
        'We support advisory and routine financial and tax administration needs around your business circumstances and agreed scope.',
      draftScope: [
        'Accounting and tax administration consultations.',
        'Bookkeeping based on available transaction records and supporting documents.',
        'Financial reporting within the agreed scope of work.',
        'Tax administration and filing support under the service agreement.',
      ],
      deliverables:
        'Records, reports, or recommendations based on the selected service. Required documents and reporting periods are established during the initial discussion.',
      cta: 'Discuss Your Tax & Accounting Needs',
    },
    {
      id: 'it',
      index: '02',
      title: 'IT Consultant',
      tag: 'Web & Digital Development',
      shortDesc:
        'Website and application consulting and development aligned with your business goals, with maintenance under an agreed scope.',
      sectionHeading: 'Develop websites and applications around your business needs.',
      sectionSummary:
        'We help turn business requirements into a website or application plan, from the initial discussion through development and agreed maintenance.',
      draftScope: [
        'Requirements consultation and website/application scoping.',
        'Website development for company profiles, services, or other business needs.',
        'Application development around agreed workflows.',
        'Website and application maintenance within an agreed scope.',
      ],
      deliverables:
        'A website or application with features, timeline, and handover arrangements defined before development. Maintenance is discussed as part of the service agreement.',
      cta: 'Discuss Your IT Needs',
    },
    {
      id: 'payroll',
      index: '03',
      title: 'Payroll Consultant',
      tag: 'Payroll & HR Administration',
      shortDesc:
        'Salary calculations, payslips, and related administration to support a more structured payroll process.',
      sectionHeading: 'Bring structure to your payroll process.',
      sectionSummary:
        'We support payroll processing based on employee data, salary components, and agreed company policies.',
      draftScope: [
        'Salary calculations based on information provided by the company.',
        'Payslip preparation.',
        'Employee tax and BPJS administration support under the service agreement.',
        'Payroll summaries for company use.',
      ],
      deliverables:
        'Calculations, payslips, and summaries for the agreed period. Data submission deadlines and review arrangements are agreed together.',
      cta: 'Discuss Your Payroll Needs',
    },
  ],
};
