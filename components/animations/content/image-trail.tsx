"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface ImageTrailProps {
  children: ReactNode;
  className?: string;
  trailLength?: number;
}

export function ImageTrail({
  children,
  className = "",
  trailLength = 5,
}: ImageTrailProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const trail: HTMLDivElement[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      const clone = ref.current?.cloneNode(true) as HTMLDivElement;
      if (!clone) return;

      clone.style.position = "fixed";
      clone.style.pointerEvents = "none";
      clone.style.zIndex = "9999";
      clone.style.left = `${e.clientX}px`;
      clone.style.top = `${e.clientY}px`;
      clone.style.transform = "translate(-50%, -50%)";
      clone.style.opacity = "0.5";

      document.body.appendChild(clone);
      trail.push(clone);

      if (trail.length > trailLength) {
        const old = trail.shift();
        if (old) {
          gsap.to(old, {
            opacity: 0,
            scale: 0,
            duration: 0.5,
            onComplete: () => old.remove(),
          });
        }
      }

      gsap.to(clone, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        onComplete: () => {
          clone.remove();
          const index = trail.indexOf(clone);
          if (index > -1) trail.splice(index, 1);
        },
      });
    };

    ref.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      ref.current?.removeEventListener("mousemove", handleMouseMove);
      trail.forEach((item) => item.remove());
    };
  }, [trailLength]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

