import { ThemeNative } from "@a-little-world/little-world-design-system-core";

export type { ThemeNative };

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeNative {}
}
