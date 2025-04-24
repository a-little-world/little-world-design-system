# Little World Design System

This repository contains the design system for Little World applications.

## Package Structure

- `packages/core`: Core design tokens, types, and utilities (platform-agnostic)
- `packages/web`: Web implementation of the design system using styled-components
- `packages/native`: React Native implementation of the design system

## Development Setup

### Automated Setup

Run the setup script to install and build all packages:

```bash
./setup.sh
```

### Manual Setup

If you prefer to set up manually, follow these steps:

1. Install and build the core package:
   ```bash
   cd packages/core
   npm install
   npm run build
   ```

2. Install and build the core package:
   ```bash
   cd packages/web
   npm install
   npm run build
   ```

3. Install dependencies for the native package:
   ```bash
   cd packages/native
   npm install
   ```

## Development Workflow

### Running Storybook

To run the React Native Storybook:

```bash
cd packages/native
npm run storybook
```

### Working on Local Packages

When making changes to the core or core packages:

1. Keep a terminal window running with the watch command:
   ```bash
   # For core
   cd packages/core
   npm run watch
   
   # For web
   cd packages/web
   npm run watch
   ```

2. Restart the Storybook server after making significant changes to ensure they're picked up.

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
