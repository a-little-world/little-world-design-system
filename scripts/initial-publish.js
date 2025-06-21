#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const packages = [
  {
    name: 'core',
    path: 'packages/core',
    packageName: '@a-little-world/little-world-design-system-core'
  },
  {
    name: 'native',
    path: 'packages/native',
    packageName: '@a-little-world/little-world-design-system-native'
  }
];

console.log('🚀 Initial Publishing Script for Little World Design System');
console.log('========================================================\n');

// Check if we're authenticated to GitHub Packages
try {
  execSync('npm whoami --registry=https://npm.pkg.github.com', { stdio: 'pipe' });
  console.log('✅ Authenticated to GitHub Packages');
} catch (error) {
  console.error('❌ Not authenticated to GitHub Packages');
  console.error('Please run: npm login --registry=https://npm.pkg.github.com');
  process.exit(1);
}

// Build all packages
console.log('\n📦 Building packages...');
try {
  execSync('pnpm build', { stdio: 'inherit' });
  console.log('✅ All packages built successfully');
} catch (error) {
  console.error('❌ Build failed');
  process.exit(1);
}

// Publish each package
for (const pkg of packages) {
  console.log(`\n📤 Publishing ${pkg.packageName}...`);
  
  try {
    // Check if package already exists
    try {
      execSync(`npm view ${pkg.packageName} version --registry=https://npm.pkg.github.com`, { stdio: 'pipe' });
      console.log(`⚠️  Package ${pkg.packageName} already exists. Skipping...`);
      continue;
    } catch (error) {
      // Package doesn't exist, proceed with publishing
    }
    
    // Publish the package
    execSync(`cd ${pkg.path} && npm publish --registry=https://npm.pkg.github.com`, { stdio: 'inherit' });
    console.log(`✅ Successfully published ${pkg.packageName}`);
    
  } catch (error) {
    console.error(`❌ Failed to publish ${pkg.packageName}`);
    console.error(error.message);
  }
}

console.log('\n🎉 Initial publishing complete!');
console.log('\nNext steps:');
console.log('1. Create changesets for any future changes: pnpm changeset');
console.log('2. Use the automated release workflow for future releases');
console.log('3. Check GitHub releases page for the new releases'); 