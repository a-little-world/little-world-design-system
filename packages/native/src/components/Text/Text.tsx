import React from "react";
import {
  Text as RNText,
  TextStyle as RNTextStyle,
  StyleProp,
} from "react-native";

import {
  TextBaseProps,
  TextStyle as CoreTextStyle,
  TextTypes,
  getTextStyle,
} from "@a-little-world/little-world-design-system-core";
import { DefaultTheme, useTheme } from "styled-components/native";
import textParser from "../../utils/parser";

type TextProps = TextBaseProps & {
  disableParser?: boolean;
  italic?: boolean;
  style?: StyleProp<RNTextStyle>;
};

const getStyles = ({
  typeStyles,
  bold,
  center,
  color,
  italic,
  theme,
}: {
  typeStyles: CoreTextStyle;
  bold: boolean;
  center: boolean;
  color?: string;
  italic?: boolean;
  theme: DefaultTheme;
}): RNTextStyle => ({
  textAlign: center ? "center" : "auto",
  color: color ?? theme.color.text.primary,
  fontSize: typeStyles.fontSize * 16, // Convert rem to pixels (1rem = 16px)
  fontWeight: typeStyles.fontWeight === "bold" || bold ? "bold" : "normal",
  fontFamily:
    typeStyles.styleType === "body"
      ? bold
        ? "SignikaNegativeBold"
        : "SignikaNegative"
      : "WorkSans",
  ...(italic && { fontStyle: "italic", transform: [{ skewX: "-12deg" }] })
});

const Text = ({
  id,
  bold = false,
  center = false,
  children,
  color,
  disableParser = false,
  italic = false,
  style,
  type = TextTypes.Body5,
}: TextProps) => {
  const theme = useTheme();
  const textStyles: RNTextStyle = getStyles({
    typeStyles: getTextStyle(type),
    bold,
    italic,
    center,
    color,
    theme
  });

  return (
    <RNText id={id} style={[textStyles, style]}>
      {typeof children === 'string' && !disableParser
        ? textParser(children)
        : children}
    </RNText>
  );
};

export default Text;
