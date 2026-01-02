"use client";

import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "@/lib/context/app-context";
import { ScrollProgress } from "@/components/animations/scroll-progress";
import { ParticlesBackground } from "@/components/animations/particles-background";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <ParticlesBackground />
      <ScrollProgress />
      {children}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "var(--toast-bg)",
            color: "var(--toast-color)",
            borderRadius: "12px",
            padding: "16px",
            fontSize: "14px",
            fontFamily: "tanha, Vazir, sans-serif",
          },
          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
    </AppProvider>
  );
}
