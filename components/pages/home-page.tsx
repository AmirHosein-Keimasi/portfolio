"use client";

import { Suspense, lazy } from "react";
import dynamic from "next/dynamic";
import { useApp } from "@/lib/context/app-context";
import { SocialMediaIcons } from "@/components/social-media-icons";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { FloatingElement } from "@/components/animations/floating-elements";
import { TypingAnimation } from "@/components/animations/typing-animation";

// Lazy load ContactCard فقط وقتی نیاز باشد
const ContactCard = dynamic(
  () => import("./contact-card").then((mod) => ({ default: mod.ContactCard })),
  {
    ssr: false,
  },
);

export function HomePage() {
  const { mode } = useApp();

  return (
    <div
      className={`min-h-screen flex flex-col ${mode === "dark" ? "bg-dark-primary-main" : "bg-light-primary-main"}`}
    >
      <div className="flex-1 flex flex-col md:flex-row relative px-4 md:px-8 py-8 md:py-12">
        {/* محتوای اصلی در سمت چپ */}
        <div className="flex-1 flex flex-col justify-center md:justify-start md:pt-20 z-10">
          <ScrollReveal direction="right" delay={0.2}>
            <h5
              className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-right ${mode === "dark" ? "text-dark-text-main" : "text-light-text-main"}`}
            >
              کیفیتی که شما را{" "}
              <span
                className={`${mode === "dark" ? "text-dark-success" : "text-light-success"} font-bold`}
              >
                شگفت‌زده
              </span>{" "}
              خواهد کرد
            </h5>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.4}>
            <p
              className={`text-base md:text-lg lg:text-xl my-6 leading-relaxed text-right ${mode === "dark" ? "text-dark-text-main" : "text-light-text-main"}`}
            >
              من یا مسئولیتی رو نمی‌پذیرم یا اگه بپذیرم به بهترین شکل ممکن انجامش
              میدم. وقتی با من کار کنید همیشه مطمئن هستید که پروژه‌ها با بهترین
              کیفیت و در زمان مقرر انجام میشن.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.6}>
            <div className="flex flex-col items-end gap-4 mt-6">
              <Link
                href="/connect"
                prefetch={true}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full text-base md:text-lg font-medium
                  transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                  ${
                    mode === "dark"
                      ? "bg-dark-success text-dark-text-main hover:bg-dark-success/90"
                      : "bg-light-success text-light-text-main hover:bg-light-success/90"
                  }
                `}
              >
                <span>شروع یک همکاری خاطره‌انگیز</span>
                <MdExpandMore className="text-xl animate-bounce" />
              </Link>
              <SocialMediaIcons textAlign="right" />
            </div>
          </ScrollReveal>
        </div>

        {/* تصویر در پایین سمت راست */}
        <div className="absolute bottom-0 right-0 md:absolute md:bottom-0 md:right-0 flex items-end justify-end md:w-1/3 lg:w-2/5 pointer-events-none z-10">
          <ScrollReveal direction="left" delay={0.8}>
            <FloatingElement delay={1} duration={4}>
              <div className="relative">
                <div
                  className={`absolute inset-0 rounded-full blur-3xl opacity-30 ${
                    mode === "dark" ? "bg-dark-success" : "bg-light-success"
                  }`}
                  style={{
                    transform: "scale(1.2)",
                  }}
                />
                <Image
                  src="/assets/1.png"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="w-[180px] h-[180px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full object-cover relative z-10"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </FloatingElement>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
