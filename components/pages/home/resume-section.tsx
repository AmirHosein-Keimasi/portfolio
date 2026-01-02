"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaNetworkWired,
  FaTools,
  FaGraduationCap,
} from "react-icons/fa";
import { CustomDivider } from "@/components/common/custom-divider";
import { DevEduTimeline } from "@/components/pages/dev-edu-timeline";
import { DevExpTimeline } from "@/components/pages/dev-exp-timeline";
import { useApp } from "@/lib/context/app-context";
import { motion, useScroll, useTransform } from "framer-motion";

export function ResumeSection() {
  const [loading, setLoading] = useState(false);
  const { mode } = useApp();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: isMounted ? sectionRef : undefined,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const warningColor =
    mode === "dark" ? "border-dark-warning" : "border-light-warning";

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, y }}
      className={`py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 relative ${
        mode === "dark" ? "bg-dark-primary-main" : "bg-light-primary-main"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <CustomDivider
            bColor={warningColor}
            cColor="warning"
            icon={<FaNetworkWired />}
            align="center"
            text="رزومه من"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* بخش تجربیات */}
          <div className="space-y-4 sm:space-y-6">
            <div className="mb-6 sm:mb-8">
              <CustomDivider
                bColor={warningColor}
                cColor="warning"
                icon={<FaTools />}
                align="center"
                text="تجربیات"
              />
            </div>
            <DevExpTimeline loading={loading} />
          </div>

          {/* بخش تحصیلات */}
          <div className="space-y-4 sm:space-y-6">
            <div className="mb-6 sm:mb-8">
              <CustomDivider
                bColor={warningColor}
                cColor="warning"
                icon={<FaGraduationCap />}
                align="center"
                text="تحصیلات"
              />
            </div>
            <DevEduTimeline loading={loading} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

