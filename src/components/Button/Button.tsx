import React from 'react';
import { StyledButton } from './styles';

export enum ButtonVariations {
  Basic = 'Basic',
  Option = 'Option',
  Control = 'Control',
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
  color?: string;
  size?: ButtonSizes;
  variation?: keyof typeof ButtonVariations;
}

export type Ref = HTMLButtonElement;

const Button: React.FC<ButtonProps> = React.forwardRef<Ref, ButtonProps>(
  (
    {
      appearance = ButtonAppearance.Primary,
      backgroundColor,
      color,
      children,
      size = ButtonSizes.Small,
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
        $color={color}
        $size={size}
        $variation={variation}
        ref={ref}
        type={type}
        {...rest}
      >
        {children}
      </StyledButton>
    );
  },
);

export default Button;
