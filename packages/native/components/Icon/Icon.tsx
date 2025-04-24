import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import { Gradients, IconBaseProps } from '@a-little-world/little-world-design-system-core';

const Circle = styled.View<{
  $backgroundColor?: string;
  $borderColor?: string;
  color?: string;
}>`
  background-color: ${({ theme, $backgroundColor }) =>
    $backgroundColor || theme.color.surface.secondary};
  border: 2px solid ${({ theme, $borderColor }) => 
    $borderColor || theme.color.border.contrast};
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxsmall};
`;

const StyledImageLabel = styled.Text<{ 
  $top: string; 
  $visible?: boolean 
}>`
  ${({ $top, $visible }) =>
    $visible
      ? `
          position: relative;
          margin-top: ${$top};
        `
      : `
          position: absolute;
          height: 1px;
          width: 1px;
          overflow: hidden;
        `}
`;

export type IconSvgProps = Omit<IconBaseProps, 'children'> & {
  gradient?: Gradients;
  width?: number | string;
  height?: number | string;
  viewBox?: string;
};

// ImageLabel component
export const ImageLabel = ({ 
  children, 
  $visible, 
  $top, 
  id 
}: { 
  children: React.ReactNode; 
  $visible?: boolean; 
  $top: string;
  id?: string;
}) => (
  <StyledImageLabel 
    $visible={$visible} 
    $top={$top}
    accessible={true}
    accessibilityLabel={children?.toString()}
    nativeID={id}
  >
    {children}
  </StyledImageLabel>
);

// Main Icon component
export const Icon = ({
  backgroundColor,
  borderColor,
  children,
  circular,
  style,
  color,
  label,
  labelVisible,
  labelTop = '56px',
  labelId,
}: Omit<IconBaseProps, 'className'> & { style?: any }) => (
  <>
    {circular ? (
      <Circle
        $backgroundColor={backgroundColor}
        $borderColor={borderColor}
        style={style}
        color={color}
      >
        {children}
      </Circle>
    ) : (
      <View style={style}>{children}</View>
    )}
    {label && (
      <ImageLabel 
        $visible={labelVisible} 
        $top={labelTop}
        id={labelId}
      >
        {label}
      </ImageLabel>
    )}
  </>
);

export default Icon;