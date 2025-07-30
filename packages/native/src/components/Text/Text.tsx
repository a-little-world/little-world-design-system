import React from "react";
import { StyleProp, TextStyle as RNTextStyle } from "react-native";

import { TextBaseProps, TextTypes } from "@a-little-world/little-world-design-system-core";
import BaseText, { BaseTextProps } from "./BaseText";
import textParser from "../../utils/parser";

type TextProps = BaseTextProps & {
  disableParser?: boolean;
};

const Text = ({
  disableParser = false,
  children,
  ...baseTextProps
}: TextProps) => {
  return (
    <BaseText {...baseTextProps}>
      {typeof children === 'string' && !disableParser
        ? textParser(children)
        : children}
    </BaseText>
  );
};

export default Text;
