#!/usr/bin/env node
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'local-packages');
const TEST_APP_DIR = path.join(ROOT, 'packages/native/testApp');

const PACKAGES = {
  core: {
    dir: 'packages/core',
    filter: '@a-little-world/little-world-design-system-core',
    tarballBase: 'a-little-world-little-world-design-system-core',
    consumerName: '@a-little-world/little-world-design-system-core',
  },
  web: {
    dir: 'packages/web',
    filter: '@a-little-world/little-world-design-system',
    tarballBase: 'a-little-world-little-world-design-system',
    consumerName: '@a-little-world/little-world-design-system',
  },
  native: {
    dir: 'packages/native',
    filter: '@a-little-world/little-world-design-system-native',
    tarballBase: 'a-little-world-little-world-design-system-native',
    consumerName: '@a-little-world/little-world-design-system-native',
  },
};

const PROFILES = {
  web: ['core', 'web'],
  native: ['core', 'native'],
  all: ['core', 'web', 'native'],
};

const CONSUMER_DEPENDENCIES = {
  web: ['web'],
  native: ['core', 'native'],
  all: ['core', 'web', 'native'],
};

const args = process.argv.slice(2);
const profileArg = args.find((arg) => !arg.startsWith('-')) ?? 'web';
const installTestApp = args.includes('--install-test-app');
const consumerDirArgIndex = args.indexOf('--consumer-dir');
const consumerDir =
  consumerDirArgIndex >= 0 ? args[consumerDirArgIndex + 1] : undefined;

if (!PROFILES[profileArg]) {
  console.error(
    `Unknown profile "${profileArg}". Use one of: ${Object.keys(PROFILES).join(', ')}`,
  );
  process.exit(1);
}

if (consumerDirArgIndex >= 0 && !consumerDir) {
  console.error('--consumer-dir requires a path to the consuming app.');
  process.exit(1);
}

const selectedKeys = PROFILES[profileArg];
const selectedPackages = selectedKeys.map((key) => PACKAGES[key]);

function run(command, cwd = ROOT) {
  console.log(`\n> ${command}`);
  execSync(command, { cwd, stdio: 'inherit' });
}

function readPackageVersion(packageDir) {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(ROOT, packageDir, 'package.json'), 'utf8'),
  );
  return packageJson.version;
}

function findLatestTarball(tarballBase) {
  const prefix = `${tarballBase}-`;
  const semverPattern = /^\d+\.\d+\.\d+\.tgz$/;

  const tarballs = fs
    .readdirSync(OUT_DIR)
    .filter((file) => {
      if (!file.startsWith(prefix) || !file.endsWith('.tgz')) {
        return false;
      }

      return semverPattern.test(file.slice(prefix.length));
    })
    .sort();

  if (tarballs.length === 0) {
    throw new Error(`No tarball found for ${tarballBase} in ${OUT_DIR}`);
  }

  return tarballs.at(-1);
}

function copyStableTarball(tarballBase) {
  const latestTarball = findLatestTarball(tarballBase);
  const stableTarball = `${tarballBase}.tgz`;
  fs.copyFileSync(
    path.join(OUT_DIR, latestTarball),
    path.join(OUT_DIR, stableTarball),
  );
  return stableTarball;
}

function readTarballPackageName(tarballPath) {
  const output = execSync(`tar -xOf "${tarballPath}" package/package.json`, {
    encoding: 'utf8',
  });
  return JSON.parse(output).name;
}

function verifyTarball(tarballPath, expectedName) {
  if (!fs.existsSync(tarballPath)) {
    throw new Error(`Tarball not found: ${tarballPath}`);
  }

  const stats = fs.statSync(tarballPath);
  if (stats.size === 0) {
    throw new Error(`Tarball is empty: ${tarballPath}`);
  }

  const packageName = readTarballPackageName(tarballPath);
  if (packageName !== expectedName) {
    throw new Error(
      `Tarball ${tarballPath} contains ${packageName}, expected ${expectedName}`,
    );
  }
}

function copyToDirectory(targetDir, stableTarballs) {
  fs.mkdirSync(targetDir, { recursive: true });

  for (const stableTarball of stableTarballs) {
    fs.copyFileSync(
      path.join(OUT_DIR, stableTarball),
      path.join(targetDir, stableTarball),
    );
  }
}

fs.mkdirSync(OUT_DIR, { recursive: true });

console.log(`Packing profile: ${profileArg}`);
console.log(`Output directory: ${OUT_DIR}`);

for (const pkg of selectedPackages) {
  run(`pnpm --filter=${pkg.filter} build`);
}

for (const pkg of selectedPackages) {
  run(`pnpm pack --pack-destination "${OUT_DIR}"`, path.join(ROOT, pkg.dir));
}

const stableTarballs = selectedPackages.map((pkg) =>
  copyStableTarball(pkg.tarballBase),
);

for (const [index, pkg] of selectedPackages.entries()) {
  verifyTarball(
    path.join(OUT_DIR, stableTarballs[index]),
    pkg.consumerName,
  );
}

const consumerKeys = CONSUMER_DEPENDENCIES[profileArg];
const consumerPackages = consumerKeys.map((key) => PACKAGES[key]);

if (consumerDir) {
  const resolvedConsumerDir = path.resolve(ROOT, consumerDir);
  const prebuildDir = path.join(resolvedConsumerDir, 'prebuild');
  const consumerTarballs = consumerPackages.map(
    (pkg) => `${pkg.tarballBase}.tgz`,
  );
  copyToDirectory(prebuildDir, consumerTarballs);
  console.log(`\nCopied web tarball to ${prebuildDir}`);
}

if (installTestApp) {
  if (!selectedKeys.includes('native')) {
    console.error('--install-test-app requires the native profile.');
    process.exit(1);
  }

  copyToDirectory(TEST_APP_DIR, stableTarballs);
  run('pnpm install --ignore-workspace', TEST_APP_DIR);
}

const relativeOutDir = path.relative(ROOT, OUT_DIR);

console.log('\n── Tarballs created ──\n');
for (const [index, pkg] of selectedPackages.entries()) {
  const version = readPackageVersion(pkg.dir);
  console.log(
    `  ${pkg.consumerName}@${version}`,
  );
  console.log(`    ${path.join(relativeOutDir, stableTarballs[index])}`);
}

if (consumerDir) {
  const prebuildDir = path.join(path.resolve(ROOT, consumerDir), 'prebuild');
  console.log('\n── Copied to consumer prebuild/ ──\n');
  for (const pkg of consumerPackages) {
    console.log(`  ${path.join(prebuildDir, `${pkg.tarballBase}.tgz`)}`);
  }
}

console.log('\n── Next steps (consuming app) ──\n');

if (consumerDir) {
  console.log('1. In the consuming app package.json, set:');
  for (const [index, pkg] of consumerPackages.entries()) {
    const stableTarball = `${pkg.tarballBase}.tgz`;
    const comma = index < consumerPackages.length - 1 ? '' : '';
    console.log(
      `     "${pkg.consumerName}": "file:prebuild/${stableTarball}"${comma}`,
    );
  }
  console.log('\n2. From the consuming app root, run:');
  console.log('     pnpm install');
} else {
  console.log('These tarballs are in local-packages/ only — nothing was copied to a consumer.');
  console.log('\nFor little-world-frontend, run instead:');
  console.log('  pnpm link:pack:frontend');
  console.log('\nThat builds, packs, AND copies into little-world-frontend/prebuild/.');
  console.log('\nTo copy into another app manually:');
  for (const pkg of consumerPackages) {
    console.log(
      `  cp ${path.join(relativeOutDir, `${pkg.tarballBase}.tgz`)} /path/to/your-app/prebuild/`,
    );
  }
  console.log('\nThen in that app package.json:');
  for (const [index, pkg] of consumerPackages.entries()) {
    const stableTarball = `${pkg.tarballBase}.tgz`;
    const comma = index < consumerPackages.length - 1 ? '' : '';
    console.log(
      `  "${pkg.consumerName}": "file:prebuild/${stableTarball}"${comma}`,
    );
  }
  console.log('\nAnd run: pnpm install');
}

if (profileArg === 'web') {
  console.log(
    '\nNote: only the web tarball is needed in the consumer. Core is resolved when the web package installs.',
  );
}

if (installTestApp) {
  console.log('\nNative testApp updated. Start with: pnpm native:start');
}
