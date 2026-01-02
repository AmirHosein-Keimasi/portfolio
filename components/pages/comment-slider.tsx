"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { projects } from "@/lib/constants/dev-skills";
import { useApp } from "@/lib/context/app-context";
import Image from "next/image";
import { motion } from "framer-motion";

// Dynamic import برای react-slick
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100"></div>
    </div>
  ),
});

export function CommentSlider() {
  const { mode } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  const textColor =
    mode === "dark" ? "text-dark-text-main" : "text-light-text-main";
  const textSecondary = mode === "dark" ? "text-gray-400" : "text-gray-600";
  const buttonColor =
    mode === "dark"
      ? "bg-dark-success hover:bg-dark-success/90"
      : "bg-light-success hover:bg-light-success/90";

  const options = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    lazyLoad: "ondemand" as const,
    beforeChange: (_current: number, next: number) => {
      setCurrentSlide(next);
    },
  };

  return (
    <div className="relative">
      <Slider {...options}>
        {projects.map((project, index) => (
          <div key={index}>
            <motion.div
              key={`${index}-${currentSlide}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.25, 0, 1],
              }}
              className="flex flex-col text-center md:text-right p-4 md:p-15"
            >
              {/* Header Section */}
              <motion.h2
                className="text-2xl md:text-4xl font-bold mb-4 relative inline-block"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                {project.websiteLink ? (
                  <motion.a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-inherit relative hover:after:w-full after:content-[''] after:block after:w-0 after:h-0.5 after:bg-gray-500 after:transition-all after:duration-300 after:absolute after:bottom-[-2px] after:left-0"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {project.title}
                  </motion.a>
                ) : (
                  <span>{project.title}</span>
                )}
              </motion.h2>

              {/* Content Section */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                {project.imgSrc && (
                  <motion.div
                    className="col-span-12 md:col-span-6"
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <Image
                        src={project.imgSrc}
                        alt={`${project.title} - Devices Showcase`}
                        width={700}
                        height={400}
                        className="w-full max-w-[700px] mx-auto rounded-lg shadow-lg"
                        loading="lazy"
                      />
                      <motion.div
                        className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </motion.div>
                )}
                <motion.div
                  className={`col-span-12 ${project.imgSrc ? "md:col-span-6" : "md:col-span-12"}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <motion.p
                    className={`leading-relaxed ${textSecondary} mb-2 text-center md:text-right`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <p
                      className={`leading-relaxed ${textSecondary} text-center md:text-right mb-1 font-semibold`}
                    >
                      تکنولوژی‌ها:
                    </p>
                    <p
                      className={`leading-relaxed ${textSecondary} text-center md:text-right mb-4`}
                    >
                      {project.technologies}
                    </p>
                    <p
                      className={`leading-relaxed ${textSecondary} text-center md:text-right mb-1 font-semibold`}
                    >
                      ویژگی‌ها:
                    </p>
                    <p
                      className={`leading-relaxed ${textSecondary} text-center md:text-right mb-4`}
                    >
                      {project.features}
                    </p>
                  </motion.div>
                  {/* Buttons Section */}
                  <motion.div
                    className="mt-4 flex justify-center md:justify-end gap-2 flex-wrap"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    {project.websiteLink && (
                      <motion.a
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          ${buttonColor}
                          text-white font-medium py-2 px-6 rounded-full
                          text-sm md:text-base
                          transition-colors duration-200
                          no-underline
                          shadow-md
                        `}
                        whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        مشاهده وبسایت
                      </motion.a>
                    )}
                    <motion.a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        ${buttonColor}
                        text-white font-medium py-2 px-6 rounded-full
                        text-sm md:text-base
                        transition-colors duration-200
                        no-underline
                        shadow-md
                      `}
                      whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      مشاهده کد
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>

              {/* Icons Section */}
              <motion.div
                className="flex justify-center md:justify-end mt-6 gap-2 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                {project.icons.map((icon, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.8 + idx * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    whileHover={{ scale: 1.3, rotate: 360, zIndex: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative"
                  >
                    <Image
                      src={icon}
                      alt={`${project.title} - Technology Icon ${idx + 1}`}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover shadow-md"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
