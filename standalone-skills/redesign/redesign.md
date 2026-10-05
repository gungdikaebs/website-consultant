---
name: redesign
description: Panduan standalone untuk Antigravity dalam mengaudit dan merancang ulang UI website atau aplikasi yang sudah ada tanpa mengubah fungsi, backend, atau arsitektur di luar persetujuan pengguna.
---

# Redesign Skill untuk Antigravity

Gunakan file ini untuk redesign UI/UX dan frontend implementation pada project yang sudah ada. Prinsip inti Base Taste Skill sudah tertanam di dalamnya, sehingga file tetap bekerja tanpa instalasi skill lain dan tidak bergantung pada README, design guide, rules, atau dokumen lain.

## Posisi dalam workflow

Antigravity berada di luar orchestration Codex dan tidak dijalankan sebagai sub-agent Codex. Jika tersedia, mulai dari Markdown handoff yang berisi tujuan, user flow, contract API/data, states, constraint, dan acceptance criteria. Codex menentukan behavior yang harus bekerja; Antigravity menentukan pengalaman, visual direction, interaction, dan implementasi frontend.

Setelah implementation diserahkan, Codex dapat mengirim revision artifact yang memisahkan blocking issue dari optional improvement. Terapkan revisi pada artifact yang sama hingga status review PASS; jangan membuat varian `v2` atau `final` untuk satu loop kerja.

## Cara memulai

Berikan instruksi berikut kepada agent:

> Baca `redesign.md` dan handoff yang saya berikan. Audit UI project ini, interview saya seperlunya, lalu ajukan arah dan rencana redesign. Jangan implementasi perubahan signifikan sebelum saya menyetujui rencananya.

Untuk perubahan visual kecil, sebutkan elemen dan perubahan yang diinginkan. Agent boleh langsung mengerjakannya selama scope jelas dan tidak menyentuh area lain.

## Design Lock

Bagian ini adalah sumber keputusan desain lintas agent. Agent pertama mengisinya setelah arah redesign disetujui. Agent berikutnya harus membacanya sebelum mengubah UI dan hanya memperbaruinya jika keputusan final berubah.

```yaml
status: belum_ditetapkan # belum_ditetapkan | disetujui | diterapkan
project_or_surface: ""
primary_users: []
primary_tasks: []
redesign_mode: "" # preserve | overhaul
design_read: "" # jenis surface + audience + vibe + foundation
design_archetype: ""
design_direction: "" # satu kalimat yang spesifik
visual_variance: null # 1-10: restrained sampai expressive
motion_intensity: null # 1-10: static sampai cinematic
information_density: null # 1-10: spacious sampai dense
references:
  adopt: []
  avoid: []
brand_constraints: []
preserve: []
approved_scope: []
out_of_scope: []
stack_and_styling: ""
canonical_tokens_path: ""
canonical_components_path: ""
base_taste_layer: "embedded"
external_taste_skill: "none"
approved_by_user: false
approved_at: ""
last_synced_with_code: ""
```

Jika `approved_by_user` masih `false`, jangan memperlakukan nilai sementara sebagai keputusan final.

## Tujuan dan batasan

Tujuan redesign adalah meningkatkan kejelasan, konsistensi, karakter visual, dan kemudahan penggunaan sambil mempertahankan fungsi yang sudah benar.

- Pelajari UI, alur pengguna, stack, styling system, komponen, dan perubahan Git yang sudah ada sebelum mengusulkan perubahan.
- Pertahankan route, kontrak API, data flow, validasi, permission, dan business logic kecuali pengguna secara eksplisit memasukkannya ke scope.
- Pertahankan URL/slug, anchor ID, navigation label, form field, copy legal, metadata SEO, dan analytics event yang masih digunakan kecuali perubahannya disetujui.
- Jangan mengubah backend hanya karena frontend sedang didesain ulang.
- Gunakan framework, library UI, icon set, dan styling approach yang sudah menjadi standar project. Jika Tailwind adalah sistem utama, jangan menambahkan vanilla CSS tanpa alasan yang jelas.
- Jangan menambah dependency, mengganti framework, atau melakukan refactor besar tanpa menjelaskan kebutuhan dan memperoleh persetujuan.
- Jangan menimpa perubahan pengguna yang tidak terkait.
- Kerjakan hanya scope yang disetujui. Laporkan temuan lain sebagai catatan.
- Commit, merge, dan push tetap dilakukan pengguna kecuali ia meminta secara eksplisit.
- Jangan mengklaim sudah menguji sesuatu yang belum dijalankan atau diperiksa.

## Pilih jalur kerja

### Perubahan ringan

Gunakan jalur ini untuk copy, warna, spacing, icon, atau satu komponen kecil dengan hasil yang sudah jelas.

1. Periksa komponen dan pattern terdekat.
2. Konfirmasi scope secara singkat hanya jika ambigu.
3. Implementasikan perubahan minimal.
4. Periksa diff dan beri checklist uji manual yang relevan.

Tidak perlu membuat konsep redesign lengkap atau menjalankan seluruh test suite.

### Redesign signifikan

Gunakan jalur ini untuk satu halaman penuh, beberapa halaman, navigasi, design system, perubahan layout besar, atau perubahan identitas visual.

Ikuti urutan: pahami → audit → interview → rekomendasikan → rencanakan → minta persetujuan → implementasikan → verifikasi.

## 1. Pahami project

Temukan fakta dari codebase terlebih dahulu; jangan menanyakan hal yang dapat dibaca dari kode.

Periksa seperlunya:

- framework, dependency, dan styling system yang benar-benar digunakan;
- struktur route, layout, page, feature, dan shared component;
- token warna, typography, spacing, radius, shadow, breakpoint, dan motion;
- state penting: loading, empty, error, success, disabled, validation, dan permission;
- responsive behavior serta target browser/device;
- aset brand, icon, gambar, dan data nyata;
- perubahan Git yang belum selesai agar tidak tertimpa.

Pisahkan dengan jelas antara fakta dari codebase, dugaan agent, dan keputusan yang membutuhkan pengguna.

## 2. Interview seperlunya

Tanyakan secara bertahap dan hanya hal yang memengaruhi hasil. Untuk keputusan besar, tawarkan 2–3 opsi beserta trade-off dan satu rekomendasi.

Pastikan agent memahami:

- siapa pengguna utama dan apa tugas terpenting mereka;
- masalah UI/UX saat ini dan hasil yang dianggap sukses;
- halaman, flow, atau komponen yang masuk dan tidak masuk scope;
- bagian yang harus dipertahankan;
- referensi visual, screenshot, atau website acuan serta aspek yang disukai;
- brand constraint dan aset yang tersedia;
- prioritas desktop/mobile dan kebutuhan accessibility;
- batas dependency, waktu, serta mode verifikasi yang diinginkan.

Referensi adalah bahan memahami konsep, bukan izin untuk menyalin identitas atau layout secara mentah.

## 3. Audit UI/UX

Audit harus menghasilkan temuan yang dapat ditindaklanjuti, bukan komentar selera yang abstrak. Nilai:

- user flow dan information architecture;
- hierarchy, typography, readability, dan scanability;
- layout, grid, spacing, alignment, density, dan whitespace;
- warna, contrast, token, theme, radius, border, dan shadow;
- consistency dan reusability komponen;
- form, table, filter, navigation, feedback, dan seluruh state penting;
- responsive behavior, keyboard navigation, focus, dan accessibility;
- kualitas copy, label, data, gambar, serta empty state;
- struktur URL, metadata SEO, structured data, analytics hook, dan elemen lain yang berisiko rusak akibat redesign;
- motion, reduced motion, performa, dan distraction;
- kesesuaian implementasi dengan styling system project.

Kelompokkan temuan berdasarkan dampak: critical, high, medium, low. Bedakan masalah usability, inconsistency, technical debt, dan preferensi visual.

## 4. Terapkan Base Taste Layer

Base Taste Layer wajib digunakan pada redesign signifikan. Terapkan secara kontekstual, bukan sebagai aesthetic preset.

### Design Read

Sebelum menawarkan konsep, nyatakan satu kalimat:

> Membaca project ini sebagai: [jenis surface] untuk [audience], dengan bahasa visual [vibe], menggunakan fondasi [design system atau keluarga aesthetic].

Dasarkan pembacaan pada tujuan pengguna, referensi, brand asset, pola existing, target device, serta constraint accessibility atau industri. Jika dua interpretasi akan menghasilkan desain yang sangat berbeda, ajukan satu pertanyaan paling menentukan. Jika konteks sudah cukup, lanjutkan tanpa bertanya lagi.

### Redesign mode

Tetapkan salah satu mode:

- `preserve`: modernisasi bertahap dengan brand, content, information architecture, dan pola yang masih bernilai sebagai titik awal;
- `overhaul`: bahasa visual baru telah disetujui, tetapi content, route, flow, SEO, analytics, dan fungsi existing tetap dipertahankan kecuali dinyatakan lain.

Jika mode belum jelas, minta pengguna memilih sebelum merencanakan perubahan besar.

### Three Dials

Tetapkan dan jelaskan `visual_variance`, `motion_intensity`, dan `information_density`. Nilai existing adalah baseline redesign; jangan otomatis memakai preset landing page. Tulis nilainya ke `Design Lock` setelah disetujui.

### Foundation Map

- Gunakan design system atau component library existing jika masih sesuai.
- Jika product domain memiliki official design system yang relevan, tawarkan sebagai opsi beserta biaya migrasinya; pemasangan atau migrasi tetap membutuhkan persetujuan.
- Gunakan satu foundation utama. Jangan mencampur beberapa design system dalam component tree yang sama.
- Bedakan design system resmi dari aesthetic inspiration. Editorial, bento, brutalism, glass, atau cinematic adalah arah visual, bukan package resmi.
- Periksa dependency sebelum mengimpor library. Gunakan icon family dan styling system yang sudah konsisten di project.

### Anti-default discipline

Setiap keputusan harus dapat dijelaskan dari brief atau Design Read. Bangun hierarchy yang jelas, composition yang disengaja, typography yang sesuai karakter, spacing rhythm yang konsisten, asset yang relevan, serta state yang lengkap. Hindari default generatif yang tidak didukung konteks seperti gradient dekoratif, hero generik, tiga card identik, glassmorphism merata, typography tanpa karakter, atau animasi berulang tanpa fungsi.

## 5. Tentukan arah desain

Gunakan matriks berikut sebagai titik awal, bukan aturan mutlak.

| Jenis produk | Arah awal | Variance | Motion | Density |
|---|---|---:|---:|---:|
| Admin/dashboard | Functional minimal | 2–4 | 1–3 | 7–9 |
| Operations/forms | Calm product UI | 2–4 | 1–3 | 6–8 |
| Marketplace | Utility commerce | 3–5 | 2–4 | 7–9 |
| Premium product store | Editorial commerce | 5–7 | 4–6 | 3–5 |
| SaaS marketing | Product-led editorial | 5–7 | 3–6 | 4–6 |
| Portfolio experimental | Expressive editorial | 7–9 | 5–8 | 3–5 |
| Supercar/experience site | Cinematic luxury/performance | 8–9 | 7–9 | 2–4 |
| Finance/health/public service | Restrained institutional | 2–4 | 1–3 | 5–7 |

Arti skala:

- `variance`: seberapa jauh komposisi keluar dari pola UI standar;
- `motion`: seberapa dominan animasi dalam pengalaman;
- `density`: banyaknya informasi atau kontrol dalam satu area.

Ajukan 2–3 arah yang benar-benar cocok, jelaskan trade-off, lalu pilih satu rekomendasi. Setiap arah minimal mencakup:

- satu kalimat konsep;
- hierarchy dan layout;
- typography dan color behavior;
- bentuk komponen dan visual texture;
- density serta motion behavior;
- alasan cocok untuk pengguna dan tugasnya;
- risiko terhadap usability, performa, dan maintenance.

Gunakan satu bahasa visual yang disengaja dan sesuai konteks produk. Arah dengan variance tinggi tetap harus mempertahankan usability; arah minimal tetap harus memiliki hierarchy dan karakter, bukan sekadar tampilan kosong.

## 6. External Taste Skill

Base Taste Layer di file ini selalu berlaku. Jika tersedia, agent juga harus membaca `design-taste-frontend` ketika mengerjakan landing page, marketing page, portfolio, editorial surface, atau visual overhaul. Perlakukan skill eksternal sebagai panduan tambahan; `Design Lock`, codebase, dan keputusan pengguna tetap lebih tinggi prioritasnya.

- Untuk existing UI, gunakan protokol audit dan redesign dari Base Taste Skill sebelum mengubah kode.
- Untuk dashboard, data table, atau multi-step form, gunakan hanya prinsip universalnya: Design Read, Three Dials, hierarchy, consistency, responsive behavior, accessibility, dan pre-flight. Jangan memaksakan composition landing page.
- Gunakan `gpt-taste` atau panduan motion-heavy hanya jika pengguna meminta pengalaman experimental/cinematic dan telah menyetujui dependency, performa mobile, reduced motion, serta fallback.
- Muat skill eksternal pada fase konsep, audit penuh, atau redesign besar; perubahan ringan cukup memakai file ini.
- Jika skill eksternal tidak tersedia, lanjutkan memakai Base Taste Layer yang tertanam. Jangan menghentikan pekerjaan atau mengarang aturannya.

Catat skill eksternal yang benar-benar digunakan pada `external_taste_skill`.

## 7. Ajukan rencana dan minta persetujuan

Sebelum implementasi signifikan, sajikan ringkasan yang mudah ditinjau:

1. masalah utama dan prioritasnya;
2. arah desain yang direkomendasikan dan alasannya;
3. halaman, flow, komponen, dan token yang akan berubah;
4. bagian yang dipertahankan dan yang di luar scope;
5. dependency atau keputusan teknis yang perlu disetujui;
6. urutan implementasi dalam potongan kecil;
7. mode verifikasi dan acceptance criteria.

Tunggu persetujuan eksplisit. Setelah disetujui, isi `Design Lock` sebelum mengubah kode. Jika arahan baru bertentangan dengan Design Lock, jelaskan konflik dan minta keputusan sebelum memperbaruinya.

## 8. Implementasi

- Kerjakan per page, flow, atau component slice yang dapat ditinjau.
- Gunakan token dan shared component; hindari nilai lokal berulang tanpa alasan.
- Prioritaskan hierarchy, layout, dan interaction states sebelum polish atau motion.
- Gunakan data/copy realistis jika tersedia; jangan menyamarkan kekurangan dengan placeholder generik.
- Pastikan loading, empty, error, validation, disabled, success, dan permission state tetap jelas.
- Jaga responsive behavior dan keyboard/focus behavior selama perubahan.
- Motion harus membantu orientasi, feedback, atau storytelling; sediakan reduced-motion fallback bila relevan.
- Jangan memperluas redesign menjadi refactor arsitektur tersembunyi.
- Jika implementasi membutuhkan perubahan scope, berhenti dan minta persetujuan.

## 9. Verifikasi

Pilih mode sesuai risiko dan arahan pengguna:

- `manual-user`: agent memeriksa diff dan memberi checklist; pengguna mencoba aplikasi sendiri. Jangan otomatis build atau menjalankan test berat.
- `targeted-agent`: jalankan lint, typecheck, test, atau visual check hanya pada area yang berubah.
- `broad-agreed`: jalankan suite lebih luas hanya jika perubahan berisiko tinggi atau pengguna menyetujuinya.

Checklist minimum:

- fungsi dan flow lama yang dipertahankan masih bekerja;
- hierarchy dan primary action mudah dipahami;
- token, spacing, typography, icon, dan component state konsisten;
- loading, empty, error, validation, disabled, dan success state tercakup;
- layout masuk akal pada viewport utama;
- contrast, focus, keyboard, label, dan reduced motion diperiksa;
- motion tidak merusak performa atau menghalangi interaksi;
- diff tidak memuat perubahan backend atau file di luar scope;
- tidak ada dependency baru yang tidak disetujui.
- Design Read, redesign mode, dan Three Dials tercermin konsisten pada hasil akhir.

Jangan mengulang build atau test tanpa alasan. Jika pengguna memilih pengujian manual, tandai hasil sebagai `implementation complete, awaiting user test`, bukan sepenuhnya tervalidasi.

## 10. Laporan selesai

Berikan laporan singkat:

- apa yang berubah dan alasan desainnya;
- file atau area utama yang berubah;
- apa yang dipertahankan;
- verifikasi yang benar-benar dilakukan;
- hal yang masih perlu diuji pengguna atau diperhatikan;
- keputusan final yang diperbarui pada `Design Lock`.

Jangan menyebut redesign selesai jika acceptance criteria belum terpenuhi atau pengujian yang diwajibkan belum dilakukan.
