import React, { HtmlHTMLAttributes } from 'react';
import styled from 'styled-components';

import { TYPOGRAPHY_CSS } from './styles';

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
  id?: string;
  children: React.ReactNode;
  tag?:
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'span'
    | 'strong'
    | 'italic';
  type?: keyof typeof TextTypes;
};

const Text = ({
  bold = false,
  children,
  id,
  tag = 'p',
  type = TextTypes.Body1,
}: TextProps) => {
  const StyledElement = styled[tag]`
    ${TYPOGRAPHY_CSS}
  `;

  return (
    <StyledElement id={id} $bold={bold} $type={type}>
      {children}
    </StyledElement>
  );
};

export default Text;
