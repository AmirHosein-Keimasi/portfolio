"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface DomeGalleryProps {
  children: ReactNode[];
  className?: string;
  radius?: number;
}

export function DomeGallery({
  children,
  className = "",
  radius = 300,
}: DomeGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.children) as HTMLElement[];
    const angleStep = (180 / (items.length - 1)) * (Math.PI / 180);

    items.forEach((item, i) => {
      const angle = i * angleStep;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = -Math.abs(Math.sin(angle)) * radius * 0.5;

      gsap.set(item, {
        x,
        y,
        z,
        transformOrigin: "50% 50%",
        transformStyle: "preserve-3d",
      });
    });

    gsap.set(containerRef.current, {
      transformStyle: "preserve-3d",
      perspective: 1000,
    });
  }, [children, radius]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: radius * 2, height: radius }}
    >
      {children}
    </div>
  );
}

