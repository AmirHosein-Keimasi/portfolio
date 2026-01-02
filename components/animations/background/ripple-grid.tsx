"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface RippleGridProps {
  className?: string;
  color?: string;
}

export function RippleGrid({
  className = "",
  color = "#00ff00",
}: RippleGridProps) {
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

    const createRipple = () => {
      const ripple = document.createElement("div");
      ripple.style.position = "absolute";
      ripple.style.width = "100px";
      ripple.style.height = "100px";
      ripple.style.border = `2px solid ${color}`;
      ripple.style.borderRadius = "50%";
      ripple.style.left = `${Math.random() * 100}%`;
      ripple.style.top = `${Math.random() * 100}%`;
      ripple.style.opacity = "0.5";
      containerRef.current!.appendChild(ripple);

      gsap.to(ripple, {
        scale: 10,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
          ripple.remove();
        },
      });
    };

    const interval = setInterval(createRipple, 1000);

    return () => {
      grid.remove();
      clearInterval(interval);
    };
  }, [color]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}

