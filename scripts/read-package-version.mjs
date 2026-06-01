#!/usr/bin/env node
import fs from 'node:fs';

const file = process.argv[2];

if (!file) {
  console.error('Usage: node scripts/read-package-version.mjs <package.json>');
  process.exit(1);
}

const content = fs.readFileSync(file, 'utf8');

try {
  console.log(JSON.parse(content).version);
} catch (error) {
  const match = content.match(/"version"\s*:\s*"([^"]+)"/);

  if (!match) {
    console.error(`Could not read version from ${file}: ${error.message}`);
    process.exit(1);
  }

  console.warn(
    `Warning: ${file} is not valid JSON (using version regex fallback).`,
  );
  console.log(match[1]);
}
