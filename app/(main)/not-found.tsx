import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center p-8 rounded-2xl bg-white/90 dark:bg-[#0e1526]/90 border border-slate-200/80 dark:border-white/10 shadow-sm space-y-4">
        <p className="text-5xl font-extrabold bg-gradient-to-l from-emerald-500 to-sky-500 bg-clip-text text-transparent">
          404
        </p>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          صفحه مورد نظر یافت نشد
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          آدرس وارد شده ممکن است تغییر کرده یا حذف شده باشد.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
