"use client";

import { useState, useEffect, useCallback } from "react";
import { MdInstallMobile } from "react-icons/md";
import { useApp } from "@/lib/context/app-context";
import { storage } from "@/lib/utils/storage";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const { mode } = useApp();

  useEffect(() => {
    if (storage.get("installButtonShown") === true) {
      setShowInstallButton(false);
      return;
    }

    if (typeof window !== "undefined") {
      const handleBeforeInstallPrompt = (e: Event) => {
        e.preventDefault();
        setDeferredPrompt(e as BeforeInstallPromptEvent);
        setShowInstallButton(true);
      };

      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

      return () => {
        window.removeEventListener(
          "beforeinstallprompt",
          handleBeforeInstallPrompt,
        );
      };
    }
  }, []);

  const handleInstallClick = useCallback(async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      storage.set("installButtonShown", true);
      setDeferredPrompt(null);
      setShowInstallButton(false);
    }
  }, [deferredPrompt]);

  if (!showInstallButton) return null;

  return (
    <button
      onClick={handleInstallClick}
      className={`
        flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-sm md:text-base font-medium
        transition-colors duration-200
        ${mode === "dark" 
          ? "bg-dark-success text-dark-text-main hover:bg-dark-success/90" 
          : "bg-light-success text-light-text-main hover:bg-light-success/90"
        }
      `}
    >
      <MdInstallMobile className="text-base md:text-lg" />
      <span className="hidden sm:inline">نصب اپلیکیشن</span>
    </button>
  );
}

