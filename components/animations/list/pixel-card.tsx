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
    if (!ref.current) return;

    const handleMouseEnter = () => {
      if (!ref.current) return;

      gsap.to(ref.current, {
        filter: "contrast(1.2) brightness(1.1)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      if (!ref.current) return;
      gsap.to(ref.current, {
        filter: "contrast(1) brightness(1)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    ref.current.addEventListener("mouseenter", handleMouseEnter);
    ref.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ref.current?.removeEventListener("mouseenter", handleMouseEnter);
      ref.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        imageRendering: "pixelated",
        imageRendering: "crisp-edges",
      }}
    >
      {children}
    </div>
  );
}

