import React from 'react';
import { coreColors } from '../../tokens/core';
import { StyledButton } from './styles';

export enum ButtonTypes {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Icon = 'Icon',
}
interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  backgroundColor?: string;
  variation?: keyof typeof ButtonTypes;
}

export type Ref = HTMLButtonElement;

const Button: React.FC<ButtonProps> = React.forwardRef<Ref, ButtonProps>(
  (
    {
      backgroundColor = coreColors.orange,
      children,
      variation = ButtonTypes.Primary,
      ...rest
    },
    ref,
  ) => {
    return (
      <StyledButton
        $backgroundColor={backgroundColor}
        $variation={variation}
        ref={ref}
        {...rest}
      >
        {children}
      </StyledButton>
    );
  },
);

export default Button;
