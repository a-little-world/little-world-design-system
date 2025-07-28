# @a-little-world/little-world-design-system-core

Core design tokens, utilities, and shared types for the Little World Design System.

## Installation

```bash
npm install @a-little-world/little-world-design-system-core
```

## Usage

```tsx
import { colors, spacing, typography } from '@a-little-world/little-world-design-system-core';

// Use design tokens
const styles = {
  backgroundColor: colors.primary,
  padding: spacing.medium,
  fontSize: typography.body.fontSize,
};
```

## Design Tokens

The core package provides:

- **Colors** - Primary, secondary, and semantic color palettes
- **Typography** - Font families, sizes, weights, and line heights
- **Spacing** - Consistent spacing scale
- **Breakpoints** - Responsive design breakpoints
- **Shadows** - Elevation and shadow definitions
- **Border Radius** - Consistent border radius values

## Local Development

### ⚠️ Important: Build from Root

**Always build and publish from the root of the monorepo, never from individual package directories.**

✅ **Correct (from root):**
```bash
pnpm build:core
pnpm --filter=@a-little-world/little-world-design-system-core publish
```

❌ **Incorrect (from package directory):**
```bash
cd packages/core
npm run build
npm publish  # This will break workspace dependencies!
```

### Building

```bash
# From root of monorepo
pnpm build:core

# Or from the core package directory
cd packages/core
npm run build
```

### Testing with Native Package

The core package is automatically built and tested when you run the native testApp:

```bash
# This will build both core and native packages
pnpm native:setup
```

### Development Workflow

1. **Make changes** to design tokens or utilities
2. **Build core** - `pnpm build:core`
3. **Test in native** - `pnpm native:setup-and-start` (rebuilds and tests)
4. **Test in web** - `pnpm storybook:web` (if web components use core tokens)

## Publishing

### Automated Releases (Recommended)

**Releases should ideally be automated and handled via merging into the main branch of the repo.** 

See the [Versioning and Releases section in the root README](../../README.md#versioning-and-releases) for detailed information about the automated release process using Changesets.

The automated workflow will:
- Detect version changes in package.json
- Publish to GitHub Packages registry
- Create GitHub releases with changelog information
- Handle all publishing steps automatically

### Manual Publishing (Fallback)

If you need to publish manually (not recommended):

```bash
# Ensure you're authenticated to GitHub Packages
npm login --registry=https://npm.pkg.github.com

# Build the package
pnpm build:core

# Publish from the core package directory
cd packages/core
npm publish --access restricted
```

**Note**: Manual publishing bypasses the automated changelog generation and release management. Use the automated process whenever possible.

## TypeScript

The package includes TypeScript definitions for all design tokens and utilities:

```tsx
import type { ColorToken, SpacingToken } from '@a-little-world/little-world-design-system-core';

// Type-safe usage
const color: ColorToken = 'primary'; // ✅ Valid
const invalidColor: ColorToken = 'invalid'; // ❌ TypeScript error
```

## Dependencies

This package has minimal dependencies to avoid conflicts:
- `typescript` - For type definitions
- No runtime dependencies (pure design tokens and utilities) 