import { getLabelStyles } from "./styles";
import React from "react";
import { Text, TextStyle, StyleProp, Platform } from "react-native";
import { useTheme } from "styled-components/native";
import * as TooltipPrimitive from '@rn-primitives/tooltip';

export interface LabelProps {
  style?: StyleProp<TextStyle>;
  bold?: boolean;
  children?: any;
  nativeId?: string;
  inline?: boolean;
  marginBottom?: number;
}

export const Label: React.FC<LabelProps> = ({
  children,
  style,
  bold,
  inline,
  marginBottom,
  nativeId,
}) => {
  const theme = useTheme();
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger>
        <Text>{Platform.OS === 'web' ? "Hover me" : "Press me"}</Text>
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content>
          <Text
            style={[
              getLabelStyles({
                theme,
                bold,
                inline,
                marginBottom,
                //toolTipText,
              }),
              style,
            ]} nativeID={nativeId}
          >
            {children + "Hello"}
          </Text>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
};

export default Label;
