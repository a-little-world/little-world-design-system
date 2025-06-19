import { ViewStyle } from 'react-native';
import { IllustrationProps, SvgFactoryOptions } from '@a-little-world/little-world-design-system-core';
import { SvgProps } from 'react-native-svg';
export declare const createIllustrationComponent: ({ name, svgData, }: SvgFactoryOptions) => {
    ({ height, width, style, color, label, labelVisible }: SvgProps & {
        style?: ViewStyle | undefined;
        color?: string | undefined;
    } & IllustrationProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
