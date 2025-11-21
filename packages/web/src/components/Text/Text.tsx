import {
  TextBaseProps,
  TextTypes,
} from '@a-little-world/little-world-design-system-core';
import React, { CSSProperties } from 'react';

import textParser from '../../utils/parser';
import { StyledElement } from './styles';

type TextProps = TextBaseProps & {
  className?: string;
  disableParser?: boolean;
  id?: string;
  style?: CSSProperties;
  tag?:
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'li'
    | 'label'
    | 'span'
    | 'strong'
    | 'div';
};

const Text = ({
  bold = false,
  center = false,
  children,
  color,
  className,
  disableParser = false,
  id,
  style,
  tag = 'p',
  type = TextTypes.Body5,
}: TextProps) => (
  <StyledElement
    className={className}
    style={style}
    id={id}
    $bold={bold}
    $center={center}
    $color={color}
    $type={type}
    as={tag}
  >
    {typeof children === 'string' && !disableParser
      ? (textParser(children) as React.ReactNode)
      : (children as React.ReactNode)}
  </StyledElement>
);

export default Text;
