"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface FuzzyTextProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function FuzzyText({
  children,
  className = "",
  intensity = 2,
}: FuzzyTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const chars = ref.current.textContent?.split("") || [];
    ref.current.innerHTML = "";

    chars.forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      ref.current?.appendChild(span);

      gsap.to(span, {
        x: `random(-${intensity}, ${intensity})`,
        y: `random(-${intensity}, ${intensity})`,
        duration: "random(0.1, 0.3)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.05,
      });
    });
  }, [children, intensity]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

