"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { FaUserCircle } from "react-icons/fa";
import { CustomDivider } from "@/components/common/custom-divider";
import { useApp } from "@/lib/context/app-context";

// Dynamic import برای کامپوننت‌های سنگین
const Skills = dynamic(
  () => import("./skills").then((mod) => ({ default: mod.Skills })),
  {
    loading: () => (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100"></div>
      </div>
    ),
    ssr: false, // Client-side only برای animation
  },
);

const SuftSkills = dynamic(
  () => import("./suft-skills").then((mod) => ({ default: mod.SuftSkills })),
  {
    loading: () => (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100"></div>
      </div>
    ),
    ssr: true,
  },
);

export function AboutPage() {
  const { mode } = useApp();
  const bgColor =
    mode === "dark" ? "bg-dark-primary-main" : "bg-light-primary-main";

  return (
    <div className={`${bgColor} min-h-screen`}>
      <div className="p-4">
        <div className="w-full mt-1 mb-4">
          <CustomDivider
            bColor={
              mode === "dark"
                ? "border-dark-text-main"
                : "border-light-text-main"
            }
            cColor="warning"
            icon={<FaUserCircle />}
            align="center"
            text="مهات های من"
          />
          <Suspense
            fallback={
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100"></div>
              </div>
            }
          >
            <Skills />
            <SuftSkills />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
