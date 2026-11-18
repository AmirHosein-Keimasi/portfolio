import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  className = "",
}: ScrollRevealProps) {
  return <div className={`transition-all duration-300 ${className}`}>{children}</div>;
}
