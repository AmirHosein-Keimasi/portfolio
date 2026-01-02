"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LiquidChromeProps {
  className?: string;
}

export function LiquidChrome({ className = "" }: LiquidChromeProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const gradient = gsap.to(ref.current, {
      backgroundPosition: "200% center",
      duration: 5,
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
          "linear-gradient(90deg, #c0c0c0, #ffffff, #c0c0c0, #808080, #c0c0c0)",
        backgroundSize: "200% 100%",
        opacity: 0.2,
      }}
    />
  );
}

