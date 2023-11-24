import React from 'react';
import { Loading, StyledButton } from './styles';

export const LOADING_RING_ID = 'loadingRing';

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
  loading?: boolean;
  size?: ButtonSizes;
  variation?: keyof typeof ButtonVariations;
}

export type Ref = HTMLButtonElement;

export const LoadingRing = () => (
  <Loading data-testid={LOADING_RING_ID}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </Loading>
);

const Button: React.FC<ButtonProps> = React.forwardRef<Ref, ButtonProps>(
  (
    {
      appearance = ButtonAppearance.Primary,
      backgroundColor,
      color,
      children,
      loading,
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
        {loading ? <LoadingRing /> : children}
      </StyledButton>
    );
  },
);

export default Button;
