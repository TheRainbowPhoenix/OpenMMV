export default {
  input: "modules/managers/src/main.js", // Entry point for core module
  output: {
    file: "dist/js/rpg_managers.js",
    format: "cjs",
    name: "ManagersBundle",
    globals: {
      PIXI: "PIXI",
    },
    strict: false,
  },
  external: ["PIXI"],
  treeshake: false, // Disable tree-shaking to include all code
  context: 'this',
};
