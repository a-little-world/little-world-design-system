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
pnpm build:core
# or
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

# Build web Storybook for production
pnpm storybook:web:build
```

### Running Native App

The native testApp is an Expo React Native application that allows you to test the native components in a real mobile environment.

#### Prerequisites

- [Expo CLI](https://docs.expo.dev/get-started/installation/) installed globally
- [Expo Go](https://expo.dev/client) app installed on your mobile device
- iOS Simulator (for iOS testing) or Android Emulator (for Android testing)

#### Setup and Testing

```bash
# Build core and native packages, create tarballs, and install in testApp
pnpm native:testapp:setup

# Start the Expo development server
pnpm native:start

# Or run Storybook for native components
pnpm storybook:native
```

#### What the setup script does:

1. **Builds core package** - Compiles design tokens and utilities
2. **Builds native package** - Compiles React Native components
3. **Creates tarballs** - Packages both libraries for local installation
4. **Installs in testApp** - Installs the local packages in the Expo test app

#### Testing Workflow

1. **Make changes** to core or native packages
2. **Run setup** - `pnpm native:testapp:setup` (rebuilds and reinstalls)
3. **Start app** - `pnpm native:start` (starts Expo dev server)
4. **Test on device** - Scan QR code with Expo Go app
5. **Hot reload** - Changes will automatically reload in the app

#### Troubleshooting

- **Clear cache**: Use `npx expo start -c` to clear Expo cache
- **Reset testApp**: Delete `packages/native/testApp/node_modules` and run setup again
- **Version conflicts**: The setup script uses wildcards to automatically find the latest tarball versions

### Versioning and Releases

This monorepo uses [Changesets](https://github.com/changesets/changesets) for version management and automated releases. Changesets allows you to manage versioning for multiple packages independently while maintaining a cohesive release process.

## Understanding Changesets

Changesets work by creating a "changeset" file that describes what changes you've made and how they should be versioned. When you're ready to release, these changesets are consumed to automatically bump versions and create release notes.

## Creating Changesets

### 1. Create a Changeset

After making changes to any package, create a changeset:

```bash
pnpm changeset
```

This will:
- Show you which packages have been modified
- Ask you to select which packages the changes affect
- Ask you to choose the type of version bump (patch, minor, major)
- Ask you to write a description of the changes

### 2. Version Bump Types

Choose the appropriate version bump based on the [Semantic Versioning](https://semver.org/) specification:

- **Patch** (`0.0.x`): Bug fixes and minor changes that don't break existing functionality
- **Minor** (`0.x.0`): New features added in a backward-compatible manner
- **Major** (`x.0.0`): Breaking changes that require consumers to update their code

### Examples of Changeset Types:

**Patch (0.0.x):**
- Bug fixes
- Documentation updates
- Performance improvements
- Internal refactoring

**Minor (0.x.0):**
- New components added
- New features to existing components
- New utilities or helpers
- New design tokens

**Major (x.0.0):**
- Breaking changes to component APIs
- Removed components or features
- Changes to design tokens that break existing implementations
- Major architectural changes

## Managing Releases

### 1. Version Packages

When you're ready to create a release, version the packages:

```bash
pnpm version-packages
```

This will:
- Read all changeset files
- Determine the new version for each package
- Update package.json files
- Generate a CHANGELOG.md for each package
- Remove the consumed changeset files

### Preview Versions Before Release

Before pushing to GitHub, you can preview what versions will be created:

```bash
# Preview what versions will be created (doesn't apply changes)
pnpm version-packages:preview
```

This will show you:
- Which packages will be versioned
- What the new versions will be
- What changes will be included

**Workflow for Safe Releases:**

```bash
# 1. Create changesets
pnpm changeset

# 2. Preview versions (optional but recommended)
pnpm version-packages:preview

# 3. If versions look correct, apply them
pnpm version-packages

# 4. Review the changes
git diff

# 5. Commit and push (triggers automated release)
git add .
git commit -m "chore: version packages"
git push origin main
```

### 2. Review and Commit

After running `version-packages`:
1. Review the generated changes
2. Commit the version bumps and changelog updates
3. Push to your repository

### 3. Publish Packages

The GitHub Action workflow automatically handles publishing when you push to the `main` branch with changesets. No manual publishing is required.

**Note:** The `pnpm release` command is no longer needed since GitHub Actions handles the entire release process automatically.

## Individual Package Releases

You can release individual packages by creating changesets that only affect specific packages:

### Release Only Core Package

```bash
# Create changeset for core only
pnpm changeset
# Select only @a-little-world/little-world-design-system-core
# Choose version bump type
# Write description

# Version and release
pnpm version-packages
```

### Release Only Native Package

```bash
# Create changeset for native only
pnpm changeset
# Select only @a-little-world/little-world-design-system-native
# Choose version bump type
# Write description

# Version and release
pnpm version-packages
```

## Package Publishing Configuration

### Core Package
- **Registry**: GitHub Packages (`@a-little-world/little-world-design-system-core`)
- **Access**: Private
- **Publish Config**: Configured in `packages/core/package.json`

### Web Package
- **Registry**: GitHub Packages (`@a-little-world/little-world-design-system`)
- **Access**: Private
- **Publish Config**: Configured in `packages/web/package.json`

### Native Package
- **Registry**: GitHub Packages (`@a-little-world/little-world-design-system-native`)
- **Access**: Private
- **Publish Config**: Configured in `packages/native/package.json`

## Workflow Examples

### Example 1: Bug Fix Release

```bash
# 1. Make your bug fix changes
# 2. Create changeset
pnpm changeset
# Select affected packages
# Choose "patch" version bump
# Write: "Fix button hover state not working in Safari"

# 3. Commit changes and changeset
git add .
git commit -m "fix: button hover state in Safari"

# 4. Push to main (triggers automated release)
git push origin main
```

### Example 2: New Feature Release

```bash
# 1. Add new component
# 2. Create changeset
pnpm changeset
# Select affected packages
# Choose "minor" version bump
# Write: "Add new Card component with variants"

# 3. Commit changes and changeset
git add .
git commit -m "feat: add new Card component"

# 4. Push to main (triggers automated release)
git push origin main
```

### Example 3: Breaking Change Release

```bash
# 1. Make breaking changes
# 2. Create changeset
pnpm changeset
# Select affected packages
# Choose "major" version bump
# Write: "BREAKING: Button component API changed, onClick now required"

# 3. Commit changes and changeset
git add .
git commit -m "feat!: breaking change to Button API"

# 4. Push to main (triggers automated release)
git push origin main
```

## Best Practices

1. **Create changesets immediately** after making changes, not at the end of development
2. **Be descriptive** in your changeset messages - they become your changelog
3. **Use conventional commits** for your git commits to maintain consistency
4. **Test thoroughly** before creating a release
5. **Review generated changelogs** before publishing
6. **Use semantic versioning** correctly to help consumers understand the impact of updates

## Troubleshooting

### Changeset Not Detecting Changes
If changesets aren't detecting your changes:
1. Make sure you've committed your changes to git
2. Check that you're in the correct directory
3. Verify the package.json files are properly configured

### Version Conflicts
If you encounter version conflicts:
1. Check for existing changeset files
2. Ensure all changesets are committed
3. Run `pnpm clean` and rebuild if necessary

### Publishing Issues
If publishing fails:
1. Check your npm authentication
2. Verify package.json publishConfig settings
3. Ensure you have the correct permissions for the registry

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

Currently available react components are [listed here](https://a-little-world.github.io/little-world-design-system/?path=/docs/components-switch--docs). Individual documentation for each is listed on its own page.

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

## Initial Publishing

For new packages that haven't been published yet (core and native), use the initial publishing script:

```bash
# Authenticate to GitHub Packages first
npm login --registry=https://npm.pkg.github.com

# Run the initial publishing script
pnpm publish:initial
```

This script will:
- Check authentication to GitHub Packages
- Build all packages
- Check if packages already exist (skips if they do)
- Publish new packages to GitHub Packages

## GitHub Releases Integration

The monorepo includes automated GitHub releases through GitHub Actions. When you push changes to the `main` branch with changesets, the workflow will:

1. **Build all packages**
2. **Version packages** based on changesets
3. **Publish to GitHub Packages** (npm)
4. **Create GitHub releases** with detailed changelogs

### Release Workflow Options

**Option 1: Direct Release (Current)**
- Push to main → Automatic versioning and publishing
- Fastest workflow, good for frequent releases

**Option 2: Release Pull Request (Alternative)**
- Push to main → Creates PR with version changes
- Review and approve PR → Automatic publishing
- More control, good for critical releases

To switch to Release PR workflow, the GitHub Action is already configured to create PRs when changesets are detected.

### Setting up GitHub Actions

1. **Add GitHub Secrets** in your repository settings:
   - `NODE_AUTH_TOKEN`: Your GitHub Personal Access Token with `write:packages` scope

2. **Enable GitHub Actions** for the repository

3. **Push to main** with changesets to trigger releases

### Release Structure

Each release will show:
- **Package versions** that were published
- **Detailed changelogs** from each package's CHANGELOG.md
- **Clear descriptions** of what changed in each package

This gives you a clean, professional release history that clearly shows what changed in each package, even though they're all in one monorepo.
