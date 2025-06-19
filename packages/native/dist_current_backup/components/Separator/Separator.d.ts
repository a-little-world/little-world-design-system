import { StyleProp, ViewStyle } from 'react-native';
import { SeparatorBaseProps } from '@a-little-world/little-world-design-system-core';
interface SeparatorProps extends SeparatorBaseProps {
    style?: StyleProp<ViewStyle>;
}
declare const Separator: ({ background, orientation, spacing, style, }: SeparatorProps) => import("react/jsx-runtime").JSX.Element;
export default Separator;
