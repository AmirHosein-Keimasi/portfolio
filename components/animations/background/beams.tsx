"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface BeamsProps {
  className?: string;
  beamCount?: number;
  color?: string;
}

export function Beams({
  className = "",
  beamCount = 5,
  color = "#00ff00",
}: BeamsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const beams: HTMLDivElement[] = [];

    for (let i = 0; i < beamCount; i++) {
      const beam = document.createElement("div");
      beam.style.position = "absolute";
      beam.style.width = "2px";
      beam.style.height = "100%";
      beam.style.backgroundColor = color;
      beam.style.left = `${(i / (beamCount - 1)) * 100}%`;
      beam.style.opacity = "0.3";
      beam.style.boxShadow = `0 0 30px ${color}`;
      containerRef.current.appendChild(beam);
      beams.push(beam);

      gsap.to(beam, {
        opacity: "random(0.3, 0.8)",
        duration: "random(1, 3)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.2,
      });
    }

    return () => {
      beams.forEach((beam) => beam.remove());
    };
  }, [beamCount, color]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}

