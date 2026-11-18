import {
  FaHome,
  FaTools,
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";

export interface TabRoute {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

export const tabsData = (): TabRoute[] => [
  { id: "hero", label: "صفحه اصلی", icon: <FaHome />, href: "/#hero" },
  { id: "skills", label: "مهارت‌ها", icon: <FaTools />, href: "/#skills" },
  { id: "resume", label: "سوابق کاری", icon: <FaBriefcase />, href: "/#resume" },
  { id: "projects", label: "پروژه‌ها", icon: <FaCode />, href: "/#projects" },
  {
    id: "education",
    label: "تحصیلات و افتخارات",
    icon: <FaGraduationCap />,
    href: "/#education",
  },
  { id: "contact", label: "تماس با من", icon: <FaEnvelope />, href: "/#contact" },
];
