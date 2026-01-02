"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface ShinyTextProps {
  children: ReactNode;
  className?: string;
}

export function ShinyText({ children, className = "" }: ShinyTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const gradient = gsap.to(ref.current, {
      backgroundPosition: "200% center",
      duration: 3,
      ease: "none",
      repeat: -1,
    });

    return () => {
      gradient.kill();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-[length:200%_100%] ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
      }}
    >
      {children}
    </div>
  );
}

