import 'styled-components';
import { ThemeWeb } from '@a-little-world/little-world-design-system-core';

export type { ThemeWeb };

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeWeb {}
}
