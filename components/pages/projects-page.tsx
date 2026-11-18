"use client";

import { useState, useMemo } from "react";
import { FaCode } from "react-icons/fa";
import { PROJECTS } from "@/lib/data/portfolio";
import type { ProjectCategory } from "@/types";
import { PremiumBackground } from "@/components/animations/premium-background";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionHeader } from "@/components/common/section-header";
import { ProjectCard } from "./project-card";

const FILTERS: Array<{ id: ProjectCategory; label: string }> = [
  { id: "all", label: "همه پروژه‌ها" },
  { id: "production", label: "محصولات Production" },
  { id: "nextjs", label: "Next.js" },
  { id: "react", label: "React" },
];

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen relative py-12 sm:py-16 md:py-20">
      <PremiumBackground />
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="نمونه کارها و پروژه‌ها"
          title="پروژه‌های توسعه‌داده‌شده"
          subtitle="مجموعه‌ای از محصولات واقعی در محیط Production و پروژه‌های متن‌باز پیاده‌سازی‌شده با Next.js، React و TypeScript."
          icon={<FaCode />}
        />

        {/* Category Filter */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          role="tablist"
          aria-label="فیلتر دسته‌بندی پروژه‌ها"
        >
          {FILTERS.map((filter) => {
            const active = activeCategory === filter.id;
            const count =
              filter.id === "all"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === filter.id).length;

            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveCategory(filter.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  active
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "bg-white/85 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 hover:border-emerald-500/40"
                }`}
              >
                <span>{filter.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-md ${
                    active
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.06} direction="up">
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </main>
    </div>
  );
}
