import {
  PopoverArrow,
  PopoverClose,
  PopoverContent,
} from '@radix-ui/react-popover';
import styled, { keyframes } from 'styled-components';
import tokens from '../../tokens';
import { PopoverSizes } from './Popover';

const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideRightAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(-2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideLeftAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const StyledPopoverContent = styled(PopoverContent)<{
  $width: PopoverSizes;
}>`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: ${tokens.spacing.small};
  font-size: 15px;
  line-height: 1;
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  ${({ $width }) =>
    $width &&
    `
      width: ${$width};
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

export const StyledPopoverClose = styled(PopoverClose)`
  position: absolute;
  top: ${tokens.spacing.xsmall};
  right: ${tokens.spacing.xsmall};
  width: 12px !important;
  height: 12px !important;
`;

export const StyledPopoverArrow = styled(PopoverArrow)`
  fill: white;
`;
