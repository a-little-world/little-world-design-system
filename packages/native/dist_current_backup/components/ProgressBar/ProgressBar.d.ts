import { ProgressBarBaseProps } from "@a-little-world/little-world-design-system-core";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";
interface ProgressBarProps extends ProgressBarBaseProps {
    style?: StyleProp<ViewStyle>;
}
declare const ProgressBar: React.FC<ProgressBarProps>;
export default ProgressBar;
