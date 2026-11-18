"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
  useMemo,
} from "react";
import type { AppContextType, ThemeMode } from "@/types";
import { storage } from "@/lib/utils/storage";

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState<ThemeMode>("dark");

  useEffect(() => {
    const savedMode = storage.get<ThemeMode>("theme", "dark");
    const resolved: ThemeMode = savedMode === "light" ? "light" : "dark";
    setMode(resolved);
    document.documentElement.classList.toggle("dark", resolved === "dark");

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (e.matches) setDrawerOpen(false);
    };
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setMode((prevMode) => {
      const newMode: ThemeMode = prevMode === "light" ? "dark" : "light";
      storage.set("theme", newMode);
      document.documentElement.classList.toggle("dark", newMode === "dark");
      return newMode;
    });
  }, []);

  const value = useMemo<AppContextType>(
    () => ({
      handelThemeCheng: toggleTheme,
      toggleTheme,
      drawerOpen,
      setDrawerOpen,
      mode,
    }),
    [toggleTheme, drawerOpen, mode]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
