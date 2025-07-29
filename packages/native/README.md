# @a-little-world/little-world-design-system-native

React Native components for the Little World Design System.

## Installation

```bash
npm install @a-little-world/little-world-design-system-native
```

## Usage

```tsx
import { Button, Text } from '@a-little-world/little-world-design-system-native';

export default function App() {
  return (
    <Button variant="primary">
      <Text>Hello World</Text>
    </Button>
  );
}
```

## Local Development & Testing

The native package includes a test app for local development and testing of components.

### ⚠️ Important: Build from Root

**Always build and publish from the root of the monorepo, never from individual package directories.**

✅ **Correct (from root):**
```bash
pnpm build:native
pnpm --filter=@a-little-world/little-world-design-system-native publish
```

❌ **Incorrect (from package directory):**
```bash
cd packages/native
npm run build
npm publish  # This will break workspace dependencies!
```

### Prerequisites

- [Expo CLI](https://docs.expo.dev/get-started/installation/) installed globally
- [Expo Go](https://expo.dev/client) app installed on your mobile device
- iOS Simulator (for iOS testing) or Android Emulator (for Android testing)

### Quick Start

From the root of the monorepo:

```bash
# Build and setup test app (builds core + native, creates tarballs, installs in testApp)
pnpm native:setup

# Start Expo development server
pnpm native:start

# Or run Storybook for native components
pnpm storybook:native
```

### What the setup script does:

1. **Builds core package** - Compiles design tokens and utilities
2. **Builds native package** - Compiles React Native components  
3. **Creates tarballs** - Packages both libraries for local installation
4. **Installs in testApp** - Installs the local packages in the Expo test app

### Development Workflow

1. **Make changes** to core or native packages
2. **Run setup** - `pnpm native:setup` (rebuilds and reinstalls)
3. **Start app** - `pnpm native:start` (starts Expo dev server)
4. **Test on device** - Scan QR code with Expo Go app
5. **Hot reload** - Changes will automatically reload in the app

### Manual Setup (Alternative)

If you prefer to work directly in the testApp directory:

```bash
cd packages/native/testApp
npm install
npm start  # Start Expo app
npm run storybook  # Start Storybook
```

### Troubleshooting

- **Clear cache**: Use `npx expo start -c` to clear Expo cache
- **Reset testApp**: Delete `packages/native/testApp/node_modules` and run setup again
- **Version conflicts**: The setup script uses wildcards to automatically find the latest tarball versions

## Storybook

The native package includes Storybook for component development and testing:

```bash
# From root
pnpm storybook:native

# Or from testApp directory
cd packages/native/testApp
npm run storybook
```

## Building

```bash
# Build the native package
pnpm build:native

# Or from the native package directory
cd packages/native
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
pnpm build:native

# Publish from the native package directory
cd packages/native
npm publish --access restricted
```

**Note**: Manual publishing bypasses the automated changelog generation and release management. Use the automated process whenever possible.

## Dependencies

This package depends on:
- `@a-little-world/little-world-design-system-core` - Core design tokens and utilities
- `react-native` - React Native framework
- `styled-components` - Styling library
