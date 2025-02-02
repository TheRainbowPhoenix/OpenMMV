export default {
  input: './src/main.js',  // Entry file where all your modules are imported
  output: {
    file: './dist/js/openmmv.js',  // Output location and filename
    format: 'es',  // Universal Module Definition, works with both CommonJS and global
    name: 'OpenMMV',  // Global variable name
    globals: {
      PIXI: "PIXI",
    },
    strict: false,
  },
  plugins: [],
  external: ["PIXI"],
  treeshake: false, // Disable tree-shaking to include all code
  context: 'this',
};
