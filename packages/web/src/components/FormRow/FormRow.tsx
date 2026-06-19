import React from 'react';

import { StyledFormRow } from './styles';

type FormRowAlign = React.CSSProperties['alignItems'];

export interface FormRowBaseProps {
  align?: FormRowAlign;
  gap?: string;
}

export interface FormRowProps
  extends FormRowBaseProps,
    React.ComponentPropsWithoutRef<'div'> {}

const FormRow: React.FC<FormRowProps> = ({ align, gap, children, ...rest }) => {
  return (
    <StyledFormRow $align={align} $gap={gap} {...rest}>
      {children}
    </StyledFormRow>
  );
};

export default FormRow;
