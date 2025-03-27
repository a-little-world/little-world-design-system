import styled, { css } from 'styled-components';

import tokens from '../../tokens/index';
import TextTypes from './TextTypes';

const BODY_SHARED_STYLES = css`
  font-family: 'Signika Negative', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin: 0;
  line-height: 1.5;
`;

const HEADING_SHARED_STYLES = css<{ $color?: string }>`
  font-family: 'Work Sans', sans-serif;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const BODY_5_CSS = css`
  ${BODY_SHARED_STYLES}
  font-size: 1rem;

  @media (min-width: ${tokens.breakpoints.small}) {
    font-size: 1rem;
  }
`;

export const StyledElement = styled.div<{
  $bold: boolean;
  $center: boolean;
  $color?: string;
  $type: keyof typeof TextTypes;
}>`
  ${({ $bold }) => $bold && 'font-weight: bold;'}
  ${({ $center }) => $center && 'text-align: center;'}
  ${({ $color }) => $color && `color: ${$color};`}
  white-space: pre-line;

  ${({ $type }) => {
    if ($type === TextTypes.Body1)
      return css`
        ${BODY_SHARED_STYLES}
        font-size: 2rem;

        @media (min-width: ${tokens.breakpoints.small}) {
          font-size: 2.5rem;
        }
      `;

    if ($type === TextTypes.Body2)
      return css`
        ${BODY_SHARED_STYLES}
        font-size: 1.75rem;

        @media (min-width: ${tokens.breakpoints.small}) {
          font-size: 2rem;
        }
      `;

    if ($type === TextTypes.Body3)
      return css`
        ${BODY_SHARED_STYLES}

        font-size: 1.5rem;

        @media (min-width: ${tokens.breakpoints.small}) {
          font-size: 1.5rem;
        }
      `;

    if ($type === TextTypes.Body4)
      return css`
        ${BODY_SHARED_STYLES}

        font-size: 1.25rem;
      `;

    if ($type === TextTypes.Body5) return BODY_5_CSS;

    if ($type === TextTypes.Body6)
      return css`
        ${BODY_SHARED_STYLES}
        font-size: 0.8725rem;
      `;

    if ($type === TextTypes.Body7)
      return css`
        ${BODY_SHARED_STYLES}
        font-size: 0.75rem;
      `;

    if ($type === TextTypes.Heading1)
      return css`
        ${HEADING_SHARED_STYLES}
        font-size: 4rem;

        @media (min-width: ${tokens.breakpoints.small}) {
          font-size: 5rem;
        }
      `;

    if ($type === TextTypes.Heading2)
      return css`
        ${HEADING_SHARED_STYLES}
        font-size: 3.5rem;

        @media (min-width: ${tokens.breakpoints.small}) {
          font-size: 4rem;
        }
      `;

    if ($type === TextTypes.Heading3)
      return css`
        ${HEADING_SHARED_STYLES}
        font-size: 2.5rem;

        @media (min-width: ${tokens.breakpoints.small}) {
          font-size: 3rem;
        }
      `;

    if ($type === TextTypes.Heading4)
      return css`
        ${HEADING_SHARED_STYLES}
        font-size: 2rem;

        @media (min-width: ${tokens.breakpoints.small}) {
          font-size: 2rem;
        }
      `;

    if ($type === TextTypes.Heading5)
      return css`
        ${HEADING_SHARED_STYLES}
        font-size: 1.5rem;
      `;

    if ($type === TextTypes.Heading6)
      return css`
        ${HEADING_SHARED_STYLES}
        font-size: 1rem;
      `;
  }}
`;
