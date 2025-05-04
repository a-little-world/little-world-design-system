import { ViewStyle } from 'react-native';
import { LoadingDimensions, LoadingSizes } from '@a-little-world/little-world-design-system-core';

export const getLoadingContainerStyles = (
  align?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly',
  inline?: boolean,
  size?: LoadingSizes
): ViewStyle => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: align || 'center',
  position: 'relative',
  width: inline ? LoadingDimensions[size || LoadingSizes.Small] : '100%',
  height: '100%',
  minHeight: LoadingDimensions[size || LoadingSizes.Small],
});

export const getLoadingElementStyles = (
  color?: string,
  size?: LoadingSizes,
  index?: number
): ViewStyle => ({
  position: 'absolute',
  width: LoadingDimensions[size || LoadingSizes.Small],
  height: LoadingDimensions[size || LoadingSizes.Small],
  borderWidth: size === LoadingSizes.Large ? 4 : 2,
  borderColor: color || 'currentColor',
  borderTopColor: 'transparent',
  borderRadius: 9999,
  transform: [{ rotate: '0deg' }],
});