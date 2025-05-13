import React from "react";
import { View, ScrollView, FlexAlignType, ViewStyle, DimensionValue } from "react-native";
import {
  CardBaseProps,
  CardContentProps,
  CardFooterProps,
  CardHeaderProps,
  CardSizes,
  TextTypes,
} from "@a-little-world/little-world-design-system-core";
import Text from "../Text/Text";
import {
  getCardStyles,
  getCardHeaderStyles,
  getCardContentStyles,
  getCardFooterStyles,
} from "./styles";
import { useTheme } from "styled-components/native";

// Re-export enums for easy access
export { CardSizes };

type CardProps = CardBaseProps & {
  style?: any;
};

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  textColor,
  textType,
}) => {
  const theme = useTheme();
  return (
  <Text
    style={getCardHeaderStyles({ theme })}
    type={textType || TextTypes.Heading4}
    center
    color={textColor}
  >
    {children}
  </Text>
)};

export const CardContent: React.FC<CardContentProps> = ({
  children,
  align,
  gap,
  marginBottom,
}) => {
  const theme = useTheme();
  const styles = getCardContentStyles({ 
    align,
    gap, 
    marginBottom, 
    theme
  });
  const { flexDirection, alignItems, gap: contentGap, marginBottom: contentMarginBottom, ...containerStyle } = styles;
  
  return (
    <ScrollView 
      style={containerStyle}
      contentContainerStyle={{ flexDirection, alignItems, gap: contentGap, marginBottom: contentMarginBottom }}
    >
      {children}
    </ScrollView>
  );
};

export const CardFooter: React.FC<CardFooterProps> = ({ children, align }) => {
  const theme = useTheme();
  return (
  <View style={getCardFooterStyles({ 
    align, 
    theme
  })}>
    {children}
  </View>
)};

const Card: React.FC<CardProps> = ({
  borderColor,
  children,
  style,
  height,
  width,
}) => {
  const theme = useTheme();
  return (
  <View
    style={[getCardStyles({ 
      borderColor, 
      height: height as DimensionValue, 
      width, 
      theme
    }), style]}
  >
    {children}
  </View>
)};

export default Card;
