import React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import styled from '../../utils/styledComponentsBridge';
import { LoadingSizes } from '../../../core/src/components/Loading/Loading';
import { cssToRN } from '../../utils/styledComponentsUtils';

const HEIGHTS: Record<LoadingSizes, string> = {
  [LoadingSizes.Small]: '18px',
  [LoadingSizes.Medium]: '32px',
  [LoadingSizes.Large]: '56px',
};

interface LoadingProps {
  size?: LoadingSizes;
  color?: string;
  inline?: boolean;
  align?: string;
}

interface LoadingContainerProps {
  inline?: boolean;
  size?: LoadingSizes;
  align?: string;
}

interface LoadingRingProps {
  size: LoadingSizes;
  color?: string;
}

const getContainerStyles = ({ inline, size, align }: LoadingContainerProps) => {
  return cssToRN({
    display: inline ? 'inline-flex' : 'flex',
    alignItems: 'center',
    justifyContent: align || 'center',
    position: 'relative',
    width: inline ? HEIGHTS[size || LoadingSizes.Small] : '100%',
    height: '100%',
    minHeight: HEIGHTS[size || LoadingSizes.Small],
  });
};

const getRingStyles = ({ size, color }: LoadingRingProps) => {
  const baseStyles: Record<string, string> = {
    boxSizing: 'border-box',
    display: 'block',
    position: 'absolute',
    width: HEIGHTS[size || LoadingSizes.Small],
    height: HEIGHTS[size || LoadingSizes.Small],
    border: '2px solid',
    borderRadius: '50%',
    borderColor: `${color || 'currentColor'} transparent transparent transparent`,
  };

  if (size === LoadingSizes.Medium) {
    baseStyles.borderWidth = '2px';
  } else if (size === LoadingSizes.Large) {
    baseStyles.borderWidth = '4px';
  }

  return cssToRN(baseStyles);
};

export const Loading: React.FC<LoadingProps> = ({
  size = LoadingSizes.Medium,
  color = '#000000',
  inline = false,
  align,
}) => {
  const spinValues = React.useRef([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]).current;

  React.useEffect(() => {
    const animations = spinValues.map((spinValue, index) => {
      return Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        delay: index * 250,
      });
    });

    const sequence = Animated.parallel(animations);

    const loop = Animated.loop(sequence);
    loop.start();

    return () => {
      loop.stop();
    };
  }, []);

  const spins = spinValues.map(spinValue =>
    spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    })
  );

  const containerStyles = getContainerStyles({ inline, size, align });
  const ringStyles = getRingStyles({ size, color });

  return (
    <View style={containerStyles}>
      {spins.map((spin, index) => (
        <Animated.View
          key={index}
          style={[
            ringStyles,
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