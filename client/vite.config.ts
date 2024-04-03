import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@emotion/styled": "@emotion/styled/base",
    },
  },
  optimizeDeps: {
    include: ["@emotion/styled"],
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
