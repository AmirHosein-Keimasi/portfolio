"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface BlobCursorProps {
  children: ReactNode;
  className?: string;
  size?: number;
  color?: string;
}

export function BlobCursor({
  children,
  className = "",
  size = 100,
  color = "#00ff00",
}: BlobCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!blobRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!blobRef.current) return;

      gsap.to(blobRef.current, {
        x: e.clientX - size / 2,
        y: e.clientY - size / 2,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    gsap.to(blobRef.current, {
      scale: "random(0.8, 1.2)",
      duration: "random(1, 2)",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}
      <div
        ref={blobRef}
        className="fixed pointer-events-none z-50 rounded-full blur-xl opacity-50"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          left: 0,
          top: 0,
        }}
      />
    </div>
  );
}

