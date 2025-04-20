/**
 * This file provides type definitions for transforming web styled-components to React Native.
 */

import { DefaultTheme } from 'styled-components';

// Re-export types from styled-components
export { DefaultTheme } from 'styled-components';

// Define React Native specific types
export type RNStyleProp = Record<string, any>;
export type RNAnimatedValue = any;
export type RNViewStyle = any;
export type RNTextStyle = any;

// Helper types for React Native styled components
export type StyledRNComponent<T, P> = any;
export type StyledRNComponentBase<C, T, O, A> = any;
export type ThemedRNStyledFunction<C, T, O, A> = any;
export type ThemedRNStyledComponentsModule<T> = any;
export type ThemedRNCssFunction<T> = any;

// Types for style transformations
export type WebStyle = {
  display?: string;
  flex?: number;
  width?: string | number;
  height?: string | number;
  minHeight?: string | number;
  position?: string;
  border?: string;
  borderRadius?: string | number;
  color?: string;
  animation?: string;
};

export type RNStyle = {
  display?: 'flex' | 'none';
  flex?: number;
  width?: number;
  height?: number;
  minHeight?: number;
  position?: 'absolute' | 'relative';
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  color?: string;
  animationDuration?: string;
  animationTimingFunction?: string;
  animationDelay?: string;
};

// Export animation utilities
export const createAnimation = (value: RNAnimatedValue, duration: number = 300) => {
  return {
    toValue: 1,
    duration,
    useNativeDriver: true,
  };
};

export const interpolate = (value: RNAnimatedValue, inputRange: number[], outputRange: any[]) => {
  return value.interpolate({
    inputRange,
    outputRange,
  });
}; 