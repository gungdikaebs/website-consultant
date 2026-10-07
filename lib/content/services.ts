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
      title: 'Payroll & HR Management',
      tag: 'Pengelolaan Gaji & HR Administrasi',
      shortDesc: 'Pengelolaan perhitungan gaji, slip gaji, konfigurasi HRIS, dan administrasi HR terkait agar proses payroll lebih terstruktur dan patuh regulasi.',
      sectionHeading: 'Kelola payroll dan administrasi HR melalui proses yang tertata.',
      sectionSummary: 'Kami mendukung pengolahan payroll dan administrasi SDM berdasarkan data karyawan, komponen gaji, dan ketentuan perusahaan yang disepakati.',
      draftScope: [
        'Administrasi HR — Pengelolaan data karyawan, dokumentasi HR, absensi, manajemen cuti, dan dukungan administrasi HR harian.',
        'Setup & Konfigurasi HRIS — Implementasi HRIS, penyiapan data karyawan, konfigurasi sistem, pengaturan alur kerja (workflow), dan optimasi dasar sistem.',
        'Pemrosesan Payroll — Perhitungan gaji bulanan, administrasi gaji, potongan karyawan, tunjangan, dan pelaporan payroll.',
        'Manajemen Talenta — Dukungan rekrutmen, onboarding, pengembangan karyawan, manajemen kinerja, dan administrasi talenta.',
      ],
      deliverables: 'Perhitungan gaji, slip gaji, dan ringkasan bulanan sesuai periode pekerjaan. Batas waktu dan validasi disepakati bersama.',
      cta: 'Diskusikan Kebutuhan Payroll & HR Anda',
      index: ''
    },
    {
      id: 'it',
      title: 'Digital Solution',
      tag: 'Website, Otomatisasi & Solusi Digital',
      shortDesc: 'Konsultasi dan pengembangan website modern, otomatisasi proses bisnis, dan solusi digital yang disesuaikan dengan tujuan bisnis Anda.',
      sectionHeading: 'Bangun website dan otomatisasi sistem untuk akselerasi bisnis Anda.',
      sectionSummary: 'Kami membantu menerjemahkan kebutuhan operasional menjadi solusi website modern dan otomatisasi proses bisnis yang efisien, dari perancangan hingga pemeliharaan berkala.',
      draftScope: [
        'Konsultasi kebutuhan dan penentuan ruang lingkup solusi digital & website.',
        'Pengembangan website modern untuk profil perusahaan, katalog produk, atau portal klien.',
        'Otomatisasi proses bisnis dan integrasi alur kerja (workflow automation).',
        'Maintenance, pembaruan website, dan optimasi sistem digital secara berkala.',
      ],
      deliverables: 'Website profesional atau solusi otomatisasi proses bisnis dengan fungsionalitas jelas, jadwal serah terima terstruktur, dan dukungan maintenance berkala.',
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
      title: 'Payroll & HR Management',
      tag: 'Payroll & HR Administration',
      shortDesc: 'Salary calculations, payslips, and comprehensive HR administration to support compliant and punctual payroll processes.',
      sectionHeading: 'Bring structure and accuracy to your payroll and HR processes.',
      sectionSummary: 'We support payroll processing and HR compliance based on employee records, compensation structures, and agreed company policies.',
      draftScope: [
        'HR Administration — Employee records, HR documentation, attendance, leave management, and day-to-day HR administrative support.',
        'HRIS Setup & Configuration — HRIS implementation, employee data setup, system configuration, workflow setup, and basic system optimization.',
        'Payroll Processing — Monthly payroll calculation, salary administration, employee deductions, allowances, and payroll reporting.',
        'Talent Management — Recruitment support, onboarding, employee development, performance management, and talent administration.',
      ],
      deliverables: 'Calculations, payslips, and monthly summaries for the agreed period with transparent review schedules.',
      cta: 'Discuss Your Payroll & HR Needs',
      index: ''
    },
    {
      id: 'it',
      title: 'Digital Solution',
      tag: 'Website, Automation & Digital Systems',
      shortDesc: 'Modern website engineering, business process automation, and digital solutions tailored to accelerate your business operations.',
      sectionHeading: 'Develop high-performance websites and process automation around your business goals.',
      sectionSummary: 'We transform operational workflows into modern web platforms and automated business processes, from initial strategy to ongoing maintenance.',
      draftScope: [
        'Digital strategy consultation and technical scoping.',
        'Modern website engineering for corporate profiles, catalogs, or customer portals.',
        'Business process automation and workflow integration.',
        'System maintenance, performance optimization, and scheduled updates.',
      ],
      deliverables: 'Fully functional websites or workflow automation solutions with defined milestones, documentation, and reliable ongoing support.',
      cta: 'Discuss Your Digital Solutions',
      index: ''
    },
  ],
};
