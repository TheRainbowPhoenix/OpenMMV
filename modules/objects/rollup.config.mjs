export default {
  input: "modules/objects/src/main.js",
  output: {
    file: "dist/js/rpg_objects.js",
    format: "cjs",
    name: "ObjectsBundle",
    globals: {
      PIXI: "PIXI",
    },
    strict: false,
  },
  external: ["PIXI"],
  treeshake: false,
};
