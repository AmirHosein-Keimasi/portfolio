"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface GradientBlindsProps {
  className?: string;
  blindCount?: number;
}

export function GradientBlinds({
  className = "",
  blindCount = 10,
}: GradientBlindsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const blinds: HTMLDivElement[] = [];

    for (let i = 0; i < blindCount; i++) {
      const blind = document.createElement("div");
      blind.style.position = "absolute";
      blind.style.width = "100%";
      blind.style.height = `${100 / blindCount}%`;
      blind.style.top = `${(i / blindCount) * 100}%`;
      blind.style.background = `linear-gradient(90deg, transparent, rgba(0,255,0,0.1), transparent)`;
      containerRef.current.appendChild(blind);
      blinds.push(blind);

      gsap.to(blind, {
        x: "100%",
        duration: 2,
        repeat: -1,
        ease: "none",
        delay: i * 0.2,
      });
    }

    return () => {
      blinds.forEach((blind) => blind.remove());
    };
  }, [blindCount]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
    />
  );
}

