"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface OrbProps {
  className?: string;
  color?: string;
}

export function Orb({
  className = "",
  color = "#00ff00",
}: OrbProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      scale: "random(0.8, 1.2)",
      x: "random(-50, 50)",
      y: "random(-50, 50)",
      duration: "random(3, 5)",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      ref={ref}
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 rounded-full ${className}`}
      style={{
        width: "400px",
        height: "400px",
        background: `radial-gradient(circle, ${color}, transparent)`,
        filter: "blur(60px)",
        opacity: 0.3,
      }}
    />
  );
}

