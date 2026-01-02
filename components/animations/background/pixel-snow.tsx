"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PixelSnowProps {
  className?: string;
  snowCount?: number;
  color?: string;
}

export function PixelSnow({
  className = "",
  snowCount = 100,
  color = "#ffffff",
}: PixelSnowProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const flakes: HTMLDivElement[] = [];

    for (let i = 0; i < snowCount; i++) {
      const flake = document.createElement("div");
      flake.style.position = "absolute";
      flake.style.width = "4px";
      flake.style.height = "4px";
      flake.style.backgroundColor = color;
      flake.style.left = `${Math.random() * 100}%`;
      flake.style.top = "-10px";
      flake.style.opacity = "0.7";
      containerRef.current.appendChild(flake);
      flakes.push(flake);

      gsap.to(flake, {
        y: window.innerHeight + 100,
        x: `+=${(Math.random() - 0.5) * 100}`,
        duration: "random(3, 6)",
        repeat: -1,
        ease: "none",
        delay: Math.random() * 2,
      });
    }

    return () => {
      flakes.forEach((flake) => flake.remove());
    };
  }, [snowCount, color]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}

