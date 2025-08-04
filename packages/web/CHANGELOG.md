# @a-little-world/little-world-design-system

## 2.2.2

### Patch Changes

- Export ThemeWeb type

## 2.2.1

### Patch Changes

- Fix theme provider in web package and also web package tests

## 2.2.0

### Minor Changes

- Fix issues with loading fonts in web environments

### Patch Changes

- Updated dependencies
  - @a-little-world/little-world-design-system-core@1.2.0

## 2.1.0

### Minor Changes

- **Illustration Components**: Enhanced illustration component system with improved SVG processing and better component structure
- **Icon Components**: Updated icon component creation utilities for better performance and consistency
- **Theme Integration**: Improved theme handling and integration across components
- **SVG Utilities**: Enhanced SVG processing utilities for better web rendering
- **Component Exports**: Updated component exports to include latest illustration and icon improvements

### Patch Changes

- Updated dependencies
  - @a-little-world/little-world-design-system-core@1.1.5

## 2.0.3

### Patch Changes

- Fix patch build issue with incorrect reference to workspaces
- Updated dependencies
  - @a-little-world/little-world-design-system-core@1.1.4

## 2.0.2

### Patch Changes

- Updated dependencies
  - @a-little-world/little-world-design-system-core@1.1.3

## 2.0.1

### Patch Changes

## 📚 Documentation Improvements

- **Storybook MDX**: Enhanced theme accessibility in MDX documentation files
- **Design Tokens**: Added comprehensive documentation for spacing, radius, and breakpoints
- **Color System**: Improved color token documentation with proper theme implementation
- **Typography**: Updated typography documentation with accurate font size values from core

## 🔧 Technical Improvements

- **Theme Integration**: Fixed MDX files to use theme directly instead of tokensPixelated
- **Documentation Structure**: Reorganized foundation documentation for better discoverability
- **Implementation Examples**: Updated all code examples to use proper styled-components theme pattern

- Updated dependencies
  - @a-little-world/little-world-design-system-core@1.1.2

## 2.0.0

### Major Changes

- bd7e9d2: # BREAKING: Monorepo Refactor - Core Package Extraction

  ## What Changed

  - **Extracted shared design tokens and types** into a new `@a-little-world/little-world-design-system-core` package
  - **Restructured the design system** into a monorepo with separate packages for web, native, and core
  - **Updated styled-components** from v5 to v6 for better compatibility
  - **Added Toast component** to the core package

  ## Why This Change Was Made

  - **Better separation of concerns** - Core tokens and types are now reusable across web and native
  - **Improved maintainability** - Shared code is centralized and versioned independently
  - **Enhanced developer experience** - Clear package boundaries and dependencies
  - **New functionality** - Toast component provides consistent notification system

  ## How to Update Your Code

  ### For Web Applications

  1. **Update your package.json**:

     ```json
     {
       "dependencies": {
         "@a-little-world/little-world-design-system": "^2.0.0",
         "@a-little-world/little-world-design-system-core": "^1.1.0"
       }
     }
     ```

  2. **Update imports** (if you were importing tokens directly):

     ```typescript
     // OLD
     import {
       colors,
       spacing,
     } from "@a-little-world/little-world-design-system";

     // NEW
     import {
       colors,
       spacing,
     } from "@a-little-world/little-world-design-system-core";
     ```

  3. **Component imports remain the same**:
     ```typescript
     import { Button, Text } from "@a-little-world/little-world-design-system";
     ```

  ### For React Native Applications

  1. **Add the native package**:

     ```json
     {
       "dependencies": {
         "@a-little-world/little-world-design-system-native": "^0.1.0",
         "@a-little-world/little-world-design-system-core": "^1.1.0"
       }
     }
     ```

  2. **Import components**:
     ```typescript
     import {
       Button,
       Text,
     } from "@a-little-world/little-world-design-system-native";
     ```

  ## Migration Checklist

  - [ ] Update package.json dependencies
  - [ ] Update any direct token imports to use the core package
  - [ ] Test your application thoroughly
  - [ ] Update any build configurations if needed

  ## Support

  If you encounter any issues during migration, please check the [documentation](https://github.com/a-little-world/little-world-design-system) or create an issue.

### Patch Changes

- Updated dependencies [bd7e9d2]
  - @a-little-world/little-world-design-system-core@1.1.0
