import { CheckboxProps } from '@radix-ui/react-checkbox';
import React from 'react';

import { coreColors } from '../../tokens/core';
import { CheckIcon } from '../Icon';
import InputError from '../InputError/InputError';
import {
  CheckboxContainer,
  CheckboxIndicator,
  CheckboxRoot,
  CheckboxWrapper,
  StyledLabel,
} from './styles';

type Props = {
  className?: string;
  color?: string;
  error?: string;
  id?: string;
  inputRef?: React.RefObject<HTMLButtonElement>;
  label?: string;
  required?: boolean;
} & CheckboxProps;

const Checkbox: React.FC<Props> = ({
  checked,
  className,
  color,
  error,
  required = true,
  id,
  inputRef,
  label,
  onCheckedChange,
  value,
  ...rest
}: Props) => {
  return (
    <CheckboxWrapper className={className}>
      <CheckboxContainer>
        <CheckboxRoot
          ref={inputRef}
          id={id}
          checked={checked}
          onCheckedChange={onCheckedChange}
          value={value}
          $hasError={Boolean(error)}
          $color={color}
          {...rest}
        >
          <CheckboxIndicator>
            <CheckIcon label="check icon" labelId="check icon" width={10} />
          </CheckboxIndicator>
        </CheckboxRoot>
        {label && (
          <StyledLabel htmlFor={id} inline>
            {label}
          </StyledLabel>
        )}
      </CheckboxContainer>
      {required && (
        <InputError visible={Boolean(error)} textAlign="left">
          {error}
        </InputError>
      )}
    </CheckboxWrapper>
  );
};

export default Checkbox;
