import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  plugins: [react()],
  base: "/",
});
