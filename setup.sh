#!/bin/bash

# Exit on error
set -e

echo "📦 Setting up Little World Design System..."

# Install and build core
echo "🔧 Setting up core package..."
cd packages/core
pnpm install
pnpm run build
cd ../..

echo "✅ Core tokens package built successfully"

# Install and build core
echo "🔧 Setting up core package..."
cd packages/web
pnpm install
pnpm run build
cd ../..

echo "✅ Core package built successfully"

# Install native
echo "🔧 Setting up native package..."
cd packages/native
pnpm install
cd ../..

echo "✅ Native package installed successfully"

echo "🎉 All packages installed successfully!"
echo ""
echo "Next steps:"
echo "  - Run cd packages/native && pnpm run storybook to start the Storybook"
echo "  - When working on core or web, run pnpm run watch in those directories" 