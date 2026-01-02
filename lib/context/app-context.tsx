"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback, useMemo } from "react";
import type { ThemeMode } from "@/types";
import { storage } from "@/lib/utils/storage";

interface AppContextType {
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  handelThemeCheng: () => void;
  mode: ThemeMode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState<ThemeMode>("dark");
  const [isMdUp, setIsMdUp] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedMode = storage.get<ThemeMode>("theme", "dark");
    setMode(savedMode || "dark");
    
    const checkMediaQuery = () => {
      if (typeof window !== "undefined") {
        setIsMdUp(window.matchMedia("(min-width: 768px)").matches);
      }
    };
    
    checkMediaQuery();
    
    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkMediaQuery);
      return () => window.removeEventListener("resize", checkMediaQuery);
    }
  }, []);

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  const handelThemeCheng = useCallback(() => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      storage.set("theme", newMode);
      return newMode;
    });
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const value = useMemo(
    () => ({
      handelThemeCheng,
      drawerOpen,
      setDrawerOpen,
      mode,
    }),
    [handelThemeCheng, drawerOpen, mode]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
