import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"
import { TanStackRouterVite } from "@tanstack/router-vite-plugin"

export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
})
