"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PixelBlastProps {
  className?: string;
  color?: string;
}

export function PixelBlast({
  className = "",
  color = "#00ff00",
}: PixelBlastProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const createBlast = () => {
      const pixels: HTMLDivElement[] = [];

      for (let i = 0; i < 50; i++) {
        const pixel = document.createElement("div");
        pixel.style.position = "absolute";
        pixel.style.width = "4px";
        pixel.style.height = "4px";
        pixel.style.backgroundColor = color;
        pixel.style.left = "50%";
        pixel.style.top = "50%";
        containerRef.current!.appendChild(pixel);
        pixels.push(pixel);

        gsap.to(pixel, {
          x: (Math.random() - 0.5) * 500,
          y: (Math.random() - 0.5) * 500,
          opacity: 0,
          scale: 0,
          duration: 1,
          ease: "power2.out",
          onComplete: () => pixel.remove(),
        });
      }
    };

    const interval = setInterval(createBlast, 2000);

    return () => clearInterval(interval);
  }, [color]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}

