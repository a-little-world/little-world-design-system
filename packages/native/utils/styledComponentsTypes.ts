/**
 * This file provides type definitions for React Native specific styled-components usage.
 * It extends the base styled-components types with React Native specific types.
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