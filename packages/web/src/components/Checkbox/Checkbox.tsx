import { CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox';
import React from 'react';

import { CheckIcon } from '../Icon';
import InputError from '../InputError/InputError';
import {
  CheckboxButtonContainer,
  CheckboxContainer,
  CheckboxIndicator,
  CheckboxRoot,
  CheckboxWrapper,
  NonInteractiveCheckbox,
  StyledLabel,
} from './styles';

type CheckboxProps = {
  className?: string;
  color?: string;
  error?: string;
  id?: string;
  inputRef?: React.RefObject<HTMLButtonElement>;
  label?: string;
  readOnly?: boolean;
  required?: boolean;
} & RadixCheckboxProps;

export const CheckboxButton: React.FC<CheckboxProps> = ({
  checked,
  className,
  color,
  error,
  required = true,
  id,
  inputRef,
  label,
  onCheckedChange,
  readOnly,
  value,
  ...rest
}) => (
  <CheckboxButtonContainer
    ref={inputRef}
    id={id}
    checked={checked}
    onCheckedChange={onCheckedChange}
    value={value}
    $hasError={Boolean(error)}
    {...rest}
  >
    <NonInteractiveCheckbox $color={color} checked={checked}>
      {checked && (
        <CheckIcon label="check icon" width={10} />
      )}
    </NonInteractiveCheckbox>
    {label && (
      <StyledLabel htmlFor={id} inline>
        {label}
      </StyledLabel>
    )}
  </CheckboxButtonContainer>
);

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  className,
  color,
  error,
  required = true,
  id,
  inputRef,
  label,
  onCheckedChange,
  readOnly,
  value,
  ...rest
}) => {
  return (
    <CheckboxWrapper className={className}>
      <CheckboxContainer>
        {readOnly ? (
          <NonInteractiveCheckbox $color={color} checked={checked}>
            {checked && (
              <CheckIcon label="check icon" width={10} />
            )}
          </NonInteractiveCheckbox>
        ) : (
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
              <CheckIcon label="check icon" width={10} />
            </CheckboxIndicator>
          </CheckboxRoot>
        )}
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
