import { StyleSheet } from "react-native";
import { DefaultTheme } from "styled-components/native";

export const getProgressBarStyles = ({ theme }: { theme: DefaultTheme }) => StyleSheet.create({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.small,
    },
    root: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: theme.radius.full,
        backgroundColor: theme.color.surface.tertiary,
        width: 300,
        height: 8,
    },
    indicator: {
        backgroundColor: theme.color.surface.indicator,
        width: '100%',
        height: '100%',
    }
})