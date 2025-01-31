export default {
  input: "modules/scenes/src/main.js",
  output: {
    file: "dist/js/rpg_scenes.js",
    format: "cjs",
    name: "ScenesBundle",
    globals: {
      PIXI: "PIXI",
    },
    strict: false,
  },
  external: ["PIXI"],
  treeshake: false,
};
