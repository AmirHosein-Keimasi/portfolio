import {
  FaHome,
  FaUser,
  FaTools,
  FaFileAlt,
  FaCode,
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
  { id: "about", label: "درباره من", icon: <FaUser />, href: "/#about" },
  { id: "skills", label: "مهارت‌ها", icon: <FaTools />, href: "/#skills" },
  { id: "resume", label: "رزومه و سوابق", icon: <FaFileAlt />, href: "/#resume" },
  { id: "projects", label: "پروژه‌ها", icon: <FaCode />, href: "/#projects" },
  { id: "contact", label: "تماس با من", icon: <FaEnvelope />, href: "/#contact" },
];
