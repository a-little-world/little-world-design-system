import { TooltipArrow, TooltipContent } from '@radix-ui/react-tooltip';
import styled from 'styled-components';

import tokens from '../../tokens';
import { POPOVER_CONTENT_CSS } from '../Popover/styles';

export const StyledToolTipContent = styled(TooltipContent)`
  ${POPOVER_CONTENT_CSS}
  background-color: ${({ theme }) => theme.color.surface.bold};
  color: ${({ theme }) => theme.color.text.reversed};
  font-weight: normal;
`;

export const StyledTooltipArrow = styled(TooltipArrow)`
  fill: ${({ theme }) => theme.color.surface.bold};
`;
