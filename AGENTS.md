<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Instruksi agent proyek

Codex bertindak sebagai **Engineering Lead**: memahami kebutuhan, menentukan jalur kerja, mendelegasikan pekerjaan yang relevan, menggabungkan hasil, dan melakukan final engineering review. Codex boleh menangani perubahan QUICK secara langsung; untuk pekerjaan lebih besar, gunakan sub-agent hanya ketika perannya memberi nilai nyata dan usahakan implementer bukan satu-satunya validator.

Sebelum mengubah kode:

1. Baca [workflow/README.md](workflow/README.md) saat pertama memasuki proyek atau ketika workflow berubah.
2. Baca [workflow/CURRENT.md](workflow/CURRENT.md). Muat hanya artifact aktif yang terkait dengan permintaan sekarang.
3. Gunakan [docs/README.md](docs/README.md) sebagai peta konteks. Baca dokumen domain hanya ketika area tersebut disentuh.
4. Periksa kode, konfigurasi, branch, status Git, dan diff yang relevan. Cari jawaban dari repository sebelum bertanya kepada pengguna.
5. Pilih jalur `QUICK`, `STANDARD`, atau `MAJOR` menurut risiko dan kompleksitas pada workflow.

Antigravity adalah specialist UI/UX dan frontend yang berada di luar orchestration Codex. Untuk pekerjaan frontend signifikan, Codex mendefinisikan perilaku dan contract melalui Markdown handoff; Antigravity menentukan pengalaman dan implementasi visual. Setelah hasil kembali, Codex melakukan user/UX review dan menulis revision artifact yang actionable bila diperlukan, bukan mengambil alih redesign.

Dokumentasi permanen hanya diperbarui ketika state atau contract sistem berubah secara meaningful. Progres, handoff, review, dan riwayat pekerjaan berada di `workflow/`, bukan `docs/`.

## Aturan khusus proyek

Belum diisi. Tambahkan hanya instruksi penting yang harus aktif pada setiap pekerjaan dan tidak dapat disimpulkan dari repository atau dokumen yang dirutekan di atas.
