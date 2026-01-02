"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface StaggeredMenuProps {
  children: ReactNode[];
  className?: string;
}

export function StaggeredMenu({
  children,
  className = "",
}: StaggeredMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.children) as HTMLElement[];

    items.forEach((item, i) => {
      gsap.from(item, {
        x: -50,
        opacity: 0,
        duration: 0.5,
        delay: i * 0.1,
        ease: "power2.out",
      });

      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          x: 10,
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

