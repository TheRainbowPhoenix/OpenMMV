export default {
  input: "modules/windows/src/main.js", // Entry point for core module
  output: {
    file: "dist/js/rpg_windows.js",
    format: "cjs",
    name: "WindowsBundle",
    globals: {
      PIXI: "PIXI",
    },
    strict: false,
  },
  external: ["PIXI"],
  treeshake: false, // Disable tree-shaking to include all code
};
