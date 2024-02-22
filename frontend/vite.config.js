import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "http://0.0.0.0:5000",
      "/uploads/": "http://0.0.0.0:5000",
    },
  },
});
