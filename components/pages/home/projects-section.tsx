import Link from "next/link";
import { FaLaptopCode, FaArrowLeft } from "react-icons/fa";
import { PROJECTS } from "@/lib/data/portfolio";
import { SectionHeader } from "@/components/common/section-header";
import { ProjectsGrid } from "./projects-grid";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 scroll-mt-20 md:scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/70 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="نمونه کارها"
          title="پروژه‌های منتخب"
          subtitle="منتخبی از محصولات واقعی و پروژه‌های شخصی پیاده‌سازی‌شده با Next.js، React و TypeScript."
          icon={<FaLaptopCode />}
        />

        <ProjectsGrid initialProjects={PROJECTS} />

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
}
