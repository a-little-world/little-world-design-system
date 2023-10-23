import React from 'react';
import { CheckboxProps } from '@radix-ui/react-checkbox';
import {
  CheckboxRoot,
  CheckboxContainer,
  CheckboxIndicator,
  CheckboxWrapper,
  StyledLabel,
} from './styles';
import { CheckIcon } from '../Icon';
import { coreColors } from '../../tokens/core';
import InputError from '../InputError/InputError';

type Props = {
  className?: string;
  color?: string;
  error?: string;
  label?: string;
} & CheckboxProps;

const Checkbox: React.FC<Props> = ({
  checked,
  className,
  color = coreColors.orange,
  error,
  label,
  onCheckedChange,
  value,
  ...rest
}: Props) => (
  <CheckboxWrapper className={className}>
    <CheckboxContainer>
      <CheckboxRoot
        {...rest}
        checked={checked}
        onCheckedChange={onCheckedChange}
        value={value}
        $hasError={Boolean(error)}
      >
        <CheckboxIndicator>
          <CheckIcon label="check icon" labelId="check icon" width={10} />
        </CheckboxIndicator>
      </CheckboxRoot>
      {label && (
        <StyledLabel htmlFor={label} inline>
          {label}
        </StyledLabel>
      )}
    </CheckboxContainer>
    <InputError visible={Boolean(error)}>{error}</InputError>
  </CheckboxWrapper>
);

export default Checkbox;
