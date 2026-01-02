"use client";

import { useMemo, useCallback, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { tabsData } from "@/lib/constants/tabs-data";
import { InstallButton } from "@/components/install-button";
import { ThemeActionBtn } from "@/components/theme-action-btn";
import { useApp } from "@/lib/context/app-context";

export function TopHeader() {
  const { mode } = useApp();
  const pathname = usePathname();
  const data = useMemo(() => tabsData(), []);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // بستن منو هنگام تغییر مسیر
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // جلوگیری از اسکرول بدن هنگام باز بودن منو
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const colors = useMemo(
    () => ({
      text: mode === "dark" ? "text-dark-text-main" : "text-light-text-main",
      active: mode === "dark" ? "text-dark-success" : "text-light-success",
      hover: mode === "dark" ? "hover:text-dark-success" : "hover:text-light-success",
      bg: mode === "dark" ? "bg-dark-primary-main" : "bg-light-primary-main",
      border: mode === "dark" ? "border-dark-text-main/20" : "border-light-text-main/20",
      sidebarBg: mode === "dark" ? "bg-dark-primary-main" : "bg-light-primary-main",
      overlay: mode === "dark" ? "bg-black/50" : "bg-black/30",
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          ${colors.bg}
          border-b ${colors.border}
          shadow-md
        `}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
            {/* همبرگر منو - فقط موبایل */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 hover:bg-opacity-10 hover:bg-gray-500"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <FaTimes className={`text-xl ${colors.text}`} />
              ) : (
                <FaBars className={`text-xl ${colors.text}`} />
              )}
            </button>

            {/* منوهای اصلی - فقط دسکتاپ */}
            <div className="hidden md:flex items-center gap-2 md:gap-4 flex-1">
              {data.map((tab, index) => {
                const active = isActive(tab.href);
                return (
                  <Link
                    key={index}
                    href={tab.href}
                    prefetch={true}
                    className={`
                      flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg
                      transition-colors duration-200 whitespace-nowrap
                      text-sm md:text-base
                      ${
                        active
                          ? `${colors.active} font-bold`
                          : `${colors.text} ${colors.hover}`
                      }
                    `}
                    aria-current={active ? "page" : undefined}
                  >
                    <span className="text-base md:text-lg" aria-hidden="true">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* دکمه‌های سمت راست */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="hidden md:block">
                <InstallButton />
              </div>
              <ThemeActionBtn />
            </div>
          </nav>
        </div>
      </header>

      {/* Overlay برای موبایل */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`fixed inset-0 z-40 ${colors.overlay} md:hidden`}
              onClick={toggleMobileMenu}
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className={`
                fixed top-16 left-0 bottom-0 z-50 w-64
                ${colors.sidebarBg}
                border-r ${colors.border}
                shadow-2xl
                md:hidden
                overflow-y-auto
              `}
            >
              <nav className="flex flex-col p-4 gap-2" aria-label="Mobile navigation">
                {data.map((tab, index) => {
                  const active = isActive(tab.href);
                  return (
                    <Link
                      key={index}
                      href={tab.href}
                      prefetch={true}
                      onClick={toggleMobileMenu}
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-lg
                        transition-colors duration-200
                        text-base
                        ${
                          active
                            ? `${colors.active} font-bold bg-opacity-10 ${
                                mode === "dark" ? "bg-dark-success" : "bg-light-success"
                              }`
                            : `${colors.text} ${colors.hover}`
                        }
                      `}
                      aria-current={active ? "page" : undefined}
                    >
                      <span className="text-xl" aria-hidden="true">{tab.icon}</span>
                      <span>{tab.label}</span>
                    </Link>
                  );
                })}

                {/* Install Button در موبایل */}
                <div className={`mt-4 pt-4 border-t ${colors.border}`}>
                  <InstallButton />
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
