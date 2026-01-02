"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FallingTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FallingText({
  children,
  className = "",
  delay = 0,
}: FallingTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const words = ref.current.textContent?.split(" ") || [];
    ref.current.innerHTML = "";

    words.forEach((word, i) => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.transform = "translateY(-100px)";
      ref.current?.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: delay + i * 0.1,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }, [children, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

