"use client";

import { useEffect } from "react";
import { logger } from "@/lib/utils/logger";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.error("Error occurred:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center p-8 rounded-2xl bg-white/90 dark:bg-[#0e1526]/90 border border-slate-200/80 dark:border-white/10 shadow-sm space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          مشکلی پیش آمده!
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {error.message || "خطایی در بارگذاری صفحه رخ داده است."}
        </p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors"
        >
          تلاش مجدد
        </button>
      </div>
    </div>
  );
}
