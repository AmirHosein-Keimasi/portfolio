"use client";

import { useEffect, useState } from "react";
import { useApp } from "@/lib/context/app-context";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { mode } = useApp();

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select, [role='button']"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", updateCursor);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const cursorColor = mode === "dark" ? "rgba(34, 197, 94, 0.5)" : "rgba(34, 197, 94, 0.3)";

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.1s ease-out",
        }}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            isHovering ? "w-8 h-8" : "w-4 h-4"
          }`}
          style={{
            backgroundColor: cursorColor,
            boxShadow: `0 0 20px ${cursorColor}`,
          }}
        />
      </div>
      {/* Custom cursor disabled by default - uncomment to enable */}
      {/* <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style> */}
    </>
  );
}

