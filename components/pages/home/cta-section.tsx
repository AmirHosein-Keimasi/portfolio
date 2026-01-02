"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MdExpandMore } from "react-icons/md";
import { useApp } from "@/lib/context/app-context";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { TextReveal } from "@/components/animations/text-reveal";
import { SocialMediaIcons } from "@/components/social-media-icons";

export function CTASection() {
  const { mode } = useApp();

  return (
    <TextReveal delay={0.8}>
      <div className="flex flex-col items-start gap-6">
        <Link href="/connect" prefetch={true}>
          <MagneticButton strength={0.2}>
            <motion.div
              className={`
                flex items-center gap-3 px-8 py-4 rounded-full text-base md:text-lg font-semibold
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
  );
}

