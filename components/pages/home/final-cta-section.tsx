"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useApp } from "@/lib/context/app-context";
import { GradientText } from "@/components/animations/gradient-text";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { TextReveal } from "@/components/animations/text-reveal";

export function FinalCTASection() {
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
      className={`py-32 px-4 md:px-8 ${
        mode === "dark" ? "bg-dark-primary-dark" : "bg-gray-50"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <TextReveal delay={0.2}>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              mode === "dark" ? "text-dark-text-main" : "text-light-text-main"
            }`}
          >
            <GradientText
              gradient={
                mode === "dark"
                  ? "from-green-400 via-green-500 to-green-600"
                  : "from-green-500 via-green-600 to-green-700"
              }
            >
              آماده شروع پروژه بعدی هستید؟
            </GradientText>
          </h2>
        </TextReveal>
        <motion.p
          className={`text-lg mb-8 ${
            mode === "dark"
              ? "text-dark-text-main/70"
              : "text-light-text-main/70"
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          بیایید با هم یک پروژه فوق‌العاده بسازیم
        </motion.p>
        <TextReveal delay={0.4}>
          <Link href="/connect" prefetch={true}>
            <MagneticButton strength={0.2}>
              <motion.button
                className={`
                  px-8 py-4 rounded-full text-lg font-semibold
                  ${
                    mode === "dark"
                      ? "bg-dark-success text-dark-text-main hover:bg-dark-success/90"
                      : "bg-light-success text-light-text-main hover:bg-light-success/90"
                  }
                  shadow-lg transition-all duration-300
                `}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                شروع همکاری
              </motion.button>
            </MagneticButton>
          </Link>
        </TextReveal>
      </div>
    </motion.section>
  );
}

