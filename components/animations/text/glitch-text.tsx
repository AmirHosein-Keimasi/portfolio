"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function GlitchText({
  children,
  className = "",
  intensity = 5,
}: GlitchTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const glitch = () => {
      gsap.to(ref.current, {
        x: `random(-${intensity}, ${intensity})`,
        y: `random(-${intensity}, ${intensity})`,
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(ref.current, { x: 0, y: 0 });
        },
      });
    };

    const interval = setInterval(glitch, 2000 + Math.random() * 3000);

    return () => clearInterval(interval);
  }, [intensity]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

