"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface CubesProps {
  children: ReactNode;
  className?: string;
  cubeCount?: number;
}

export function Cubes({
  children,
  className = "",
  cubeCount = 20,
}: CubesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cubes: HTMLDivElement[] = [];

    for (let i = 0; i < cubeCount; i++) {
      const cube = document.createElement("div");
      cube.style.position = "absolute";
      cube.style.width = "20px";
      cube.style.height = "20px";
      cube.style.backgroundColor = "rgba(0, 255, 0, 0.3)";
      cube.style.left = `${Math.random() * 100}%`;
      cube.style.top = `${Math.random() * 100}%`;
      containerRef.current.appendChild(cube);
      cubes.push(cube);

      gsap.to(cube, {
        rotation: 360,
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    return () => {
      cubes.forEach((cube) => cube.remove());
    };
  }, [cubeCount]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}
    </div>
  );
}

