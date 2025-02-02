import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: false,
    copyPublicDir: false,
    lib: {
      entry: "./src/main.js", // Entry point
      name: "OpenMMV", // Global variable name
      fileName: (format, entryName) => `openmmv.js`,
      formats: ["iife"], // Module format
    },
    rollupOptions: {
      external: ["PIXI"], // Mark PIXI as external to avoid bundling
      output: {
        globals: {
          PIXI: "PIXI", // Use PIXI as a global variable
        },
        strict: false, // Disable strict mode
        dir: 'dist/js',
        entryFileNames: 'openmmv.js',
      },
      context: "this", // Ensure correct context
      treeshake: false, // Disable tree-shaking to retain all code
    },
  },
});
