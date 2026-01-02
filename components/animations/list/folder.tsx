"use client";

import { useEffect, useRef, ReactNode, useState } from "react";
import { gsap } from "gsap";

interface FolderProps {
  children: ReactNode[];
  className?: string;
}

export function Folder({
  children,
  className = "",
}: FolderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.children) as HTMLElement[];

    if (isOpen) {
      items.forEach((item, i) => {
        gsap.to(item, {
          y: i * 10,
          rotation: i * 2,
          opacity: 1,
          duration: 0.3,
          delay: i * 0.05,
          ease: "power2.out",
        });
      });
    } else {
      items.forEach((item) => {
        gsap.to(item, {
          y: 0,
          rotation: 0,
          opacity: 0.7,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }
  }, [isOpen, children]);

  return (
    <div
      ref={containerRef}
      className={className}
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
    </div>
  );
}

