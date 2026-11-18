export type ThemeMode = "light" | "dark";

export interface AppContextType {
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  handelThemeCheng: () => void;
  toggleTheme: () => void;
  mode: ThemeMode;
}

export interface SkillItem {
  id: string;
  name: string;
  level: number;
  category: SkillCategoryId;
  iconKey: string;
  featured?: boolean;
}

export type SkillCategoryId =
  | "core"
  | "frameworks"
  | "state"
  | "styling"
  | "forms"
  | "tooling";

export interface SkillCategory {
  id: SkillCategoryId;
  title: string;
  subtitle: string;
}

export interface ExperienceGroup {
  title: string;
  titleFa: string;
  items: string[];
}

export interface WorkExperience {
  id: string;
  company: string;
  companyEn: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  website?: string;
  summary: string;
  groups?: ExperienceGroup[];
  highlights?: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  major: string;
  institution: string;
  period: string;
  description: string;
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  url?: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  proficiency: number;
}

export type ProjectCategory = "all" | "production" | "nextjs" | "react";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  year?: string;
  category: Exclude<ProjectCategory, "all">;
  featured?: boolean;
  description: string;
  features: string[];
  technologies: string[];
  imgSrc?: string;
  accentGradient: string;
  websiteLink?: string;
  codeLink?: string;
}

export interface ContactChannel {
  id: string;
  label: string;
  labelFa: string;
  value: string;
  copyValue: string;
  href: string;
  iconKey: "email" | "phone" | "linkedin" | "github" | "telegram" | "whatsapp" | "website" | "location";
  isExternal?: boolean;
}
