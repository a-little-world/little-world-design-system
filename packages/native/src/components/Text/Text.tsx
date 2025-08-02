import React from "react";
import { StyleProp, TextStyle as RNTextStyle } from "react-native";

import { TextBaseProps, TextTypes } from "@a-little-world/little-world-design-system-core";
import BaseText, { BaseTextProps } from "./BaseText";
import textParser from "../../utils/parser";

type TextProps = BaseTextProps & {
  disableParser?: boolean;
};

const Text = React.memo(({
  disableParser = false,
  children,
  ...baseTextProps
}: TextProps) => {
  // Memoize the parsed content to prevent unnecessary re-parsing
  const parsedContent = React.useMemo(() => {
    if (typeof children === 'string' && !disableParser) {
      return textParser(children);
    }
    return children;
  }, [children, disableParser]);

  return (
    <BaseText {...baseTextProps}>
      {parsedContent}
    </BaseText>
  );
});

Text.displayName = 'Text';

export default Text;
