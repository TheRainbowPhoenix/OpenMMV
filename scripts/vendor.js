const fs = require('fs');
const path = require('path');

// Resolving paths using `require.resolve()`
const resolvePath = (packageName, filePath) => {
  const packagePath = require.resolve(packageName);
  const packageDir = path.dirname(packagePath);
  return path.join(packageDir, filePath);
};

// List the library files in the order you want them copied
const files = [
  resolvePath('pixi.js', '../dist/pixi.js'), // Dynamically resolved path to pixi.js
  resolvePath('pixi-tilemap', '../dist/pixi-tilemap.js'),
  'vendored/pixi-picture.js', // Example of a non-npm package (direct file path)
  resolvePath('fpsmeter', '../dist/fpsmeter.js'),
  resolvePath('lz-string', '../libs/lz-string.js'),
  resolvePath('iphone-inline-video', '../dist/iphone-inline-video.browser.js')
];

const outputDir = 'dist/js/libs-run'; // Output directory

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function copyFiles(files, outputDir) {
  files.forEach((filePath) => {
    const fileName = path.basename(filePath); // Get the file name from the path
    const outputFilePath = path.join(outputDir, fileName); // Construct the output path
    fs.copyFileSync(filePath, outputFilePath); // Copy the file to the destination
    console.log(`Successfully copied ${fileName} to ${outputFilePath}`);
  });
}

copyFiles(files, outputDir);
