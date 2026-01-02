"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PrismaticBurstProps {
  className?: string;
}

export function PrismaticBurst({ className = "" }: PrismaticBurstProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const createBurst = () => {
      const burst = document.createElement("div");
      burst.style.position = "absolute";
      burst.style.width = "200px";
      burst.style.height = "200px";
      burst.style.left = "50%";
      burst.style.top = "50%";
      burst.style.transform = "translate(-50%, -50%)";
      burst.style.background =
        "radial-gradient(circle, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)";
      burst.style.borderRadius = "50%";
      burst.style.opacity = "0";
      burst.style.filter = "blur(20px)";
      containerRef.current!.appendChild(burst);

      gsap.to(burst, {
        scale: 5,
        opacity: 0.3,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          burst.remove();
        },
      });
    };

    const interval = setInterval(createBurst, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}

