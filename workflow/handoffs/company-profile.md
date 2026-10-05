# 3.SEC Business, Tax & Digital Solution — Frontend handoff

Status artifact: HANDOFF — scope disetujui, konten draft menunggu tinjauan pengguna.

## Tujuan dan urutan kerja

Bangun frontend company profile empat halaman untuk klien lokal dan asing yang menjalankan bisnis di Bali/Indonesia, lintas industri. Tujuan utama adalah percakapan konsultasi melalui WhatsApp. Ketiga bidang layanan mendapat porsi setara.

1. Baca [arah desain](../../docs/DESIGN.md) dan [draft konten ID/EN](../active/company-profile-content.md). Gunakan draft sebagai sumber copy; tampilkan hanya data perusahaan yang tersedia.
2. Tentukan dan implementasikan sistem visual profesional-modern, responsive, dan accessible. Antigravity memiliki ownership visual, layout, imagery, motion, serta frontend.
3. Implementasikan route dan perilaku di bawah dengan stack existing; baca panduan Next.js lokal sebelum menulis kode.
4. Jalankan acceptance checks dan kembalikan hasil ke Codex untuk review integrasi dan UX.

Implementation siap review ketika delapan halaman lokal tersedia, behavior dengan/tanpa kontak benar, screenshot tersedia, dan hasil build/lint dilaporkan. Publikasi serta pengadaan data perusahaan tidak masuk scope.

## Permukaan dan user flow

| Halaman | Route ID / EN | Isi dan tindakan |
| --- | --- | --- |
| Home | `/id` / `/en` | Hero, ringkasan tiga layanan, pendekatan, proses, FAQ, CTA. |
| Service | `/id/service` / `/en/service` | Tiga bagian layanan, cakupan, hasil yang dibahas, proses, CTA per layanan. |
| About | `/id/about` / `/en/about` | Profil, tujuan, pendekatan, pengalaman anggota tim. |
| Kontak / Contact | `/id/contact` / `/en/contact` | Pemilih kebutuhan layanan, WhatsApp, informasi pendukung dan kontak opsional. |

Alur: Home → Service → bagian layanan → konsultasi. About membantu pengunjung mengenali perusahaan. Header menyediakan empat halaman, pemilih bahasa, dan CTA umum. Footer memakai navigasi yang sama.

## Contract engineering

- Gunakan App Router dengan segmen `app/[lang]`; locale `id` dan `en`, HTML lang sesuai locale. `/` redirect tetap ke `/id`; bahasa browser tidak mengganti default ini.
- Locale/path yang tidak didukung menghasilkan 404. Kamus konten statis TypeScript cukup; tidak perlu dependency i18n tambahan.
- Simpan kedua bahasa terpisah dari komponen dengan shape TypeScript yang sama. Identitas layanan: `tax-accounting`, `it`, `payroll`. Tidak ada API, database, auth, atau form submit.
- Gunakan shared header, footer, CTA, dan pola bagian layanan. Server Components untuk konten; client boundary hanya untuk interaksi yang membutuhkan browser/state.
- Konfigurasi kontak bersama memiliki nomor WhatsApp `string | null`, serta email, alamat, jam operasional opsional. Nilai awal seluruh kontak kosong. Nomor berisi digit internasional tanpa `+`, spasi, atau tanda baca; nilai invalid mengikuti state tidak tersedia. Gunakan hanya nomor perusahaan yang diberikan pengguna.
- Draft copy dan pesan WhatsApp berada di [content artifact](../active/company-profile-content.md). Token visual belum ada; asset starter Next.js diganti pada halaman hasil implementasi.

## Behavior dan states

### Navigasi dan bahasa

- ID: Home, Service, About, Kontak; EN: Home, Service, About, Contact.
- Pemilih bahasa mengubah locale serta mempertahankan halaman, service query valid, dan anchor layanan bila ada.
- Card layanan Home menuju `/{lang}/service#tax-accounting`, `#it`, atau `#payroll`. Bagian Service memakai ID tersebut dan bisa dibuka langsung.
- Menu mobile mendukung keyboard, menyampaikan expanded state, dan ditutup setelah navigasi. Konten tetap tersedia pada desktop.
- FAQ dapat memakai native disclosure. Tidak diperlukan loading buatan.

### Konsultasi dan kontak

- Nomor valid: CTA membuka `https://wa.me/{number}?text={encodedMessage}`; pesan mengikuti locale dan layanan. Pengunjung mengirim sendiri melalui WhatsApp; website tidak mengonfirmasi booking.
- Nomor kosong/invalid: CTA umum menuju `/{lang}/contact`; CTA layanan menuju `/{lang}/contact?service={serviceId}`. Hindari link WhatsApp kosong/dummy.
- Kontak memakai service query valid sebagai pilihan awal. Query kosong/tidak dikenal memakai kebutuhan umum. Pemilih memuat kebutuhan umum dan tiga layanan; pilihan hanya state UI tanpa penyimpanan atau pengiriman data.
- Dengan nomor valid, tombol Kontak memakai pilihan saat ini. Tanpa nomor, tampilkan copy kontak belum tersedia dan pemilih layanan, tanpa tombol WhatsApp aktif.
- Field email/alamat/jam operasional kosong disembunyikan. Placeholder editorial tidak ditampilkan sebagai data nyata.
- Tidak ada input data pribadi, API request, success toast, atau retry state. Link eksternal yang membuka tab baru memakai rel yang sesuai.

## Constraint

- [PROJECT.md](../../docs/PROJECT.md) adalah sumber positioning; [DESIGN.md](../../docs/DESIGN.md) adalah brief pengalaman. Antigravity mencatat keputusan visual stabil di DESIGN.md.
- Empat halaman inti saja; Service berisi tiga layanan. Artikel, halaman detail layanan, dashboard, CMS, form pengiriman, dan deploy di luar scope.
- Nama brand menjadi identitas teks sampai logo tersedia. Foto umum bersifat ilustratif, bukan profil tim/klien; asset memiliki hak penggunaan yang sesuai.
- Pengalaman sebelum Wirasa dijelaskan sebagai pengalaman anggota tim. Pakai paragraf tim draft sampai identitas dan pengalaman spesifik tersedia.
- Klaim hasil/compliance, konsultasi gratis, SLA respons, angka pencapaian, testimoni, dan logo klien memerlukan data nyata; tidak ada pada draft ini.
- Mobile-first, tanpa overflow horizontal pada 360 px; mendukung keyboard, focus terlihat, label kontrol, heading hierarkis, alt text, dan kontras memadai.
- Hormati reduced motion. Gunakan dependency existing dan Next.js Image untuk asset yang sesuai. Dependency baru atau perubahan approach utama memerlukan diskusi.
- Metadata title/description mengikuti locale dan draft. Canonical/hreflang absolut memakai origin deployment setelah tersedia; jangan menciptakan domain perusahaan.

## Acceptance criteria

- [ ] Delapan route dapat dibuka langsung dan `/` menuju `/id`.
- [ ] Label, copy, metadata, HTML lang, dan pesan WhatsApp mengikuti bahasa halaman.
- [ ] Pemilih bahasa mempertahankan halaman dan konteks layanan valid.
- [ ] Tiga layanan tampil setara; link/anchor bekerja melalui navigasi dan direct load.
- [ ] CTA umum dan layanan benar untuk nomor valid, kosong, dan invalid; tidak ada nomor/contact dummy.
- [ ] Pemilih kebutuhan Kontak menentukan pesan yang benar; service query tidak dikenal kembali ke kebutuhan umum.
- [ ] Tanpa data tim/kontak, halaman tetap informatif tanpa profil fiktif atau klaim perusahaan yang belum berjalan.
- [ ] Menu, pemilih bahasa/layanan, FAQ, dan CTA dapat dipakai melalui keyboard.
- [ ] Mobile 360 px, tablet, desktop tidak overflow; CTA terbaca dan reduced motion dihormati.
- [ ] Locale/path tidak dikenal menghasilkan 404.
- [ ] Lint dan build berhasil; pisahkan error existing bila ditemukan.

## Hasil yang dikembalikan ke Codex

Ringkasan file berubah, keputusan visual, screenshot empat halaman pada mobile dan desktop, cara mencoba flow, hasil lint/build serta pemeriksaan manual. Tandai konten sebagai draft dan cantumkan data kosong. Codex melakukan review lalu menulis revision artifact bila ada blocking issue. Frontend belum dinyatakan selesai sampai hasil tersedia dan direview.
