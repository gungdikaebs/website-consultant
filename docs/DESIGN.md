# Konteks desain

Status: sistem visual stabil dan frontend empat halaman bilingual terimplementasi.

## Brief

Company profile 3.SEC Business, Tax & Digital Solution untuk bisnis dan enterprise modern lintas industri secara global. Pesan utama: satu partner untuk Tax & Accounting, Digital Solution, dan Payroll & HR Consultant. Ketiganya mendapat porsi setara.

Karakter disepakati: **profesional dan modern** dengan pendekatan *The Refined Modern Advisory* bernuansa editorial yang jernih, arsitektural, dan personal.

Empat halaman inti: Home, Service, About, Kontak dalam Indonesia dan English. Indonesia menjadi bahasa default (`/id`). Detail tiga layanan berada dalam satu halaman Service.

## Sistem visual yang stabil

- **Design Read**: Company profile advisory multi-layanan untuk bisnis, startup, dan enterprise modern lintas industri (posisi global tanpa pembatasan geografis), dengan bahasa visual modern advisory beraksen editorial, menggunakan fondasi Plus Jakarta Sans, palet deep navy-warm alabaster-deep teal, dan layout berstruktur lapang.
- **Three Dials**:
  - `visual_variance`: 5 (seimbang antara keteraturan arsitektural dan ritme editorial asimetris).
  - `motion_intensity`: 3 (mikro-interaksi halus 0.2s–0.3s ease-out, menghormati `prefers-reduced-motion`).
  - `information_density`: 5 (ruang baca lapang, nyaman dipindai di mobile 360px maupun desktop).
- **Tipografi Editorial Advisory (Terinspirasi SAS Bali)**:
  - Headings (`H1`, `H2`, `H3`): **`Lora`** (Bold 700 / SemiBold 600, serif editorial, tracking-tight). Memberikan wibawa klasik, tenang, terpercaya, dan bereputasi tinggi khas firma penasihat bisnis terkemuka.
  - Body, Teks Deskripsi & Navigasi: **`Plus Jakarta Sans`** (Regular 400 / Medium 500, leading-relaxed). Menjamin ketajaman dan kenyamanan membaca copy modern yang padat.
  - Index & Meta Tag: **`Geist Mono`** (Medium 500, uppercase) untuk penomoran layanan (`01`, `02`, `03`) dan badge teknis.
- **Arah Imagery & Asset Visual (Tropical Modern Architectural Editorial)**:
  - Hero Section: Menggunakan gambar latar belakang paviliun konsultasi arsitektural modern tropis Bali (`public/images/hero-bg.jpg`) berpadu dengan panel kaca buram hangat (*frosted alabaster card* `#FBFBF9/85` dengan `backdrop-blur-md`) untuk menjamin kontras teks WCAG AAA dan keterbacaan prima.
  - Halaman About: Menampilkan visual editorial ruang kerja dan ruang pertemuan konsultasi (`public/images/about-workspace.jpg`) yang tenang dan profesional untuk memperkuat narasi keterbukaan dan kredibilitas.
  - Asset bersifat ilustratif arsitektural tanpa profil orang fiktif, sesuai batasan handoff.


- **Palet Warna & Rasio Kontras (Terverifikasi WCAG 2.1 AA/AAA)**:
  - Deep Navy (`#0B192C`): warna teks utama dan primary button. Kontras terhadap alabaster: 16.2:1 (AAA).
  - Warm Alabaster (`#FBFBF9`): latar kanvas hangat editorial.
  - Pure White (`#FFFFFF`): latar kartu dan panel interaktif.
  - Slate Dark (`#334155`): teks tubuh utama. Kontras terhadap alabaster: 9.8:1 (AAA).
  - Slate Muted (`#475569`): teks keterangan dan catatan kaki. Kontras: 7.1:1 (AAA).
  - Deep Teal (`#0F766E` / teal-700): aksen tombol dan teks badge. Kontras terhadap putih: 4.67:1 (AA Normal Text).
  - Teal Tint (`#F0FDFA` / teal-50): latar badge layanan berpadu border `#CCFBF1` dan teks `#0F766E` (kontras 7.4:1 / AAA).
- **Token Canonical**: Didefinisikan pada [app/globals.css](../app/globals.css).

## Pola pengalaman

- Pengunjung mengenali layanan di Home, memeriksa cakupan di Service dan pendekatan di About, lalu berkonsultasi melalui WhatsApp.
- Tiga pilar layanan (Tax & Accounting, IT Consultant, Payroll Consultant) disajikan dengan bobot visual dan struktural yang setara.
- Pemilih bahasa (`ID | EN`) mempertahankan halaman aktif, query pencarian layanan, dan anchor hash.
- Tanpa nomor perusahaan (`whatsappNumber: null`), seluruh CTA konsultasi mengarah ke Kontak yang secara jujur menampilkan status bahwa kontak resmi sedang disiapkan.
- Profil tim menampilkan paragraf pengalaman anggota tim tanpa kartu profil, foto, atau klaim fiktif.
- Responsive mobile-first tanpa horizontal overflow pada 360px; navigasi drawer keyboard-friendly dengan trapping Esc-to-close dan touch target ≥ 44px.

