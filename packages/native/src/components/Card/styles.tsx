import { ViewStyle, DimensionValue } from 'react-native';
import {
  CardDimensions,
  CardSizes,
} from '@a-little-world/little-world-design-system-core';
import { FlexAlignType, FlexStyle } from 'react-native';

export const getCardStyles = ({
  borderColor,
  height,
  theme,
  width,
}: {
  borderColor?: string;
  height?: DimensionValue;
  theme: any;
  width?: CardSizes;
}): ViewStyle => ({
  borderRadius: theme.radius.small,
  backgroundColor: theme.color.surface.primary,
  borderWidth: 1,
  borderColor: borderColor || theme.color.border.subtle,
  shadowColor: theme.color.text.primary,
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.05,
  shadowRadius: 25,
  elevation: 2,
  width: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
  flexDirection: 'column',
  padding: theme.spacing.small,
  ...(width && { width: CardDimensions[width] }),
  ...(height && { height }),
});

export const getCardHeaderStyles = ({ theme }: { theme: any }): ViewStyle => ({
  marginBottom: theme.spacing.small,
});

export const getCardContentStyles = ({
  align,
  gap,
  marginBottom,
  theme,
}: {
  align?: FlexAlignType;
  gap?: number;
  marginBottom?: number;
  theme: any;
}): ViewStyle => ({
  flexDirection: 'column',
  alignItems: align || 'center',
  gap: gap || theme.spacing.small,
  marginBottom: marginBottom || theme.spacing.small,
});

export const getCardFooterStyles = ({
  align,
  theme,
}: {
  align?: FlexStyle['justifyContent'];
  theme: any;
}): ViewStyle => ({
  flexDirection: 'row',
  marginTop: 'auto',
  width: '100%',
  gap: theme.spacing.small,
  justifyContent: align || 'flex-start',
});
