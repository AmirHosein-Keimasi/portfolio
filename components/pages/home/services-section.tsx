"use client";

import { useRef, useEffect, useState, useMemo, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCode, FaRocket, FaPalette } from "react-icons/fa";
import { useApp } from "@/lib/context/app-context";
import { GradientText } from "@/components/animations/gradient-text";
import { TextReveal } from "@/components/animations/text-reveal";
import { ShimmerOverlay } from "@/components/animations/shimmer-overlay";

const services = [
  {
    icon: FaCode,
    title: "توسعه Frontend",
    description: "توسعه رابط کاربری مدرن با React و Next.js",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    icon: FaRocket,
    title: "بهینه‌سازی Performance",
    description: "بهینه‌سازی سرعت و کارایی وبسایت",
    gradient: "from-purple-400 to-purple-600",
  },
  {
    icon: FaPalette,
    title: "طراحی UI/UX",
    description: "طراحی رابط کاربری مدرن و کاربرپسند",
    gradient: "from-pink-400 to-pink-600",
  },
] as const;

interface ServiceCardProps {
  service: (typeof services)[number];
  index: number;
  mode: "dark" | "light";
}

const ServiceCard = memo(function ServiceCard({
  service,
  index,
  mode,
}: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className={`
        p-8 rounded-2xl text-center relative overflow-hidden group
        ${
          mode === "dark"
            ? "bg-dark-primary-main border border-dark-primary-dark"
            : "bg-white shadow-lg border border-gray-100"
        }
        transition-all duration-300
      `}
    >
      <ShimmerOverlay />
      <motion.div
        className={`mb-4 inline-block ${
          mode === "dark" ? "text-dark-success" : "text-light-success"
        }`}
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="text-5xl" />
      </motion.div>
      <h3
        className={`text-xl font-bold mb-3 ${
          mode === "dark" ? "text-dark-text-main" : "text-light-text-main"
        }`}
      >
        {service.title}
      </h3>
      <p
        className={`${
          mode === "dark" ? "text-dark-text-main/70" : "text-light-text-main/70"
        }`}
      >
        {service.description}
      </p>
    </motion.div>
  );
});

ServiceCard.displayName = "ServiceCard";

export const ServicesSection = memo(function ServicesSection() {
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

  const sectionClassName = useMemo(
    () =>
      `py-32 px-4 md:px-8 relative ${
        mode === "dark" ? "bg-dark-primary-dark" : "bg-gray-50"
      }`,
    [mode],
  );

  const headingClassName = useMemo(
    () =>
      `text-4xl md:text-5xl font-bold mb-12 text-center ${
        mode === "dark" ? "text-dark-text-main" : "text-light-text-main"
      }`,
    [mode],
  );

  const gradient = useMemo(
    () =>
      mode === "dark"
        ? "from-green-400 via-green-500 to-green-600"
        : "from-green-500 via-green-600 to-green-700",
    [mode],
  );

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, y }}
      className={sectionClassName}
    >
      <div className="max-w-7xl mx-auto">
        <TextReveal delay={0.2}>
          <h2 className={headingClassName}>
            <GradientText gradient={gradient}>خدمات من</GradientText>
          </h2>
        </TextReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={`${service.title}-${index}`}
              service={service}
              index={index}
              mode={mode}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
});
