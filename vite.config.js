// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
// })
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    build: {
      target: "es2020",
    },
    optimizeDeps: {
      esbuildOptions: {
        target: "es2020",
      },
    },
    server: {
      port: parseInt(env.VITE_PORT) || 8080,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        // "@assets": path.resolve(__dirname, "./src/assets"),
      },
    },
    esbuild: {
      loader: "jsx",
      include: /src\/.*\.jsx?$/,
      exclude: [],
    },
  };
});
