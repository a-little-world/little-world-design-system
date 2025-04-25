import 'styled-components';
import { Theme } from '@a-little-world/little-world-design-system-core';

export type { Theme };

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
