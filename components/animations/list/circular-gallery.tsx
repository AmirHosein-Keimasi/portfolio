"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface CircularGalleryProps {
  children: ReactNode[];
  className?: string;
  radius?: number;
  speed?: number;
}

export function CircularGallery({
  children,
  className = "",
  radius = 200,
  speed = 1,
}: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.children) as HTMLElement[];
    const angleStep = (360 / items.length) * (Math.PI / 180);

    items.forEach((item, i) => {
      const angle = i * angleStep;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      gsap.set(item, {
        x,
        y,
        transformOrigin: "50% 50%",
      });

      gsap.to(containerRef.current, {
        rotation: 360,
        duration: 10 / speed,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });
    });
  }, [children, radius, speed]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ width: radius * 2, height: radius * 2 }}
    >
      {children}
    </div>
  );
}

