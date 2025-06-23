import createStyles, { getLabelStyles } from "./styles";
import React from "react";
import { Text, TextStyle, StyleProp, View, StyleSheet } from "react-native";
import { useTheme } from "styled-components/native";
import ToolTip from "../ToolTip/ToolTip";
import Button, { ButtonVariations } from "../Button/Button";
import { QuestionIcon } from "../Icon";

export interface LabelProps {
  style?: StyleProp<TextStyle>;
  bold?: boolean;
  children?: any;
  nativeId?: string;
  inline?: boolean;
  marginBottom?: number;
  toolTipText?: string;
  toolTip?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  children,
  style,
  bold,
  inline,
  marginBottom,
  nativeId,
  toolTipText,
  toolTip = false,
}) => {
  const theme = useTheme();
  const styles = createStyles({ theme })
  return (
    <View style={styles.container}>
      <Text
        style={[
          getLabelStyles({
            theme,
            bold,
            inline,
            marginBottom,
          }),
          style,
        ]} nativeID={nativeId}
      >
        {children}
      </Text>
      {toolTipText ? <ToolTip
        trigger={<Button variation={ButtonVariations.Icon}>
          <QuestionIcon label="questionIcon" width={18} height={18} />
        </Button>}
        text={toolTipText as string}
      /> : null}
    </View>
  );
};

export default Label;


