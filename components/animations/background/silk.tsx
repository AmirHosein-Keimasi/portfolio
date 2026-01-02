"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface SilkProps {
  className?: string;
  color?: string;
}

export function Silk({
  className = "",
  color = "#00ff00",
}: SilkProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const gradient = gsap.to(ref.current, {
      backgroundPosition: "200% center",
      duration: 10,
      ease: "none",
      repeat: -1,
    });

    return () => {
      gradient.kill();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        background: `linear-gradient(45deg, transparent, ${color}, transparent)`,
        backgroundSize: "200% 200%",
        opacity: 0.1,
      }}
    />
  );
}

