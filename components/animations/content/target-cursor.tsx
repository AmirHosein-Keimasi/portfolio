"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface TargetCursorProps {
  children: ReactNode;
  className?: string;
  size?: number;
}

export function TargetCursor({
  children,
  className = "",
  size = 100,
}: TargetCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !cursorRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;

      gsap.to(cursorRef.current, {
        x: e.clientX - size / 2,
        y: e.clientY - size / 2,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          width: size,
          height: size,
          border: "2px solid white",
          borderRadius: "50%",
          left: 0,
          top: 0,
        }}
      />
    </div>
  );
}

