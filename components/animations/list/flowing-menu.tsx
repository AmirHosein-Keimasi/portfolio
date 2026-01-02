"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface FlowingMenuProps {
  children: ReactNode[];
  className?: string;
}

export function FlowingMenu({
  children,
  className = "",
}: FlowingMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.children) as HTMLElement[];

    items.forEach((item, i) => {
      gsap.from(item, {
        x: -100,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: "power3.out",
      });

      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          x: 20,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, [children]);

  return (
    <div ref={containerRef} className={`flex flex-col gap-2 ${className}`}>
      {children}
    </div>
  );
}

