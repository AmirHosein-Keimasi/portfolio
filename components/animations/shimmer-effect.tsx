"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useApp } from "@/lib/context/app-context";

interface ShimmerEffectProps {
  children: ReactNode;
  className?: string;
}

export function ShimmerEffect({
  children,
  className = "",
}: ShimmerEffectProps) {
  const { mode } = useApp();
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r from-transparent ${
          mode === "dark" ? "via-white/20" : "via-black/20"
        } to-transparent`}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "linear",
        }}
      />
      {children}
    </div>
  );
}

