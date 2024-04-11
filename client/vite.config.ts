import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@emotion/styled": "@emotion/styled/base",
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["@emotion/styled", "react-dom/client"],
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      external: ["react-dom/client"],
      output: {
        manualChunks: {
          "my-chunk": ["react", "react-dom"], // Bundle 'react' and 'react-dom' into 'my-chunk'
        },
      },
    },
  },
});
