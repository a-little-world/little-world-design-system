const fs = require('fs');
const path = require('path');

// Function to read SVG files and convert them to JS modules
const transformSvgToJs = (srcDir, destDir) => {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const svgFiles = fs.readdirSync(srcDir).filter(file => file.endsWith('.svg'));

  svgFiles.forEach(file => {
    const srcPath = path.join(srcDir, file);
    const fileName = path.basename(file, '.svg');
    const destPath = path.join(destDir, `${fileName}.js`);

    const svgContent = fs.readFileSync(srcPath, 'utf8');
    const jsContent = `export default ${JSON.stringify(svgContent)};\n`;

    fs.writeFileSync(destPath, jsContent);
  });
  
  // Create a TypeScript declaration file for each SVG JS module
  svgFiles.forEach(file => {
    const fileName = path.basename(file, '.svg');
    const destPath = path.join(destDir, `${fileName}.d.ts`);
    
    fs.writeFileSync(destPath, 'declare const content: string;\nexport default content;\n');
  });
};

// Define source and destination directories
const srcSvgDir = path.resolve(__dirname, '../icons/svgs');
const esmDestDir = path.resolve(__dirname, '../../dist/esm/icons/svgs');
const cjsDestDir = path.resolve(__dirname, '../../dist/cjs/icons/svgs');

// Transform SVGs for both ESM and CJS
transformSvgToJs(srcSvgDir, esmDestDir);
transformSvgToJs(srcSvgDir, cjsDestDir);

console.log('SVG files transformed to JS modules successfully!'); 