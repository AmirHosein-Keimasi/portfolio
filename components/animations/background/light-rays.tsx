"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LightRaysProps {
  className?: string;
  color?: string;
}

export function LightRays({
  className = "",
  color = "#00ff00",
}: LightRaysProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const rays: HTMLDivElement[] = [];

    for (let i = 0; i < 8; i++) {
      const ray = document.createElement("div");
      ray.style.position = "absolute";
      ray.style.width = "2px";
      ray.style.height = "100%";
      ray.style.backgroundColor = color;
      ray.style.left = "50%";
      ray.style.top = "50%";
      ray.style.transformOrigin = "0 0";
      ray.style.transform = `rotate(${i * 45}deg)`;
      ray.style.opacity = "0.2";
      ray.style.boxShadow = `0 0 30px ${color}`;
      ref.current.appendChild(ray);
      rays.push(ray);

      gsap.to(ray, {
        opacity: "random(0.2, 0.6)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.1,
      });
    }

    return () => {
      rays.forEach((ray) => ray.remove());
    };
  }, [color]);

  return (
    <div
      ref={ref}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}

