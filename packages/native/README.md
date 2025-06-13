
# RN Storybook (ondevice)

## Local Testing & Development

To test the Native Design system we use expo and storybook, which allows the visualisation and interaction of all elements and components. 

All local testing related code can be found in `./testApp`. When you want to run the test app or storybook, you need to do the following:
```
cd ./testApp
npm install
```

In order for the testApp to access the src folder, we use a symlink that can be updated by running `npm run prestorybook`

You can then run `npm storybook` to start the storybook app or `npm start` to start your expo app.

```sh
# either
npm storybook

# ios
npm storybook:ios

# android
npm storybook:android
```

If you add new stories you either need to have the watcher running or run the stories loader

To update the stories one time

```sh
npm storybook-generate
```

# Web

Start react native web storybook:

```
npm storybook:web
```

build react native web storybook:

```sh
npm build-storybook
```

## Developing locally with the core package

The native Design System relies on share elements and types from the core design system. You may need to make changes in the core package. In order to test local `core` changes in the native package locally there are two main approaches:

1. **Using file references (Recommended for most cases)**
   - In your `packages/native/package.json`, change the core dependency to:
     ```json
     "@a-little-world/little-world-design-system-core": "file:../core"
     ```
   - This method requires running `npm run build` in the core package each time you make changes
   - Run `npm install` in the native package after making this change

2. **Using npm link (Alternative approach)**
   - See the detailed npm link instructions in the section below
   - This method is useful when you need to test the package in an external project

### Npm linking method (Not optimal, option 1 above is recommended)

This package depends on `@a-little-world/little-world-design-system-core`. To set up local development:

1. First, ensure the core package is built and linked:
   ```bash
   cd packages/core
   npm install
   npm run build
   npm link
   ```

2. In the native package directory:
   ```bash
   cd packages/native
   npm install
   npm link @a-little-world/little-world-design-system-core
   npm run build
   npm link
   ```

3. In your local React Native project:
   ```bash
   npm link @a-little-world/little-world-design-system-native
   ```

4. To watch for changes during development:
   ```bash
   cd packages/native
   npm run watch
   ```

5. To unlink when done:
   ```bash
   # In your project
   npm unlink @a-little-world/little-world-design-system-native
   
   # In the native package directory
   npm unlink
   ```

Note: When using the native package locally, you may need to restart your Metro bundler and rebuild your app to see changes.
