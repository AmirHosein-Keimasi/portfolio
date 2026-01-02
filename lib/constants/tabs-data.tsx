import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaCode,
  FaPhone,
  FaComment,
} from "react-icons/fa";

export interface TabRoute {
  label: string;
  icon: React.ReactNode;
  href: string;
}

export const tabsData = (): TabRoute[] => {
  const tabs: TabRoute[] = [
    { label: "صفحه اصلی", icon: <FaHome />, href: "/" },
    { label: "درباره ی من", icon: <FaUser />, href: "/about" },
    { label: "رزومه ی من", icon: <FaFileAlt />, href: "/resume" },
    { label: "نمونه کار های من", icon: <FaCode />, href: "/projects" },
    { label: "تماس با من", icon: <FaPhone />, href: "/contact" },
    { label: "ارتباط با من", icon: <FaComment />, href: "/connect" },
  ];

  return tabs;
};
