"use client";

import { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { CustomDivider } from "@/components/common/custom-divider";
import { FormContact } from "./form-contact";
import { SocialMediaIcons } from "@/components/social-media-icons";
import { useApp } from "@/lib/context/app-context";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export function Contact() {
  const { mode } = useApp();
  const bgColor = mode === "dark" ? "bg-dark-primary-main" : "bg-light-primary-main";
  const textColor = mode === "dark" ? "text-dark-text-main" : "text-light-text-main";
  const borderColor = mode === "dark" ? "border-dark-text-main" : "border-light-text-main";
  
  const formRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const sidebarInView = useInView(sidebarRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const formY = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const sidebarY = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  const formOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const sidebarOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <div ref={containerRef} className={`min-h-screen ${bgColor} flex flex-col`}>
      <div className="p-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <CustomDivider
            bColor={borderColor}
            cColor="warning"
            icon={<FaUserCircle />}
            align="center"
            text="ارتباط با من "
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
          {/* فرم تماس */}
          <motion.div
            ref={formRef}
            style={{ y: formY, opacity: formOpacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.25, 0, 1],
            }}
            className="col-span-12 md:col-span-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center items-center"
            >
              <FormContact />
            </motion.div>
          </motion.div>

          {/* بخش سمت راست */}
          <motion.div
            ref={sidebarRef}
            style={{ y: sidebarY, opacity: sidebarOpacity }}
            initial={{ opacity: 0, x: 50 }}
            animate={sidebarInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.25, 0, 1],
            }}
            className="col-span-0 md:col-span-4"
          >
            <motion.div
              className="text-center bg-cover bg-center bg-no-repeat mt-5 p-6 rounded-2xl"
              style={{
                backgroundImage: `url(/assets/map.svg)`,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: mode === "dark" 
                  ? "0 20px 40px rgba(54, 114, 117, 0.3)" 
                  : "0 20px 40px rgba(147, 191, 207, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h6
                className={`${textColor} font-vazir mt-2 hidden md:block text-lg mb-4`}
                initial={{ opacity: 0, y: 20 }}
                animate={sidebarInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                بیا در مورد همه چیز باهم صحبت کنیم
              </motion.h6>
              <motion.p
                className={`${textColor} mt-2 hidden md:block mb-6`}
                initial={{ opacity: 0, y: 20 }}
                animate={sidebarInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.span
                  animate={{ rotate: [0, 14, -8, 14, -8, 0] }}
                  transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 3 }}
                  className="inline-block text-2xl"
                >
                  👋
                </motion.span>
                {" "}
                <motion.a
                  href="mailto:amirhosein.kiemasi@gmail.com"
                  className="text-red-500 hover:underline font-medium"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ایمیل
                </motion.a>
                {" "}
                بزن به من
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={sidebarInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <SocialMediaIcons textAlign="center" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
