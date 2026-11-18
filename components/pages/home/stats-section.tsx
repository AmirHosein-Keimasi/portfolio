import { HERO_STATS } from "@/lib/data/portfolio";
import { NumberCounter } from "@/components/animations/number-counter";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function StatsSection() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 mt-12">
      {HERO_STATS.map((stat, index) => (
        <ScrollReveal key={stat.label} delay={index * 0.08} direction="up">
          <div className="h-full rounded-2xl p-5 bg-white/85 dark:bg-[#0e1526]/85 border border-slate-200/80 dark:border-white/10 shadow-sm hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-l from-emerald-500 via-teal-400 to-sky-500 bg-clip-text text-transparent">
              <NumberCounter
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
            </div>
            <p className="mt-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 leading-snug">
              {stat.label}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
