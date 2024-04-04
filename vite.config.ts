import path from "path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES // この行を追加
    ? "CodeGear" // この行を追加
    : "/CodeGear/", // この行を追加
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["QRcode.png"],
      injectRegister: "auto",
      manifest: {
        name: "CodeGear",
        short_name: "CodeGear",
        description: "エンジニア用QRコードジェネレータ",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "QRcode.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "QRcode.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "QRcode.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
