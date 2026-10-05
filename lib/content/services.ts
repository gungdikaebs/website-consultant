import { ServiceDetail, Locale } from './types';

export const servicesData: Record<Locale, ServiceDetail[]> = {
  id: [
    {
      id: 'tax-accounting',
      title: 'Tax & Accounting',
      tag: 'Keuangan & Kepatuhan Pajak',
      shortDesc: 'Dukungan konsultasi, pembukuan, laporan keuangan, dan administrasi pajak untuk membantu Anda memahami kondisi keuangan bisnis.',
      sectionHeading: 'Pahami keuangan bisnis dengan pencatatan yang terstruktur.',
      sectionSummary: 'Kami membantu kebutuhan konsultasi dan pengelolaan rutin keuangan serta administrasi pajak berdasarkan kondisi dan ruang lingkup bisnis Anda.',
      draftScope: [
        'Konsultasi kebutuhan accounting dan administrasi pajak.',
        'Pembukuan berdasarkan dokumen dan transaksi yang tersedia.',
        'Penyusunan laporan keuangan sesuai ruang lingkup pekerjaan.',
        'Dukungan administrasi dan pelaporan pajak sesuai kesepakatan layanan.',
      ],
      deliverables: 'Pembukuan, laporan, atau rekomendasi sesuai layanan yang dipilih; kebutuhan dokumen dan periode pekerjaan ditetapkan pada diskusi awal.',
      cta: 'Diskusikan Tax & Accounting Anda',
      index: ''
    },
    {
      id: 'payroll',
      title: 'Payroll & HR Consultant',
      tag: 'Pengelolaan Gaji & HR Administrasi',
      shortDesc: 'Pengelolaan perhitungan gaji, slip gaji, dan administrasi HR terkait agar proses payroll lebih terstruktur dan patuh regulasi.',
      sectionHeading: 'Kelola payroll dan administrasi HR melalui proses yang tertata.',
      sectionSummary: 'Kami mendukung pengolahan payroll dan administrasi SDM berdasarkan data karyawan, komponen gaji, dan ketentuan perusahaan yang disepakati.',
      draftScope: [
        'Pengolahan perhitungan gaji berdasarkan data yang diberikan perusahaan.',
        'Penyusunan slip gaji karyawan.',
        'Dukungan administrasi terkait pajak karyawan dan BPJS sesuai kesepakatan layanan.',
        'Penyusunan ringkasan payroll dan kepatuhan HR untuk kebutuhan perusahaan.',
      ],
      deliverables: 'Perhitungan gaji, slip gaji, dan ringkasan bulanan sesuai periode pekerjaan. Batas waktu dan validasi disepakati bersama.',
      cta: 'Diskusikan Kebutuhan Payroll & HR Anda',
      index: ''
    },
    {
      id: 'it',
      title: 'Digital Solution',
      tag: 'Website, Aplikasi & Solusi Digital',
      shortDesc: 'Konsultasi dan pengembangan website modern atau aplikasi digital yang disesuaikan dengan tujuan bisnis, dilengkapi maintenance andal.',
      sectionHeading: 'Bangun website dan sistem digital untuk akselerasi bisnis Anda.',
      sectionSummary: 'Kami membantu menerjemahkan kebutuhan bisnis menjadi solusi digital dan aplikasi tangguh, dari arsitektur awal hingga integrasi dan pemeliharaan.',
      draftScope: [
        'Konsultasi kebutuhan dan penentuan ruang lingkup solusi digital/website.',
        'Pengembangan website modern untuk profil bisnis, katalog, atau portal klien.',
        'Pengembangan aplikasi dan otomatisasi sesuai alur kerja perusahaan.',
        'Maintenance dan pembaruan sistem digital secara berkala.',
      ],
      deliverables: 'Website atau sistem aplikasi digital dengan fitur, jadwal serah terima, dan dokumentasi lengkap. Maintenance dibahas transparan.',
      cta: 'Diskusikan Solusi Digital Anda',
      index: ''
    },
  ],
  en: [
    {
      id: 'tax-accounting',
      title: 'Tax & Accounting',
      tag: 'Finance & Tax Administration',
      shortDesc: 'Advisory, bookkeeping, financial reporting, and tax administration support to help you understand your business finances.',
      sectionHeading: 'Understand your finances through structured records.',
      sectionSummary: 'We support advisory and routine financial and tax administration needs around your business circumstances and agreed scope.',
      draftScope: [
        'Accounting and tax administration consultations.',
        'Bookkeeping based on available transaction records and supporting documents.',
        'Financial reporting within the agreed scope of work.',
        'Tax administration and filing support under the service agreement.',
      ],
      deliverables: 'Records, reports, or recommendations based on the selected service. Required documents and reporting periods are established during the initial discussion.',
      cta: 'Discuss Your Tax & Accounting Needs',
      index: ''
    },
    {
      id: 'payroll',
      title: 'Payroll & HR Consultant',
      tag: 'Payroll & HR Administration',
      shortDesc: 'Salary calculations, payslips, and comprehensive HR administration to support compliant and punctual payroll processes.',
      sectionHeading: 'Bring structure and accuracy to your payroll and HR processes.',
      sectionSummary: 'We support payroll processing and HR compliance based on employee records, compensation structures, and agreed company policies.',
      draftScope: [
        'Salary calculations based on company records.',
        'Payslip preparation and distribution.',
        'Employee tax and social security (BPJS) administrative support under the agreement.',
        'Monthly payroll summaries and HR compliance documentation for management.',
      ],
      deliverables: 'Calculations, payslips, and monthly summaries for the agreed period with transparent review schedules.',
      cta: 'Discuss Your Payroll & HR Needs',
      index: ''
    },
    {
      id: 'it',
      title: 'Digital Solution',
      tag: 'Web, Applications & Digital Systems',
      shortDesc: 'Consulting and engineering modern websites and tailored digital software solutions, supported by dedicated maintenance.',
      sectionHeading: 'Develop high-performance digital solutions around your business goals.',
      sectionSummary: 'We transform operational workflows into intuitive web platforms and software tools, from strategy to deployment and long-term support.',
      draftScope: [
        'Digital strategy consultation and technical scoping.',
        'Modern website engineering for corporate profiles, portals, or customer touchpoints.',
        'Custom web application development matching business workflows.',
        'System maintenance, cloud optimization, and scheduled updates.',
      ],
      deliverables: 'Fully functional websites or digital platforms with defined milestones, source code handover, and reliable ongoing support.',
      cta: 'Discuss Your Digital Solutions',
      index: ''
    },
  ],
};
