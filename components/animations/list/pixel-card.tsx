"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface PixelCardProps {
  children: ReactNode;
  className?: string;
  pixelSize?: number;
}

export function PixelCard({
  children,
  className = "",
  pixelSize = 10,
}: PixelCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseEnter = () => {
      if (!element) return;

      gsap.to(element, {
        filter: "contrast(1.2) brightness(1.1)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      if (!element) return;
      gsap.to(element, {
        filter: "contrast(1) brightness(1)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        imageRendering: "crisp-edges",
      }}
    >
      {children}
    </div>
  );
}

