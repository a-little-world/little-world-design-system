#!/bin/bash

# Exit on error
set -e

echo "📦 Setting up Little World Design System..."

# Install and build core
echo "🔧 Setting up core package..."
cd packages/core
npm install
npm run build
cd ../..

echo "✅ Core tokens package built successfully"

# Install and build core
echo "🔧 Setting up core package..."
cd packages/web
npm install
npm run build
cd ../..

echo "✅ Core package built successfully"

# Install native
echo "🔧 Setting up native package..."
cd packages/native
npm install
cd ../..

echo "✅ Native package installed successfully"

echo "🎉 All packages installed successfully!"
echo ""
echo "Next steps:"
echo "  - Run cd packages/native && npm run storybook to start the Storybook"
echo "  - When working on core or web, run npm run watch in those directories" 