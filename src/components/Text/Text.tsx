import React from 'react';
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
  children: React.ReactNode;
  className?: string;
  id?: string;
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'strong';
  type?: keyof typeof TextTypes;
};

const Text = ({
  bold = false,
  children,
  className,
  id,
  tag = 'p',
  type = TextTypes.Body1,
}: TextProps) => (
  <StyledElement
    className={className}
    id={id}
    $bold={bold}
    $type={type}
    as={tag}
  >
    {children}
  </StyledElement>
);

export default Text;
