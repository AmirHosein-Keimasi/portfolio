import { ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function TextReveal({
  children,
  className = "",
}: TextRevealProps) {
  return <div className={className}>{children}</div>;
}
