"use client";

import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "@/lib/context/app-context";
import { ScrollProgress } from "@/components/animations/scroll-progress";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <ScrollProgress />
      {children}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3500,
          style: {
            background: "var(--toast-bg)",
            color: "var(--toast-color)",
            border: "1px solid var(--toast-border)",
            borderRadius: "14px",
            padding: "14px 18px",
            fontSize: "14px",
            boxShadow: "0 16px 40px rgba(0, 0, 0, 0.18)",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#ffffff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#ffffff",
            },
          },
        }}
      />
    </AppProvider>
  );
}
