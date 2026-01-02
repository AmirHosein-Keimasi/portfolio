import localFont from "next/font/local";

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
  preload: true,
  fallback: ["Vazir", "roboto", "sans-serif"],
});

