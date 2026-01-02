"use client";

import { useMemo, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransition } from "react";
import { tabsData } from "@/lib/constants/tabs-data";
import { InstallButton } from "@/components/install-button";
import { ThemeActionBtn } from "@/components/theme-action-btn";
import { useApp } from "@/lib/context/app-context";

export function TopHeader() {
  const { mode } = useApp();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const data = useMemo(() => tabsData(), []);

  const colors = useMemo(
    () => ({
      text: mode === "dark" ? "text-dark-text-main" : "text-light-text-main",
      active: mode === "dark" ? "text-dark-success" : "text-light-success",
      hover: mode === "dark" ? "hover:text-dark-success" : "hover:text-light-success",
      bg: mode === "dark" ? "bg-dark-primary-main" : "bg-light-primary-main",
      border: mode === "dark" ? "border-dark-text-main/20" : "border-light-text-main/20",
    }),
    [mode]
  );

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") {
        return pathname === "/";
      }
      return pathname?.startsWith(href);
    },
    [pathname]
  );

  const handleLinkClick = useCallback(() => {
    startTransition(() => {
      // Navigation will happen
    });
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        ${colors.bg}
        border-b ${colors.border}
        shadow-md
        ${isPending ? "opacity-75" : "opacity-100"}
        transition-opacity duration-200
      `}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
          {/* منوهای اصلی */}
          <div className="flex items-center gap-2 md:gap-4 flex-1 overflow-x-auto">
            {data.map((tab, index) => {
              const active = isActive(tab.href);
              return (
                <Link
                  key={index}
                  href={tab.href}
                  prefetch={true}
                  onClick={handleLinkClick}
                  className={`
                    flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg
                    transition-colors duration-200 whitespace-nowrap
                    text-sm md:text-base
                    ${
                      active
                        ? `${colors.active} font-bold`
                        : `${colors.text} ${colors.hover}`
                    }
                    ${isPending ? "pointer-events-none" : ""}
                  `}
                  aria-current={active ? "page" : undefined}
                >
                  <span className="text-base md:text-lg" aria-hidden="true">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </Link>
              );
            })}
          </div>

          {/* دکمه‌های سمت راست */}
          <div className="flex items-center gap-2 md:gap-3 ml-4">
            <div className="hidden md:block">
              <InstallButton />
            </div>
            <ThemeActionBtn />
          </div>
        </nav>
      </div>
    </header>
  );
}
