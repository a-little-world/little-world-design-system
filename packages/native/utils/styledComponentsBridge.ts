/**
 * This file serves as a bridge between styled-components and React Native.
 * It adapts the core package's styled-components for use with React Native components.
 * 
 * Usage:
 * Instead of:
 * import styled from 'styled-components/native';
 * 
 * Use:
 * import styled from '../utils/styledComponentsBridge';
 */

import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';
import * as styledTypes from './styledComponentsTypes';

// Re-export everything from styled-components
export * from 'styled-components';

// Export missing types from our types file
export * from './styledComponentsTypes';

// Create base styled instance for React Native components
const styledNative = {
  View: styled(View),
  Text: styled(Text),
  TouchableOpacity: styled(TouchableOpacity),
};

// Create HTML element styled components that map to React Native components
export const div = styledNative.View;
export const span = styledNative.Text;
export const button = styledNative.TouchableOpacity;
export const a = styledNative.TouchableOpacity;

// Add HTML elements to styled object
// @ts-ignore - Access the styled object
const styledAny = styled as any;

// Add missing methods if they don't exist
if (!styledAny.keyframes) {
  styledAny.keyframes = styledTypes.keyframes;
}

if (!styledAny.createGlobalStyle) {
  styledAny.createGlobalStyle = styledTypes.createGlobalStyle;
}

// Helper function to use in components
export const useStyledHtml = () => {
  return {
    div,
    span,
    button,
    a,
    // Add more as needed
  };
};

// Helper function to convert CSS properties to React Native styles
export const cssToRN = (cssProps: Record<string, any>) => {
  const rnStyles: Record<string, any> = {};
  
  // Convert CSS properties to React Native styles
  Object.entries(cssProps).forEach(([key, value]) => {
    // Convert kebab-case to camelCase
    const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
    
    // Handle special cases
    switch (camelKey) {
      case 'display':
        // React Native only supports 'flex' and 'none'
        rnStyles.display = value === 'none' ? 'none' : 'flex';
        break;
      case 'fontWeight':
        // React Native only supports numeric values or 'normal', 'bold'
        rnStyles.fontWeight = value;
        break;
      default:
        rnStyles[camelKey] = value;
    }
  });
  
  return rnStyles;
};

// Export the styled instance with React Native components
export default {
  ...styled,
  ...styledNative,
  div,
  span,
  button,
  a,
}; 