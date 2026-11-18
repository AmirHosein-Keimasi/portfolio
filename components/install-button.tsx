"use client";

import { useState, useEffect, useCallback } from "react";
import { MdInstallMobile } from "react-icons/md";
import { storage } from "@/lib/utils/storage";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    if (storage.get("installButtonShown") === true) {
      setShowInstallButton(false);
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallButton(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = useCallback(async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    storage.set("installButtonShown", true);
    setDeferredPrompt(null);
    setShowInstallButton(false);
  }, [deferredPrompt]);

  if (!showInstallButton) return null;

  return (
    <button
      type="button"
      onClick={handleInstallClick}
      className="inline-flex items-center gap-2 h-10 px-3.5 rounded-xl text-sm font-medium bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm shadow-emerald-600/20 transition-all duration-200"
    >
      <MdInstallMobile className="text-lg" aria-hidden="true" />
      <span>نصب اپ</span>
    </button>
  );
}
