import React from 'react';

import LoadingRing from '../Loading/Loading';
import { StyledButton } from './styles';

export enum ButtonVariations {
  Basic = 'Basic',
  Option = 'Option',
  Circle = 'Circle',
  Icon = 'Icon',
  Inline = 'Inline',
}

export enum ButtonAppearance {
  Primary = 'Primary',
  Secondary = 'Secondary',
}

// Applies only to Basic Button Variation
export enum ButtonSizes {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  Stretch = 'Stretch', // default
}
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  appearance?: keyof typeof ButtonAppearance;
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  loading?: boolean;
  size?: ButtonSizes;
  variation?: keyof typeof ButtonVariations;
}

export type Ref = HTMLButtonElement;

const Button: React.FC<ButtonProps> = React.forwardRef<Ref, ButtonProps>(
  (
    {
      appearance = ButtonAppearance.Primary,
      backgroundColor,
      borderColor,
      color,
      children,
      loading,
      size,
      variation = ButtonVariations.Basic,
      type = 'button',
      ...rest
    },
    ref,
  ) => {
    return (
      <StyledButton
        $appearance={appearance}
        $backgroundColor={backgroundColor}
        $borderColor={borderColor}
        $color={color}
        $size={size}
        $variation={variation}
        ref={ref}
        type={type}
        {...rest}
      >
        {loading ? <LoadingRing /> : children}
      </StyledButton>
    );
  },
);

export default Button;
