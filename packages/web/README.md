# @a-little-world/little-world-design-system

Web components for the Little World Design System.

This system utilises [Radix Primitives](https://github.com/radix-ui/primitives) to ensure components are accessible and customizable.

## Installation

```bash
npm install @a-little-world/little-world-design-system
```

## Usage

```tsx
import { Button, Text } from '@a-little-world/little-world-design-system';

export default function App() {
  return (
    <Button variant="primary">
      <Text>Hello World</Text>
    </Button>
  );
}
```

## Fonts

Ensure that you have the required fonts available by including them in your HTML file:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300;600;700&family=Work+Sans:wght@700&display=swap"
  rel="stylesheet"
/>
```

## Local Development

### Quick Start

From the root of the monorepo:

```bash
# Build the web package
pnpm build:web

# Start Storybook for development
pnpm storybook:web

# Build Storybook for production
pnpm storybook:web:build
```

### Development Workflow

1. **Make changes** to web components
2. **Build package** - `pnpm build:web`
3. **Test in Storybook** - `pnpm storybook:web`
4. **Preview changes** - View components in Storybook at http://localhost:6006

### Manual Setup

If you prefer to work directly in the web package directory:

```bash
cd packages/web
npm install
npm run build
npm run storybook
```

## Storybook

The web package includes Storybook for component development and testing:

```bash
# From root
pnpm storybook:web

# Or from web package directory
cd packages/web
npm run storybook
```

## Building

```bash
# Build the web package
pnpm build:web

# Or from the web package directory
cd packages/web
npm run build
```

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
pnpm build:web

# Publish from the web package directory
cd packages/web
npm publish --access restricted
```

**Note**: Manual publishing bypasses the automated changelog generation and release management. Use the automated process whenever possible.

## Dependencies

This package depends on:
- `@a-little-world/little-world-design-system-core` - Core design tokens and utilities
- `react` - React framework
- `styled-components` - Styling library
- `@radix-ui/react-*` - Radix UI primitives for accessibility

## Gotcha's! Going from web to native...

In React Native, when you set `minWidth` on a component, it doesn't automatically expand beyond that width based on content like it would on the web. The flexbox implementation in React Native is more strict about respecting explicit dimensions.

**Recommendation**: For most cases:
- Use `flex: 1` when you want a component to fill its parent
- Use `max-width` to limit the size
- Otherwise use an explicit `width` and manage the content

## Contributing

Check [contribution guidelines](CONTRIBUTING.md).

## Versioning and Releases

This package uses [Changesets](https://github.com/changesets/changesets) for version management. See the root README for detailed information about the release process.

**Note**: The manual release process described below is deprecated. Use Changesets instead.

### Deprecated Manual Release Process

~~In order to release a new version of this package:~~

1. ~~Bump the version in the `package.json` and run `npm install` to update the package-lock.json in the relevant release branch.~~
2. ~~Ensure your release branch has been tested, approved and merged into `main`.~~
3. ~~Go to the "Draft a release" [section](https://github.com/a-little-world/little-world-design-system/releases/new) of the repo.~~
4. ~~Create a tag that relates to the new version.~~
5. ~~Include the release version in the title and give an appropriate description~~
6. ~~Hit the "publish release" button which will trigger a github action that will publish the new version to npm.~~
