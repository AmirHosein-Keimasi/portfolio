import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";

export interface TabRoute {
  label: string;
  icon: React.ReactNode;
  href: string;
}

export const tabsData = (): TabRoute[] => [
  { label: "صفحه اصلی", icon: <FaHome />, href: "/" },
  { label: "درباره من", icon: <FaUser />, href: "/about" },
  { label: "رزومه", icon: <FaFileAlt />, href: "/resume" },
  { label: "پروژه‌ها", icon: <FaCode />, href: "/projects" },
  { label: "تماس با من", icon: <FaEnvelope />, href: "/contact" },
];
