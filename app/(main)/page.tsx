import { Suspense } from "react";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home-page";

// SSG - Static Site Generation
export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "وب سایت شخصی امیرحسین کیماسی",
  description: "پورتفولیو شخصی امیرحسین کیماسی - فرانت دولوپر و طراح سایت",
  keywords: ["پورتفولیو", "فرانت دولوپر", "طراح سایت", "React", "Next.js"],
  openGraph: {
    title: "وب سایت شخصی امیرحسین کیماسی",
    description: "پورتفولیو شخصی امیرحسین کیماسی - فرانت دولوپر و طراح سایت",
    type: "website",
  },
};

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100"></div>
        </div>
      }
    >
      <HomePage />
    </Suspense>
  );
}
