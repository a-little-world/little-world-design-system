import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';
import {
  LoadingBaseProps,
  LoadingSizes,
  LoadingType,
} from '@a-little-world/little-world-design-system-core';
import { getLoadingContainerStyles, getLoadingElementStyles } from './styles';
import LoadingLogo from './LoadingLogo';

// Re-export enum for easy access
export { LoadingSizes, LoadingType };

export const LOADING_RING_ID = 'loadingRing';
export const LOADING_LOGO_ID = 'loadingLogo';

interface LoadingProps extends LoadingBaseProps {
  style?: any;
}

const Loading: React.FC<LoadingProps> = ({
  align,
  style,
  color,
  inline = false,
  size = LoadingSizes.Small,
  type = LoadingType.Ring,
}) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Only start animation for Ring type
    if (type !== LoadingType.Ring) {
      return;
    }

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
  }, [type, spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const containerStyle = [
    getLoadingContainerStyles(
      align as
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'space-between'
        | 'space-around'
        | 'space-evenly',
      inline,
      size,
      type,
    ),
    style,
  ];

  if (type === LoadingType.Logo) {
    return (
      <View style={containerStyle} testID={LOADING_LOGO_ID}>
        <LoadingLogo size={size} label="Loading" />
      </View>
    );
  }

  return (
    <View style={containerStyle} testID={LOADING_RING_ID}>
      {[0, 1, 2, 3].map(index => (
        <Animated.View
          key={index}
          style={[
            getLoadingElementStyles(color, size),
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
