"use client";

import { TopHeader } from "@/components/header/top-header";
import { Suspense } from "react";

function HeaderFallback() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 md:h-20 bg-gray-100 dark:bg-gray-900 border-b">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="animate-pulse h-8 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    </header>
  );
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<HeaderFallback />}>
        <TopHeader />
      </Suspense>
      <div className="pt-16 md:pt-20">{children}</div>
    </div>
  );
}
