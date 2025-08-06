import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ViewStyle } from 'react-native';
import { parseGradientString } from '../../utils/gradientParser';

interface GradientProps {
  gradient: string;
  style?: ViewStyle;
  children?: React.ReactNode;
}

const styles = StyleSheet.create({
  fullSize: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export const Gradient: React.FC<GradientProps> = ({
  gradient,
  style,
  children,
}) => {
  const { colors, start, end } = parseGradientString(gradient);

  return (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      style={[styles.fullSize, style]}
    >
      {children}
    </LinearGradient>
  );
};

export default Gradient;
