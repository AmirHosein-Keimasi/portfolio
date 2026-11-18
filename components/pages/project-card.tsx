"use client";

import { memo } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub, FaCheck, FaCode } from "react-icons/fa";
import type { ProjectItem } from "@/types";

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard = memo(function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="group h-full flex flex-col rounded-2xl overflow-hidden bg-white/90 dark:bg-[#0e1526]/90 border border-slate-200/80 dark:border-white/10 shadow-sm hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
      {/* Visual Preview */}
      <div className="relative w-full h-48 overflow-hidden bg-slate-900">
        {project.imgSrc ? (
          <>
            <Image
              src={project.imgSrc}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
          </>
        ) : (
          <div
            className={`relative w-full h-full bg-gradient-to-br ${project.accentGradient} p-5 flex flex-col justify-between`}
          >
            {/* Subtle decorative browser bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5" dir="ltr">
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
              </div>
              <FaCode className="text-white/60 text-lg" aria-hidden="true" />
            </div>
            <div className="bg-slate-950/25 backdrop-blur-md rounded-xl p-3 border border-white/20">
              <p className="text-white font-bold text-base truncate">
                {project.title}
              </p>
              <p className="text-white/80 text-xs mt-0.5 truncate">
                {project.subtitle}
              </p>
            </div>
          </div>
        )}

        {/* Top badge */}
        <div className="absolute top-3 right-3 left-3 flex items-center justify-between gap-2 pointer-events-none">
          {project.year && (
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-950/70 text-white backdrop-blur-md border border-white/15">
              {project.year}
            </span>
          )}
          {project.category === "production" && (
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/90 text-white backdrop-blur-md">
              Production
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col p-5 sm:p-6">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key features */}
        {project.features.length > 0 && (
          <ul className="space-y-1.5 mb-5">
            {project.features.map((feat, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400"
              >
                <FaCheck
                  className="text-emerald-500 mt-0.5 shrink-0 text-[10px]"
                  aria-hidden="true"
                />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              dir="ltr"
              className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2.5 pt-4 border-t border-slate-200/70 dark:border-white/10">
          {project.websiteLink && (
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm shadow-emerald-600/20 transition-colors"
            >
              <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
              <span>مشاهده آنلاین</span>
            </a>
          )}
          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                project.websiteLink ? "flex-1" : "w-full"
              } inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl text-xs sm:text-sm font-semibold border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors`}
            >
              <FaGithub className="text-sm" aria-hidden="true" />
              <span>کد منبع</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
});
