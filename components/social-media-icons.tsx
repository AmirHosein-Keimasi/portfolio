import {
  FaGithub,
  FaTelegram,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { PROFILE } from "@/lib/data/portfolio";

interface SocialMediaIconsProps {
  textAlign?: "left" | "right" | "center";
  className?: string;
}

const socialLinks = [
  {
    href: PROFILE.github,
    label: "GitHub",
    icon: FaGithub,
    external: true,
  },
  {
    href: PROFILE.linkedin,
    label: "LinkedIn",
    icon: FaLinkedin,
    external: true,
  },
  {
    href: PROFILE.telegram,
    label: "Telegram",
    icon: FaTelegram,
    external: true,
  },
  {
    href: PROFILE.whatsapp,
    label: "WhatsApp",
    icon: FaWhatsapp,
    external: true,
  },
  {
    href: PROFILE.instagram,
    label: "Instagram",
    icon: FaInstagram,
    external: true,
  },
  {
    href: `mailto:${PROFILE.email}`,
    label: "Email",
    icon: FaEnvelope,
    external: false,
  },
];

export function SocialMediaIcons({
  textAlign = "right",
  className = "",
}: SocialMediaIconsProps) {
  const justifyClass =
    textAlign === "center"
      ? "justify-center"
      : textAlign === "left"
        ? "justify-end"
        : "justify-start";

  return (
    <div
      className={`flex flex-wrap items-center gap-2.5 ${justifyClass} ${className}`}
      role="list"
      aria-label="شبکه‌های اجتماعی"
    >
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            aria-label={link.label}
            title={link.label}
            className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:border-emerald-500/60 hover:text-emerald-600 dark:hover:text-emerald-400 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          >
            <Icon className="text-lg" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
