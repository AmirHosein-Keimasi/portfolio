"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface CrosshairProps {
  children: ReactNode;
  className?: string;
  size?: number;
  color?: string;
}

export function Crosshair({
  children,
  className = "",
  size = 20,
  color = "#00ff00",
}: CrosshairProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const crosshairRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!crosshairRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!crosshairRef.current) return;

      gsap.to(crosshairRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}
      <div
        ref={crosshairRef}
        className="fixed pointer-events-none z-50"
        style={{
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
          width: size,
          height: size,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            width: "2px",
            height: "100%",
            backgroundColor: color,
            transform: "translateX(-50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            width: "100%",
            height: "2px",
            backgroundColor: color,
            transform: "translateY(-50%)",
          }}
        />
      </div>
    </div>
  );
}

