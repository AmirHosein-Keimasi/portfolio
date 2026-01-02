"use client";

import { useCallback, useMemo, useRef } from "react";
import {
  FaEnvelope,
  FaTelegram,
  FaLinkedin,
  FaPhone,
  FaGithub,
  FaGlobe,
  FaCopy,
} from "react-icons/fa";
import { CustomDivider } from "@/components/common/custom-divider";
import { useApp } from "@/lib/context/app-context";
import { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import toast from "react-hot-toast";

const contactData = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "amirhosein.kiemasi@gmail.com",
    href: "mailto:amirhosein.kiemasi@gmail.com",
  },
  {
    icon: <FaTelegram />,
    label: "Telegram",
    value: "@amir1_1",
    href: "https://telegram.im/@amir1_1",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "amirhossein-keimasi",
    href: "https://www.linkedin.com/in/amirhossein-keimasi",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+98 933 378 8421",
    href: "tel:+989333788421",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "amirhosein-keimasi",
    href: "https://github.com/amirhosein-keimasi",
  },
  {
    icon: <FaGlobe />,
    label: "Website",
    value: "www.amirhoseinkeimasi.ir",
    href: "https://www.amirhoseinkeimasi.ir",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

export function ContactCard() {
  const { mode } = useApp();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const colors = useMemo(
    () => ({
      border: mode === "dark" ? "border-dark-text-main" : "border-light-text-main",
      warningBg: mode === "dark" ? "bg-dark-warning" : "bg-light-warning",
      icon: mode === "light" ? "text-white" : "",
    }),
    [mode]
  );

  const handleCopy = useCallback(async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${label} کپی شد!`);
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        toast.success(`${label} کپی شد!`);
      } catch (err) {
        toast.error("خطا در کپی کردن");
      }
      document.body.removeChild(textArea);
    }
  }, []);

  const getTextValue = useCallback((value: string | ReactNode): string => {
    if (typeof value === "string") {
      return value;
    }
    return (value as any)?.props?.children || "";
  }, []);

  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <CustomDivider
          bColor={colors.border}
          cColor="warning"
          icon={<FaPhone />}
          align="center"
          text="تماس با من "
        />
      </motion.div>
      <div className="flex justify-center items-center min-h-[70vh] mt-5">
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="p-2.5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-4/5"
        >
          {contactData.map((item, index) => {
            const textValue = getTextValue(item.value);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: mode === "dark"
                    ? "0 10px 30px rgba(54, 114, 117, 0.3)"
                    : "0 10px 30px rgba(147, 191, 207, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex items-center justify-between
                  p-3 rounded-lg shadow-md
                  ${colors.warningBg}
                  cursor-pointer
                  focus-within:ring-2 focus-within:ring-yellow-500
                `}
                role="button"
                tabIndex={0}
                onClick={() => handleCopy(textValue, item.label)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCopy(textValue, item.label);
                  }
                }}
                aria-label={`کپی ${item.label}: ${textValue}`}
              >
                <motion.div
                  className="flex items-center gap-2 flex-1"
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className={colors.icon}
                    aria-hidden="true"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {item.label}
                    </p>
                    {item.href ? (
                      <motion.a
                        href={item.href}
                        onClick={(e) => e.stopPropagation()}
                        className="font-bold text-sm hover:underline"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.value}
                      </motion.a>
                    ) : (
                      <p className="font-bold text-sm">{item.value}</p>
                    )}
                  </div>
                </motion.div>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy(textValue, item.label);
                  }}
                  className="p-2 hover:bg-black/10 rounded-full transition-colors"
                  aria-label={`کپی ${item.label}`}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaCopy className="text-sm" aria-hidden="true" />
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
