"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface GhostCursorProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GhostCursor({
  children,
  className = "",
  delay = 0.1,
}: GhostCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ghostRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ghostRef.current) return;

      gsap.to(ghostRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        delay,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [delay]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}
      <div
        ref={ghostRef}
        className="fixed pointer-events-none z-50 w-8 h-8 rounded-full border-2 border-white opacity-50"
        style={{
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}

