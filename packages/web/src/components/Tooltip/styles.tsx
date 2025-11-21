import { TooltipArrow, TooltipContent } from '@radix-ui/react-tooltip';
import styled from 'styled-components';

export const StyledTooltipContent = styled(TooltipContent)`
  background: ${({ theme }) => theme.color.surface.dim};
  border-radius: ${({ theme }) => theme.radius.xxxsmall};
  color: ${({ theme }) => theme.color.text.reversed};
  padding: ${({ theme }) => theme.spacing.xxsmall};
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`;

export const StyledTooltipArrow = styled(TooltipArrow)`
  fill: ${({ theme }) => theme.color.surface.dim};
`;
