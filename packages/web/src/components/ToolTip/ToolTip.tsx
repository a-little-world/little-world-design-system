import { PopoverContentProps, PopoverProps } from '@radix-ui/react-popover';
import React from 'react';

import Popover, { PopoverSizes } from '../Popover/Popover';
import Text from '../Text/Text';
import { TextTypes } from '@a-little-world/little-world-design-system-core';

type Props = {
  text: string;
  trigger?: React.ReactNode;
} & PopoverProps &
  PopoverContentProps;

const DEFAULT_SIDE_OFFSET = 4; //px

const ToolTip: React.FC<Props> = ({
  defaultOpen,
  open,
  side = 'top',
  sideOffset = DEFAULT_SIDE_OFFSET,
  trigger,
  text,
  ...rest
}) => (
  <Popover
    asToolTip
    defaultOpen={defaultOpen}
    open={open}
    side={side}
    sideOffset={sideOffset}
    showCloseButton
    trigger={trigger}
    width={PopoverSizes.Large}
    {...rest}
  >
    <Text type={TextTypes.Body5}>{text}</Text>
  </Popover>
);

export default ToolTip;
