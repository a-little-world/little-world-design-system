import { AccordionBaseProps } from "@a-little-world/little-world-design-system-core";
import React from "react";
import { ViewStyle } from "react-native";
interface AccordionProps extends AccordionBaseProps {
    style?: ViewStyle;
    contentStyle?: ViewStyle;
}
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
