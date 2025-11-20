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
  asTooltip?: boolean;
  children: React.ReactNode;
  showCloseButton?: boolean;
  trigger?: React.ReactNode;
  width?: PopoverSizes;
} & RadixPopover.PopoverProps &
  RadixPopover.PopoverContentProps;

const DEFAULT_SIDE_OFFSET = 4; //px

const Popover: React.FC<PopoverProps> = ({
  asTooltip,
  defaultOpen,
  children,
  onFocusOutside,
  open,
  side,
  sideOffset = DEFAULT_SIDE_OFFSET,
  showCloseButton,
  trigger,
  width = PopoverSizes.Small,
}) => (
  <PopoverRoot defaultOpen={defaultOpen} open={open}>
    {trigger && <RadixPopover.Trigger asChild>{trigger}</RadixPopover.Trigger>}
    <RadixPopover.Portal>
      <StyledPopoverContent
        side={side}
        sideOffset={sideOffset}
        $asTooltip={asTooltip}
        $width={width}
        $extraPaddingTop={Boolean(!asTooltip && showCloseButton)}
        collisionPadding={DEFAULT_SIDE_OFFSET}
        onFocusOutside={onFocusOutside}
      >
        {children}
        {showCloseButton && (
          <StyledPopoverClose asChild $asTooltip={asTooltip}>
            <Button variation={ButtonVariations.Icon}>
              <CloseIcon label="popover close" />
            </Button>
          </StyledPopoverClose>
        )}
        <StyledPopoverArrow $asTooltip={asTooltip} />
      </StyledPopoverContent>
    </RadixPopover.Portal>
  </PopoverRoot>
);

export default Popover;
