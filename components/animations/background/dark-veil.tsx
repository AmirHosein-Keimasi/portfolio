"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface DarkVeilProps {
  className?: string;
  intensity?: number;
}

export function DarkVeil({
  className = "",
  intensity = 0.5,
}: DarkVeilProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      opacity: intensity,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, [intensity]);

  return (
    <div
      ref={ref}
      className={`fixed inset-0 pointer-events-none z-0 bg-black ${className}`}
      style={{ opacity: intensity }}
    />
  );
}

