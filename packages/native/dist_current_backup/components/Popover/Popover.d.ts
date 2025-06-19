import { PopoverSizes } from "@a-little-world/little-world-design-system-core";
import * as PopoverPrimitive from "@rn-primitives/popover";
import React from "react";
type PopoverProps = {
    asToolTip?: boolean;
    children: React.ReactNode;
    showCloseButton?: boolean;
    trigger?: React.ReactNode;
    width?: PopoverSizes;
} & PopoverPrimitive.RootProps & PopoverPrimitive.ContentProps;
declare const Popover: React.FC<PopoverProps>;
export default Popover;
