"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface FluidGlassProps {
  children: ReactNode;
  className?: string;
}

export function FluidGlass({
  children,
  className = "",
}: FluidGlassProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      gsap.to(ref.current, {
        background: `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    ref.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      ref.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`backdrop-blur-md bg-white/10 border border-white/20 ${className}`}
    >
      {children}
    </div>
  );
}

