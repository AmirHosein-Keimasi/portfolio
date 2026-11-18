import { SKILL_CATEGORIES, TECHNICAL_SKILLS } from "@/lib/data/portfolio";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Skill } from "./skill";

export function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
      {SKILL_CATEGORIES.map((category, index) => {
        const items = TECHNICAL_SKILLS.filter(
          (skill) => skill.category === category.id
        );

        return (
          <ScrollReveal key={category.id} delay={index * 0.06} direction="up">
            <div className="h-full rounded-2xl p-6 bg-white/85 dark:bg-[#0e1526]/85 border border-slate-200/80 dark:border-white/10 shadow-sm hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 backdrop-blur-sm">
              <div className="pb-3 mb-3 border-b border-slate-200/70 dark:border-white/10">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
                <p
                  className="text-xs text-slate-500 dark:text-slate-400 mt-0.5"
                  dir="ltr"
                >
                  {category.subtitle}
                </p>
              </div>

              <div className="divide-y divide-slate-100 dark:divide-white/5">
                {items.map((skill) => (
                  <Skill
                    key={skill.id}
                    name={skill.name}
                    iconKey={skill.iconKey}
                    value={skill.level}
                    featured={skill.featured}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
