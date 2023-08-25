import React from 'react';
import { StyledButton } from './styles';

export enum ButtonTypes {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Control = 'Control',
  Icon = 'Icon',
  Inline = 'Inline',
}

// Applies only to Primary and Secondary Types
export enum ButtonSizes {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  Stretch = 'Stretch', // default
}
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  backgroundColor?: string;
  color?: string;
  size?: ButtonSizes;
  variation?: keyof typeof ButtonTypes;
}

export type Ref = HTMLButtonElement;

const Button: React.FC<ButtonProps> = React.forwardRef<Ref, ButtonProps>(
  (
    {
      backgroundColor,
      color,
      children,
      size = ButtonSizes.Small,
      variation = ButtonTypes.Primary,
      type = 'button',
      ...rest
    },
    ref,
  ) => {
    return (
      <StyledButton
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
