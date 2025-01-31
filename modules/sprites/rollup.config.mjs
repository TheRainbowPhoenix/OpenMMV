export default {
  input: "modules/sprites/src/main.js",
  output: {
    file: "dist/js/rpg_sprites.js",
    format: "cjs",
    name: "SpritesBundle",
    globals: {
      PIXI: "PIXI",
    },
    strict: false,
  },
  external: ["PIXI"],
  treeshake: false,
};
