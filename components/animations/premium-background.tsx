"use client";

import { memo } from "react";

export const PremiumBackground = memo(function PremiumBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Subtle architectural grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-80 dark:opacity-100" />

      {/* Top-right emerald ambient glow */}
      <div
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full blur-[110px] opacity-25 dark:opacity-20 animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.55) 0%, transparent 70%)",
        }}
      />

      {/* Bottom-left cyan ambient glow */}
      <div
        className="absolute -bottom-40 -left-32 w-[540px] h-[540px] rounded-full blur-[120px] opacity-20 dark:opacity-15 animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.5) 0%, transparent 70%)",
        }}
      />

      {/* Soft top vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface-light/80 dark:to-surface-dark/80" />
    </div>
  );
});
