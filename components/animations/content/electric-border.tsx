"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface ElectricBorderProps {
  children: ReactNode;
  className?: string;
  color?: string;
  intensity?: number;
}

export function ElectricBorder({
  children,
  className = "",
  color = "#00ff00",
  intensity = 2,
}: ElectricBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !borderRef.current) return;

    const animate = () => {
      gsap.to(borderRef.current, {
        boxShadow: `0 0 ${intensity * 10}px ${color}, 0 0 ${intensity * 20}px ${color}`,
        duration: 0.5,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut",
      });
    };

    animate();
  }, [color, intensity]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ border: `2px solid ${color}` }}
    >
      <div
        ref={borderRef}
        className="absolute inset-0 pointer-events-none"
        style={{ border: `2px solid ${color}` }}
      />
      {children}
    </div>
  );
}

