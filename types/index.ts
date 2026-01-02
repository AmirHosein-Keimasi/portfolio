export type ThemeMode = "light" | "dark";

export interface AppContextType {
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  handelThemeCheng: () => void;
  mode: ThemeMode;
}
