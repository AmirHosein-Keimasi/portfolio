"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface BlurTextProps {
  children: ReactNode;
  className?: string;
  blurAmount?: number;
  duration?: number;
}

export function BlurText({
  children,
  className = "",
  blurAmount = 10,
  duration = 1,
}: BlurTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        filter: `blur(${blurAmount}px)`,
        opacity: 0,
      },
      {
        filter: "blur(0px)",
        opacity: 1,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [blurAmount, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

