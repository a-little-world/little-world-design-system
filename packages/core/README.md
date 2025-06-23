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
pnpm native:testapp:setup
```

### Development Workflow

1. **Make changes** to design tokens or utilities
2. **Build core** - `pnpm build:core`
3. **Test in native** - `pnpm native:testapp:setup` (rebuilds and tests)
4. **Test in web** - `pnpm storybook:web` (if web components use core tokens)

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