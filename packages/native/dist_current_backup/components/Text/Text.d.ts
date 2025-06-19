import { TextStyle as RNTextStyle, StyleProp } from 'react-native';
import { TextBaseProps } from '@a-little-world/little-world-design-system-core';
type TextProps = TextBaseProps & {
    style?: StyleProp<RNTextStyle>;
};
declare const Text: ({ id, bold, center, children, color, style, type, }: TextProps) => import("react/jsx-runtime").JSX.Element;
export default Text;
