import React from 'react';
type PopoverProps = {
    side?: 'top' | 'bottom';
    sideOffset?: number;
};
type PopoverContentProps = {};
type Props = {
    text: string;
    trigger?: React.ReactNode;
} & PopoverProps & PopoverContentProps;
declare const ToolTip: React.FC<Props>;
export default ToolTip;
