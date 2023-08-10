import glsl from "vite-plugin-glsl";
import pugPlugin from "vite-plugin-pug";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/about.html"),
        "works/lyrissa": resolve(__dirname, "src/works/lyrissa.html"),
        "works/zephyr": resolve(__dirname, "src/works/zephyr.html"),
        "works/auriel": resolve(__dirname, "src/works/auriel.html"),
        "works/sylvaia": resolve(__dirname, "src/works/sylvaia.html"),
        "works/elixia": resolve(__dirname, "src/works/elixia.html"),
        "works/seraphine": resolve(__dirname, "src/works/seraphine.html"),
        "works/infinite": resolve(__dirname, "src/works/infinite.html"),
      },
    },
  },
  plugins: [glsl(), pugPlugin({ localImports: true })],
});
