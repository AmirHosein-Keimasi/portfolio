"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface FaultyTerminalProps {
  className?: string;
  color?: string;
}

export function FaultyTerminal({
  className = "",
  color = "#00ff00",
}: FaultyTerminalProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const chars = "01";
    const lines: HTMLDivElement[] = [];

    for (let i = 0; i < 20; i++) {
      const line = document.createElement("div");
      line.textContent = Array(50)
        .fill(0)
        .map(() => chars[Math.floor(Math.random() * chars.length)])
        .join("");
      line.style.fontFamily = "monospace";
      line.style.fontSize = "12px";
      line.style.color = color;
      line.style.opacity = "0.1";
      ref.current.appendChild(line);
      lines.push(line);

      gsap.to(line, {
        textContent: Array(50)
          .fill(0)
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join(""),
        duration: "random(0.5, 2)",
        repeat: -1,
        ease: "none",
        delay: i * 0.1,
      });
    }

    return () => {
      lines.forEach((line) => line.remove());
    };
  }, [color]);

  return (
    <div
      ref={ref}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}

