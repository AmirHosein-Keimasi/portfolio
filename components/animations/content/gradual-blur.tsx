"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GradualBlurProps {
  children: ReactNode;
  className?: string;
  maxBlur?: number;
}

export function GradualBlur({
  children,
  className = "",
  maxBlur = 10,
}: GradualBlurProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      filter: `blur(${maxBlur}px)`,
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, [maxBlur]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

