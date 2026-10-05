# Workflow engineering

Folder `workflow/` menjawab: **apa yang sedang dikerjakan AI sekarang?** Aturan ini mengatur Codex sebagai Engineering Lead, delegasi sub-agent, handoff ke Antigravity, review, dan lifecycle artifact.

Baca file ini saat pertama memasuki proyek atau ketika workflow berubah. Pada pekerjaan normal, baca [CURRENT.md](CURRENT.md) lalu hanya artifact dan dokumentasi domain yang relevan.

## Prinsip operasi

- Pengguna menentukan outcome, scope, constraint, dan keputusan berdampak besar. Codex mengurus detail engineering serta koordinasi rutin.
- Repository adalah source of truth untuk implementation detail. Cari fakta dari kode, konfigurasi, Git, dan dokumentasi terkait sebelum bertanya.
- Gunakan proses, agent, context, dan verifikasi paling ringan yang tetap aman.
- Pertahankan perubahan pengguna. Temuan di luar scope dilaporkan sebagai catatan, bukan langsung diperbaiki.
- Commit, merge, dan push dilakukan pengguna. Deploy, operasi destruktif, dan perubahan data nyata memerlukan izin eksplisit untuk tindakan tersebut.
- Simpan credential, secret, dan data pribadi di luar dokumentasi serta workflow artifact.

Jika informasi berbeda, gunakan urutan: arahan terbaru pengguna → persetujuan/keputusan yang tercatat → kode, konfigurasi, dan Git → dokumentasi serta artifact sebagai konteks pendukung.

## Jalur pekerjaan

Klasifikasikan dari risiko, kompleksitas domain, keputusan terbuka, dan kebutuhan handoff. Jumlah file hanya petunjuk.

- **QUICK:** perubahan lokal, low-risk, hasil jelas, selesai satu sesi. Alur: inspect → implement → verify. Codex boleh mengerjakannya langsung. Tidak membuat artifact kecuali pekerjaan kemudian perlu handoff.
- **STANDARD:** development normal dengan dampak terbatas. Alur: inspect → klarifikasi bila perlu → lightweight plan → implement/delegate → targeted verification → review sesuai risiko. Artifact dibuat hanya jika lintas sesi, didelegasikan, atau membutuhkan handoff.
- **MAJOR:** perubahan high-risk, lintas-sistem, security-sensitive, sulit dipulihkan, atau fitur besar. Alur: discovery → full plan → explicit approval → delegation → implementation → independent verification → final engineering review. Wajib memakai task artifact.

Contoh seperti CRUD atau perubahan visual tidak otomatis menentukan jalur. Authentication, authorization, payment, migration data, integrasi eksternal, dan perubahan arsitektur biasanya MAJOR. Jika inspeksi menemukan risiko yang lebih besar dari rencana, hentikan bagian terkait dan minta persetujuan perubahan scope.

Diagnosis atau review menghasilkan temuan. Implementasikan perbaikan hanya jika permintaan pengguna juga mencakup perbaikan dan scope-nya tetap sesuai.

## 1. Pahami proyek dan kebutuhan

Periksa stack, pola kode, konfigurasi, Git, [CURRENT.md](CURRENT.md), dan dokumentasi yang dirutekan oleh [docs/README.md](../docs/README.md).

Lakukan **Project Interview** hanya saat onboarding atau ketika tujuan produk, pengguna, alur bisnis, batas sistem, dan constraint penting tidak dapat ditemukan. Simpan hanya jawaban stabil di `docs/PROJECT.md` agar interview tidak diulang oleh agent berikutnya.

Lakukan **Task Clarification** jika, setelah inspeksi, requirement aktif masih ambigu. Pastikan hal berikut cukup jelas untuk jalur yang dipilih:

- masalah, pengguna, pemicu, dan outcome;
- scope masuk/keluar serta constraint;
- data, permission, failure state, dan edge case yang relevan;
- acceptance criteria dan mode verifikasi.

Tanyakan hanya keputusan yang belum dapat disimpulkan. Berikan rekomendasi dan trade-off ketika pengguna memang perlu memilih.

## 2. Rencanakan dan delegasikan

Codex Lead memecah pekerjaan berdasarkan outcome yang dapat diverifikasi, lalu memilih peran hanya jika dibutuhkan:

- **Implementation/backend:** business logic, API, data, atau integration work.
- **QA/testing:** acceptance criteria, regression risk, dan test execution.
- **Security review:** auth, permission, secret, input berbahaya, atau data sensitif.
- **Deployment/infrastructure:** environment, migration, release, observability, atau rollback.
- **Specialist lain:** hanya jika scope memiliki kebutuhan nyata yang tidak tercakup di atas.

QUICK boleh tanpa delegasi. Untuk STANDARD dan MAJOR, delegasikan implementation atau validation ketika pemisahan tersebut meningkatkan kualitas atau mengurangi risiko. Jangan spawn semua role secara default.

Setiap sub-agent menerima context minimum yang cukup: tujuan, scope, acceptance criteria, constraint, path/komponen terkait, dan pointer dokumentasi yang relevan. Jangan memberikan seluruh `docs/`, seluruh riwayat percakapan, atau detail domain yang tidak diperlukan.

Pisahkan ownership file saat pekerjaan berjalan paralel. Pada working tree yang sama, hindari dua agent mengedit area yang sama. Pergantian agent berurutan wajib meninggalkan checkpoint yang dapat dilanjutkan.

### Validasi independen

Agent yang mengimplementasikan perubahan sebaiknya bukan satu-satunya pihak yang memvalidasi hasilnya.

- QUICK low-risk dapat diverifikasi oleh Codex melalui diff dan pemeriksaan terarah.
- STANDARD menggunakan reviewer terpisah jika behavior, contract, atau regression risk cukup berarti; Codex Lead dapat menjadi reviewer bila implementation didelegasikan.
- MAJOR memerlukan validator terpisah untuk area berisiko. Security atau deployment reviewer ditambahkan hanya jika scope memicunya.

Jika validator yang diperlukan tidak tersedia, catat review sebagai tertunda dan jangan mengklaim perubahan sepenuhnya tervalidasi.

## 3. Implementasi, verifikasi, dan engineering review

Implementasi mengikuti plan yang disetujui, pattern project, dan dependency existing. Perubahan approach utama, dependency baru, atau perluasan scope memerlukan diskusi sebelum diterapkan.

Pilih mode verifikasi dalam plan:

- **Manual pengguna:** periksa diff, berikan langkah mencoba, dan catat hasil sebagai belum diuji sampai ada bukti pengguna.
- **Terarah agent:** jalankan pemeriksaan terkecil yang relevan terhadap behavior yang berubah.
- **Lebih luas:** gunakan integration test, build, atau suite lebih besar ketika dampak dan plan memerlukannya.

Jangan mengulang test yang sudah berhasil kecuali perubahan berikutnya memengaruhi hasilnya. Bedakan pemeriksaan yang dijalankan, dilewati, dan dilaporkan pengguna.

Setelah sub-agent selesai, Codex Lead:

1. mencocokkan hasil terhadap scope dan acceptance criteria;
2. meninjau diff, integrasi, risiko, dan hasil testing;
3. meminta revisi kepada owner yang tepat bila ada blocking issue;
4. menggabungkan status menjadi satu engineering report.

Report akhir mencakup: pekerjaan selesai, hasil testing, issue, technical debt/improvement tersisa, dan kesiapan menuju tahap berikutnya.

## 4. Boundary frontend dan Antigravity

Antigravity adalah UI/UX + frontend specialist di luar orchestration Codex. Antigravity bukan sub-agent Codex dan tidak membutuhkan komunikasi agent-to-agent.

Codex menentukan **what needs to work**: tujuan, user flow, contract API/data, states, validation, edge cases, constraint, dan acceptance criteria. Antigravity menentukan **how the user experiences it**: visual direction, hierarchy, layout, interaction, responsive behavior, motion, dan frontend implementation.

Antigravity boleh memilih T-Skill, Impeccable, atau design skill relevan lain. Codex menyampaikan constraint dan keputusan desain yang sudah berlaku tanpa mendikte tool atau detail visualnya.

Untuk frontend signifikan:

1. Codex menyelesaikan contract engineering yang dibutuhkan.
2. Buat `workflow/handoffs/<slug>.md` dari [templates/FRONTEND-HANDOFF.md](templates/FRONTEND-HANDOFF.md).
3. Pengguna membawa handoff tersebut ke Antigravity.
4. Setelah implementation kembali, Codex memeriksa integrasi dan melakukan user/UX review.
5. Jika ada masalah, buat atau perbarui `workflow/reviews/<slug>.md` dari [templates/UX-REVIEW.md](templates/UX-REVIEW.md).
6. Antigravity menangani revisi. Codex review ulang hingga blocking issue selesai atau keputusan pengguna menutupnya.

Codex tidak mendikte detail visual dalam handoff dan tidak mengambil alih redesign saat review. Pisahkan blocking issue dari optional improvement agar loop berhenti pada kondisi PASS yang jelas. Perubahan frontend langsung oleh Codex dilakukan hanya jika pengguna secara eksplisit mengubah pembagian tanggung jawab ini.

Untuk perubahan UI kecil yang benar-benar QUICK, pengguna dapat langsung menugaskannya kepada Antigravity tanpa artifact formal. `docs/DESIGN.md` tetap menjadi sumber keputusan visual lintas-feature yang sudah disepakati.

## 5. Lifecycle artifact

[CURRENT.md](CURRENT.md) adalah index ringkas, bukan salinan plan atau log. Artifact dibuat hanya ketika jalur dan handoff memerlukannya:

```text
workflow/
├── active/<slug>.md          # ACTIVE: plan dan checkpoint pekerjaan
├── handoffs/<slug>.md        # HANDOFF: contract untuk Antigravity
├── reviews/<slug>.md         # REVIEW: feedback actionable atau PASS
└── archive/<slug>/           # ARCHIVED: task.md, frontend-handoff.md, ux-review.md
```

Folder runtime dibuat ketika artifact pertamanya dibutuhkan. Gunakan satu slug stabil untuk satu pekerjaan. Perbarui artifact yang sama; jangan membuat `final`, `v2`, atau file koreksi paralel.

- **ACTIVE:** tujuan, scope, acceptance criteria, plan, owner, dan status verifikasi masih berjalan.
- **HANDOFF:** frontend contract siap digunakan atau sedang dikerjakan Antigravity.
- **REVIEW:** hasil frontend sedang dinilai atau memiliki revisi terbuka.
- **ARCHIVED:** pekerjaan selesai dan artifact dipindahkan dari active context.

Saat pekerjaan selesai, pindahkan artifact yang masih bernilai ke `archive/<slug>/` dengan nama `task.md`, `frontend-handoff.md`, dan `ux-review.md`; simpan hanya file yang memang dibuat. Perbarui link internal agar tetap valid. Artifact sementara yang dibuat untuk pekerjaan tersebut boleh dibersihkan bila tidak memiliki nilai lintas-task dan tetap recoverable melalui Git; selain itu pilih archive. Kosongkan pointer selesai dari `CURRENT.md`.

QUICK yang selesai dalam satu sesi tidak membuat artifact. Jika QUICK terhenti atau berpindah agent/sesi, naikkan ke STANDARD dan buat task dari [templates/TASK.md](templates/TASK.md).

## 6. Dokumentasi permanen

`docs/` menyimpan state dan contract sistem yang masih berlaku. `workflow/` menyimpan pekerjaan AI yang sedang berlangsung atau diarsipkan. Ikuti threshold pada [docs/README.md](../docs/README.md): documentation bukan activity log dan tidak diperbarui untuk setiap perubahan kode.

Sebelum handoff atau akhir sesi dengan pekerjaan terbuka, perbarui artifact aktif dan `CURRENT.md` dengan status, hasil verifikasi, working tree, dan satu langkah berikutnya. Tandai selesai hanya ketika acceptance criteria memiliki bukti atau penerimaan pengguna, status verifikasi jujur, serta perubahan dan batasan telah dilaporkan.
