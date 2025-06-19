# Little World Design System

A monorepo containing the Little World design system packages.

## Packages

- **`@a-little-world/little-world-design-system-core`** - Core design tokens and utilities
- **`@a-little-world/little-world-design-system`** - Web components and Storybook
- **`@a-little-world/little-world-design-system-native`** - React Native components

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9.0.0+

### Installation

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build
```

### Development

```bash
# Start development mode for all packages
pnpm dev

# Build specific package
pnpm --filter @a-little-world/little-world-design-system-core build

# Run tests
pnpm test
```

### Running Storybook

```bash
# Web Storybook (port 6006)
pnpm storybook:web

# Native Storybook
pnpm storybook:native

# Native Storybook on specific platforms
pnpm storybook:native:ios
pnpm storybook:native:android

# Build web Storybook for production
pnpm storybook:web:build
```

### Running Native App

```bash
# Start native app (Expo development server)
pnpm native:start

# Run on specific platforms
pnpm native:ios
pnpm native:android
pnpm native:web
```

### Versioning and Releases

This monorepo uses [Changesets](https://github.com/changesets/changesets) for version management.

```bash
# Create a changeset
pnpm changeset

# Version packages
pnpm version-packages

# Release packages
pnpm release
```

## Package Dependencies

- **Core** has no internal dependencies
- **Web** depends on **Core**
- **Native** depends on **Core**

## Build System

This monorepo uses [Turborepo](https://turbo.build/repo) for build orchestration. The build pipeline ensures dependencies are built in the correct order.

## Workspace Configuration

The workspace is configured using pnpm workspaces with the following structure:

```
packages/
├── core/          # Core design tokens
├── web/           # Web components
└── native/        # React Native components
```

## Development Workflow

### Working on Local Packages

When making changes to packages:

1. Keep a terminal window running with the watch command:
   ```bash
   # For core
   pnpm --filter @a-little-world/little-world-design-system-core watch
   
   # For web
   pnpm --filter @a-little-world/little-world-design-system watch
   ```

2. Restart the Storybook server after making significant changes to ensure they're picked up.

### Local Development

The monorepo uses pnpm workspaces with `workspace:*` references, which automatically handles local package dependencies. No manual linking or file references are needed.

When you make changes to the core package, dependent packages will automatically use the updated version after rebuilding.

## Getting started

### 1. Installing the package and peer dependencies

The design system is currently private to Little World. Make sure to be able to authenticate to Github via SSH and have access to "@a-little-world/little-world-design-system".

`npm i "@a-little-world/little-world-design-system"`

### 2. Using components

Currently available react components are [listed here](https://www.storybook.com). Individual documentation for each is listed on its own page.

Ensure that you have the required fonts available by including them in your html file like so:

```
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300;600;700&family=Work+Sans:wght@700&display=swap"
  rel="stylesheet"
/>
```

## Contributing

Check [contribution guidelines](CONTRIBUTING.md).

In order to release a new version of this package:

1. Bump the version in the `package.json` and run `npm install` to update the package-lock.json in the relevant release branch.
2. Ensure your release branch has been tested, approved and merged into `main`.
3. Go to the "Draft a release" [section](https://github.com/a-little-world/little-world-design-system/releases/new) of the repo.
4. Create a tag that relates to the new version.
5. Include the release version in the title and give an appropriate description
6. Hit the "publish release" button which will trigger a github action that will publish the new version to npm.
