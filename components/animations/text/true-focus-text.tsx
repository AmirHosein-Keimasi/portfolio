"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface TrueFocusTextProps {
  children: ReactNode;
  className?: string;
  blurAmount?: number;
}

export function TrueFocusText({
  children,
  className = "",
  blurAmount = 5,
}: TrueFocusTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const spans = ref.current.querySelectorAll("span");
      spans.forEach((span) => {
        const spanRect = span.getBoundingClientRect();
        const spanX = spanRect.left + spanRect.width / 2 - rect.left;
        const spanY = spanRect.top + spanRect.height / 2 - rect.top;

        const distance = Math.sqrt(
          Math.pow(x - spanX, 2) + Math.pow(y - spanY, 2)
        );
        const maxDistance = Math.sqrt(
          Math.pow(rect.width, 2) + Math.pow(rect.height, 2)
        );
        const blur = (distance / maxDistance) * blurAmount;

        gsap.to(span, {
          filter: `blur(${blur}px)`,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    };

    const handleMouseLeave = () => {
      if (!ref.current) return;
      const spans = ref.current.querySelectorAll("span");
      gsap.to(spans, {
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const text = ref.current.textContent || "";
    const chars = text.split("");
    ref.current.innerHTML = "";

    chars.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      ref.current?.appendChild(span);
    });

    ref.current.addEventListener("mousemove", handleMouseMove);
    ref.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ref.current?.removeEventListener("mousemove", handleMouseMove);
      ref.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [children, blurAmount]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

