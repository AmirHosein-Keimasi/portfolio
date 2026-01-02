"use client";

import { useApp } from "@/lib/context/app-context";
import { Beams } from "@/components/animations/background/beams";
import { ParticlesBg } from "@/components/animations/background/particles-bg";
import { GridMotion } from "@/components/animations/background/grid-motion";
import { DotGrid } from "@/components/animations/background/dot-grid";
import { Galaxy } from "@/components/animations/background/galaxy";

export function PremiumBackground() {
  const { mode } = useApp();

  // Enhanced colors for light mode - brighter and more vibrant
  const successColor = mode === "dark" ? "#10b981" : "#10b981";
  const infoColor = mode === "dark" ? "#3b82f6" : "#3b82f6";
  const orbColor1 =
    mode === "dark"
      ? "rgba(16, 185, 129, 0.4)"
      : "rgba(16, 185, 129, 0.6)";
  const orbColor2 =
    mode === "dark"
      ? "rgba(59, 130, 246, 0.4)"
      : "rgba(59, 130, 246, 0.55)";
  const particleColor =
    mode === "dark"
      ? "rgba(16, 185, 129, 0.4)"
      : "rgba(16, 185, 129, 0.45)";
  const gridColor =
    mode === "dark"
      ? "rgba(16, 185, 129, 0.15)"
      : "rgba(16, 185, 129, 0.25)";
  const dotColor =
    mode === "dark"
      ? "rgba(241, 245, 249, 0.3)"
      : "rgba(30, 41, 59, 0.5)";

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Layer 1: Galaxy Stars (Deep Background) */}
      <div
        className={`absolute inset-0 ${
          mode === "dark" ? "opacity-30" : "opacity-55"
        }`}
      >
        <Galaxy />
      </div>

      {/* Layer 2: Animated Particles */}
      <div
        className={`absolute inset-0 ${
          mode === "dark" ? "opacity-40" : "opacity-65"
        }`}
      >
        <ParticlesBg
          particleCount={mode === "dark" ? 80 : 75}
          color={particleColor}
        />
      </div>

      {/* Layer 3: Gradient Orbs - Large Background Blobs */}
      <div
        className="absolute rounded-full"
        style={{
          top: "15%",
          left: "10%",
          width: "600px",
          height: "600px",
          background: `radial-gradient(circle, ${orbColor1}, transparent 70%)`,
          filter: "blur(100px)",
          opacity: mode === "dark" ? 0.3 : 0.4,
          transform: "translate(-50%, -50%)",
          animation: "float 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          bottom: "15%",
          right: "10%",
          width: "700px",
          height: "700px",
          background: `radial-gradient(circle, ${orbColor2}, transparent 70%)`,
          filter: "blur(100px)",
          opacity: mode === "dark" ? 0.25 : 0.35,
          transform: "translate(50%, 50%)",
          animation: "float 15s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          top: "50%",
          left: "50%",
          width: "500px",
          height: "500px",
          background: `radial-gradient(circle, ${
            mode === "dark"
              ? "rgba(245, 158, 11, 0.3)"
              : "rgba(16, 185, 129, 0.5)"
          }, transparent 70%)`,
          filter: "blur(90px)",
          opacity: mode === "dark" ? 0.2 : 0.3,
          transform: "translate(-50%, -50%)",
          animation: "float 18s ease-in-out infinite",
        }}
      />

      {/* Layer 4: Animated Grid Motion */}
      <div
        className={`absolute inset-0 ${
          mode === "dark" ? "opacity-20" : "opacity-40"
        }`}
      >
        <GridMotion color={gridColor} />
      </div>

      {/* Layer 5: Dot Grid Pattern */}
      <div
        className={`absolute inset-0 ${
          mode === "dark" ? "opacity-30" : "opacity-55"
        }`}
      >
        <DotGrid
          color={dotColor}
          dotSize={mode === "dark" ? 1.5 : 1.5}
          spacing={40}
        />
      </div>

      {/* Layer 6: Beams of Light */}
      <div
        className={`absolute inset-0 ${
          mode === "dark" ? "opacity-25" : "opacity-45"
        }`}
      >
        <Beams
          beamCount={mode === "dark" ? 5 : 5}
          color={successColor}
        />
      </div>

      {/* Layer 7: Multi-color Gradient Overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            mode === "dark"
              ? `
                radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 10% 90%, rgba(16, 185, 129, 0.1) 0%, transparent 40%)
              `
              : `
                radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.18) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.12) 0%, transparent 50%),
                radial-gradient(circle at 10% 90%, rgba(16, 185, 129, 0.1) 0%, transparent 40%),
                radial-gradient(circle at 90% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 40%)
              `,
        }}
      />

      {/* Layer 8: Subtle Grid Lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            mode === "dark"
              ? "linear-gradient(rgba(241, 245, 249, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(241, 245, 249, 0.04) 1px, transparent 1px)"
              : "linear-gradient(rgba(30, 41, 59, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Layer 9: Vignette Effect */}
      <div
        className="absolute inset-0"
        style={{
          background:
            mode === "dark"
              ? "radial-gradient(ellipse at center, transparent 0%, rgba(15, 23, 42, 0.3) 100%)"
              : "radial-gradient(ellipse at center, transparent 0%, rgba(255, 255, 255, 0.15) 100%)",
        }}
      />
    </div>
  );
}

