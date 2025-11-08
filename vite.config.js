import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { plugin as markdown } from "vite-plugin-markdown"; // 👈 ajout pour lire les fichiers .md

export default defineConfig({
  plugins: [
    react(),

    // 🖼️ Optimisation automatique des images
    ViteImageOptimizer({
      jpg: { quality: 80 },
      jpeg: { quality: 80 },
      png: { quality: 80 },
      webp: { quality: 80 },
      avif: { quality: 80 },
    }),

    // 📝 Plugin pour supporter les fichiers Markdown avec frontmatter YAML
    markdown({
      mode: ["html", "frontmatter"], // permet d'accéder à file.attributes et file.html
    }),
  ],

  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 800, // pas d’alerte sur images lourdes
  },

  optimizeDeps: {
    include: ["framer-motion", "lucide-react"],
  },

  // ⚙️ Optionnel : utile si tu déploies sur Netlify avec routes propres (SPA)
  server: {
    open: true,
  },

  // Pour éviter des warnings sur import.meta.glob sur certaines versions
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
