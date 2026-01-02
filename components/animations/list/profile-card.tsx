"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface ProfileCardProps {
  children: ReactNode;
  className?: string;
}

export function ProfileCard({
  children,
  className = "",
}: ProfileCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((centerX - x) / centerX) * 10;

      gsap.to(ref.current, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.3,
        ease: "power2.out",
        transformPerspective: 1000,
      });

      const glow = ref.current.querySelector(".glow") as HTMLElement;
      if (glow) {
        gsap.to(glow, {
          x: x - centerX,
          y: y - centerY,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      if (!ref.current) return;
      gsap.to(ref.current, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    ref.current.addEventListener("mousemove", handleMouseMove);
    ref.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ref.current?.removeEventListener("mousemove", handleMouseMove);
      ref.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="glow absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 blur-3xl -z-10" />
      {children}
    </div>
  );
}

