# Pekerjaan aktif

- Task aktif: [Company profile 3.SEC Business, Tax & Digital Solution](active/company-profile.md)
- Draft konten: [ID/EN untuk empat halaman](active/company-profile-content.md)
- Frontend handoff: [Contract Antigravity](handoffs/company-profile.md)
- UX review: menunggu review Codex atas hasil frontend Antigravity.
- Tahap: Redesign visual berbasis konsep referensi pengguna (Bali temple hero, aksen tulisan tangan emas Caveat, palet Deep Navy + Crimson + Gold, 3 core floating cards: Tax & Accounting, Payroll & HR Consultant, Digital Solution, section About workspace & 3 KPI metrics vertikal, dan Why Choose Us) berhasil diimplementasikan secara komprehensif dan responsif.
- Owner saat ini: Codex untuk review integrasi dan UX review.
- Diperbarui: 2026-10-05 (Asia/Makassar).
- Branch/commit terakhir diperiksa: main, b4f76e7.
- Working tree: Komponen `components/TeamSection.tsx` disesuaikan untuk layout 5 kolom pada layar desktop (`lg:grid-cols-5`). Teks nama, peran, dan tombol LinkedIn pada layar desktop (`lg:`) dipindahkan ke bawah foto (`hidden lg:flex pt-3 items-start justify-between`) agar tidak sempit dan foto tampak bersih penuh, sementara pada layar mobile/tablet (`< lg`) kartu badge overlay tetap dipertahankan (`lg:hidden`). Seluruh breadcrumb halaman konsisten melalui `PageBreadcrumb`.
- Verifikasi terakhir: `npm run lint` PASS (0 errors, 0 warnings), `npm run build` PASS (12/12 static SSG routes). Dev server aktif di port 3000.
- Langkah berikutnya: Codex melakukan final review integrasi dan UX.
- Keputusan/akses tertunda: tinjauan pengguna terhadap daftar nama/logo klien riil dan kutipan testimoni resmi bila ingin mengganti data draft terpasang; lihat task aktif.
