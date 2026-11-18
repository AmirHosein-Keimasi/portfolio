"use client";

import { useMemo, useCallback, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { tabsData } from "@/lib/constants/tabs-data";
import { PROFILE } from "@/lib/data/portfolio";
import { InstallButton } from "@/components/install-button";
import { ThemeActionBtn } from "@/components/theme-action-btn";

const SECTION_IDS = [
  "hero",
  "about",
  "skills",
  "resume",
  "projects",
  "education",
  "contact",
];

export function TopHeader() {
  const pathname = usePathname();
  const data = useMemo(() => tabsData(), []);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("/#") || href.startsWith("#")) {
        const targetId = href.replace(/^\/?#/, "");
        if (pathname === "/") {
          e.preventDefault();
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", `/#${targetId}`);
            setActiveSection(targetId);
          }
        }
      }
      setIsMobileMenuOpen(false);
    },
    [pathname]
  );

  const isActive = useCallback(
    (href: string) => {
      if (pathname === "/") {
        const targetId = href.replace(/^\/?#/, "") || "hero";
        return activeSection === targetId;
      }
      if (href === "/contact" && pathname === "/connect") return true;
      return pathname?.startsWith(href) ?? false;
    },
    [pathname, activeSection]
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
          scrolled
            ? "bg-white/85 dark:bg-[#070b14]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-sm"
            : "bg-white/60 dark:bg-[#070b14]/60 backdrop-blur-md border-b border-transparent"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center justify-between h-16 md:h-20 gap-4"
            aria-label="ناوبری اصلی"
          >
            {/* Brand + Mobile menu toggle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:border-emerald-500/50 transition-colors"
                aria-label="باز کردن منو"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="text-lg" />
                ) : (
                  <FaBars className="text-lg" />
                )}
              </button>

              <Link
                href="/#hero"
                onClick={(e) => handleNavClick(e, "/#hero")}
                className="flex items-center gap-2.5 group focus:outline-none"
              >
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white font-bold text-sm flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                  {PROFILE.initials}
                </span>
                <div className="hidden sm:flex flex-col leading-tight">
                  <span className="font-bold text-sm md:text-base text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {PROFILE.fullName}
                  </span>
                  <span
                    className="text-[11px] text-slate-500 dark:text-slate-400"
                    dir="ltr"
                  >
                    Frontend Developer
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1 p-1 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-100/70 dark:bg-white/[0.04]">
              {data.map((tab) => {
                const active = isActive(tab.href);
                return (
                  <Link
                    key={tab.href}
                    href={tab.href}
                    prefetch={true}
                    onClick={(e) => handleNavClick(e, tab.href)}
                    aria-current={active ? "page" : undefined}
                    className={`relative flex items-center gap-1.5 lg:gap-2 px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-xl text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      active
                        ? "text-emerald-700 dark:text-emerald-300 bg-white dark:bg-emerald-500/15 shadow-sm font-semibold"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5"
                    }`}
                  >
                    <span className="text-sm opacity-80" aria-hidden="true">
                      {tab.icon}
                    </span>
                    <span>{tab.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <a
                href={PROFILE.resumePdfUrl}
                download="Amirhossein-Keimasi-Resume.pdf"
                className="hidden sm:inline-flex items-center gap-2 h-10 px-3.5 rounded-xl text-sm font-medium bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm shadow-emerald-600/20 transition-all duration-200"
              >
                <FaDownload className="text-xs" aria-hidden="true" />
                <span>دانلود رزومه</span>
              </a>
              <div className="hidden lg:block">
                <InstallButton />
              </div>
              <ThemeActionBtn />
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile RTL Slide-Over Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-16 right-0 bottom-0 z-50 w-72 bg-white dark:bg-[#0b1120] border-l border-slate-200 dark:border-white/10 shadow-2xl md:hidden overflow-y-auto"
              aria-label="منوی موبایل"
            >
              <div className="p-5 flex flex-col gap-2">
                {data.map((tab) => {
                  const active = isActive(tab.href);
                  return (
                    <Link
                      key={tab.href}
                      href={tab.href}
                      prefetch={true}
                      onClick={(e) => handleNavClick(e, tab.href)}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        active
                          ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-semibold"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
                      }`}
                    >
                      <span className="text-base" aria-hidden="true">
                        {tab.icon}
                      </span>
                      <span>{tab.label}</span>
                    </Link>
                  );
                })}

                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3">
                  <a
                    href={PROFILE.resumePdfUrl}
                    download="Amirhossein-Keimasi-Resume.pdf"
                    className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl text-sm font-medium bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm"
                  >
                    <FaDownload className="text-xs" aria-hidden="true" />
                    <span>دانلود رزومه PDF</span>
                  </a>
                  <InstallButton />
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
