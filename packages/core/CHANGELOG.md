# @a-little-world/little-world-design-system-core

## 1.9.0

### Minor Changes

- Add sizes to Checkbox props

## 1.8.0

### Minor Changes

- Toast api updates
  - Header bar will now be hidden when no headline is supplied
  - The close icon can now be hidden

## 1.7.0

### Minor Changes

- Add new Radio Group type

## 1.6.0

### Minor Changes

- Add loading sizes and types
- Add shareScreen Icon

## 1.5.0

### Minor Changes

- Expo 54 upgrades

## 1.4.4

### Patch Changes

- Add `dim` color to surface tokens
- Added `surface.dim` color token for both light and dark themes
- `dim` provides a theme-agnostic darker surface color (second darkest in light mode, second lightest in dark mode)
- Updated type definitions to include `dim: string` in the surface interface
- Add new icons

## 1.4.3

### Patch Changes

- Add onlyCountries prop to TextInput
- Add color.surface.elavated to tokens
- Tweak dark mode palette

## 1.4.2

### Patch Changes

- Update color tokens for improved contrast and accessibility
  - Update surface.contrast color from orange10 to white
  - Update surface.accent color from orange50 to gray65
  - Update text.link color from blue20 to blue10
- Add additional spacing tokens (xxxlarge, xxxxlarge)

## 1.4.1

### Patch Changes

- Update dark mode palette
- Remove data-name from logo svg

## 1.4.0

### Minor Changes

- Upgrade to React 19
- Add status related colors to tokens
- Add yellow color range

## 1.3.4

### Patch Changes

- Ensure font-family naming is aligned across web & native
- Add WavyBlock illustration

## 1.3.3

### Patch Changes

- Fix issue with publishing error

## 1.3.2

### Patch Changes

- Fix some dark mode colors

## 1.3.1

### Patch Changes

- **Improve Svg processing script**: Ensure that nodes with both stroke and fill are handled correctly
- **Add setMode to ThemeContentType**
- **Add lineHeight to certain Text types**

## 1.3.0

### Minor Changes

- **ESLint Integration**: Added comprehensive ESLint configuration with TypeScript support, React hooks rules, and accessibility guidelines
- **Code Quality**: Implemented strict linting rules for better code consistency and maintainability
- **Type Safety**: Enhanced TypeScript configurations with proper project references and type checking

### Patch Changes

- **Type Definitions**: Enhanced type definitions for better TypeScript support across all components

## 1.2.3

### Patch Changes

- Ensure web Icons take className prop and add surface.quaternary

## 1.2.2

### Patch Changes

- **Icon System**: Add new Icons and Illustrations

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
