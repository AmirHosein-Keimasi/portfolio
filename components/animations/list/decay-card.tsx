"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface DecayCardProps {
  children: ReactNode;
  className?: string;
}

export function DecayCard({
  children,
  className = "",
}: DecayCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseEnter = () => {
      if (!ref.current) return;

      gsap.to(ref.current, {
        filter: "grayscale(0%) contrast(1.2)",
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      if (!ref.current) return;
      gsap.to(ref.current, {
        filter: "grayscale(50%) contrast(1)",
        duration: 0.5,
        ease: "power2.out",
      });
    };

    gsap.set(ref.current, {
      filter: "grayscale(50%) contrast(1)",
    });

    ref.current.addEventListener("mouseenter", handleMouseEnter);
    ref.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ref.current?.removeEventListener("mouseenter", handleMouseEnter);
      ref.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

