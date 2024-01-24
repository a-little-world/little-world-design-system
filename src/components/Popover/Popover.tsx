import * as RadixPopover from '@radix-ui/react-popover';
import React from 'react';

import Button, { ButtonVariations } from '../Button/Button';
import { CloseIcon } from '../Icon';
import {
  PopoverRoot,
  StyledPopoverArrow,
  StyledPopoverClose,
  StyledPopoverContent,
} from './styles';

export enum PopoverSizes {
  Small = '160px',
  Medium = '240px',
  Large = '360px',
}

type PopoverProps = {
  asToolTip?: boolean;
  children: React.ReactNode;
  showCloseButton: boolean;
  trigger?: React.ReactNode;
  width?: PopoverSizes;
} & RadixPopover.PopoverProps &
  RadixPopover.PopoverContentProps;

const DEFAULT_SIDE_OFFSET = 4; //px

const Popover: React.FC<PopoverProps> = ({
  asToolTip,
  defaultOpen,
  children,
  open,
  side,
  sideOffset = DEFAULT_SIDE_OFFSET,
  showCloseButton,
  trigger,
  width = PopoverSizes.Small,
}) => (
  <PopoverRoot defaultOpen={defaultOpen} open={open}>
    {trigger && <RadixPopover.Trigger asChild>{trigger}</RadixPopover.Trigger>}

    <StyledPopoverContent
      side={side}
      sideOffset={sideOffset}
      $asToolTip={asToolTip}
      $width={width}
      $extraPaddingTop={showCloseButton}
      collisionPadding={DEFAULT_SIDE_OFFSET}
    >
      {children}
      {showCloseButton && (
        <StyledPopoverClose asChild $asToolTip>
          <Button variation={ButtonVariations.Icon}>
            <CloseIcon label="popover close" labelId="popover close" />
          </Button>
        </StyledPopoverClose>
      )}
      <StyledPopoverArrow $asToolTip={asToolTip} />
    </StyledPopoverContent>
  </PopoverRoot>
);

export default Popover;
