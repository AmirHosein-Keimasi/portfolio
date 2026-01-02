"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AuroraProps {
  className?: string;
}

export function Aurora({ className = "" }: AuroraProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const gradient = gsap.to(ref.current, {
      backgroundPosition: "200% center",
      duration: 20,
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
          "linear-gradient(180deg, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
        backgroundSize: "200% 200%",
        opacity: 0.2,
        filter: "blur(40px)",
      }}
    />
  );
}

