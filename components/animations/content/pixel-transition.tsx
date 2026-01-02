"use client";

import { useEffect, useRef, ReactNode, useState } from "react";
import { gsap } from "gsap";

interface PixelTransitionProps {
  children: ReactNode;
  className?: string;
  pixelSize?: number;
}

export function PixelTransition({
  children,
  className = "",
  pixelSize = 20,
}: PixelTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const container = ref.current;
    const rect = container.getBoundingClientRect();
    const cols = Math.ceil(rect.width / pixelSize);
    const rows = Math.ceil(rect.height / pixelSize);

    const pixels: HTMLDivElement[] = [];

    for (let i = 0; i < rows * cols; i++) {
      const pixel = document.createElement("div");
      pixel.style.position = "absolute";
      pixel.style.width = `${pixelSize}px`;
      pixel.style.height = `${pixelSize}px`;
      pixel.style.backgroundColor = "currentColor";
      pixel.style.opacity = "0";
      pixel.style.left = `${(i % cols) * pixelSize}px`;
      pixel.style.top = `${Math.floor(i / cols) * pixelSize}px`;

      container.appendChild(pixel);
      pixels.push(pixel);
    }

    gsap.to(pixels, {
      opacity: 1,
      duration: 0.5,
      stagger: {
        amount: 1,
        from: "random",
      },
      ease: "power2.out",
      onComplete: () => {
        setIsVisible(true);
        pixels.forEach((p) => p.remove());
      },
    });
  }, [pixelSize]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {isVisible && children}
    </div>
  );
}

