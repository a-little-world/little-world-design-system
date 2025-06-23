import {
  ButtonAppearance,
  ButtonSizes,
} from "@a-little-world/little-world-design-system-core";
import { DefaultTheme } from "styled-components/native";

export const getLinkStyles = ({ theme }: { theme: DefaultTheme }) => ({});

export const getLinkTextStyles = ({
  theme,
  buttonAppearance,
  color,
  textDecoration,
}: {
  theme: DefaultTheme;
  buttonAppearance?: ButtonAppearance;
  color?: string;
  textDecoration?: boolean;
}) => ({
  color:
    buttonAppearance === ButtonAppearance.Primary
      ? theme.color.text.button
      : color || theme.color.text.link,
  textDecorationLine: textDecoration
    ? ("underline" as const)
    : ("none" as const),
});
