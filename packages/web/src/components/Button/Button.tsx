import React from 'react';

import {
  ButtonAppearance,
  ButtonBaseProps,
  ButtonSizes,
  ButtonVariations,
} from '@a-little-world/little-world-design-system-core';
import Loading from '../Loading/Loading';
import { StyledButton } from './styles';

// Re-export enums for easy access
export { ButtonAppearance, ButtonSizes, ButtonVariations };

export interface ButtonProps
  extends ButtonBaseProps,
    React.ComponentPropsWithoutRef<'button'> {
  isDummy?: boolean; // Renders a div instead of a button
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
      isDummy,
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
        as={isDummy ? 'div' : 'button'}
        ref={ref}
        type={type}
        {...rest}
      >
        {loading ? <Loading /> : children}
      </StyledButton>
    );
  },
);

export default Button;
