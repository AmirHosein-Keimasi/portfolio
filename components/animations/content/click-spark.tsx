"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface ClickSparkProps {
  children: ReactNode;
  className?: string;
  color?: string;
}

export function ClickSpark({
  children,
  className = "",
  color = "#00ff00",
}: ClickSparkProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const createSpark = (e: MouseEvent) => {
      if (!ref.current) return;

      const spark = document.createElement("div");
      spark.style.position = "absolute";
      spark.style.width = "4px";
      spark.style.height = "4px";
      spark.style.backgroundColor = color;
      spark.style.borderRadius = "50%";
      spark.style.left = `${e.clientX - ref.current.getBoundingClientRect().left}px`;
      spark.style.top = `${e.clientY - ref.current.getBoundingClientRect().top}px`;
      spark.style.pointerEvents = "none";

      ref.current.appendChild(spark);

      gsap.to(spark, {
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100,
        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => spark.remove(),
      });
    };

    ref.current.addEventListener("click", createSpark);

    return () => {
      ref.current?.removeEventListener("click", createSpark);
    };
  }, [color]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {children}
    </div>
  );
}

