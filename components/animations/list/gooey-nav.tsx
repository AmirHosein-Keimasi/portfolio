"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface GooeyNavProps {
  children: ReactNode[];
  className?: string;
}

export function GooeyNav({
  children,
  className = "",
}: GooeyNavProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.children) as HTMLElement[];

    items.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          scale: 1.2,
          filter: "blur(0px)",
          duration: 0.3,
          ease: "power2.out",
        });

        items.forEach((otherItem) => {
          if (otherItem !== item) {
            gsap.to(otherItem, {
              scale: 0.8,
              filter: "blur(2px)",
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(items, {
          scale: 1,
          filter: "blur(0px)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, [children]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ filter: "url(#gooey)" }}
    >
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>
      {children}
    </div>
  );
}

