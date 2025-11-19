import * as RadixTooltip from '@radix-ui/react-tooltip';
import React from 'react';

import Text from '../Text/Text';
import { TextTypes } from '@a-little-world/little-world-design-system-core';
import { StyledTooltipContent, StyledTooltipArrow } from './styles';

type Props = {
  text: string;
  trigger?: React.ReactNode;
} & RadixTooltip.TooltipProps &
  RadixTooltip.TooltipContentProps;

export const TooltipProvider = RadixTooltip.Provider;

const DEFAULT_SIDE_OFFSET = 0; //px
const DEFAULT_DELAY_DURATION = 300;

const Tooltip: React.FC<Props> = ({
  defaultOpen,
  open,
  side,
  sideOffset = DEFAULT_SIDE_OFFSET,
  trigger,
  text,
  ...rest
}: Props) => (
  <RadixTooltip.Provider>
    <RadixTooltip.Root
      defaultOpen={defaultOpen}
      delayDuration={DEFAULT_DELAY_DURATION}
      open={open}
      {...rest}
    >
      {trigger && (
        <RadixTooltip.Trigger asChild>{trigger}</RadixTooltip.Trigger>
      )}
      <RadixTooltip.Portal>
        <StyledTooltipContent side={side} sideOffset={sideOffset}>
          <StyledTooltipArrow />
          <Text type={TextTypes.Body5}>{text}</Text>
        </StyledTooltipContent>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  </RadixTooltip.Provider>
);

export default Tooltip;
