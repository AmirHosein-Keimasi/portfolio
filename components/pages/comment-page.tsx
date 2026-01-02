"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { FaComments } from "react-icons/fa";
import { CustomDivider } from "@/components/common/custom-divider";
import { useApp } from "@/lib/context/app-context";

// Dynamic import برای CommentSlider (سنگین است)
const CommentSlider = dynamic(
  () =>
    import("./comment-slider").then((mod) => ({ default: mod.CommentSlider })),
  {
    loading: () => (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100"></div>
      </div>
    ),
    ssr: false, // Client-side only برای slider
  },
);

export function CommentPage() {
  const { mode } = useApp();
  const bgColor =
    mode === "dark" ? "bg-dark-primary-main" : "bg-light-primary-main";
  const textColor =
    mode === "dark" ? "border-dark-text-main" : "border-light-text-main";

  return (
    <div
      className={`
        ${bgColor}
        flex flex-col
        min-h-screen
        mb-4 sm:mb-8 md:mb-10 pb-4
      `}
    >
      <div className="p-4">
        <CustomDivider
          bColor={textColor}
          cColor="warning"
          icon={<FaComments />}
          align="center"
          text="پروژه ها"
        />
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100"></div>
            </div>
          }
        >
          <CommentSlider />
        </Suspense>
      </div>
    </div>
  );
}
