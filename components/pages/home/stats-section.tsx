"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useApp } from "@/lib/context/app-context";
import { NumberCounter } from "@/components/animations/number-counter";
import { ShimmerEffect } from "@/components/animations/shimmer-effect";

const stats = [
  { number: 50, suffix: "+", label: "پروژه انجام شده" },
  { number: 30, suffix: "+", label: "مشتری راضی" },
];

export function StatsSection() {
  const { mode } = useApp();
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={statsRef}
      className="flex gap-8 mb-8 md:mb-12"
      initial={{ opacity: 0, x: -50 }}
      animate={statsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className="group"
        >
          <ShimmerEffect>
            <motion.div
              className={`text-4xl md:text-5xl font-bold ${
                mode === "dark" ? "text-dark-success" : "text-light-success"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <NumberCounter
                value={stat.number}
                suffix={stat.suffix}
                className={
                  mode === "dark" ? "text-dark-success" : "text-light-success"
                }
              />
            </motion.div>
          </ShimmerEffect>
          <p
            className={`text-sm md:text-base mt-2 transition-colors ${
              mode === "dark"
                ? "text-dark-text-main/70 group-hover:text-dark-text-main"
                : "text-light-text-main/70 group-hover:text-light-text-main"
            }`}
          >
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

