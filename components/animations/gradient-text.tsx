import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  gradient?: string;
  className?: string;
}

export function GradientText({
  children,
  gradient = "from-emerald-500 via-teal-400 to-sky-500",
  className = "",
}: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-l ${gradient} bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
