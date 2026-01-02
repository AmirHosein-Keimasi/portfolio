"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function SplitText({
  children,
  className = "",
  delay = 0,
  duration = 1,
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const text = ref.current.textContent || "";
    const words = text.split(" ");
    ref.current.innerHTML = "";

    words.forEach((word, i) => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.transform = "translateY(100%)";
      ref.current?.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        y: 0,
        duration,
        delay: delay + i * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }, [children, delay, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

