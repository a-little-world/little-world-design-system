import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';
import {
  LoadingBaseProps,
  LoadingSizes,
} from '@a-little-world/little-world-design-system-core';
import { getLoadingContainerStyles, getLoadingElementStyles } from './styles';

// Re-export enum for easy access
export { LoadingSizes };

export const LOADING_RING_ID = 'loadingRing';

interface LoadingProps extends LoadingBaseProps {
  style?: any;
}

const Loading: React.FC<LoadingProps> = ({
  align,
  style,
  color,
  inline = false,
  size = LoadingSizes.Small,
}) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1400,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => {
        spinValue.setValue(0);
        startAnimation();
      });
    };

    startAnimation();

    return () => {
      spinValue.stopAnimation();
    };
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View
      style={[getLoadingContainerStyles(align as any, inline, size), style]}
      testID={LOADING_RING_ID}
    >
      {[0, 1, 2, 3].map(index => (
        <Animated.View
          key={index}
          style={[
            getLoadingElementStyles(color, size, index),
            {
              transform: [{ rotate: spin }],
            },
          ]}
        />
      ))}
    </View>
  );
};

export default Loading;
