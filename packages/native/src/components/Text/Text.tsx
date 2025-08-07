import React from 'react';

import BaseText, { BaseTextProps } from './BaseText';
import textParser from '../../utils/parser';

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
