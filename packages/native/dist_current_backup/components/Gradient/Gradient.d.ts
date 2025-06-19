import React from 'react';
import { ViewStyle } from 'react-native';
interface GradientProps {
    gradient: string;
    style?: ViewStyle;
    children?: React.ReactNode;
}
export declare const Gradient: React.FC<GradientProps>;
export default Gradient;
