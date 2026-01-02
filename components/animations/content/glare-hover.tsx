"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface GlareHoverProps {
  children: ReactNode;
  className?: string;
}

export function GlareHover({
  children,
  className = "",
}: GlareHoverProps) {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !glareRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current || !glareRef.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      gsap.to(glareRef.current, {
        left: `${x}%`,
        top: `${y}%`,
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
      {children}
      <div
        ref={glareRef}
        className="absolute w-32 h-32 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}

