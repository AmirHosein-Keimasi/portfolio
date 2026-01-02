"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface GlassIconsProps {
  children: ReactNode[];
  className?: string;
}

export function GlassIcons({
  children,
  className = "",
}: GlassIconsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.children) as HTMLElement[];

    items.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          scale: 1.2,
          backdropFilter: "blur(20px)",
          backgroundColor: "rgba(255,255,255,0.3)",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          scale: 1,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255,255,255,0.1)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, [children]);

  return (
    <div ref={containerRef} className={`flex gap-4 ${className}`}>
      {children}
    </div>
  );
}

