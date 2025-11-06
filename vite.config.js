import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";


export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: { quality: 80 },
      jpeg: { quality: 80 },
      png: { quality: 80 },
      webp: { quality: 80 },
      avif: { quality: 80 },
    }),
  ],

  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 800, // pas d’alerte sur images lourdes
  },

  optimizeDeps: {
    include: ["framer-motion", "lucide-react"],
  },
});
