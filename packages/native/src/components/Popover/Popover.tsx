import Button, { ButtonVariations } from "../Button/Button";
import { CloseIcon } from "../Icon";
import { getPopoverCloseStyles, getPopoverContentStyles } from "./styles";
import { PopoverSizes } from "@a-little-world/little-world-design-system-core";
import * as PopoverPrimitive from "@rn-primitives/popover";
import React, { useMemo, useState } from "react";
import { useTheme } from "styled-components/native";

type PopoverProps = {
  asToolTip?: boolean;
  children: React.ReactNode;
  showCloseButton?: boolean;
  trigger?: React.ReactNode;
  width?: PopoverSizes;
} & PopoverPrimitive.RootProps &
  PopoverPrimitive.ContentProps;

const DEFAULT_SIDE_OFFSET = 4; //px

const Popover: React.FC<PopoverProps> = ({
  asToolTip,
  children,
  side,
  sideOffset = DEFAULT_SIDE_OFFSET,
  showCloseButton,
  trigger,
  width = PopoverSizes.Small,
  // defaultOpen,
  // open
}) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const contentStyles = useMemo(
    () =>
      getPopoverContentStyles({
        theme,
        width,
        extraPaddingTop: Boolean(!asToolTip && showCloseButton),
        asToolTip,
      }),
    [theme, width, showCloseButton, asToolTip]
  );

  const closeStyles = useMemo(
    () =>
      getPopoverCloseStyles({
        theme,
        asToolTip,
      }),
    [theme, asToolTip]
  );

  return (
    <PopoverPrimitive.Root onOpenChange={setIsOpen}>
      {trigger && (
        <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
      )}
      <PopoverPrimitive.Content
        side={side}
        sideOffset={sideOffset || DEFAULT_SIDE_OFFSET}
        onFocusOutside={() => setIsOpen(false)}
        style={contentStyles.content}
      >
        {children}
        {showCloseButton && (
          <PopoverPrimitive.Close
            asChild
            style={closeStyles.close}
            onPress={() => setIsOpen(false)}
          >
            <Button variation={ButtonVariations.Icon}>
              <CloseIcon label="popover close" />
            </Button>
          </PopoverPrimitive.Close>
        )}
        {/* <PopoverPrimitive.Arrow style={getPopoverArrowStyles({ theme, asToolTip })} /> */}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Root>
  );
};

export default Popover;
