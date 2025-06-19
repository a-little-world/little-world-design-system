const fs = require('fs');
const path = require('path');

// Read the original package.json
const packagePath = path.join(__dirname, 'package.json');
const pkg = require(packagePath);

// Create a clean package.json for the dist folder
const cleanPkg = {
  name: pkg.name,
  version: pkg.version,
  main: pkg.main,
  module: pkg.module,
  types: pkg.types,
  peerDependencies: pkg.peerDependencies
};

// Write the clean package.json to dist
const distPackagePath = path.join(__dirname, 'dist', 'package.json');
fs.writeFileSync(distPackagePath, JSON.stringify(cleanPkg, null, 2));

console.log('Created clean package.json in dist folder'); 