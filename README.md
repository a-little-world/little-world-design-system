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

### Local Development Options

There are two main approaches for local development:

1. **Using file references (Recommended for most cases)**
   - In your `packages/web/package.json`, change the core dependency to:
     ```json
     "@a-little-world/little-world-design-system-core": "file:../core"
     ```
   - This method requires running `npm run build` in the core package each time you make changes
   - Run `npm install` in the web package after making this change

2. **Using npm link (Alternative approach)**
   - See the detailed npm link instructions in the section below
   - This method is useful when you need to test the package in an external project

### Local Development with npm link

This design system is structured as a monorepo with three main packages:
- `@a-little-world/little-world-design-system-core`: Core design tokens and utilities
- `@a-little-world/little-world-design-system`: Web implementation
- `@a-little-world/little-world-design-system-native`: React Native implementation

The web and native packages both depend on the core package. Here's how to set up local development:

1. First, build the core package:
   ```bash
   cd packages/core
   npm install
   npm run build
   ```

2. Link the core package:
   ```bash
   cd packages/core
   npm link
   ```

3. In your local project where you want to use the design system:
   ```bash
   npm link @a-little-world/little-world-design-system-core
   ```

4. For web development:
   ```bash
   cd packages/web
   npm install
   npm link @a-little-world/little-world-design-system-core
   npm run build
   npm link
   ```

5. For native development:
   ```bash
   cd packages/native
   npm install
   npm link @a-little-world/little-world-design-system-core
   npm run build
   npm link
   ```

6. In your local project:
   ```bash
   # For web projects
   npm link @a-little-world/little-world-design-system
   
   # For native projects
   npm link @a-little-world/little-world-design-system-native
   ```

Important notes:
- Always run the watch command in the core package when making changes
- If you make changes to the core package, you'll need to rebuild the dependent packages
- To unlink packages, use `npm unlink` in both the package directory and your project
- Make sure to use the correct version of React in your project that matches the design system's peer dependencies

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
