import styled, { css } from 'styled-components';
import tokens from '../../tokens/index';
import TextTypes from './TextTypes';
import { getTextStyle } from './getTextStyle';

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

const styles = {
  [TextTypes.Heading1]: getTextStyle(TextTypes.Heading1),
  [TextTypes.Heading2]: getTextStyle(TextTypes.Heading2),
  [TextTypes.Heading3]: getTextStyle(TextTypes.Heading3),
  [TextTypes.Heading4]: getTextStyle(TextTypes.Heading4),
  [TextTypes.Heading5]: getTextStyle(TextTypes.Heading5),
  [TextTypes.Heading6]: getTextStyle(TextTypes.Heading6),
  [TextTypes.Body1]: getTextStyle(TextTypes.Body1),
  [TextTypes.Body2]: getTextStyle(TextTypes.Body2),
  [TextTypes.Body3]: getTextStyle(TextTypes.Body3),
  [TextTypes.Body4]: getTextStyle(TextTypes.Body4),
  [TextTypes.Body5]: getTextStyle(TextTypes.Body5),
  [TextTypes.Body6]: getTextStyle(TextTypes.Body6),
  [TextTypes.Body7]: getTextStyle(TextTypes.Body7),
};

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
    const style = styles[$type];
    return css`
      ${style.styleType === 'body' ? BODY_SHARED_STYLES : HEADING_SHARED_STYLES}
      font-size: ${style.fontSize}rem;
      ${style.fontWeight ? `font-weight: ${style.fontWeight};` : ''}
      
      ${style.desktopFontSize && css`
        @media (min-width: ${tokens.breakpoints.small}) {
          font-size: ${style.desktopFontSize}rem;
        }
      `}
    `;
  }}
`;
