"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface StackProps {
  children: ReactNode[];
  className?: string;
  gap?: number;
}

export function Stack({
  children,
  className = "",
  gap = 10,
}: StackProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.children) as HTMLElement[];

    items.forEach((item, i) => {
      gsap.set(item, {
        z: -i * gap,
        y: i * gap,
        rotationX: -5,
      });

      item.addEventListener("mouseenter", () => {
        gsap.to(items.slice(0, i + 1), {
          z: 0,
          y: 0,
          rotationX: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      item.addEventListener("mouseleave", () => {
        items.forEach((otherItem, j) => {
          gsap.to(otherItem, {
            z: -j * gap,
            y: j * gap,
            rotationX: -5,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    });
  }, [children, gap]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {children}
    </div>
  );
}

