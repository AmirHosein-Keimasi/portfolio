"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatTextProps {
  children: ReactNode;
  className?: string;
  floatAmount?: number;
}

export function ScrollFloatText({
  children,
  className = "",
  floatAmount = 50,
}: ScrollFloatTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        y: floatAmount,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.to(ref.current, {
      y: -floatAmount,
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [floatAmount]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

