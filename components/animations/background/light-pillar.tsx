"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LightPillarProps {
  className?: string;
  color?: string;
}

export function LightPillar({
  className = "",
  color = "#00ff00",
}: LightPillarProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const pillars: HTMLDivElement[] = [];

    for (let i = 0; i < 5; i++) {
      const pillar = document.createElement("div");
      pillar.style.position = "absolute";
      pillar.style.width = "2px";
      pillar.style.height = "100%";
      pillar.style.backgroundColor = color;
      pillar.style.left = `${(i / 4) * 100}%`;
      pillar.style.opacity = "0.3";
      pillar.style.boxShadow = `0 0 20px ${color}`;
      ref.current.appendChild(pillar);
      pillars.push(pillar);

      gsap.to(pillar, {
        opacity: "random(0.3, 0.8)",
        duration: "random(1, 3)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.2,
      });
    }

    return () => {
      pillars.forEach((pillar) => pillar.remove());
    };
  }, [color]);

  return (
    <div
      ref={ref}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}

