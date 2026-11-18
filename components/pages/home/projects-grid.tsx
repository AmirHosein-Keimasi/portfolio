"use client";

import { useState, useMemo } from "react";
import type { ProjectItem, ProjectCategory } from "@/types";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ProjectCard } from "@/components/pages/project-card";

const FILTERS: Array<{ id: ProjectCategory; label: string }> = [
  { id: "all", label: "همه پروژه‌ها" },
  { id: "production", label: "محصولات Production" },
  { id: "nextjs", label: "Next.js" },
  { id: "react", label: "React" },
];

interface ProjectsGridProps {
  initialProjects: ProjectItem[];
}

export function ProjectsGrid({ initialProjects }: ProjectsGridProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects = useMemo(() => {
    return activeCategory === "all"
      ? initialProjects
      : initialProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory, initialProjects]);

  return (
    <>
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
    </>
  );
}
