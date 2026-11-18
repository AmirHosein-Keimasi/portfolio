import { ReactNode } from "react";

interface CustomDividerProps {
  bColor?: string;
  cColor?: "primary" | "success" | "warning";
  icon?: ReactNode;
  align?: "left" | "right" | "center";
  text: string;
}

export function CustomDivider({
  icon,
  text,
}: CustomDividerProps) {
  return (
    <div className="flex items-center gap-4 my-6" role="separator" aria-label={text}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/15 to-slate-300 dark:to-white/15" />
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-sm font-semibold">
        {icon && <span aria-hidden="true">{icon}</span>}
        <span>{text}</span>
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-slate-300 dark:via-white/15 to-slate-300 dark:to-white/15" />
    </div>
  );
}
