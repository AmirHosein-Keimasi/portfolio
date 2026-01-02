"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface PillNavProps {
  children: ReactNode[];
  className?: string;
}

export function PillNav({
  children,
  className = "",
}: PillNavProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !indicatorRef.current) return;

    const items = Array.from(containerRef.current.children) as HTMLElement[];

    items.forEach((item, i) => {
      item.addEventListener("mouseenter", () => {
        const rect = item.getBoundingClientRect();
        const containerRect = containerRef.current!.getBoundingClientRect();

        gsap.to(indicatorRef.current, {
          x: rect.left - containerRect.left,
          width: rect.width,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, [children]);

  return (
    <div ref={containerRef} className={`relative flex gap-2 ${className}`}>
      <div
        ref={indicatorRef}
        className="absolute h-full bg-white/20 rounded-full"
        style={{ width: 0, left: 0 }}
      />
      {children}
    </div>
  );
}

