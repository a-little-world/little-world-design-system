import { css } from 'styled-components';

export const pixelate = (value: number) => `${value}px`;

/** Resets visual effects that break in forced-colors mode. Apply to all buttons. */
export const FORCED_COLORS_BUTTON_RESET_CSS = css`
  @media (forced-colors: active) {
    filter: none;
    box-shadow: none;
    transform: none;
    opacity: 1;
  }
`;

/** Filled button treatment for primary / gradient backgrounds. */
export const FORCED_COLORS_BUTTON_CSS = css`
  @media (forced-colors: active) {
    background: ButtonFace;
    color: ButtonText;
    border: 2px solid ButtonText;

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
      background: Highlight;
      color: HighlightText;
      border-color: HighlightText;
    }

    &:disabled {
      background: Canvas;
      color: GrayText;
      border-color: GrayText;
    }
  }
`;

/** Outlined button treatment for secondary, option, and neutral buttons. */
export const FORCED_COLORS_OUTLINED_BUTTON_CSS = css`
  @media (forced-colors: active) {
    background: Canvas;
    color: ButtonText;
    border: 2px solid ButtonText;

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
      background: Highlight;
      color: HighlightText;
      border-color: HighlightText;
    }

    &:disabled {
      background: Canvas;
      color: GrayText;
      border-color: GrayText;
    }
  }
`;

/** Link-style inline buttons — should read as links, not controls. */
export const FORCED_COLORS_LINK_BUTTON_CSS = css`
  @media (forced-colors: active) {
    background: transparent;
    color: LinkText;
    border: none;

    &::before {
      display: none;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
      background: transparent;
      color: LinkText;
      text-decoration: underline;
    }

    &:disabled {
      background: transparent;
      color: GrayText;
    }
  }
`;

/** Icon buttons — minimal chrome with visible focus and no opacity fade. */
export const FORCED_COLORS_ICON_BUTTON_CSS = css`
  @media (forced-colors: active) {
    background: Canvas;
    color: ButtonText;
    border: 2px solid transparent;

    &:not(:disabled):focus-visible {
      border-color: Highlight;
    }

    &:not(:disabled):hover {
      background: Highlight;
      color: HighlightText;
      border-color: Highlight;

      svg {
        opacity: 1;
      }
    }

    svg {
      opacity: 1;
    }

    &:disabled {
      background: Canvas;
      color: GrayText;
      border-color: transparent;
    }
  }
`;
