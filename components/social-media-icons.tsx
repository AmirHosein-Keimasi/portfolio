"use client";

import { useMemo } from "react";
import {
  FaGithub,
  FaTelegram,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { useApp } from "@/lib/context/app-context";

interface SocialMediaIconsProps {
  textAlign?: "left" | "right" | "center";
}

const socialLinks = [
  {
    href: "https://github.com/amirhosein-keimasi",
    label: "Github",
    icon: FaGithub,
  },
  {
    href: "https://www.instagram.com/amir_v13",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://telegram.im/@amir1_1",
    label: "Telegram",
    icon: FaTelegram,
  },
  {
    href: "https://telegram.im/@amir1_1",
    label: "WhatsApp",
    icon: FaWhatsapp,
  },
  {
    href: "https://www.linkedin.com/in/amirhossein-keimasi",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
];

export function SocialMediaIcons({ textAlign = "center" }: SocialMediaIconsProps) {
  const { mode } = useApp();
  
  const colors = useMemo(
    () => ({
      text: mode === "dark" ? "text-dark-text-main" : "text-light-text-main",
      hover: mode === "dark" ? "hover:text-dark-success" : "hover:text-light-success",
    }),
    [mode]
  );

  const alignClass = useMemo(
    () =>
      textAlign === "right"
        ? "text-right"
        : textAlign === "left"
        ? "text-left"
        : "text-center",
    [textAlign]
  );

  return (
    <div className={`mt-10 ${alignClass}`} role="list" aria-label="Social media links">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block p-2 ${colors.text} ${colors.hover} transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-full`}
            aria-label={`Visit ${link.label} profile`}
          >
            <Icon className="text-2xl" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
