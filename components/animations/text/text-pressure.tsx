"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface TextPressureProps {
  children: ReactNode;
  className?: string;
  pressure?: number;
}

export function TextPressure({
  children,
  className = "",
  pressure = 0.3,
}: TextPressureProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      gsap.to(ref.current, {
        transform: `perspective(1000px) rotateY(${deltaX * pressure * 20}deg) rotateX(${
          -deltaY * pressure * 20
        }deg)`,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      if (!ref.current) return;
      gsap.to(ref.current, {
        transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)",
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
  }, [pressure]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

