"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface MetallicPaintProps {
  children: ReactNode;
  className?: string;
}

export function MetallicPaint({
  children,
  className = "",
}: MetallicPaintProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const gradient = gsap.to(ref.current, {
      backgroundPosition: "200% center",
      duration: 3,
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
      className={`inline-block ${className}`}
      style={{
        background:
          "linear-gradient(90deg, #c0c0c0, #ffffff, #c0c0c0, #808080, #c0c0c0)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </div>
  );
}

