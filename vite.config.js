import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const baseFromEnv = env.VITE_BASE_PATH || "/";

  return {
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag.startsWith("Tres") && tag !== "TresCanvas",
          },
        },
      }),
      tailwindcss(),
    ],
    // dev selalu root
    base: command === "serve" ? "/" : baseFromEnv,
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
        },
      },
    },
  };
});
