"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface ShapeBlurProps {
  children: ReactNode;
  className?: string;
  blurAmount?: number;
}

export function ShapeBlur({
  children,
  className = "",
  blurAmount = 10,
}: ShapeBlurProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const distance = Math.sqrt(
        Math.pow(x - rect.width / 2, 2) + Math.pow(y - rect.height / 2, 2)
      );
      const maxDistance = Math.sqrt(
        Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2)
      );
      const blur = (distance / maxDistance) * blurAmount;

      gsap.to(ref.current, {
        filter: `blur(${blur}px)`,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      if (!ref.current) return;
      gsap.to(ref.current, {
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power2.out",
      });
    };

    ref.current.addEventListener("mousemove", handleMouseMove);
    ref.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ref.current?.removeEventListener("mousemove", handleMouseMove);
      ref.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [blurAmount]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

