import {
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  Root,
} from '@radix-ui/react-popover';
import styled, { css } from 'styled-components';

import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from '../../utils/animations';
import { PopoverSizes } from './Popover';

export const PopoverRoot = styled(Root)``;

export const POPOVER_CONTENT_CSS = css`
  border-radius: ${({ theme }) => theme.radius.small};
  padding: ${({ theme }) => theme.spacing.small};
  font-size: 16px;
  line-height: 1.5;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  width: max-content;
  max-width: 360px;

  &[data-state='delayed-open'][data-side='top'] {
    animation-name: ${slideDownAndFade};
  }
  &[data-state='delayed-open'][data-side='right'] {
    animation-name: ${slideLeftAndFade};
  }
  &[data-state='delayed-open'][data-side='bottom'] {
    animation-name: ${slideUpAndFade};
  }
  &[data-state='delayed-open'][data-side='left'] {
    animation-name: ${slideRightAndFade};
  }
`;

export const StyledPopoverContent = styled(PopoverContent)<{
  $asTooltip?: boolean;
  $extraPaddingTop: boolean;
  $width: PopoverSizes;
}>`
  ${POPOVER_CONTENT_CSS}

  display: flex;
  flex-direction: column;
  z-index: 1000;

  ${({ $width }) =>
    $width &&
    `
      width: ${$width};
    `}

  ${({ $extraPaddingTop, theme }) =>
    $extraPaddingTop &&
    `
    padding-top: ${theme.spacing.medium};
  `}

  ${({ $asTooltip, theme }) => css`
    background-color: ${$asTooltip
      ? theme.color.surface.bold
      : theme.color.surface.elevated};
    color: ${$asTooltip ? theme.color.text.reversed : theme.color.text.primary};
    padding-right: ${$asTooltip ? theme.spacing.medium : theme.spacing.small};
  `}
    

  &[data-state='open'][data-side='top'] {
    animation-name: ${slideDownAndFade};
  }
  &[data-state='open'][data-side='right'] {
    animation-name: ${slideLeftAndFade};
  }
  &[data-state='open'][data-side='bottom'] {
    animation-name: ${slideUpAndFade};
  }
  &[data-state='open'][data-side='left'] {
    animation-name: ${slideRightAndFade};
  }
`;

export const StyledPopoverClose = styled(PopoverClose)<{
  $asTooltip?: boolean;
}>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.xsmall};
  right: ${({ theme }) => theme.spacing.xsmall};
  width: 12px !important;
  height: 12px !important;
  color: ${({ $asTooltip, theme }) =>
    $asTooltip ? theme.color.text.reversed : theme.color.text.primary};
`;

export const StyledPopoverArrow = styled(PopoverArrow)<{
  $asTooltip?: boolean;
}>`
  fill: ${({ $asTooltip, theme }) =>
    $asTooltip ? theme.color.surface.bold : theme.color.surface.elevated};
`;
