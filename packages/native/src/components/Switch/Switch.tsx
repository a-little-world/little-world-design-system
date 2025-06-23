//import createStyles from "./styles";
import React from "react";
import { Text, TextStyle, StyleProp, View, StyleSheet } from "react-native";
import { useTheme } from "styled-components/native";
import * as SwitchPrimitive from '@rn-primitives/switch';


export interface SwitchProps {
    style?: StyleProp<TextStyle>;
    nativeId?: string;
}

export const Switch: React.FC<SwitchProps> = ({
    style,
    nativeId,

}) => {
    const theme = useTheme();
    //  const styles = createStyles({ theme })
    const [checked, setChecked] = React.useState(false);

    return (
        <SwitchPrimitive.Root checked={checked} onCheckedChange={setChecked}>
            <SwitchPrimitive.Thumb />
        </SwitchPrimitive.Root>
    );
};

export default Switch;


