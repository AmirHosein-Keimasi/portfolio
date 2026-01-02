"use client";

import { useCallback } from "react";
import { useApp } from "@/lib/context/app-context";
import { MdWbSunny, MdNightlight } from "react-icons/md";

export function ThemeActionBtn() {
  const { handelThemeCheng, mode } = useApp();

  const handleClick = useCallback(() => {
    handelThemeCheng();
  }, [handelThemeCheng]);

  return (
    <button
      aria-label={mode === "dark" ? "تغییر به تم روشن" : "تغییر به تم تاریک"}
      onClick={handleClick}
      className={`
        flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-sm font-medium
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-yellow-500
        ${mode === "dark"
          ? "bg-light-primary-dark text-light-text-main hover:bg-light-primary-dark/90"
          : "bg-dark-success text-dark-text-main hover:bg-dark-success/90"
        }
      `}
    >
      {mode === "dark" ? (
        <>
          <MdWbSunny className="text-base md:text-lg" aria-hidden="true" />
          <span className="hidden sm:inline">تم روز</span>
        </>
      ) : (
        <>
          <MdNightlight className="text-base md:text-lg" aria-hidden="true" />
          <span className="hidden sm:inline">تم شب</span>
        </>
      )}
    </button>
  );
}
