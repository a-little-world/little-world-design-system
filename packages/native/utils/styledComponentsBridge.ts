/**
 * This file serves as a bridge between web styled-components and React Native.
 * It transforms web styled-components into React Native components.
 */

import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import * as styledTypes from './styledComponentsTypes';
import * as styledUtils from './styledComponentsUtils';

// Export types from our types file
export * from './styledComponentsTypes';

// Create base styled instance for React Native components
const styledNative = {
  View: styled(View),
  Text: styled(Text),
  TouchableOpacity: styled(TouchableOpacity),
  AnimatedView: styled(Animated.View),
  AnimatedText: styled(Animated.Text),
};

// Create HTML element styled components that map to React Native components
export const div = styledNative.View;
export const span = styledNative.Text;
export const button = styledNative.TouchableOpacity;
export const a = styledNative.TouchableOpacity;

// A more comprehensive style transformer
export const transformStyles = (styles: any): any => {
  if (!styles) return {};
  
  const transformedStyles: any = {};
  
  // Common CSS to React Native style mappings
  const styleMap: Record<string, (value: string) => any> = {
    // Layout
    display: (value) => value === 'none' ? 'none' : 'flex',
    flex: (value) => Number(value) || undefined,
    flexDirection: (value) => value,
    justifyContent: (value) => value,
    alignItems: (value) => value,
    
    // Dimensions
    width: (value) => value.includes('%') ? value : Number.parseFloat(value) || undefined,
    height: (value) => value.includes('%') ? value : Number.parseFloat(value) || undefined,
    minWidth: (value) => value.includes('%') ? value : Number.parseFloat(value) || undefined,
    minHeight: (value) => value.includes('%') ? value : Number.parseFloat(value) || undefined,
    maxWidth: (value) => value.includes('%') ? value : Number.parseFloat(value) || undefined,
    maxHeight: (value) => value.includes('%') ? value : Number.parseFloat(value) || undefined,
    
    // Positioning
    position: (value) => value === 'sticky' ? 'absolute' : value,
    top: (value) => Number.parseFloat(value) || undefined,
    right: (value) => Number.parseFloat(value) || undefined,
    bottom: (value) => Number.parseFloat(value) || undefined,
    left: (value) => Number.parseFloat(value) || undefined,
    
    // Spacing
    margin: (value) => Number.parseFloat(value) || undefined,
    marginTop: (value) => Number.parseFloat(value) || undefined,
    marginRight: (value) => Number.parseFloat(value) || undefined,
    marginBottom: (value) => Number.parseFloat(value) || undefined,
    marginLeft: (value) => Number.parseFloat(value) || undefined,
    padding: (value) => Number.parseFloat(value) || undefined,
    paddingTop: (value) => Number.parseFloat(value) || undefined,
    paddingRight: (value) => Number.parseFloat(value) || undefined,
    paddingBottom: (value) => Number.parseFloat(value) || undefined,
    paddingLeft: (value) => Number.parseFloat(value) || undefined,
    
    // Colors
    backgroundColor: (value) => value,
    color: (value) => value,
    
    // Borders
    borderRadius: (value) => Number.parseFloat(value) || 0,
    borderWidth: (value) => Number.parseFloat(value) || 0,
    borderColor: (value) => value,
    borderStyle: (value) => value === 'solid' ? 'solid' : 'dotted', // RN only supports solid and dotted
    
    // Typography
    fontSize: (value) => Number.parseFloat(value) || undefined,
    fontWeight: (value) => value,
    fontFamily: (value) => value,
    textAlign: (value) => value,
    lineHeight: (value) => Number.parseFloat(value) || undefined,
    letterSpacing: (value) => Number.parseFloat(value) || undefined,
    textDecorationLine: (value) => value === 'underline' ? 'underline' : 'none',
  };
  
  // Process each style property
  for (const key in styles) {
    if (styleMap[key]) {
      transformedStyles[key] = styleMap[key](styles[key]);
    }
  }
  
  // Special handling for combined properties
  if (styles.border) {
    const borderParts = styles.border.split(' ');
    if (borderParts.length >= 3) {
      transformedStyles.borderWidth = Number.parseFloat(borderParts[0]) || 0;
      transformedStyles.borderStyle = borderParts[1] === 'solid' ? 'solid' : 'dotted';
      transformedStyles.borderColor = borderParts[2];
    }
  }
  
  return transformedStyles;
};

export const transformComponent = <T extends React.ComponentType<any>>(
  Component: T
): React.FC<React.ComponentProps<T>> => {
  return (props: React.ComponentProps<T>) => {
    // Extract style from props and transform it
    const { style, ...restProps } = props as any;
    const transformedStyle = transformStyles(style);
    
    // Apply transformed styles without using JSX spread syntax directly
    return React.createElement(Component, {
      ...restProps,
      style: transformedStyle
    });
  };
};

// Helper to create styled components that work in React Native
export const createStyledComponent = (
  component: React.ComponentType<any>,
  cssTemplate: TemplateStringsArray,
  ...interpolations: any[]
) => {
  // Parse CSS template to extract styles
  const cssString = String.raw(cssTemplate, ...interpolations);
  const parsedStyles = parseCSSToRNStyle(cssString);
  
  // Return a styled component
  return styled(component)`
    ${parsedStyles}
  `;
};

// Simple CSS parser (this would need to be expanded for a real implementation)
const parseCSSToRNStyle = (css: string) => {
  // This is a placeholder - in a real implementation you'd parse the CSS
  // and convert it to React Native styles
  return css;
};

// Export the styled instance with React Native components
export default {
  ...styledNative,
  div,
  span,
  button,
  a,
  transformStyles,
  transformComponent,
  createStyledComponent,
};