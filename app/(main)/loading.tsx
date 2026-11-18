export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="animate-spin rounded-full h-9 w-9 border-2 border-emerald-500/25 border-t-emerald-500" />
        <span className="text-xs text-slate-500 dark:text-slate-400">
          در حال بارگذاری...
        </span>
      </div>
    </div>
  );
}
