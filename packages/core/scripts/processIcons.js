const fs = require('fs');
const path = require('path');
const { parseSync } = require('svgson');

// Path configuration
const iconSourceDir = path.resolve(__dirname, '../src/icons/svgs');
const illustrationSourceDir = path.resolve(__dirname, '../src/illustrations/svgs');
const iconOutputDir = path.resolve(__dirname, '../src/icons/generated');
const illustrationOutputDir = path.resolve(__dirname, '../src/illustrations/generated');

// Create output directory if it doesn't exist
if (!fs.existsSync(iconOutputDir)) {
  fs.mkdirSync(iconOutputDir, { recursive: true });
}

if (!fs.existsSync(illustrationOutputDir)) {
  fs.mkdirSync(illustrationOutputDir, { recursive: true });
}

// Function to parse SVG and convert to JS object
function processSvg(svgContent) {
  const parsed = parseSync(svgContent);
  return {
    viewBox: parsed.attributes.viewBox || `0 0 ${parsed.attributes.width} ${parsed.attributes.height}`,
    paths: parsed.children.filter(child => child.name === 'path').map(path => ({
      d: path.attributes.d,
      ...path.attributes
    }))
  };
}

// Get files from both directories
const iconFiles = fs.existsSync(iconSourceDir) 
  ? fs.readdirSync(iconSourceDir).filter(file => file.endsWith('.svg'))
  : [];

const illustrationFiles = fs.existsSync(illustrationSourceDir) 
  ? fs.readdirSync(illustrationSourceDir).filter(file => file.endsWith('.svg'))
  : [];

// Create index file content
let iconIndexFileContent = `// Auto-generated file. Do not edit directly.\n`;
let illustrationIndexFileContent = `// Auto-generated file. Do not edit directly.\n`;

// Process icon SVG files
iconFiles.forEach(file => {
  const baseName = path.basename(file, '.svg');
  const exportName = `${baseName}Icon`;
  const svgPath = path.join(iconSourceDir, file);
  const svgContent = fs.readFileSync(svgPath, 'utf8');
  
  // Parse the SVG
  const parsedSvg = processSvg(svgContent);
  
  // Create the output JS file with the parsed result
  const outputFileName = `${baseName}Icon.js`;
  const outputPath = path.join(iconOutputDir, outputFileName);
  
  const fileContent = `// Auto-generated from icons/svgs/${file}
export const ${exportName} = ${JSON.stringify(parsedSvg, null, 2)};
`;
  
  fs.writeFileSync(outputPath, fileContent);
  
  // Add to index file
  iconIndexFileContent += `export { ${exportName} } from './${exportName}';\n`;
});

// Process illustration SVG files
illustrationFiles.forEach(file => {
  const baseName = path.basename(file, '.svg');
  const exportName = `${baseName}Illustration`;
  const svgPath = path.join(illustrationSourceDir, file);
  const svgContent = fs.readFileSync(svgPath, 'utf8');
  
  // Parse the SVG
  const parsedSvg = processSvg(svgContent);
  
  // Create the output JS file with the parsed result
  const outputFileName = `${exportName}.js`;
  const outputPath = path.join(illustrationOutputDir, outputFileName);
  
  const fileContent = `// Auto-generated from illustrations/${file}
export const ${exportName} = ${JSON.stringify(parsedSvg, null, 2)};
`;
  
  fs.writeFileSync(outputPath, fileContent);
  
  // Add to index file
  illustrationIndexFileContent += `export { ${exportName} } from './${exportName}';\n`;
});

// Write the index file
fs.writeFileSync(path.join(iconOutputDir, 'index.js'), iconIndexFileContent);
fs.writeFileSync(path.join(illustrationOutputDir, 'index.js'), illustrationIndexFileContent);

// Create a TypeScript declaration file for each generated icon file
iconFiles.forEach(file => {
  const baseName = path.basename(file, '.svg');
  const exportName = `${baseName}Icon`;
  const outputPath = path.join(iconOutputDir, `${exportName}.d.ts`);
  
  const declContent = `export declare const ${exportName}: {
  viewBox: string;
  paths: {
    d: string;
    [key: string]: string;
  }[];
};
`;
  
  fs.writeFileSync(outputPath, declContent);
});

// Create a TypeScript declaration file for each generated illustration file
illustrationFiles.forEach(file => {
  const baseName = path.basename(file, '.svg');
  const exportName = `${baseName}Illustration`;
  const outputPath = path.join(illustrationOutputDir, `${exportName}.d.ts`);
  
  const declContent = `export declare const ${exportName}: {
  viewBox: string;
  paths: {
    d: string;
    [key: string]: string;
  }[];
};
`;
  
  fs.writeFileSync(outputPath, declContent);
});

// Write the index declaration file
const illustrationIndexDtsContent = `// Auto-generated file. Do not edit directly.
${illustrationFiles.map(file => {
  const baseName = path.basename(file, '.svg');
  const exportName = `${baseName}Illustration`;
  return `export { ${exportName} } from './${exportName}';`;
}).join('\n')}
`;

// Write the index declaration file - combining both icon and illustration exports
const iconIndexDtsContent = `// Auto-generated file. Do not edit directly.
${iconFiles.map(file => {
  const baseName = path.basename(file, '.svg');
  const exportName = `${baseName}Icon`;
  return `export { ${exportName} } from './${exportName}';`;
}).join('\n')}
`;

fs.writeFileSync(path.join(illustrationOutputDir, 'index.d.ts'), illustrationIndexDtsContent);
fs.writeFileSync(path.join(iconOutputDir, 'index.d.ts'), iconIndexDtsContent);


console.log(`✅ Processed ${iconFiles.length} icon SVG files and ${illustrationFiles.length} illustration SVG files.`); 