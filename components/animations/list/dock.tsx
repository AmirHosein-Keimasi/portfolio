"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface DockProps {
  children: ReactNode[];
  className?: string;
}

export function Dock({
  children,
  className = "",
}: DockProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.children) as HTMLElement[];

    items.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          scale: 1.5,
          y: -20,
          duration: 0.3,
          ease: "power2.out",
        });

        items.forEach((otherItem) => {
          if (otherItem !== item) {
            gsap.to(otherItem, {
              scale: 0.9,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(items, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, [children]);

  return (
    <div
      ref={containerRef}
      className={`flex items-end justify-center gap-2 p-4 rounded-2xl backdrop-blur-md bg-white/10 ${className}`}
    >
      {children}
    </div>
  );
}

