"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface InfiniteMenuProps {
  children: ReactNode[];
  className?: string;
  speed?: number;
}

export function InfiniteMenu({
  children,
  className = "",
  speed = 1,
}: InfiniteMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.children) as HTMLElement[];
    const totalWidth = items.reduce(
      (sum, item) => sum + item.offsetWidth,
      0
    );

    gsap.to(containerRef.current, {
      x: -totalWidth,
      duration: totalWidth / (50 * speed),
      repeat: -1,
      ease: "none",
    });
  }, [children, speed]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={containerRef} className="flex">
        {children}
        {children}
      </div>
    </div>
  );
}

