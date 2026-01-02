"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface FloatingLinesProps {
  className?: string;
  lineCount?: number;
  color?: string;
}

export function FloatingLines({
  className = "",
  lineCount = 10,
  color = "#00ff00",
}: FloatingLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const lines: HTMLDivElement[] = [];

    for (let i = 0; i < lineCount; i++) {
      const line = document.createElement("div");
      line.style.position = "absolute";
      line.style.width = "2px";
      line.style.height = "100px";
      line.style.backgroundColor = color;
      line.style.left = `${Math.random() * 100}%`;
      line.style.top = `${Math.random() * 100}%`;
      line.style.opacity = "0.3";
      containerRef.current.appendChild(line);
      lines.push(line);

      gsap.to(line, {
        y: "random(-200, 200)",
        x: "random(-200, 200)",
        rotation: 360,
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    return () => {
      lines.forEach((line) => line.remove());
    };
  }, [lineCount, color]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}

