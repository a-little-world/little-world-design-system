import { ThemeNative } from "@a-little-world/little-world-design-system-core";
export type { ThemeNative };
declare module "styled-components/native" {
    interface DefaultTheme extends ThemeNative {
    }
}
