"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface LaserFlowProps {
  children: ReactNode;
  className?: string;
  color?: string;
  speed?: number;
}

export function LaserFlow({
  children,
  className = "",
  color = "#00ff00",
  speed = 2,
}: LaserFlowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const laserRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !laserRef.current) return;

    gsap.to(laserRef.current, {
      x: "100%",
      duration: speed,
      repeat: -1,
      ease: "none",
    });
  }, [speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {children}
      <div
        ref={laserRef}
        className="absolute inset-y-0 left-0 w-1 opacity-80"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
          transform: "translateX(-100%)",
        }}
      />
    </div>
  );
}

