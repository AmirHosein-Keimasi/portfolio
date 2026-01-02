"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LightningProps {
  className?: string;
  color?: string;
}

export function Lightning({
  className = "",
  color = "#00ffff",
}: LightningProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const createLightning = () => {
      const lightning = document.createElement("div");
      lightning.style.position = "absolute";
      lightning.style.width = "2px";
      lightning.style.height = "100%";
      lightning.style.backgroundColor = color;
      lightning.style.left = `${Math.random() * 100}%`;
      lightning.style.top = "0";
      lightning.style.opacity = "0";
      lightning.style.boxShadow = `0 0 50px ${color}`;
      containerRef.current!.appendChild(lightning);

      gsap.to(lightning, {
        opacity: 1,
        duration: 0.1,
        yoyo: true,
        repeat: 5,
        ease: "power2.inOut",
        onComplete: () => {
          lightning.remove();
        },
      });
    };

    const interval = setInterval(createLightning, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, [color]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}

