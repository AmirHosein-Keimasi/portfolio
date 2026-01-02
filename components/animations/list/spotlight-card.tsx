"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !spotlightRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current || !spotlightRef.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(spotlightRef.current, {
        x: x,
        y: y,
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
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div
        ref={spotlightRef}
        className="absolute w-64 h-64 rounded-full pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.8), transparent)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      {children}
    </div>
  );
}

