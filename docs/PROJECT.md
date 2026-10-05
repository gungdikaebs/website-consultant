# Konteks proyek

## Tujuan dan pengguna

3.SEC Business, Tax & Digital Solution adalah brand company profile untuk Business, Tax & Digital Solution (Tax & Accounting, Digital Solution, dan Payroll & HR Consultant). Website menargetkan bisnis lokal dan asing yang menjalankan kegiatan usaha di Bali/Indonesia maupun global, lintas industri. Tujuan utama adalah percakapan konsultasi melalui WhatsApp.

Positioning: **satu partner untuk tiga bidang layanan**, dengan porsi setara. 3.SEC belum beroperasi; beberapa anggota tim memiliki pengalaman menangani klien sebelumnya. Pengalaman tersebut melekat pada anggota tim, bukan riwayat klien perusahaan.

## Contract produk yang disepakati

- Empat halaman inti: Home, Service, About, Kontak. Service memuat tiga bagian tanpa halaman detail terpisah.
- Bahasa Indonesia dan English; Indonesia default pada alamat utama.
- Tax & Accounting mencakup konsultasi dan pengelolaan rutin; IT berfokus website/aplikasi dan maintenance; Payroll mencakup pengelolaan payroll.
- Draft konten lengkap disusun untuk ditinjau pengguna. Nama teks digunakan sampai logo tersedia. Field perusahaan kosong mengikuti state tidak tersedia atau disembunyikan bila opsional.
- Scope pertama frontend statis. Backend, CMS, auth, database, dashboard, form pengiriman, dan deploy belum termasuk.
- CTA membuka WhatsApp setelah nomor perusahaan tersedia; tanpa nomor, CTA menuju Kontak yang menjelaskan ketersediaan kontak. Website tidak memproses pesan.

## Navigasi kode dan teknologi

Kode saat ini masih starter: `app/page.tsx`, `app/layout.tsx`, `app/globals.css`. Sumber stack, dependency, dan scripts adalah `package.json`; konfigurasi adalah `next.config.ts` dan `tsconfig.json`.

Frontend direncanakan menggunakan App Router dengan locale id/en, kamus konten TypeScript, dan komponen bersama. Server Components menangani konten; interaksi browser dibatasi pada area yang memerlukannya. Belum ada backend/API atau design system terimplementasi.

Panduan Next.js terpasang berada di `node_modules/next/dist/docs/`; baca bagian relevan sebelum implementasi.

## Desain dan ownership

Lihat [DESIGN.md](DESIGN.md) untuk arah pengalaman. Antigravity memiliki ownership UI/UX dan frontend; Codex memiliki contract engineering serta review integrasi dan UX. Progres dan handoff berada di [CURRENT.md](../workflow/CURRENT.md).

## Informasi belum tersedia

Logo, nomor WhatsApp, email, alamat, jam operasional, serta identitas dan pengalaman spesifik tim. Cakupan layanan rinci dan copy bilingual memerlukan tinjauan sebelum publikasi.

Terakhir dicocokkan: 2026-10-05, wawancara pengguna dan inspeksi starter. Route dan fitur yang disepakati belum terimplementasi.
