"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface GridScanProps {
  className?: string;
  color?: string;
}

export function GridScan({
  className = "",
  color = "#00ff00",
}: GridScanProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const grid = document.createElement("div");
    grid.style.position = "absolute";
    grid.style.inset = "0";
    grid.style.backgroundImage = `
      linear-gradient(${color} 1px, transparent 1px),
      linear-gradient(90deg, ${color} 1px, transparent 1px)
    `;
    grid.style.backgroundSize = "50px 50px";
    grid.style.opacity = "0.1";
    containerRef.current.appendChild(grid);

    const scanLine = document.createElement("div");
    scanLine.style.position = "absolute";
    scanLine.style.width = "100%";
    scanLine.style.height = "2px";
    scanLine.style.backgroundColor = color;
    scanLine.style.boxShadow = `0 0 20px ${color}`;
    scanLine.style.top = "0";
    containerRef.current.appendChild(scanLine);

    gsap.to(scanLine, {
      top: "100%",
      duration: 3,
      repeat: -1,
      ease: "none",
    });

    return () => {
      grid.remove();
      scanLine.remove();
    };
  }, [color]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}

