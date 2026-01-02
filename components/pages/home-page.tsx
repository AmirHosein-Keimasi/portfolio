"use client";

import { useApp } from "@/lib/context/app-context";
import { PremiumBackground } from "@/components/animations/premium-background";
import {
  HeroSection,
  VerticalText,
  ServicesSection,
  AboutSection,
  FinalCTASection,
  ScrollIndicator,
} from "./home";

export function HomePage() {
  const { mode } = useApp();

  return (
    <div
      className={`min-h-screen flex flex-col relative overflow-hidden ${
        mode === "dark" ? "bg-dark-primary-main" : "bg-light-primary-main"
      }`}
    >
      {/* Premium Animated Background */}
      <PremiumBackground />

      {/* Vertical Text - Left Side */}
      <VerticalText />

      {/* Main Hero Section */}
      <div className="relative z-10">
        <HeroSection />
      </div>

      {/* Scroll Indicator - Fixed at bottom center of viewport */}
      <ScrollIndicator />

      {/* Scroll-based Sections */}
      <ServicesSection />
      <AboutSection />
      <FinalCTASection />
    </div>
  );
}
