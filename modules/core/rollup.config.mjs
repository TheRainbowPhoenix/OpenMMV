export default {
  input: "modules/core/src/main.js", // Entry point for core module
  output: {
    file: "dist/js/rpg_core.js",
    format: "cjs",
    name: "CoreBundle",
    globals: {
      PIXI: "PIXI",
      Utils: 'Utils',
    },
    strict: false,
  },
  external: ["PIXI", "Utils"],
  treeshake: false, // Disable tree-shaking to include all code
};
