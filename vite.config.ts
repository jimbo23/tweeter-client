import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-ignore
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      // @ts-ignore
      { find: "@kiefer-tweeter", replacement: path.resolve(__dirname, "/src") },
    ],
  },
  plugins: [react()],
});
