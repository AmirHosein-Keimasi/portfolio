"use client";

import { useState, useMemo, memo } from "react";
import Link from "next/link";
import { FaLaptopCode, FaArrowLeft } from "react-icons/fa";
import { PROJECTS } from "@/lib/data/portfolio";
import type { ProjectCategory } from "@/types";
import { SectionHeader } from "@/components/common/section-header";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ProjectCard } from "@/components/pages/project-card";

const FILTERS: Array<{ id: ProjectCategory; label: string }> = [
  { id: "all", label: "همه پروژه‌ها" },
  { id: "production", label: "محصولات Production" },
  { id: "nextjs", label: "Next.js" },
  { id: "react", label: "React" },
];

export const ProjectsSection = memo(function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects = useMemo(() => {
    const base =
      activeCategory === "all"
        ? PROJECTS.filter((p) => p.featured)
        : PROJECTS.filter((p) => p.category === activeCategory);
    return base.slice(0, 6);
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/70 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="نمونه کارها"
          title="پروژه‌های منتخب"
          subtitle="منتخبی از محصولات واقعی و پروژه‌های شخصی پیاده‌سازی‌شده با Next.js، React و TypeScript."
          icon={<FaLaptopCode />}
        />

        {/* Category Filter Tabs */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          role="tablist"
          aria-label="فیلتر پروژه‌ها"
        >
          {FILTERS.map((filter) => {
            const active = activeCategory === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveCategory(filter.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  active
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "bg-white/80 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 hover:border-emerald-500/40"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.07} direction="up">
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:border-emerald-500/60 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
          >
            <span>مشاهده تمام پروژه‌ها ({PROJECTS.length} پروژه)</span>
            <FaArrowLeft className="text-xs" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
});
