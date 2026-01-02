import { CommentPage } from "@/components/pages/comment-page";
import type { Metadata } from "next";

// ISR - Incremental Static Regeneration (هر 24 ساعت یکبار revalidate)
export const dynamic = "force-static";
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

export default function Projects() {
  return <CommentPage />;
}
