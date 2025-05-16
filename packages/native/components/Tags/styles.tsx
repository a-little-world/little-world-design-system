import { ViewStyle, DimensionValue } from 'react-native';
import { CardDimensions, CardSizes, TagAppearance, TagSizes } from '@a-little-world/little-world-design-system-core';
import { FlexAlignType, FlexStyle } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

export const getTagStyles = ({
    theme,
    size,
    appearance,
    color,
}: {
    theme: DefaultTheme,
    size?: String,
    appearance?: String,
    color?: string,
}): ViewStyle => {
    const baseStyles: ViewStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.xxxsmall,
        backgroundColor: theme.color.surface.primary,
        borderWidth: 2,
        borderColor: color,
        borderRadius: theme.radius.large,
        minWidth: 30,
        width: 120,
        height: size === TagSizes.small ? 32 : 40,
        paddingHorizontal: theme.spacing.xsmall,
        paddingVertical: size === TagSizes.small ? theme.spacing.xxxsmall : theme.spacing.xxxxsmall
    }
    if (appearance === TagAppearance.solid)
        return ({
            ...baseStyles,
            backgroundColor: theme.color.surface.accent,

        });

    return baseStyles;
}