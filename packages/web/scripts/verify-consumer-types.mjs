import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import os from 'node:os';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(__dirname, '..');
const tempDir = fs.mkdtempSync(
  path.join(os.tmpdir(), 'lwds-consumer-types-'),
);

const consumerRoot = path.join(tempDir, 'consumer');
const consumerSrc = path.join(consumerRoot, 'src');

fs.mkdirSync(consumerSrc, { recursive: true });

fs.writeFileSync(
  path.join(consumerRoot, 'package.json'),
  JSON.stringify(
    {
      name: 'lwds-consumer-types-test',
      private: true,
      dependencies: {
        '@a-little-world/little-world-design-system': `file:${packageRoot}`,
        react: '^19.0.0',
        'react-dom': '^19.0.0',
        'styled-components': '^6.1.18',
      },
      devDependencies: {
        '@types/react': '^19.1.10',
        typescript: '^5.9.2',
      },
    },
    null,
    2,
  ),
);

fs.writeFileSync(
  path.join(consumerRoot, 'tsconfig.json'),
  JSON.stringify(
    {
      compilerOptions: {
        declaration: true,
        emitDeclarationOnly: true,
        jsx: 'react-jsx',
        module: 'esnext',
        moduleResolution: 'node',
        strict: true,
        skipLibCheck: true,
        outDir: 'dist',
      },
      include: ['src'],
    },
    null,
    2,
  ),
);

fs.writeFileSync(
  path.join(consumerSrc, 'Chat.styles.tsx'),
  `import { Text, Button, Card } from '@a-little-world/little-world-design-system';
import styled from 'styled-components';

export const Time = styled(Text)\`
  color: red;
\`;

export const StyledButton = styled(Button)\`
  margin: 0;
\`;

export const StyledCard = styled(Card)\`
  padding: 0;
\`;
`,
);

console.log(`Verifying consumer declaration emit in ${consumerRoot}`);
execSync('npm install', { cwd: consumerRoot, stdio: 'inherit' });
execSync('npx tsc --noEmit', { cwd: consumerRoot, stdio: 'inherit' });
execSync('npx tsc', { cwd: consumerRoot, stdio: 'inherit' });

const emittedDeclaration = fs.readFileSync(
  path.join(consumerRoot, 'dist', 'Chat.styles.d.ts'),
  'utf8',
);

if (emittedDeclaration.includes('little-world-design-system-core')) {
  console.error(
    'Consumer declaration still references little-world-design-system-core:',
  );
  console.error(emittedDeclaration);
  process.exit(1);
}

console.log('Consumer type verification passed.');
