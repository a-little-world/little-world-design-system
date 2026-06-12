import { TooltipArrow, TooltipContent } from '@radix-ui/react-tooltip';
import styled from 'styled-components';

export const StyledTooltipContent = styled(TooltipContent)`
  box-sizing: border-box;
  max-width: 300px;
  background: rgba(97, 97, 97, 0.92);
  border-radius: 4px;
  color: ${({ theme }) => theme.color.text.reversed};
  padding: 6px 10px;
  font-size: 0.6875rem;
  line-height: 1.43;
  font-weight: 400;
  text-align: center;
  word-break: break-word;
  box-shadow:
    0px 4px 8px rgba(0, 0, 0, 0.2),
    0px 6px 20px rgba(0, 0, 0, 0.14);
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  p {
    margin: 0;
  }
`;

export const StyledTooltipArrow = styled(TooltipArrow)`
  fill: rgba(97, 97, 97, 0.92);
`;
