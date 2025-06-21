# Little World Design System

Design system for Web Little World applications

This system utilises [Radix Primitives](https://github.com/radix-ui/primitives) to ensure components are accessible and customizable.

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

## Local Development

This package depends on `@a-little-world/little-world-design-system-core`. To set up local development:

1. First, ensure the core package is built and linked:
   ```bash
   cd packages/core
   npm install
   npm run build
   npm link
   ```

2. In the web package directory:
   ```bash
   cd packages/web
   npm install
   npm link @a-little-world/little-world-design-system-core
   npm run build
   npm link
   ```

3. In your local project:
   ```bash
   npm link @a-little-world/little-world-design-system
   ```

4. To watch for changes during development:
   ```bash
   cd packages/web
   npm run watch
   ```

5. To unlink when done:
   ```bash
   # In your project
   npm unlink @a-little-world/little-world-design-system
   
   # In the web package directory
   npm unlink
   ```

## Gotcha's! Going from web to native...

In React Native, when you set minWidth on a component, it doesn't automatically expand beyond that width based on content like it would on the web. The flexbox implementation in React Native is more strict about respecting explicit dimensions.

Recommendation: For most cases: Use flex: 1 when you want a component to fill its parent. Use `max-width` to limit the size. Otherwise use an explicit `width` and manage the content. 

## Contributing

Check [contribution guidelines](CONTRIBUTING.md).

In order to release a new version of this package:

1. Bump the version in the `package.json` and run `npm install` to update the package-lock.json in the relevant release branch.
2. Ensure your release branch has been tested, approved and merged into `main`.
3. Go to the "Draft a release" [section](https://github.com/a-little-world/little-world-design-system/releases/new) of the repo.
4. Create a tag that relates to the new version.
5. Include the release version in the title and give an appropriate description
6. Hit the "publish release" button which will trigger a github action that will publish the new version to npm.
