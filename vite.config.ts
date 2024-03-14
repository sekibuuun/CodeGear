import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES // この行を追加
    ? "CodeGear" // この行を追加
    : "./", // この行を追加
  plugins: [react()],
});
