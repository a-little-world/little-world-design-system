import React from 'react';
import textParser from '../../utils/parser';
import { StyledElement } from './styles';

export enum TextTypes {
  Heading1 = 'Heading1',
  Heading2 = 'Heading2',
  Heading3 = 'Heading3',
  Heading4 = 'Heading4',
  Body1 = 'Body1',
  Body2 = 'Body2',
  Body3 = 'Body3',
  Body4 = 'Body4',
  Body5 = 'Body5',
}

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
