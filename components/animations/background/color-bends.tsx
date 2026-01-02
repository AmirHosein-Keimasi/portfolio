"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface ColorBendsProps {
  className?: string;
}

export function ColorBends({ className = "" }: ColorBendsProps) {
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
        background:
          "linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)",
        backgroundSize: "200% 200%",
        opacity: 0.1,
      }}
    />
  );
}

