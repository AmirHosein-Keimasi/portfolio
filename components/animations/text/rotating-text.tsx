"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface RotatingTextProps {
  children: ReactNode;
  className?: string;
  rotationSpeed?: number;
}

export function RotatingText({
  children,
  className = "",
  rotationSpeed = 1,
}: RotatingTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      rotation: 360,
      duration: 5 / rotationSpeed,
      repeat: -1,
      ease: "none",
    });
  }, [rotationSpeed]);

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      {children}
    </div>
  );
}

