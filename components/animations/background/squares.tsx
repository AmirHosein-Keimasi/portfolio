"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface SquaresProps {
  className?: string;
  squareCount?: number;
  color?: string;
}

export function Squares({
  className = "",
  squareCount = 20,
  color = "#00ff00",
}: SquaresProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const squares: HTMLDivElement[] = [];

    for (let i = 0; i < squareCount; i++) {
      const square = document.createElement("div");
      const size = Math.random() * 50 + 20;
      square.style.position = "absolute";
      square.style.width = `${size}px`;
      square.style.height = `${size}px`;
      square.style.border = `2px solid ${color}`;
      square.style.left = `${Math.random() * 100}%`;
      square.style.top = `${Math.random() * 100}%`;
      square.style.opacity = "0.3";
      containerRef.current.appendChild(square);
      squares.push(square);

      gsap.to(square, {
        rotation: 360,
        scale: "random(0.5, 1.5)",
        duration: "random(3, 6)",
        repeat: -1,
        ease: "none",
      });
    }

    return () => {
      squares.forEach((square) => square.remove());
    };
  }, [squareCount, color]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}

