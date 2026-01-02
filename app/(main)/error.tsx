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
    // TODO: Send to error tracking service (e.g., Sentry)
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">مشکلی پیش آمده!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {error.message || "خطایی رخ داده است"}
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          تلاش مجدد
        </button>
      </div>
    </div>
  );
}

