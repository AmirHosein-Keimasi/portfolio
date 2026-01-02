"use client";

import { motion } from "framer-motion";
import { useApp } from "@/lib/context/app-context";

interface ShimmerOverlayProps {
  className?: string;
}

export function ShimmerOverlay({ className = "" }: ShimmerOverlayProps) {
  const { mode } = useApp();
  const shimmerColor = mode === "dark" ? "white" : "black";

  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={`absolute inset-0 ${
          mode === "dark"
            ? "bg-gradient-to-r from-transparent via-white/10 to-transparent"
            : "bg-gradient-to-r from-transparent via-black/10 to-transparent"
        }`}
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
    </motion.div>
  );
}

