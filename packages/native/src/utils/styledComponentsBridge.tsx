/**
 * This file serves as a bridge between web styled-components and React Native.
 * It resolves issues with keyframes in React Native.
 */

import { Animated, View, Text } from 'react-native';
// Use standard styled-components (non-native) to avoid bundling issues
import styled from 'styled-components';
import { webToRNStyles } from './styledComponentsUtils';

/**
 * A simplified keyframes function for React Native
 * This allows using the same API as styled-components keyframes
 */
export const keyframes = (keyframeStyles: any) => {
  // In React Native, we'll just return a function that can be used with Animated
  return () => {
    // Create a basic animation setup
    return {
      // Function to create an animation
      createAnimation: (value: Animated.Value, duration = 1400) => {
        return Animated.timing(value, {
          toValue: 1,
          duration,
          useNativeDriver: true,
        });
      },
      
      // Function to get interpolated styles
      getRotationStyles: (value: Animated.Value) => {
        return {
          transform: [{
            rotate: value.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
            })
          }]
        };
      }
    };
  };
};

/**
 * Transforms a web styled component into a React Native compatible component
 * @param Component The web styled component to transform
 * @returns A React Native compatible component
 */
export function transformComponent<P>(Component: any) {
  // Create a new component that wraps the original and transforms its styles
  const TransformedComponent = (props: P) => {
    // Get the component's default props and merge with provided props
    const allProps = { ...Component.defaultProps, ...props };
    
    // Transform web styles to React Native styles
    const rnStyles = webToRNStyles(Component.styledComponentId);
    
    // Return a React Native View with transformed styles
    return <View style={rnStyles} {...allProps} />;
  };
  
  // Copy over any static properties
  Object.keys(Component).forEach(key => {
    if (key !== 'defaultProps') {
      (TransformedComponent as any)[key] = (Component as any)[key];
    }
  });
  
  return TransformedComponent;
}

// Export base styled components for React Native
export const StyledView = styled(View)``;
export const StyledText = styled(Text)``;