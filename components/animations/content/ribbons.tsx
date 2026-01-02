"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface RibbonsProps {
  children: ReactNode;
  className?: string;
  ribbonCount?: number;
  color?: string;
}

export function Ribbons({
  children,
  className = "",
  ribbonCount = 3,
  color = "#00ff00",
}: RibbonsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ribbons: HTMLDivElement[] = [];

    for (let i = 0; i < ribbonCount; i++) {
      const ribbon = document.createElement("div");
      ribbon.style.position = "absolute";
      ribbon.style.width = "100%";
      ribbon.style.height = "2px";
      ribbon.style.backgroundColor = color;
      ribbon.style.top = `${(i / (ribbonCount - 1)) * 100}%`;
      ribbon.style.opacity = "0.5";
      containerRef.current.appendChild(ribbon);
      ribbons.push(ribbon);

      gsap.to(ribbon, {
        x: "100%",
        duration: 2,
        repeat: -1,
        ease: "none",
        delay: i * 0.3,
      });
    }

    return () => {
      ribbons.forEach((ribbon) => ribbon.remove());
    };
  }, [ribbonCount, color]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

