# @a-little-world/little-world-design-system-core

## 1.2.1

### Patch Changes

- **Type Definitions**: Enhanced SVG type definitions for better TypeScript support

## 1.2.0

### Minor Changes

- **Font Loading**: Fixed issues with loading fonts in web environments by implementing conditional font exports
- **Theme Integration**: Improved theme construction to properly preserve breakpoints, radius, and spacing properties
- **Module Resolution**: Resolved circular dependency issues in native package components

### Patch Changes

- **Build System**: Enhanced build process for better cross-platform compatibility
- **Package Structure**: Improved package organization and exports

## 1.1.5

### Patch Changes

- **Illustrations**: Updated and optimized SVG illustrations including brokenChain, laptopWithPhone, livingRoom, questionMarks, and wavyLines
- **Icons**: Enhanced profileChat icon with improved SVG structure
- **Color Tokens**: Refined color system with updated token definitions for better consistency
- **Core Tokens**: Improved core design token structure and organization
- **SVG Processing**: Enhanced SVG generation and processing utilities for better performance

## 1.1.4

### Patch Changes

- Fix patch build issue with incorrect reference to workspaces

## 1.1.3

### Patch Changes

- Add isValidUrl to utils - required for text parser

## 1.1.2

### Patch Changes

- ## 🐛 Bug Fixese
  - **Typography**: Resolved text component styling problems in native package

## 1.1.1

### Changed

- Removed all individual font files, now only variable fonts are included (`SignikaNegative-Variable.ttf`, `WorkSans-Variable.ttf`).
- Updated font exports and usage to use variable fonts for all weights.
- Reduced package size from ~7.7MB to ~4.1MB.
