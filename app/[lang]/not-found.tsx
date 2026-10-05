import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 text-center bg-[#FBFBF9]">
      <div className="max-w-md mx-auto space-y-6">
        <span className="font-mono text-sm font-bold tracking-wider text-[#0F766E] uppercase">
          404 — Not Found
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B192C]">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-sm leading-relaxed text-stone-600">
          Halaman yang Anda cari tidak tersedia atau tautan telah berubah. Silakan kembali ke beranda.
        </p>
        <div className="pt-4">
          <Link
            href="/id"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0B192C] text-white text-sm font-semibold hover:bg-[#1E2E45] transition-colors shadow-xs"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
