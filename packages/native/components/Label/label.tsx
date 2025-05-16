import React from "react";
import { Text, TextStyle, StyleProp } from "react-native";
import { getLabelStyles } from './styles';
import { useTheme } from "styled-components/native";

export interface LabelProps {
    style?: StyleProp<TextStyle>;
    bold?: boolean,
    children?: any,
    inline?: boolean,
    marginBottom?: number,
};

export const Label: React.FC<LabelProps> = ({
    children,
    style,
    bold,
    inline,
    marginBottom,
}) => {
    const theme = useTheme();
    return (
        <Text style={[
            getLabelStyles({
                theme,
                bold,
                inline,
                marginBottom,
                //toolTipText, 
            }), style]}>
            {children}
        </Text>
    )
};
export default Label;