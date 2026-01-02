"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ChromaGridProps {
  children: ReactNode[];
  className?: string;
  columns?: number;
}

export function ChromaGrid({
  children,
  className = "",
  columns = 4,
}: ChromaGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.children) as HTMLElement[];

    items.forEach((item, i) => {
      const hue = (i * 360) / items.length;

      gsap.fromTo(
        item,
        {
          scale: 0.8,
          opacity: 0,
          filter: `hue-rotate(${hue}deg)`,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: i * 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [children]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "1rem",
      }}
    >
      {children}
    </div>
  );
}

