"use client";

import { ReactNode, memo } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  align?: "center" | "right";
}

export const SectionHeader = memo(function SectionHeader({
  eyebrow,
  title,
  subtitle,
  icon,
  align = "center",
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`mb-10 md:mb-14 ${
        isCentered ? "text-center max-w-2xl mx-auto" : "text-right"
      }`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 ${
            isCentered ? "mx-auto" : ""
          }`}
        >
          {icon && <span className="text-sm">{icon}</span>}
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
});
