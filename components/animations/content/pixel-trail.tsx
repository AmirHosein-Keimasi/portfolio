"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface PixelTrailProps {
  children: ReactNode;
  className?: string;
  color?: string;
}

export function PixelTrail({
  children,
  className = "",
  color = "#00ff00",
}: PixelTrailProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const pixels: HTMLDivElement[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const pixel = document.createElement("div");
      pixel.style.position = "fixed";
      pixel.style.width = "4px";
      pixel.style.height = "4px";
      pixel.style.backgroundColor = color;
      pixel.style.left = `${e.clientX}px`;
      pixel.style.top = `${e.clientY}px`;
      pixel.style.pointerEvents = "none";
      pixel.style.zIndex = "9999";

      document.body.appendChild(pixel);
      pixels.push(pixel);

      gsap.to(pixel, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          pixel.remove();
          const index = pixels.indexOf(pixel);
          if (index > -1) pixels.splice(index, 1);
        },
      });
    };

    ref.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      ref.current?.removeEventListener("mousemove", handleMouseMove);
      pixels.forEach((p) => p.remove());
    };
  }, [color]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

