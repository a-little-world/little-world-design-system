const fs = require('fs');
const path = require('path');

// Read the source package.json
const sourcePackageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Create a distribution package.json for the ESM build
const distEsmPackageJson = {
  name: "core-package",
  version: sourcePackageJson.version,
  type: "module",
  main: "index.js",
  types: "index.d.ts",
  files: [
    "index.js",
    "index.d.ts",
    "fonts",
    "icons",
    "illustrations",
    "tokens"
  ],
  license: sourcePackageJson.license,
  peerDependencies: sourcePackageJson.peerDependencies,
  dependencies: sourcePackageJson.dependencies,
};

// Create a distribution package.json for the CJS build
const distCjsPackageJson = {
  name: "core-package",
  version: sourcePackageJson.version,
  type: "commonjs",
  main: "index.js",
  types: "index.d.ts",
  files: [
    "index.js",
    "index.d.ts",
    "fonts",
    "icons",
    "illustrations",
    "tokens"
  ],
  license: sourcePackageJson.license,
  peerDependencies: sourcePackageJson.peerDependencies,
  dependencies: sourcePackageJson.dependencies,
};

// Write the distribution package.json files
fs.writeFileSync('dist/esm/package.json', JSON.stringify(distEsmPackageJson, null, 2));
fs.writeFileSync('dist/cjs/package.json', JSON.stringify(distCjsPackageJson, null, 2));
console.log('Created dist package.json files for distribution'); 