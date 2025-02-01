import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; // To handle ES module paths

function copyFilesPlugin(options = {}) {
  const { outputDir = 'dist/js/libs-run', libraries = [] } = options;

  // Get the directory name of the current module's URL
  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  // Manually resolve paths for external libraries
  const resolvePath = (filePath) => {
    return path.resolve(__dirname, filePath);
  };

  // Ensure output directory exists
  const ensureOutputDir = () => {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
  };

  // Copy the specified libraries
  function copyFiles() {
    ensureOutputDir();
    libraries.forEach(([filePath]) => {
      const resolvedPath = resolvePath(filePath);
      const fileName = path.basename(resolvedPath); // Get the file name from the resolved path
      const outputFilePath = path.join(outputDir, fileName); // Path to the destination directory

      // Copy the file to the output directory
      fs.copyFileSync(resolvedPath, outputFilePath);
      console.log(`Successfully copied ${fileName} to ${outputFilePath}`);
    });
  }

  return {
    name: 'copy-files', // Name of the plugin

    // This hook is called when the final output is being generated
    generateBundle(options, bundle) {
      copyFiles(); // Copy files during the bundling process
    }
  };
}

export default {
  input: 'modules/runtime/src/runtime.js',  // Your custom entry point
  output: {
    dir: 'dist/js',  // Output directory (for the Rollup bundle)
    format: 'iife', // Browser-compatible output
    name: 'RuntimeBundle', // Global name
  },
  plugins: [
    copyFilesPlugin({
      outputDir: 'dist/js/libs-run',  // Directory to copy the libraries
      libraries: [
        ['../node_modules/pixi.js/dist/pixi.js'],
        ['../node_modules/pixi-tilemap/dist/pixi-tilemap.js'],
        ['../node_modules/fpsmeter/dist/fpsmeter.js'],
        ['../node_modules/lz-string/libs/lz-string.js'],
        ['../node_modules/iphone-inline-video/dist/iphone-inline-video.browser.js']
      ]
    })
  ]
};
