"use client";

import { useMemo, memo } from "react";
import { useApp } from "@/lib/context/app-context";
import { PremiumBackground } from "@/components/animations/premium-background";
import {
  HeroSection,
  VerticalText,
  SkillsSection,
  ResumeSection,
  ProjectsSection,
  ContactSection,
  ScrollIndicator,
} from "./home";

export const HomePage = memo(function HomePage() {
  const { mode } = useApp();

  const containerClassName = useMemo(
    () =>
      `min-h-screen flex flex-col relative overflow-x-hidden ${
        mode === "dark" ? "bg-dark-primary-main" : "bg-light-primary-main"
      }`,
    [mode],
  );

  return (
    <div className={containerClassName}>
      {/* Premium Animated Background */}
      <PremiumBackground />

      {/* Vertical Text - Left Side */}
      <VerticalText />

      {/* Main Hero Section */}
      <div className="relative z-10">
        <HeroSection />
      </div>

      {/* Scroll Indicator - Fixed at bottom center of viewport */}
      {/* در موبایل بعد از تصویر پروفایل نمایش داده می‌شود */}
      <ScrollIndicator />

      {/* Scroll-based Sections */}
      <SkillsSection />
      <ResumeSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
});
