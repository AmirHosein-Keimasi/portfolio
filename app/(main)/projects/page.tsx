import { Suspense } from "react";
import { CommentPage } from "@/components/pages/comment-page";
import type { Metadata } from "next";

// ISR - Incremental Static Regeneration (هر 24 ساعت یکبار revalidate)
export const revalidate = 86400; // 24 hours

export const metadata: Metadata = {
  title: "وب سایت شخصی | پروژه های من",
  description: "نمونه کارها و پروژه‌های انجام شده توسط امیرحسین کیماسی",
  keywords: ["پروژه", "نمونه کار", "پورتفولیو", "React", "Next.js"],
  openGraph: {
    title: "پروژه های من | امیرحسین کیماسی",
    description: "نمونه کارها و پروژه‌های انجام شده",
    type: "website",
  },
};

function ProjectsLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100"></div>
    </div>
  );
}

export default function Projects() {
  return (
    <Suspense fallback={<ProjectsLoading />}>
      <CommentPage />
    </Suspense>
  );
}
