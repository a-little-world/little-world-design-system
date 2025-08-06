# @a-little-world/little-world-design-system

## 2.3.0

### Minor Changes

- **ESLint Integration**: Added comprehensive ESLint configuration with TypeScript support, React hooks rules, and accessibility guidelines
- **Code Quality**: Implemented strict linting rules for better code consistency and maintainability across all components
- **Type Safety**: Enhanced TypeScript configurations with proper project references and type checking
- **Component Improvements**: Enhanced various component implementations with better styling and functionality

### Patch Changes

- **Utility Consolidation**: Removed duplicate utility files (`isValidUrl.ts`, `validDomains.ts`) and consolidated them in the core package
- **Theme System**: Fixed theme provider issues and improved browser API handling with proper SSR support
- **Component Styling**: Enhanced component styling consistency and improved theme integration
- **Build System**: Updated build configurations for better cross-platform compatibility
- **Dependencies**: Updated and optimized package dependencies for improved performance and security
- Updated dependencies
  - @a-little-world/little-world-design-system-core@1.3.0

## 2.2.9

### Patch Changes

- Ensure web Icons take className prop and add surface.quaternary
- Updated dependencies
  - @a-little-world/little-world-design-system-core@1.2.3

## 2.2.8

### Patch Changes

- Move theme declaration into index file
- Improve styling of AccordionContent
- Remove redundant copy-declaration scripts

## 2.2.7

### Patch Changes

- Fix theme type declaration import in index file (Unsuccessful)

## 2.2.6

### Patch Changes

- Fix theme type declaration import in index file (Unsuccessful)

## 2.2.5

### Patch Changes

- Fix theme type declaration import in theme file (Unsuccessful)

## 2.2.4

### Patch Changes

- **TypeScript Integration**: Fixed styled-components theme type declarations by ensuring theme.d.ts is included in build output, resolving "Property 'color' does not exist on type 'DefaultTheme'" errors in consuming applications
- **Accordion Component**: Added ContentWrapper prop for flexible content styling - consumers can now pass custom styled components to wrap accordion content
- **Icon System**: Enhanced icon gradient system with improved diagonal gradient support for better visual consistency
- **SVG Processing**: Improved SVG gradient definitions with better universal applicability across different icon shapes
- **Accordion Component**: Fixed TypeScript issues with Accordion component by removing required type prop dependency
- Updated dependencies
  - @a-little-world/little-world-design-system-core@1.2.2

## 2.2.3

### Patch Changes

- **Theme System**: Fixed critical theme provider issues that were causing undefined theme objects and runtime errors in consuming applications
- **Dependencies**: Moved react-router and styled-components to peer dependencies to prevent version conflicts and bundling issues
- **Accordion Component**: Fixed TypeScript issues with Accordion component by removing required type prop dependency
- **Icon System**: Improved gradient system with better universal gradient support for square icons
- **Build Process**: Enhanced build configuration and dependency management
- **Component Exports**: Added ThemeWeb type export for better TypeScript support
- **Testing**: Improved test configuration and setup for better reliability

### Updated Dependencies

- @a-little-world/little-world-design-system-core@1.2.1

## 2.2.2

### Patch Changes

- **Type Exports**: Added ThemeWeb type export for better TypeScript integration
- **Component Improvements**: Enhanced various component implementations and exports

## 2.2.1

### Patch Changes

- **Theme Provider**: Fixed theme provider issues in web package that were causing undefined theme objects
- **Testing**: Resolved test configuration issues and improved test setup
- **Component Stability**: Enhanced component stability and error handling

## 2.2.0

### Minor Changes

- **Font Loading**: Fixed issues with loading fonts in web environments by implementing conditional font exports
- **Theme Integration**: Improved theme construction to properly preserve breakpoints, radius, and spacing properties

### Patch Changes

- **Build System**: Enhanced build process for better cross-platform compatibility
- **Package Structure**: Improved package organization and exports

### Updated Dependencies

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
     } from '@a-little-world/little-world-design-system';

     // NEW
     import {
       colors,
       spacing,
     } from '@a-little-world/little-world-design-system-core';
     ```

  3. **Component imports remain the same**:
     ```typescript
     import { Button, Text } from '@a-little-world/little-world-design-system';
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
     } from '@a-little-world/little-world-design-system-native';
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
