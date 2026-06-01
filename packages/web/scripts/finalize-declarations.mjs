import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(__dirname, '..');
const rolledUpTypesPath = path.join(packageRoot, 'dist', 'index.d.ts');

const styledComponentsAugmentation = `
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeWeb {}
}
`;

const rolledUpTypes = fs.readFileSync(rolledUpTypesPath, 'utf8');

let finalizedTypes = exportComponentPropTypes(rolledUpTypes);

if (!finalizedTypes.includes("declare module 'styled-components'")) {
  finalizedTypes =
    finalizedTypes.trimEnd() + styledComponentsAugmentation;
}

fs.writeFileSync(rolledUpTypesPath, finalizedTypes);

for (const outputDir of ['dist/esm', 'dist/cjs']) {
  removeDeclarationFiles(path.join(packageRoot, outputDir));
}

function exportComponentPropTypes(content) {
  return content
    .replace(
      /^declare interface (\w*(?:Base)?Props\w*)\b/gm,
      'export declare interface $1',
    )
    .replace(
      /^declare type (\w*(?:Base)?Props\w*)\b/gm,
      'export declare type $1',
    );
}

function removeDeclarationFiles(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      removeDeclarationFiles(entryPath);
      continue;
    }

    if (entry.name.endsWith('.d.ts') || entry.name.endsWith('.d.ts.map')) {
      fs.unlinkSync(entryPath);
    }
  }
}
