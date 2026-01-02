"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface StickerPeelProps {
  children: ReactNode;
  className?: string;
}

export function StickerPeel({
  children,
  className = "",
}: StickerPeelProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseEnter = () => {
      if (!ref.current) return;

      gsap.to(ref.current, {
        rotationY: 15,
        z: 50,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      if (!ref.current) return;
      gsap.to(ref.current, {
        rotationY: 0,
        z: 0,
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
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

