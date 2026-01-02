"use client";

import { useState, useRef, useEffect, useMemo, useCallback, memo } from "react";
import toast from "react-hot-toast";
import { useApp } from "@/lib/context/app-context";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SpotlightCard } from "@/components/animations/list";
import { ShimmerOverlay } from "@/components/animations/shimmer-overlay";
import { TextReveal } from "@/components/animations/text-reveal";
import { CustomDivider } from "@/components/common/custom-divider";
import { AutoRotate, AutoPulse, AutoBounce } from "@/components/animations";
import {
  FaEnvelope,
  FaTelegram,
  FaLinkedin,
  FaPhone,
  FaGithub,
  FaGlobe,
  FaCopy,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

const contactData = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "amirhosein.kiemasi@gmail.com",
    href: "mailto:amirhosein.kiemasi@gmail.com",
    animation: "rotate" as const,
  },
  {
    icon: <FaTelegram />,
    label: "Telegram",
    value: "@amir1_1",
    href: "https://telegram.im/@amir1_1",
    animation: "pulse" as const,
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "amirhossein-keimasi",
    href: "https://www.linkedin.com/in/amirhossein-keimasi",
    animation: "bounce" as const,
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+98 933 378 8421",
    href: "tel:+989333788421",
    animation: "rotate" as const,
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "amirhosein-keimasi",
    href: "https://github.com/amirhosein-keimasi",
    animation: "pulse" as const,
  },
  {
    icon: <FaGlobe />,
    label: "Website",
    value: "www.amirhoseinkeimasi.ir",
    href: "https://www.amirhoseinkeimasi.ir",
    animation: "bounce" as const,
  },
];

export const ContactSection = memo(function ContactSection() {
  const { mode } = useApp();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
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

  const textColor = useMemo(
    () => mode === "dark" ? "text-dark-text-main" : "text-light-text-main",
    [mode]
  );
  const cardBg = useMemo(
    () => mode === "dark" ? "bg-dark-primary-dark/80" : "bg-white/80",
    [mode]
  );
  const gridColor = useMemo(
    () => mode === "dark" ? "#eab308" : "#facc15",
    [mode]
  );

  const handleCopy = useCallback(async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("کپی شد!");
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (error) {
      toast.error("خطا در کپی کردن");
    }
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, y }}
      className={`py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 relative ${
        mode === "dark" ? "bg-dark-primary-main" : "bg-light-primary-main"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <TextReveal delay={0.2}>
          <div className="mb-8 sm:mb-10 md:mb-12">
            <CustomDivider
              bColor={
                mode === "dark"
                  ? "border-dark-text-main"
                  : "border-light-text-main"
              }
              cColor="warning"
              icon={<FaPaperPlane />}
              align="center"
              text="تماس با من"
            />
          </div>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {contactData.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <SpotlightCard>
                <motion.div
                  className={`
                      ${cardBg}
                      relative overflow-hidden
                      rounded-2xl
                      p-4 sm:p-5 md:p-6
                      shadow-lg
                      group
                      transition-all duration-300
                      backdrop-blur-sm
                    `}
                  whileHover={{
                    scale: 1.02,
                    y: -4,
                    transition: { duration: 0.3 },
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {/* Background Pattern */}
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: `
                        linear-gradient(${gridColor} 1px, transparent 1px),
                        linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
                      `,
                      backgroundSize: "30px 30px",
                    }}
                  />

                  <ShimmerOverlay />

                  {/* Icon */}
                  <div className="relative z-10 mb-3 sm:mb-4 flex items-center justify-between">
                    <motion.div
                      className={`
                        w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl
                        ${
                          mode === "dark"
                            ? "bg-dark-success/20 text-dark-success"
                            : "bg-light-success/20 text-light-success"
                        }
                      `}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.animation === "rotate" ? (
                        <AutoRotate duration={20} delay={index * 0.5}>
                          {item.icon}
                        </AutoRotate>
                      ) : item.animation === "pulse" ? (
                        <AutoPulse duration={2} delay={index * 0.2}>
                          {item.icon}
                        </AutoPulse>
                      ) : (
                        <AutoBounce duration={1.5} delay={index * 0.3}>
                          {item.icon}
                        </AutoBounce>
                      )}
                    </motion.div>
                    <motion.button
                      onClick={() => handleCopy(item.value, index)}
                      className={`
                        p-2 rounded-lg
                        ${
                          mode === "dark"
                            ? "bg-dark-primary-main text-dark-text-main/70 hover:bg-dark-primary-dark"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }
                        transition-all duration-200
                      `}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {copiedIndex === index ? (
                        <FaCheckCircle className="text-green-500" />
                      ) : (
                        <FaCopy />
                      )}
                    </motion.button>
                  </div>

                  {/* Label */}
                  <h3
                    className={`text-sm font-semibold mb-2 relative z-10 ${
                      mode === "dark"
                        ? "text-dark-text-main/70"
                        : "text-light-text-main/70"
                    }`}
                  >
                    {item.label}
                  </h3>

                  {/* Value */}
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      text-base font-medium block relative z-10
                      ${
                        mode === "dark"
                          ? "text-dark-success hover:text-dark-success/80"
                          : "text-light-success hover:text-light-success/80"
                      }
                      transition-colors duration-200
                    `}
                  >
                    {item.value}
                  </a>
                </motion.div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </motion.section>
  );
});

