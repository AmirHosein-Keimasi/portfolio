"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useApp } from "@/lib/context/app-context";
import { GradientText } from "@/components/animations/gradient-text";
import { TextReveal } from "@/components/animations/text-reveal";

export function AboutSection() {
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
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, y }}
      className={`py-32 px-4 md:px-8 ${
        mode === "dark" ? "bg-dark-primary-main" : "bg-light-primary-main"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TextReveal delay={0.2}>
              <h2
                className={`text-4xl md:text-5xl font-bold mb-6 ${
                  mode === "dark"
                    ? "text-dark-text-main"
                    : "text-light-text-main"
                }`}
              >
                <GradientText
                  gradient={
                    mode === "dark"
                      ? "from-green-400 via-green-500 to-green-600"
                      : "from-green-500 via-green-600 to-green-700"
                  }
                >
                  درباره من
                </GradientText>
              </h2>
            </TextReveal>
            <p
              className={`text-lg leading-relaxed mb-4 ${
                mode === "dark"
                  ? "text-dark-text-main/70"
                  : "text-light-text-main/70"
              }`}
            >
              من یک فرانت دولوپر با تجربه در توسعه وبسایت‌های مدرن و بهینه
              هستم. تخصص من در React، Next.js و TypeScript است و همیشه به
              کیفیت کد و تجربه کاربری عالی اهمیت می‌دهم.
            </p>
            <p
              className={`text-lg leading-relaxed ${
                mode === "dark"
                  ? "text-dark-text-main/70"
                  : "text-light-text-main/70"
              }`}
            >
              وقتی با من کار کنید همیشه مطمئن هستید که پروژه‌ها با بهترین
              کیفیت و در زمان مقرر انجام میشن.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className={`w-full h-64 md:h-96 rounded-2xl relative overflow-hidden ${
                mode === "dark" ? "bg-dark-success/20" : "bg-light-success/20"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  mode === "dark"
                    ? "from-dark-success/30 to-dark-info/30"
                    : "from-light-success/30 to-light-info/30"
                }`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className={`text-6xl font-bold ${
                    mode === "dark"
                      ? "text-dark-text-main/20"
                      : "text-light-text-main/20"
                  }`}
                >
                  AK
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

