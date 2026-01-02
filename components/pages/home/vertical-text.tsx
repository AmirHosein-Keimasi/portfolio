"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useApp } from "@/lib/context/app-context";

export function VerticalText() {
  const { mode } = useApp();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: isMounted ? containerRef : undefined,
    offset: ["start start", "end start"],
  });

  const verticalTextOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity: verticalTextOpacity }}
      className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-10 flex-col gap-8"
    >
      <motion.div
        className={`writing-vertical-rl text-sm font-medium ${
          mode === "dark"
            ? "text-dark-text-main/50"
            : "text-light-text-main/50"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        فرانت دولوپر
      </motion.div>
      <motion.div
        className={`writing-vertical-rl text-sm font-medium ${
          mode === "dark"
            ? "text-dark-text-main/50"
            : "text-light-text-main/50"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        2024
      </motion.div>
    </motion.div>
  );
}

