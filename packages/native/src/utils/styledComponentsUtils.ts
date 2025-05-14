import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';
import { RNAnimatedValue, WebStyle, RNStyle } from './styledComponentsTypes';

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
  return styled.View`
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
  
  // Extract keyframe selectors (from, to, percentages)
  const keyframeSelectors: Record<string, Record<string, any>> = {};
  
  // Match all keyframe selectors and their content
  const keyframeRegex = /([0-9]+%|from|to)\s*{([^}]*)}/g;
  let match;
  
  while ((match = keyframeRegex.exec(keyframeString)) !== null) {
    const selector = match[1];
    const content = match[2];
    keyframeSelectors[selector] = parseStyles(content);
  }
  
  // Special handling for transform: rotate
  const hasRotation = Object.values(keyframeSelectors).some(styles => 
    styles.transform && styles.transform.includes('rotate')
  );
  
  // Return a function that can be used in animation configurations
  return (animationConfig = {}) => {
    // Convert from/to to 0%/100% for consistency
    if (keyframeSelectors.from && !keyframeSelectors['0%']) {
      keyframeSelectors['0%'] = keyframeSelectors.from;
    }
    if (keyframeSelectors.to && !keyframeSelectors['100%']) {
      keyframeSelectors['100%'] = keyframeSelectors.to;
    }
    
    // Get ordered percentage points (0%, 25%, 50%, etc.)
    const percentagePoints = Object.keys(keyframeSelectors)
      .filter(key => key !== 'from' && key !== 'to')
      .sort((a, b) => {
        const percentA = parseInt(a);
        const percentB = parseInt(b);
        return percentA - percentB;
      });
    
    // If we have rotation, we need special handling
    if (hasRotation) {
      return {
        // Function to create a rotation animation
        createAnimation: (animValue: Animated.Value, duration = 1000) => {
          return Animated.timing(animValue, {
            toValue: 1,
            duration,
            useNativeDriver: true,
            ...animationConfig
          });
        },
        
        // Function to get the animated style for rotation
        getAnimatedStyle: (animValue: Animated.Value) => {
          // Extract rotation angles from transform strings
          const extractRotation = (transformStr: string): number => {
            const match = transformStr.match(/rotate\(([^)]+)deg\)/);
            return match ? parseFloat(match[1]) : 0;
          };
          
          // Build input and output ranges for interpolation
          const inputRange: number[] = [];
          const outputRange: string[] = [];
          
          percentagePoints.forEach(percent => {
            const percentValue = parseInt(percent) / 100;
            if (keyframeSelectors[percent]?.transform) {
              inputRange.push(percentValue);
              const rotation = extractRotation(keyframeSelectors[percent].transform);
              outputRange.push(`${rotation}deg`);
            }
          });
          
          // If we don't have enough points, add defaults
          if (inputRange.length < 2) {
            inputRange.push(0, 1);
            outputRange.push('0deg', '360deg');
          }
          
          return {
            transform: [{
              rotate: animValue.interpolate({
                inputRange,
                outputRange,
              })
            }]
          };
        }
      };
    }
    
    // For non-rotation animations
    return {
      createAnimation: (animValue: Animated.Value, duration = 1000) => {
        return Animated.timing(animValue, {
          toValue: 1,
          duration,
          useNativeDriver: true,
          ...animationConfig
        });
      },
      
      getAnimatedStyle: (animValue: Animated.Value) => {
        const animatedStyle: any = {};
        
        // Handle each style property with interpolation
        const styleProps = new Set<string>();
        Object.values(keyframeSelectors).forEach(styles => {
          Object.keys(styles).forEach(key => styleProps.add(key));
        });
        
        styleProps.forEach(prop => {
          const inputRange: number[] = [];
          const outputRange: any[] = [];
          
          percentagePoints.forEach(percent => {
            if (keyframeSelectors[percent] && prop in keyframeSelectors[percent]) {
              inputRange.push(parseInt(percent) / 100);
              outputRange.push(keyframeSelectors[percent][prop]);
            }
          });
          
          if (inputRange.length >= 2) {
            animatedStyle[prop] = animValue.interpolate({
              inputRange,
              outputRange,
            });
          }
        });
        
        return animatedStyle;
      }
    };
  };
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
  
  // Keep transform values as is for later processing
  if (value.includes('translate') || value.includes('rotate') || value.includes('scale')) {
    return value;
  }
  
  return value;
};

/**
 * A utility function to convert web styles to React Native styles
 * 
 * @param webStyles Web styles
 * @returns React Native styles
 */
export const webToRNStyles = (webStyles: WebStyle): RNStyle => {
  const rnStyles: RNStyle = {};
  
  // Convert display
  if (webStyles.display) {
    rnStyles.display = webStyles.display === 'none' ? 'none' : 'flex';
  }
  
  // Convert flex
  if (webStyles.flex) {
    rnStyles.flex = webStyles.flex;
  }
  
  // Convert dimensions
  if (webStyles.width) {
    rnStyles.width = typeof webStyles.width === 'string' 
      ? parseFloat(webStyles.width.replace('px', ''))
      : webStyles.width;
  }
  
  if (webStyles.height) {
    rnStyles.height = typeof webStyles.height === 'string'
      ? parseFloat(webStyles.height.replace('px', ''))
      : webStyles.height;
  }
  
  if (webStyles.minHeight) {
    rnStyles.minHeight = typeof webStyles.minHeight === 'string'
      ? parseFloat(webStyles.minHeight.replace('px', ''))
      : webStyles.minHeight;
  }
  
  // Convert positioning
  if (webStyles.position) {
    rnStyles.position = webStyles.position as 'absolute' | 'relative';
  }
  
  // Convert borders
  if (webStyles.border) {
    const [width, style, color] = webStyles.border.split(' ');
    rnStyles.borderWidth = parseInt(width);
    rnStyles.borderColor = color;
  }
  
  // Convert border radius
  if (webStyles.borderRadius) {
    rnStyles.borderRadius = typeof webStyles.borderRadius === 'string'
      ? parseFloat(webStyles.borderRadius.replace('px', ''))
      : webStyles.borderRadius;
  }
  
  // Convert colors
  if (webStyles.color) {
    rnStyles.color = webStyles.color;
  }
  
  // Convert animations
  if (webStyles.animation) {
    const [duration, timing, delay] = webStyles.animation.split(' ');
    rnStyles.animationDuration = duration;
    rnStyles.animationTimingFunction = timing;
    rnStyles.animationDelay = delay;
  }
  
  return rnStyles;
};

export default {
  createGlobalStyle,
  keyframes,
  webToRNStyles,
}; 