"use client";

import { useCallback, useMemo } from "react";
import {
  FaEnvelope,
  FaTelegram,
  FaLinkedin,
  FaPhone,
  FaGithub,
  FaGlobe,
  FaCopy,
} from "react-icons/fa";
import { CustomDivider } from "@/components/common/custom-divider";
import { useApp } from "@/lib/context/app-context";
import { ReactNode } from "react";

const contactData = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "amirhosein.kiemasi@gmail.com",
    href: "mailto:amirhosein.kiemasi@gmail.com",
  },
  {
    icon: <FaTelegram />,
    label: "Telegram",
    value: "@amir1_1",
    href: "https://telegram.im/@amir1_1",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "amirhossein-keimasi",
    href: "https://www.linkedin.com/in/amirhossein-keimasi",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+98 933 378 8421",
    href: "tel:+989333788421",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "amirhosein-keimasi",
    href: "https://github.com/amirhosein-keimasi",
  },
  {
    icon: <FaGlobe />,
    label: "Website",
    value: "www.amirhoseinkeimasi.ir",
    href: "https://www.amirhoseinkeimasi.ir",
  },
];

export function ContactCard() {
  const { mode } = useApp();

  const colors = useMemo(
    () => ({
      border: mode === "dark" ? "border-dark-text-main" : "border-light-text-main",
      warningBg: mode === "dark" ? "bg-dark-warning" : "bg-light-warning",
      icon: mode === "light" ? "text-white" : "",
    }),
    [mode]
  );

  const handleCopy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // TODO: Show toast notification
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        // Handle error
      }
      document.body.removeChild(textArea);
    }
  }, []);

  const getTextValue = useCallback((value: string | ReactNode): string => {
    if (typeof value === "string") {
      return value;
    }
    return (value as any)?.props?.children || "";
  }, []);

  return (
    <>
      <CustomDivider
        bColor={colors.border}
        cColor="warning"
        icon={<FaPhone />}
        align="center"
        text="تماس با من "
      />
      <div className="flex justify-center items-center min-h-[70vh] mt-5">
        <div className="p-2.5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-4/5">
          {contactData.map((item, index) => {
            const textValue = getTextValue(item.value);
            return (
              <div
                key={index}
                className={`
                  flex items-center justify-between
                  p-3 rounded-lg shadow-md
                  ${colors.warningBg}
                  cursor-pointer hover:shadow-lg transition-shadow
                  focus-within:ring-2 focus-within:ring-yellow-500
                `}
                role="button"
                tabIndex={0}
                onClick={() => handleCopy(textValue)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCopy(textValue);
                  }
                }}
                aria-label={`کپی ${item.label}: ${textValue}`}
              >
                <div className="flex items-center gap-2 flex-1">
                  <div className={colors.icon} aria-hidden="true">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        onClick={(e) => e.stopPropagation()}
                        className="font-bold text-sm hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-bold text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy(textValue);
                  }}
                  className="p-2 hover:bg-black/10 rounded-full transition-colors"
                  aria-label={`کپی ${item.label}`}
                >
                  <FaCopy className="text-sm" aria-hidden="true" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
