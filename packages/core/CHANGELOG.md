# @a-little-world/little-world-design-system-core

## 1.1.0

### Minor Changes

- 1d7820c: # BREAKING: Monorepo Refactor - Core Package Extraction

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
