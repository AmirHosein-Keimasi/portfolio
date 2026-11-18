"use client";

import { useCallback } from "react";
import { MdWbSunny, MdNightlight } from "react-icons/md";
import { useApp } from "@/lib/context/app-context";

export function ThemeActionBtn() {
  const { toggleTheme, mode } = useApp();

  const handleClick = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={mode === "dark" ? "تغییر به تم روشن" : "تغییر به تم تاریک"}
      title={mode === "dark" ? "تغییر به تم روشن" : "تغییر به تم تاریک"}
      className="inline-flex items-center justify-center gap-2 h-10 px-3 rounded-xl text-sm font-medium border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
    >
      {mode === "dark" ? (
        <>
          <MdWbSunny className="text-lg text-amber-400" aria-hidden="true" />
          <span className="hidden lg:inline">روشن</span>
        </>
      ) : (
        <>
          <MdNightlight className="text-lg text-indigo-500" aria-hidden="true" />
          <span className="hidden lg:inline">تاریک</span>
        </>
      )}
    </button>
  );
}
