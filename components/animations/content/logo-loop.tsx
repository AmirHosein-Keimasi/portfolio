"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface LogoLoopProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function LogoLoop({
  children,
  className = "",
  speed = 1,
}: LogoLoopProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      rotation: 360,
      duration: 3 / speed,
      repeat: -1,
      ease: "none",
    });
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

