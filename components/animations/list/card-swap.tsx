"use client";

import { useEffect, useRef, ReactNode, useState } from "react";
import { gsap } from "gsap";

interface CardSwapProps {
  children: ReactNode[];
  className?: string;
}

export function CardSwap({
  children,
  className = "",
}: CardSwapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.children) as HTMLElement[];

    items.forEach((item, i) => {
      if (i === activeIndex) {
        gsap.to(item, {
          scale: 1,
          opacity: 1,
          z: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(item, {
          scale: 0.8,
          opacity: 0.5,
          z: -100,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    });
  }, [activeIndex, children]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {children.map((child, i) => (
        <div
          key={i}
          onClick={() => setActiveIndex(i)}
          style={{ cursor: "pointer" }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

