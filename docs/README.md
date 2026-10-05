# Peta dokumentasi sistem

Folder `docs/` menjawab: **bagaimana sistem bekerja sekarang?** Isinya adalah knowledge lintas-task yang masih berlaku, bukan progres pekerjaan atau activity log.

Gunakan peta ini secara kondisional:

| Kebutuhan | Dokumen yang dibaca |
|---|---|
| Tujuan produk, pengguna, batas sistem, atau navigasi kode | [PROJECT.md](PROJECT.md) |
| Arah visual dan pola UI yang sudah disepakati | [DESIGN.md](DESIGN.md) |
| Alasan keputusan teknis atau produk lintas-task | [DECISIONS.md](DECISIONS.md) |
| Status, plan, handoff, atau review pekerjaan aktif | [workflow/CURRENT.md](../workflow/CURRENT.md) lalu artifact yang ditautkan |

Tambahkan dokumen domain seperti architecture, database, API, atau deployment hanya ketika sistem benar-benar memiliki knowledge stabil yang tidak cukup jelas dari kode dan konfigurasi. Tautkan dokumen baru dari peta ini dengan trigger baca yang spesifik.

## Progressive context loading

Mulai dari `AGENTS.md`, `workflow/CURRENT.md`, dan area kode yang relevan. Baca satu dokumen pada tabel hanya jika task menyentuh domainnya. Perluas context ketika ditemukan dependency atau ketidakpastian konkret; jangan memuat seluruh `docs/` atau memberikannya kepada seluruh sub-agent secara default.

Sub-agent menerima tujuan, acceptance criteria, constraint, path, dan potongan dokumentasi yang relevan terhadap perannya. Repository tetap menjadi source of truth untuk implementation detail.

## Kapan dokumentasi diperbarui

Perbarui permanent docs ketika state sistem berubah secara meaningful, misalnya:

- contract API atau data berubah;
- schema database berubah;
- arsitektur, user flow stabil, atau deployment strategy berubah;
- keputusan lintas-task disetujui atau diganti;
- design system atau pola pengalaman lintas-feature berubah.

Refactor internal, rename lokal, formatting, atau detail implementasi yang tidak mengubah contract tidak memerlukan pembaruan docs. Git menyimpan history perubahan kode; artifact pada `workflow/` menyimpan konteks pekerjaan sementara.

## Menyiapkan proyek tujuan

Paket default terdiri dari `AGENTS.md`, `docs/`, dan `workflow/`. `standalone-skills/` disalin hanya bila diperlukan. Pada onboarding, pelajari repository lalu isi template dengan fakta yang ditemukan dan tanyakan hanya informasi produk yang tidak tersedia. Jangan membuat dokumen domain, menyalin command, atau menduplikasi konfigurasi tanpa kebutuhan nyata.
