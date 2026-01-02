"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface MagnetLinesProps {
  children: ReactNode;
  className?: string;
  lineCount?: number;
  color?: string;
}

export function MagnetLines({
  children,
  className = "",
  lineCount = 5,
  color = "#00ff00",
}: MagnetLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const lines: HTMLDivElement[] = [];

    for (let i = 0; i < lineCount; i++) {
      const line = document.createElement("div");
      line.style.position = "absolute";
      line.style.width = "2px";
      line.style.height = "100%";
      line.style.backgroundColor = color;
      line.style.left = `${(i / (lineCount - 1)) * 100}%`;
      line.style.opacity = "0.3";
      containerRef.current.appendChild(line);
      lines.push(line);
    }

    lines.forEach((line, i) => {
      gsap.to(line, {
        opacity: "random(0.3, 0.8)",
        duration: "random(1, 2)",
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: i * 0.2,
      });
    });

    return () => {
      lines.forEach((line) => line.remove());
    };
  }, [lineCount, color]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}
    </div>
  );
}

