import React from 'react';
import * as RadixPopover from '@radix-ui/react-popover';
import {
  StyledPopoverArrow,
  StyledPopoverClose,
  StyledPopoverContent,
} from './styles';
import { CloseIcon } from '../Icon';
import Button, { ButtonTypes } from '../Button/Button';

export enum PopoverSizes {
  Small = '160px',
  Large = '240px',
}

type Props = {
  children: React.ReactNode;
  showCloseButton: boolean;
  trigger?: React.ReactNode;
  width?: PopoverSizes;
} & RadixPopover.PopoverProps &
  RadixPopover.PopoverContentProps;

const DEFAULT_SIDE_OFFSET = 4; //px

const Popover: React.FC<Props> = ({
  defaultOpen,
  children,
  open,
  side,
  sideOffset = DEFAULT_SIDE_OFFSET,
  showCloseButton,
  trigger,
  width = PopoverSizes.Small,
}: Props) => (
  <RadixPopover.Root defaultOpen={defaultOpen} open={open}>
    {trigger && <RadixPopover.Trigger asChild>{trigger}</RadixPopover.Trigger>}

    <StyledPopoverContent side={side} sideOffset={sideOffset} $width={width}>
      {children}
      {showCloseButton && (
        <StyledPopoverClose asChild>
          <Button variation={ButtonTypes.Icon}>
            <CloseIcon label="popover close" labelId="popover close" />
          </Button>
        </StyledPopoverClose>
      )}
      <StyledPopoverArrow />
    </StyledPopoverContent>
  </RadixPopover.Root>
);

export default Popover;
