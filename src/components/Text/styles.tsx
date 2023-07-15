import styled, { css } from 'styled-components';

import { TextTypes } from './Text';
import tokens from '../../tokens/index';

const BODY_SHARED_STYLES = css`
  font-family: 'Signika Negative', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin: 0;
`;

const HEADING_SHARED_STYLES = css<{ $color?: string }>`
  color: ${({ $color }) => $color || tokens.color.theme.light.text.title};
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const BODY_3_CSS = css`
  ${BODY_SHARED_STYLES}
  font-size: 0.875rem;

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

  ${({ $type }) => {
    if ($type === TextTypes.Body1)
      return css`
        ${BODY_SHARED_STYLES}
        color: ${tokens.color.theme.light.text.primary};
        font-size: 1.5rem;

        @media (min-width: ${tokens.breakpoints.small}) {
          font-size: 1.75rem;
        }
      `;

    if ($type === TextTypes.Body2)
      return css`
        ${BODY_SHARED_STYLES}

        font-size: 1rem;

        @media (min-width: ${tokens.breakpoints.small}) {
          font-size: 1.25rem;
        }
      `;

    if ($type === TextTypes.Body3) return BODY_3_CSS;

    if ($type === TextTypes.Body4)
      return css`
        ${BODY_SHARED_STYLES}
        font-size: 0.8725rem;
      `;

    if ($type === TextTypes.Body5)
      return css`
        ${BODY_SHARED_STYLES}
        font-size: 0.75rem;
      `;

    if ($type === TextTypes.Heading1)
      return css`
        ${HEADING_SHARED_STYLES}
        font-size: 2rem;

        @media (min-width: ${tokens.breakpoints.small}) {
          font-size: 3rem;
        }
      `;

    if ($type === TextTypes.Heading2)
      return css`
        ${HEADING_SHARED_STYLES}
        font-size: 1.5rem;

        @media (min-width: ${tokens.breakpoints.small}) {
          font-size: 2rem;
        }
      `;

    if ($type === TextTypes.Heading3)
      return css`
        ${HEADING_SHARED_STYLES}
        font-size: 1rem;
      `;

    if ($type === TextTypes.Heading4)
      return css`
        ${HEADING_SHARED_STYLES}
        font-size: 0.5rem;
      `;
  }}
`;
