"use client";

import { useState, useEffect, ReactNode, memo } from "react";

interface CustomDividerProps {
  bColor?: string;
  cColor?: "primary" | "success" | "warning";
  icon?: ReactNode;
  align?: "left" | "right" | "center";
  text: string;
}

export const CustomDivider = memo(function CustomDivider({
  bColor,
  cColor = "warning",
  icon,
  align = "center",
  text,
}: CustomDividerProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);

  const borderColor = bColor || "border-gray-300 dark:border-gray-600";
  const chipColor =
    cColor === "primary"
      ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
      : cColor === "success"
      ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
      : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200";

  const alignClass =
    align === "right"
      ? "text-right"
      : align === "left"
      ? "text-left"
      : "text-center";

  return (
    <div
      className={`flex items-center my-4 transition-all duration-300 ${
        loading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
      style={{ transitionDelay: loading ? "200ms" : "0ms" }}
      role="separator"
      aria-label={text}
    >
      <div className={`flex-1 h-px ${borderColor} border-t`} aria-hidden="true"></div>
      <div
        className={`px-4 py-3 rounded-full ${chipColor} flex items-center gap-2`}
      >
        {icon && <span className="text-lg" aria-hidden="true">{icon}</span>}
        <span className={alignClass}>{text}</span>
      </div>
      <div className={`flex-1 h-px ${borderColor} border-t`} aria-hidden="true"></div>
    </div>
  );
});
