"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface SplashCursorProps {
  children: ReactNode;
  className?: string;
  color?: string;
}

export function SplashCursor({
  children,
  className = "",
  color = "#00ff00",
}: SplashCursorProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const createSplash = (e: MouseEvent) => {
      if (!ref.current) return;

      const splash = document.createElement("div");
      splash.style.position = "fixed";
      splash.style.width = "100px";
      splash.style.height = "100px";
      splash.style.borderRadius = "50%";
      splash.style.backgroundColor = color;
      splash.style.left = `${e.clientX}px`;
      splash.style.top = `${e.clientY}px`;
      splash.style.transform = "translate(-50%, -50%)";
      splash.style.pointerEvents = "none";
      splash.style.zIndex = "9999";
      splash.style.opacity = "0.5";

      document.body.appendChild(splash);

      gsap.to(splash, {
        scale: 5,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => splash.remove(),
      });
    };

    ref.current.addEventListener("click", createSplash);

    return () => {
      ref.current?.removeEventListener("click", createSplash);
    };
  }, [color]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
