"use client";

import { TopHeader } from "@/components/header/top-header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <TopHeader />
      <div className="pt-16 md:pt-20">{children}</div>
    </div>
  );
}
