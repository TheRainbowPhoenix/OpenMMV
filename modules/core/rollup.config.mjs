
export default {
  input: "modules/core/src/main.js", // Entry point for core module
  output: {
    file: "dist/js/rpg_core.js",
    format: "es",
    name: "CoreBundle",
    globals: {
      PIXI: "PIXI",
    },
    strict: false,
  },
  external: ["PIXI"],
  treeshake: false, // Disable tree-shaking to include all code
  context: 'this',
};
