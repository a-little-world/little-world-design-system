import React from 'react';
import textParser from '../../utils/parser';
import { StyledElement } from './styles';
import TextTypes from './TextTypes';

type TextProps = {
  bold?: boolean;
  center?: boolean;
  color?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  tag?:
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'li'
    | 'span'
    | 'strong';
  type?: keyof typeof TextTypes;
};

const Text = ({
  bold = false,
  center = false,
  children,
  color,
  className,
  id,
  tag = 'p',
  type = TextTypes.Body3,
}: TextProps) => (
  <StyledElement
    className={className}
    id={id}
    $bold={bold}
    $center={center}
    $color={color}
    $type={type}
    as={tag}
  >
    {typeof children === 'string' ? textParser(children) : children}
  </StyledElement>
);

export default Text;
