"use client";

import { useEffect, useRef, ReactNode, useState } from "react";
import { gsap } from "gsap";

interface ElasticSliderProps {
  children: ReactNode[];
  className?: string;
}

export function ElasticSlider({
  children,
  className = "",
}: ElasticSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.children) as HTMLElement[];
    const translateX = -currentIndex * 100;

    gsap.to(containerRef.current, {
      x: `${translateX}%`,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
    });
  }, [currentIndex]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        ref={containerRef}
        className="flex"
        style={{ width: `${children.length * 100}%` }}
      >
        {children.map((child, i) => (
          <div key={i} style={{ width: `${100 / children.length}%` }}>
            {child}
          </div>
        ))}
      </div>
      <div className="flex gap-2 justify-center mt-4">
        {children.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

