import React from 'react';
import * as RadixToolTip from '@radix-ui/react-tooltip';
import Text from '../Text/Text';
import TextTypes from '../Text/TextTypes';
import { StyledTooltipArrow, StyledToolTipContent } from './styles';

type Props = {
  text: string;
  trigger?: React.ReactNode;
} & RadixToolTip.TooltipProps &
  RadixToolTip.TooltipContentProps;

export const ToolTipProvider = RadixToolTip.Provider;

const DEFAULT_SIDE_OFFSET = 4; //px
const DEFAULT_DELAY_DURATION = 300;

const ToolTip: React.FC<Props> = ({
  defaultOpen,
  open,
  side,
  sideOffset = DEFAULT_SIDE_OFFSET,
  trigger,
  text,
  ...rest
}: Props) => (
  <RadixToolTip.Provider>
    <RadixToolTip.Root
      defaultOpen={defaultOpen}
      delayDuration={DEFAULT_DELAY_DURATION}
      open={open}
      {...rest}
    >
      {trigger && (
        <RadixToolTip.Trigger asChild>{trigger}</RadixToolTip.Trigger>
      )}
      <RadixToolTip.Portal>
        <StyledToolTipContent side={side} sideOffset={sideOffset}>
          <StyledTooltipArrow />
          <Text type={TextTypes.Body3}>{text}</Text>
        </StyledToolTipContent>
      </RadixToolTip.Portal>
    </RadixToolTip.Root>
  </RadixToolTip.Provider>
);

export default ToolTip;
