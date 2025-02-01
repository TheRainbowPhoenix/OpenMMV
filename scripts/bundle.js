const fs = require('fs');
const path = require('path');

// Resolving paths using `require.resolve()`
const resolvePath = (packageName, filePath) => {
  const packagePath = require.resolve(packageName);
  const packageDir = path.dirname(packagePath);
  return path.join(packageDir, filePath);
};

// List the library files in the order you want them concatenated
const files = [
  resolvePath('pixi.js', '../dist/pixi.js'), // Dynamically resolved path to pixi.js
  resolvePath('pixi-tilemap', '../dist/pixi-tilemap.js'),
  "vendored/pixi-picture.js",
  // resolvePath('pixi-picture', '../bin/pixi-picture.js'),
  resolvePath('fpsmeter', '../dist/fpsmeter.js'),
  resolvePath('lz-string', '../libs/lz-string.js'),
  resolvePath('iphone-inline-video', '../dist/iphone-inline-video.browser.js')
];

const outputFile = 'dist/js/runtime.js'// path.join(__dirname,  ... );

function concatFiles(files, outputFile) {
  const output = files.map((filePath) => fs.readFileSync(filePath, 'utf-8')).join('\n');
  fs.writeFileSync(outputFile, output);
  console.log(`Successfully concatenated files into ${outputFile}`);
}

concatFiles(files, outputFile);
