const fs = require('fs');
const path = require('path');
const { parseSync } = require('svgson');

// Path configuration
const iconSourceDir = path.resolve(__dirname, '../src/icons/svgs');
const illustrationSourceDir = path.resolve(
  __dirname,
  '../src/illustrations/svgs',
);
const iconOutputDir = path.resolve(__dirname, '../src/icons/generated');
const illustrationOutputDir = path.resolve(
  __dirname,
  '../src/illustrations/generated',
);

// Create output directory if it doesn't exist
if (!fs.existsSync(iconOutputDir)) {
  fs.mkdirSync(iconOutputDir, { recursive: true });
}

if (!fs.existsSync(illustrationOutputDir)) {
  fs.mkdirSync(illustrationOutputDir, { recursive: true });
}

// Function to convert kebab-case (stroke-width) to camelCase (strokeWidth)
function camelizeAttribute(str) {
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
}

// Function to convert SVG attributes to React-compatible format
function convertAttributes(attributes) {
  const reactAttributes = {};

  // Map of SVG attribute names that need to be renamed for React
  const attributeMap = {
    class: 'className',
    for: 'htmlFor',
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset',
    'stroke-miterlimit': 'strokeMiterlimit',
    'fill-rule': 'fillRule',
    'clip-rule': 'clipRule',
    'clip-path': 'clipPath',
    'font-family': 'fontFamily',
    'font-size': 'fontSize',
    'font-weight': 'fontWeight',
    'text-anchor': 'textAnchor',
    'xlink:href': 'xlinkHref',
    'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity',
    'color-interpolation': 'colorInterpolation',
    'color-interpolation-filters': 'colorInterpolationFilters',
  };

  // Process each attribute
  for (const key in attributes) {
    // Use mapped name if it exists, otherwise camelize the attribute name
    const reactKey = attributeMap[key] || camelizeAttribute(key);
    reactAttributes[reactKey] = attributes[key];
  }

  return reactAttributes;
}

// Function to parse SVG and convert to JS object
function processSvg(svgContent) {
  const parsed = parseSync(svgContent);

  // Get viewBox from svg attributes
  const viewBox =
    parsed.attributes.viewBox ||
    `0 0 ${parsed.attributes.width || '24'} ${parsed.attributes.height || '24'}`;

  // Process SVG element and its children recursively
  function processNode(node) {
    // Skip the root SVG node itself
    if (node.name === 'svg') {
      return node.children.map(child => processNode(child)).filter(Boolean);
    }

    // Process supported elements (path, g, circle, rect, etc.)
    if (
      [
        'path',
        'g',
        'circle',
        'linearGradient',
        'clipPath',
        'rect',
        'line',
        'polygon',
        'polyline',
        'ellipse',
        'defs',
        'stop',
      ].includes(node.name)
    ) {
      // Determine which color attribute should be used for this element
      let colorAttribute = 'none';

      // Check for stroke-related attributes
      const hasStrokeAttributes = Object.keys(node.attributes).some(
        key => key.startsWith('stroke-') || key === 'stroke',
      );

      // Check if both stroke and fill are present
      const hasStroke =
        hasStrokeAttributes ||
        (node.attributes.stroke && node.attributes.stroke !== 'none');
      const hasFill = node.attributes.fill && node.attributes.fill !== 'none';

      if (hasStroke && hasFill) {
        // Both stroke and fill are present - prioritize the one with '#000'
        if (node.attributes.fill === '#000') {
          colorAttribute = 'fill';
        } else if (node.attributes.stroke === '#000') {
          colorAttribute = 'stroke';
        } else {
          // If neither is '#000', default to fill
          colorAttribute = 'fill';
        }
      } else if (hasFill) {
        colorAttribute = 'fill';
      } else if (hasStroke) {
        colorAttribute = 'stroke';
      }

      const element = {
        type: node.name,
        attributes: convertAttributes(node.attributes),
        children:
          node.children && node.children.length > 0
            ? node.children.map(child => processNode(child)).filter(Boolean)
            : [],
        colorAttribute,
      };

      return element;
    }

    // Skip unsupported elements
    return null;
  }

  return {
    viewBox,
    elements: processNode(parsed),
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
fs.writeFileSync(
  path.join(illustrationOutputDir, 'index.js'),
  illustrationIndexFileContent,
);

// Create a TypeScript declaration file for each generated icon file
iconFiles.forEach(file => {
  const baseName = path.basename(file, '.svg');
  const exportName = `${baseName}Icon`;
  const outputPath = path.join(iconOutputDir, `${exportName}.d.ts`);

  const declContent = `export declare const ${exportName}: {
  viewBox: string;
  elements: Array<{
    type: string;
    attributes: {
      [key: string]: string | number | undefined;
    };
    children: Array<{
      type: string;
      attributes: {
        [key: string]: string | number | undefined;
      };
      children: never[];
      colorAttribute?: 'fill' | 'stroke' | 'none';
    }>;
    colorAttribute?: 'fill' | 'stroke' | 'none';
  }>;
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
  elements: Array<{
    type: string;
    attributes: {
      [key: string]: string | number | undefined;
    };
    children: Array<{
      type: string;
      attributes: {
        [key: string]: string | number | undefined;
      };
      children: never[];
      colorAttribute?: 'fill' | 'stroke' | 'none';
    }>;
    colorAttribute?: 'fill' | 'stroke' | 'none';
  }>;
};
`;

  fs.writeFileSync(outputPath, declContent);
});

// Write the index declaration file
const illustrationIndexDtsContent = `// Auto-generated file. Do not edit directly.
${illustrationFiles
  .map(file => {
    const baseName = path.basename(file, '.svg');
    const exportName = `${baseName}Illustration`;
    return `export { ${exportName} } from './${exportName}';`;
  })
  .join('\n')}
`;

// Write the index declaration file - combining both icon and illustration exports
const iconIndexDtsContent = `// Auto-generated file. Do not edit directly.
${iconFiles
  .map(file => {
    const baseName = path.basename(file, '.svg');
    const exportName = `${baseName}Icon`;
    return `export { ${exportName} } from './${exportName}';`;
  })
  .join('\n')}
`;

fs.writeFileSync(
  path.join(illustrationOutputDir, 'index.d.ts'),
  illustrationIndexDtsContent,
);
fs.writeFileSync(path.join(iconOutputDir, 'index.d.ts'), iconIndexDtsContent);

console.log(
  `✅ Processed ${iconFiles.length} icon SVG files and ${illustrationFiles.length} illustration SVG files.`,
);
