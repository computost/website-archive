import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import ssr from "vite-plugin-ssr/plugin";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  define: { "import.meta.vitest": "undefined" },

  plugins: [
    react(),
    ssr({ prerender: true }),
    svgr(),
    sentryVitePlugin({
      org: "computost-consulting",
      project: "javascript-react",
    }),
  ],

  test: {
    coverage: {
      enabled: true,
      provider: "istanbul",
      reporter: ["text", "html"],
    },
    includeSource: ["src/**/*.ts"],
  },

  build: {
    sourcemap: true,
  },
});
