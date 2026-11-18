import localFont from "next/font/local";

export const vazirFont = localFont({
  src: [
    {
      path: "../public/fonts/Vazir.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazir.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

export const tanhaFont = localFont({
  src: [
    {
      path: "../public/fonts/Tanha.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Tanha.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-tanha",
  display: "swap",
  preload: false,
  fallback: ["var(--font-vazir)", "system-ui", "sans-serif"],
});
