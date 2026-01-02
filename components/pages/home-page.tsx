"use client";

import { useRef } from "react";
import { useApp } from "@/lib/context/app-context";
import { SocialMediaIcons } from "@/components/social-media-icons";
import { MdExpandMore, MdArrowDownward } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FaCode, FaRocket } from "react-icons/fa";
import { GradientText } from "@/components/animations/gradient-text";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { NumberCounter } from "@/components/animations/number-counter";
import { TextReveal } from "@/components/animations/text-reveal";
import { ShimmerEffect } from "@/components/animations/shimmer-effect";
import { ShimmerOverlay } from "@/components/animations/shimmer-overlay";
import { PremiumBackground } from "@/components/animations/premium-background";

export function HomePage() {
  const { mode } = useApp();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.8, 0.3],
  );
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const statsOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [1, 1, 0]);
  const verticalTextOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const stats = [
    { number: 50, suffix: "+", label: "پروژه انجام شده" },
    { number: 30, suffix: "+", label: "مشتری راضی" },
  ];

  return (
    <div
      ref={containerRef}
      className={`min-h-screen flex flex-col relative overflow-hidden ${
        mode === "dark" ? "bg-dark-primary-main" : "bg-light-primary-main"
      }`}
    >
      {/* Premium Animated Background */}
      <PremiumBackground />
      {/* Vertical Text - Left Side */}
      <motion.div
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row relative px-4 md:px-8 py-8 md:py-12 min-h-screen">
        {/* Left Section - Text Content */}
        <motion.div
          style={{ y: textY }}
          className="flex-1 flex flex-col justify-center md:justify-start md:pt-20 z-10 relative"
        >
          {/* Stats Section */}
          <motion.div
            ref={statsRef}
            style={{ opacity: statsOpacity }}
            className="flex gap-8 mb-8 md:mb-12"
            initial={{ opacity: 0, x: -50 }}
            animate={
              statsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  statsInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <ShimmerEffect>
                  <motion.div
                    className={`text-4xl md:text-5xl font-bold ${
                      mode === "dark"
                        ? "text-dark-success"
                        : "text-light-success"
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <NumberCounter
                      value={stat.number}
                      suffix={stat.suffix}
                      className={
                        mode === "dark"
                          ? "text-dark-success"
                          : "text-light-success"
                      }
                    />
                  </motion.div>
                </ShimmerEffect>
                <p
                  className={`text-sm md:text-base mt-1 ${
                    mode === "dark"
                      ? "text-dark-text-main/70"
                      : "text-light-text-main/70"
                  }`}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Heading */}
          <TextReveal delay={0.2}>
            <h1
              className={`text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-6 ${
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
                سلام
              </GradientText>
            </h1>
          </TextReveal>

          {/* Subtitle */}
          <TextReveal delay={0.4}>
            <p
              className={`text-lg md:text-xl lg:text-2xl mb-8 ${
                mode === "dark"
                  ? "text-dark-text-main/70"
                  : "text-light-text-main/70"
              }`}
            >
              — من امیرحسین کیماسی هستم، یک فرانت دولوپر و طراح رابط کاربری
            </p>
          </TextReveal>

          {/* Description */}
          <TextReveal delay={0.6}>
            <p
              className={`text-base md:text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed ${
                mode === "dark" ? "text-dark-text-main" : "text-light-text-main"
              }`}
            >
              من یا مسئولیتی رو نمی‌پذیرم یا اگه بپذیرم به بهترین شکل ممکن
              انجامش میدم. وقتی با من کار کنید همیشه مطمئن هستید که پروژه‌ها با
              بهترین کیفیت و در زمان مقرر انجام میشن.
            </p>
          </TextReveal>

          {/* CTA Button */}
          <TextReveal delay={0.8}>
            <div className="flex flex-col items-start gap-4">
              <Link href="/connect" prefetch={true}>
                <MagneticButton strength={0.2}>
                  <motion.div
                    className={`
                      flex items-center gap-2 px-6 py-3 rounded-full text-base md:text-lg font-medium
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
                    <span>شروع یک همکاری خاطره‌انگیز</span>
                    <MdExpandMore className="text-xl" />
                  </motion.div>
                </MagneticButton>
              </Link>
              <SocialMediaIcons textAlign="left" />
            </div>
          </TextReveal>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-0 hidden md:flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <span
              className={`text-xs ${
                mode === "dark"
                  ? "text-dark-text-main/50"
                  : "text-light-text-main/50"
              }`}
            >
              اسکرول کنید
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <MdArrowDownward
                className={`text-xl ${
                  mode === "dark"
                    ? "text-dark-text-main/50"
                    : "text-light-text-main/50"
                }`}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          style={{ y: imageY, opacity: imageOpacity }}
          className="absolute md:relative bottom-0 right-0 flex items-end justify-end md:w-1/2 lg:w-2/5 pointer-events-none z-0"
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Glow Effect */}
            <motion.div
              className={`absolute inset-0 rounded-full blur-3xl opacity-30 ${
                mode === "dark" ? "bg-dark-success" : "bg-light-success"
              }`}
              style={{
                transform: "scale(1.3)",
              }}
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
              alt="Profile"
              width={600}
              height={600}
              className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full object-cover relative z-10 shadow-2xl"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll-based Sections */}
      <ScrollSections mode={mode} />
    </div>
  );
}

function ScrollSections({ mode }: { mode: "light" | "dark" }) {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress: scroll1 } = useScroll({
    target: section1Ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scroll2 } = useScroll({
    target: section2Ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scroll3 } = useScroll({
    target: section3Ref,
    offset: ["start end", "end start"],
  });

  const opacity1 = useTransform(scroll1, [0, 0.5, 1], [0, 1, 0]);
  const opacity2 = useTransform(scroll2, [0, 0.5, 1], [0, 1, 0]);
  const opacity3 = useTransform(scroll3, [0, 0.5, 1], [0, 1, 0]);

  const y1 = useTransform(scroll1, [0, 1], [100, -100]);
  const y2 = useTransform(scroll2, [0, 1], [-100, 100]);
  const y3 = useTransform(scroll3, [0, 1], [100, -100]);

  return (
    <>
      {/* Section 1 - Services */}
      <motion.section
        ref={section1Ref}
        style={{ opacity: opacity1, y: y1 }}
        className={`py-32 px-4 md:px-8 ${
          mode === "dark" ? "bg-dark-primary-dark" : "bg-gray-50"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <TextReveal delay={0.2}>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
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
                خدمات من
              </GradientText>
            </h2>
          </TextReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCode className="text-5xl" />,
                title: "توسعه Frontend",
                description: "توسعه رابط کاربری با React و Next.js",
              },
              {
                icon: <FaRocket className="text-5xl" />,
                title: "بهینه‌سازی Performance",
                description: "بهینه‌سازی سرعت و کارایی وبسایت",
              },
              {
                icon: <FaCode className="text-5xl" />,
                title: "طراحی UI/UX",
                description: "طراحی رابط کاربری مدرن و کاربرپسند",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
                className={`
                  p-8 rounded-2xl text-center relative overflow-hidden
                  ${
                    mode === "dark"
                      ? "bg-dark-primary-main"
                      : "bg-white shadow-lg"
                  }
                `}
              >
                <ShimmerOverlay />
                <div
                  className={`mb-4 ${
                    mode === "dark" ? "text-dark-success" : "text-light-success"
                  }`}
                >
                  {service.icon}
                </div>
                <h3
                  className={`text-xl font-bold mb-2 ${
                    mode === "dark"
                      ? "text-dark-text-main"
                      : "text-light-text-main"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`${
                    mode === "dark"
                      ? "text-dark-text-main/70"
                      : "text-light-text-main/70"
                  }`}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 2 - About */}
      <motion.section
        ref={section2Ref}
        style={{ opacity: opacity2, y: y2 }}
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
                className={`text-lg leading-relaxed ${
                  mode === "dark"
                    ? "text-dark-text-main/70"
                    : "text-light-text-main/70"
                }`}
              >
                من یک فرانت دولوپر با تجربه در توسعه وبسایت‌های مدرن و بهینه
                هستم. تخصص من در React، Next.js و TypeScript است و همیشه به
                کیفیت کد و تجربه کاربری عالی اهمیت می‌دهم.
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
                className={`w-full h-64 md:h-96 rounded-2xl ${
                  mode === "dark" ? "bg-dark-success/20" : "bg-light-success/20"
                }`}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 3 - CTA */}
      <motion.section
        ref={section3Ref}
        style={{ opacity: opacity3, y: y3 }}
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
                    px-8 py-4 rounded-full text-lg font-medium
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
    </>
  );
}
