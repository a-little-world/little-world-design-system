import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components';
import { RNAnimatedValue } from './styledComponentsTypes';

/**
 * This utility file provides React Native specific adaptations for styled-components features.
 */

/**
 * A React Native specific implementation of createGlobalStyle
 * In React Native, we can't have global styles like in web, but we can create
 * a component that applies styles to its children.
 * 
 * @param styles The styles to apply
 * @returns A styled component that applies the styles to its children
 */
export const createGlobalStyle = (styles: any) => {
  // Create a component that applies the styles to its children
  return styled.div`
    ${styles}
  `;
};

/**
 * A React Native specific implementation of keyframes
 * In React Native, we use Animated API for animations
 * 
 * @param keyframeStyles The keyframe styles
 * @returns A function that creates an animation configuration
 */
export const keyframes = (keyframeStyles: TemplateStringsArray | string) => {
  // Parse the keyframe styles to extract the values
  const keyframeString = typeof keyframeStyles === 'string' 
    ? keyframeStyles 
    : keyframeStyles.join('');
  
  // Extract from and to values
  const fromMatch = keyframeString.match(/from\s*{([^}]*)}/);
  const toMatch = keyframeString.match(/to\s*{([^}]*)}/);
  
  const fromStyles = fromMatch ? parseStyles(fromMatch[1]) : {};
  const toStyles = toMatch ? parseStyles(toMatch[1]) : {};
  
  // Return a function that can be used in animation configurations
  return () => ({
    fromStyles,
    toStyles,
    createAnimation: (value: RNAnimatedValue, duration: number = 300) => {
      return Animated.timing(value, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      });
    },
    getAnimatedStyle: (value: RNAnimatedValue) => {
      const animatedStyle: any = {};
      
      // Create interpolations for each property
      Object.keys(toStyles).forEach(key => {
        if (key in fromStyles) {
          animatedStyle[key] = value.interpolate({
            inputRange: [0, 1],
            outputRange: [fromStyles[key], toStyles[key]],
          });
        }
      });
      
      return animatedStyle;
    }
  });
};

// Helper function to parse CSS styles
const parseStyles = (stylesString: string) => {
  const styles: Record<string, any> = {};
  
  // Split by semicolons and process each declaration
  stylesString.split(';').forEach(declaration => {
    const [property, value] = declaration.split(':').map(s => s.trim());
    if (property && value) {
      // Convert CSS property names to camelCase
      const camelProperty = property.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
      
      // Convert values if needed (e.g., '200px' to 200)
      styles[camelProperty] = convertValue(value);
    }
  });
  
  return styles;
};

// Helper function to convert CSS values to React Native values
const convertValue = (value: string) => {
  // Convert pixel values to numbers
  if (value.endsWith('px')) {
    return parseFloat(value);
  }
  
  // Convert percentage values to numbers between 0 and 1
  if (value.endsWith('%')) {
    return parseFloat(value) / 100;
  }
  
  // Handle opacity
  if (value === '0' || value === '1') {
    return parseFloat(value);
  }
  
  // Handle transform values
  if (value.includes('translate') || value.includes('rotate') || value.includes('scale')) {
    // For simplicity, just return the value as is
    return value;
  }
  
  return value;
};

/**
 * A utility function to convert CSS properties to React Native styles
 * 
 * @param cssProps CSS properties
 * @returns React Native styles
 */
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
  
  return StyleSheet.create({ style: rnStyles }).style;
};

export default {
  createGlobalStyle,
  keyframes,
  cssToRN,
}; 