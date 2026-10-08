# Pekerjaan aktif

- Task aktif: [Company profile 3.SEC Business, Tax & Digital Solution](active/company-profile.md)
- Draft konten: [ID/EN untuk empat halaman](active/company-profile-content.md)
- Frontend handoff: [Contract Antigravity](handoffs/company-profile.md)
- UX review: menunggu review Codex atas hasil frontend Antigravity.
- Tahap: Redesign visual berbasis konsep referensi pengguna (Bali temple hero, aksen tulisan tangan emas Caveat, palet Deep Navy + Crimson + Gold, 3 core floating cards: Tax & Accounting, Payroll & HR Consultant, Digital Solution, section About workspace & 3 KPI metrics vertikal, dan Why Choose Us) berhasil diimplementasikan secara komprehensif dan responsif.
- Owner saat ini: Codex untuk review integrasi dan UX review.
- Diperbarui: 2026-10-05 (Asia/Makassar).
- Branch/commit terakhir diperiksa: main, b4f76e7.
- Working tree: Komponen baru `PageBreadcrumb` (`components/PageBreadcrumb.tsx`) dibuat untuk menstandarkan seluruh breadcrumb halaman (`about`, `service`, `contact`). Garis pembatas horizontal tipis `border-b border-stone-200/90 pb-4`, font monospace uppercase berjarak warna biru `#0284C7` (primary) dan abu-abu stone-500 (secondary) kini 100% konsisten di semua halaman ID dan EN. Seksi "Our Team" (`components/TeamSection.tsx`) tetap rapi dalam format grid 3 kolom menyamping mengalir ke bawah.
- Verifikasi terakhir: `npm run lint` PASS (0 errors, 0 warnings), `npm run build` PASS (12/12 static SSG routes). Dev server aktif di port 3000.
- Langkah berikutnya: Codex melakukan final review integrasi dan UX.
- Keputusan/akses tertunda: tinjauan pengguna terhadap daftar nama/logo klien riil dan kutipan testimoni resmi bila ingin mengganti data draft terpasang; lihat task aktif.
