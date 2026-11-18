"use client";

import { memo } from "react";
import { PremiumBackground } from "@/components/animations/premium-background";
import {
  HeroSection,
  SkillsSection,
  ResumeSection,
  ProjectsSection,
  EducationSection,
  ContactSection,
} from "./home";

export const HomePage = memo(function HomePage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <PremiumBackground />
      <main className="relative z-10 flex-1">
        <HeroSection />
        <SkillsSection />
        <ResumeSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
});
