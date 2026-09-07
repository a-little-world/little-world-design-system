import {
  CheckboxIconDimensions,
  CheckboxSizes,
} from '@a-little-world/little-world-design-system-core';
import { CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

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

const RequiredIndicator = styled.span`
  color: ${({ theme }) => theme.color.text.error};
  margin-left: 2px;
`;

type CheckboxBaseProps = {
  className?: string;
  color?: string;
  error?: string;
  id?: string;
  inputRef?: React.RefObject<HTMLButtonElement>;
  label?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: CheckboxSizes;
} & RadixCheckboxProps;

type CheckboxProps =
  | (CheckboxBaseProps & {
      label?: undefined;
      id?: string;
    })
  | (CheckboxBaseProps & {
      label: string;
      id: string;
    });

export const CheckboxButton: React.FC<CheckboxProps> = ({
  checked,
  className,
  color,
  error,
  id,
  inputRef,
  label,
  onCheckedChange,
  readOnly,
  required,
  size = CheckboxSizes.Medium,
  value,
  ...rest
}) => (
  <CheckboxButtonContainer
    className={className}
    ref={inputRef}
    id={id}
    checked={checked}
    onCheckedChange={onCheckedChange}
    value={value}
    required={required}
    $hasError={Boolean(error)}
    $size={size}
    $readOnly={readOnly}
    {...rest}
  >
    <NonInteractiveCheckbox $color={color} checked={checked} $size={size}>
      {checked && (
        <CheckIcon label="check icon" width={CheckboxIconDimensions[size]} />
      )}
    </NonInteractiveCheckbox>
    {label && (
      <StyledLabel htmlFor={id} inline>
        {label}
        {required && (
          <RequiredIndicator aria-hidden="true">*</RequiredIndicator>
        )}
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
  size = CheckboxSizes.Medium,
  value,
  ...rest
}) => {
  const [displayError, setDisplayError] = useState(error);
  const prevCheckedRef = useRef(checked);
  const shouldAnimate = Boolean(checked && !prevCheckedRef.current);

  useEffect(() => {
    setDisplayError(error);
  }, [error]);

  useEffect(() => {
    prevCheckedRef.current = checked;
  }, [checked]);

  const handleCheckedChange: RadixCheckboxProps['onCheckedChange'] = (state) => {
    onCheckedChange?.(state);
    setDisplayError(state ? undefined : error);
  };

  return (
    <CheckboxWrapper className={className}>
      <CheckboxContainer $readOnly={readOnly}>
        {readOnly ? (
          <NonInteractiveCheckbox $color={color} checked={checked} $size={size}>
            {checked && (
              <CheckIcon
                label="check icon"
                width={CheckboxIconDimensions[size]}
              />
            )}
          </NonInteractiveCheckbox>
        ) : (
          <CheckboxRoot
            ref={inputRef}
            id={id}
            checked={checked}
            onCheckedChange={handleCheckedChange}
            value={value}
            required={required}
            $hasError={Boolean(displayError)}
            $color={color}
            $size={size}
            aria-invalid={Boolean(displayError) || undefined}
            aria-describedby={displayError && id ? `${id}-error` : undefined}
            {...rest}
          >
            <CheckboxIndicator $animate={shouldAnimate}>
              <CheckIcon
                label="check icon"
                width={CheckboxIconDimensions[size]}
              />
            </CheckboxIndicator>
          </CheckboxRoot>
        )}
        {label && (
          <StyledLabel htmlFor={id} inline>
            {label}
            {required && (
              <RequiredIndicator aria-hidden="true">*</RequiredIndicator>
            )}
          </StyledLabel>
        )}
      </CheckboxContainer>
      {required && (
        <InputError
          id={id ? `${id}-error` : undefined}
          visible={Boolean(displayError)}
          textAlign="left"
        >
          {displayError}
        </InputError>
      )}
    </CheckboxWrapper>
  );
};

export default Checkbox;
