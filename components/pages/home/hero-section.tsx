"use client";

import { useRef, useEffect, useState, useMemo, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useApp } from "@/lib/context/app-context";
import { GradientText } from "@/components/animations/gradient-text";
import { TextReveal } from "@/components/animations/text-reveal";
import { StatsSection } from "./stats-section";
import { CTASection } from "./cta-section";

export const HeroSection = memo(function HeroSection() {
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

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.8, 0.3],
  );
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const gradient = useMemo(
    () =>
      mode === "dark"
        ? "from-green-400 via-green-500 to-green-600"
        : "from-green-500 via-green-600 to-green-700",
    [mode],
  );

  const glowColor = useMemo(
    () => (mode === "dark" ? "bg-dark-success" : "bg-light-success"),
    [mode],
  );

  return (
    <motion.div
      ref={containerRef}
      className="flex-1 flex flex-col md:flex-row relative px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 min-h-screen items-center md:items-start"
    >
      {/* Left Section - Text Content */}
      <motion.div
        style={{ y: textY }}
        className="flex-1 flex flex-col justify-center md:justify-start md:pt-14 z-10 relative w-full md:w-auto order-1 md:order-1"
      >
        {/* Main Heading */}
        <TextReveal delay={0.2}>
          <h1
            className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight sm:leading-none mb-4 sm:mb-6 ${
              mode === "dark" ? "text-dark-text-main" : "text-light-text-main"
            }`}
          >
            <GradientText gradient={gradient}>سلام</GradientText>
          </h1>
        </TextReveal>

        {/* Subtitle */}
        <TextReveal delay={0.4}>
          <p
            className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 font-medium ${
              mode === "dark"
                ? "text-dark-text-main/80"
                : "text-light-text-main/80"
            }`}
          >
            من امیرحسین کیماسی هستم
          </p>
        </TextReveal>

        {/* Description */}
        <TextReveal delay={0.6}>
          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl mb-6  max-w-2xl leading-relaxed ${
              mode === "dark"
                ? "text-dark-text-main/70"
                : "text-light-text-main/70"
            }`}
          >
            یک فرانت دولوپر و طراح رابط کاربری که عاشق ساختن تجربه‌های دیجیتال
            فوق‌العاده است. من یا مسئولیتی رو نمی‌پذیرم یا اگه بپذیرم به بهترین
            شکل ممکن انجامش میدم.
          </p>
        </TextReveal>

        {/* Stats Section */}
        <div className="mb-6 ">
          <StatsSection />
        </div>

        {/* Profile Image - Mobile (after Stats, before CTA) */}
        <motion.div
          style={{ y: imageY, opacity: imageOpacity }}
          className="relative flex items-center justify-center md:hidden pointer-events-none z-0 mb-6 "
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Glow Effect */}
            <motion.div
              className={`absolute inset-0 rounded-full blur-3xl opacity-30 ${glowColor}`}
              style={{ transform: "scale(1.3)" }}
              animate={{
                scale: [1.3, 1.4, 1.3],
                opacity: [0.3, 0.4, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <Image
              src="/assets/1.png"
              alt="امیرحسین کیماسی - فرانت دولوپر"
              width={600}
              height={600}
              className="w-[200px] h-[200px] xs:w-[240px] xs:h-[240px] sm:w-[280px] sm:h-[280px] rounded-full object-cover relative z-10 shadow-2xl"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              sizes="(max-width: 475px) 200px, (max-width: 640px) 240px, 280px"
            />
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <CTASection />
      </motion.div>

      {/* Right Section - Profile Image (Desktop only) */}
      <motion.div
        style={{ y: imageY, opacity: imageOpacity }}
        className="hidden md:flex relative top-0 -translate-y-0 right-0 items-end justify-end w-1/2 lg:w-2/5 pointer-events-none z-0"
      >
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Glow Effect */}
          <motion.div
            className={`absolute inset-0 rounded-full blur-3xl opacity-30 ${glowColor}`}
            style={{ transform: "scale(1.3)" }}
            animate={{
              scale: [1.3, 1.4, 1.3],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <Image
            src="/assets/1.png"
            alt="امیرحسین کیماسی - فرانت دولوپر"
            width={600}
            height={600}
            className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full object-cover relative z-10 shadow-2xl"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            sizes="(max-width: 1024px) 400px, 500px"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
});
