const fs = require('fs');
const path = require('path');

// Read the source package.json
const sourcePackageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Create a distribution package.json
const distPackageJson = {
  name: sourcePackageJson.name,
  version: sourcePackageJson.version,
  type: sourcePackageJson.type,
  main: "index.js",
  module: "index.esm.js",
  types: "index.d.ts",
  files: [
    "index.js",
    "index.esm.js",
    "index.d.ts",
    "components",
    "theme",
    "types",
    "utils"
  ],
  license: sourcePackageJson.license,
  peerDependencies: sourcePackageJson.peerDependencies,
  // Remove workspace dependencies and keep only external ones
  dependencies: Object.fromEntries(
    Object.entries(sourcePackageJson.dependencies || {}).filter(([key, value]) => {
      // Keep only external dependencies, not workspace ones
      return !value.startsWith('workspace:') && !value.startsWith('file:');
    })
  ),
};

// Write the distribution package.json
fs.writeFileSync('dist/package.json', JSON.stringify(distPackageJson, null, 2));
console.log('Created dist/package.json for distribution'); 