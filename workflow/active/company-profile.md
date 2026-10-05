# Website company profile Wirasa Business & Advisory

Status artifact: ACTIVE — scope disetujui, contract dan draft copy siap handoff.

## Outcome dan scope

Empat halaman company profile bilingual untuk Tax & Accounting, IT, dan Payroll, dengan porsi setara. Brand, audience, scope layanan, positioning, dan arah pengalaman disimpan di [PROJECT.md](../../docs/PROJECT.md) serta [DESIGN.md](../../docs/DESIGN.md).

Frontend saja; backend, auth, database, CMS, dashboard, form submit, dan deploy di luar scope awal. User flow utama: mengenali layanan → memahami cakupan → memulai percakapan WhatsApp.

## Persetujuan dan ownership

Pengguna menyetujui hasil wawancara, memilih Home/Service/About/Kontak, lalu memberi arahan “Implement the plan”. Koreksi status bisnis: Wirasa belum beroperasi, tetapi beberapa anggota tim pernah menangani klien.

Jalur: STANDARD dengan handoff frontend lintas owner. Codex menyiapkan contract dan konten; Antigravity mengimplementasikan visual/frontend; Codex menjadi validator integrasi dan UX. Tidak ada sub-agent untuk perubahan dokumen berisiko rendah ini; pemeriksaan dilakukan Codex secara terarah.

## Acceptance criteria dan status

- [x] Brand, target klien, wilayah, bahasa, dan fokus tiga layanan dikonfirmasi.
- [x] Sitemap empat halaman, alur kontak, dan arah pengalaman ditetapkan.
- [x] Contract frontend-only, route bilingual, serta states kontak dirumuskan.
- [x] Draft lengkap ID/EN tersedia untuk ditinjau pengguna.
- [x] Frontend handoff siap dibawa ke Antigravity.
- [ ] Draft konten rinci ditinjau pengguna untuk kesesuaian penawaran.
- [ ] Frontend diimplementasikan Antigravity sesuai handoff.
- [ ] Bukti build/lint, screenshot responsive, dan flow checks tersedia.
- [ ] Codex menyelesaikan review integrasi dan UX, termasuk revisi blocking bila ada.

## Context routing

- [Draft konten](company-profile-content.md): copy empat halaman, label, metadata, FAQ, dan pesan WhatsApp ID/EN.
- [Frontend handoff](../handoffs/company-profile.md): route, behavior, states, constraints, acceptance checks.
- Stack dan scripts: package.json. Kode existing: app/page.tsx, app/layout.tsx, app/globals.css; masih starter.
- Sebelum implementasi, baca panduan Next.js terpasang yang relevan untuk versi proyek ini.

## Plan dan checkpoint

1. Discovery repository/referensi dan wawancara — selesai.
2. Plan disetujui pengguna — selesai.
3. Codex menyusun draft konten dan contract — selesai.
4. Pengguna membawa handoff ke Antigravity; tinjauan konten dapat berjalan bersamaan — berikutnya.
5. Antigravity membangun frontend dan mengembalikan bukti verifikasi — belum.
6. Codex review integrasi/UX lalu memberikan revision artifact jika diperlukan — belum.

Data kosong: logo, kontak perusahaan, identitas/foto/pengalaman spesifik tim. Contract mengatur state kosong; data tersebut bukan alasan membuat klaim atau kontak fiktif. Publikasi memerlukan tinjauan konten dan data yang valid, serta bukan bagian task ini.

## Verifikasi dan working tree

Diperbarui: 2026-10-05, Asia/Makassar. Branch main, commit terakhir diperiksa b4f76e7.

Perubahan pengguna awal dipertahankan: AGENTS.md modified, CLAUDE.md deleted; docs/, standalone-skills/, workflow/ untracked. Pekerjaan ini menambahkan draft copy dan handoff, memperbarui artifact aktif/CURRENT, serta mengisi keputusan produk pada docs/.

Verifikasi: inspeksi repository, referensi utama, dan panduan Next.js lokal; pemeriksaan tautan Markdown lokal serta konsistensi dokumen. Tidak ada kode aplikasi berubah. Build/lint dan browser checks belum dijalankan karena frontend masih starter; pemeriksaan tersebut menjadi kewajiban implementasi Antigravity.

Langkah berikutnya: pengguna membawa [handoff](../handoffs/company-profile.md) dan [draft copy](company-profile-content.md) ke Antigravity. Review belum dimulai; jangan archive task atau menyatakan website selesai sebelum hasil implementasi tersedia.
