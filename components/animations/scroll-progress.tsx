"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-l from-emerald-500 via-teal-400 to-sky-400 origin-right z-[60] pointer-events-none no-print"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
