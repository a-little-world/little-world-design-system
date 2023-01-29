import React from 'react';
import styled, { css } from 'styled-components';

import tokens from '../../tokens';

// @import url("https://fonts.googleapis.com/css?family=Signika+Negative:300,400,500,600&subset=latin,latin-ext");
//   font-family: "Signika Negative", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
//     "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;

export const HEADING_1 = 'heading1';
export const HEADING_2 = 'heading2';
export const HEADING_3 = 'heading3';
export const HEADING_4 = 'heading4';
export const HEADING_5 = 'heading5';
export const HEADING_6 = 'heading6';
export const BODY_1 = 'body1';
export const BODY_2 = 'body2';
export const BODY_3 = 'body3';
export const BODY_4 = 'body4';
export const BODY_5 = 'body5';
export const BODY_6 = 'body6';

const BODY_SHARED_STYLES = css`
  font-family: 'Signika Negative', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const HEADING_SHARED_STYLES = css`
  color: ${tokens.color.theme.light.text.title}
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const TEXT_TYPES = [
  HEADING_1,
  HEADING_2,
  HEADING_3,
  HEADING_4,
  BODY_1,
  BODY_2,
  BODY_3,
  BODY_4,
  BODY_5,
  BODY_6,
] as const;

type TextProps = {
  bold?: boolean;
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
  type?: typeof TEXT_TYPES[number];
};

const Text = ({
  bold = false,
  children,
  tag = 'p',
  type = BODY_1,
}: TextProps) => {
  const StyledElement = styled[tag]<{
    $bold: boolean;
    $type: typeof TEXT_TYPES[number];
    children: React.ReactNode;
  }>`
    ${({ $bold }) => $bold && `font-weight: bold;`}

    ${({ $type }) => {
      if ($type === BODY_1)
        return css`
          ${BODY_SHARED_STYLES}
          color: ${tokens.color.theme.light.text.primary}
          font-size: 3rem;
        `;

      if ($type === BODY_2)
        return css`
          ${BODY_SHARED_STYLES}
          font-size: 2rem;
        `;

      if ($type === BODY_3)
        return css`
          ${BODY_SHARED_STYLES}
          font-size: 1rem;
        `;

      if ($type === BODY_4)
        return css`
          ${BODY_SHARED_STYLES}
          font-size: 0.8725rem;
        `;

      if ($type === BODY_4)
        return css`
          ${BODY_SHARED_STYLES}
          font-size: 0.75rem;
        `;

      if ($type === HEADING_1)
        return css`
          ${HEADING_SHARED_STYLES}
          font-size: 3rem;
        `;

      if ($type === HEADING_2)
        return css`
          ${HEADING_SHARED_STYLES}
          font-size: 1.75rem;

          @media (min-width: ${tokens.breakpoints.small}) {
            font-size: 2rem;
          }
        `;

      if ($type === HEADING_3)
        return css`
          ${HEADING_SHARED_STYLES}
          font-size: 1rem;
        `;

      if ($type === HEADING_4)
        return css`
          ${HEADING_SHARED_STYLES}
          font-size: 0.5rem;
        `;
    }}
  `;

  return (
    <StyledElement $bold={bold} $type={type}>
      {children}
    </StyledElement>
  );
};

export default Text;
