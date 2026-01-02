"use client";

import { useEffect, useState } from "react";
import { useApp } from "@/lib/context/app-context";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { mode } = useApp();

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const bgColor =
    mode === "dark" ? "bg-dark-success" : "bg-light-success";

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-1 ${bgColor} z-[100] origin-left transition-transform duration-150`}
      style={{ transform: `scaleX(${scrollProgress / 100})` }}
      aria-hidden="true"
    />
  );
}

