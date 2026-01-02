"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { FaUserCircle } from "react-icons/fa";
import { CustomDivider } from "@/components/common/custom-divider";
import { useApp } from "@/lib/context/app-context";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Dynamic import برای کامپوننت‌های سنگین
const Skills = dynamic(
  () => import("../skills").then((mod) => ({ default: mod.Skills })),
  {
    loading: () => (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100"></div>
      </div>
    ),
    ssr: false,
  },
);

const SuftSkills = dynamic(
  () => import("../suft-skills").then((mod) => ({ default: mod.SuftSkills })),
  {
    loading: () => (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100"></div>
      </div>
    ),
    ssr: true,
  },
);

export function SkillsSection() {
  const { mode } = useApp();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: isMounted ? sectionRef : undefined,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, y }}
      className={`py-32 px-4 md:px-8 relative ${
        mode === "dark" ? "bg-dark-primary-dark" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="w-full mb-8">
          <ScrollReveal direction="fade" delay={0.2}>
            <CustomDivider
              bColor={
                mode === "dark"
                  ? "border-dark-text-main"
                  : "border-light-text-main"
              }
              cColor="warning"
              icon={<FaUserCircle />}
              align="center"
              text="مهارت های من"
            />
          </ScrollReveal>
          <Suspense
            fallback={
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100"></div>
              </div>
            }
          >
            <ScrollReveal direction="up" delay={0.4}>
              <Skills />
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.6}>
              <SuftSkills />
            </ScrollReveal>
          </Suspense>
        </div>
      </div>
    </motion.section>
  );
}

