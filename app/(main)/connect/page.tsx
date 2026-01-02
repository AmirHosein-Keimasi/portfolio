import { Suspense } from "react";
import type { Metadata } from "next";
import { Contact } from "@/components/pages/contact";

// SSR - Server Side Rendering برای فرم
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "وب سایت شخصی | ارتباط با من",
  description: "فرم تماس و ارتباط با امیرحسین کیماسی",
  keywords: ["فرم تماس", "ارتباط", "پیام"],
  openGraph: {
    title: "ارتباط با من | امیرحسین کیماسی",
    description: "فرم تماس و ارتباط",
    type: "website",
  },
};

export default function Connect() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100"></div>
      </div>
    }>
      <Contact />
    </Suspense>
  );
}
