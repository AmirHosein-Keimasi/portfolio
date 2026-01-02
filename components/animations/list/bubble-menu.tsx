"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface BubbleMenuProps {
  children: ReactNode[];
  className?: string;
}

export function BubbleMenu({
  children,
  className = "",
}: BubbleMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.children) as HTMLElement[];

    items.forEach((item, i) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          scale: 1.2,
          y: -10,
          duration: 0.3,
          ease: "power2.out",
        });

        items.forEach((otherItem, j) => {
          if (i !== j) {
            gsap.to(otherItem, {
              scale: 0.9,
              opacity: 0.5,
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
          opacity: 1,
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

