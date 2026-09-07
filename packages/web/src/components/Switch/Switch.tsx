import * as RadixSwitch from '@radix-ui/react-switch';
import React, { useEffect, useState } from 'react';

import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import Text from '../Text/Text';
import {
  LabelContainer,
  SwitchContainer,
  SwitchRoot,
  SwitchThumb,
  SwitchWrapper,
} from './styles';

type Props = {
  cannotError?: boolean;
  className?: string;
  description?: string;
  error?: string;
  fullWidth?: boolean;
  label?: string;
  labelBold?: boolean;
  labelInline?: boolean;
  labelTooltip?: string;
  inputRef?: React.RefObject<HTMLButtonElement>;
} & RadixSwitch.SwitchProps;

const Switch: React.FC<Props> = ({
  cannotError = false,
  className,
  description,
  error,
  fullWidth,
  id,
  label,
  labelBold = true,
  labelInline,
  labelTooltip,
  inputRef,
  checked,
  onCheckedChange,
  required,
  value,
  ...rest
}: Props) => {
  const [displayError, setDisplayError] = useState(error);

  useEffect(() => {
    setDisplayError(error);
  }, [error]);

  const handleCheckedChange = (state: boolean) => {
    onCheckedChange?.(state);
    setDisplayError(undefined);
  };

  return (
    <SwitchWrapper
      className={className}
      $fullWidth={fullWidth}
      $labelInline={labelInline}
      $labelAndDescription={Boolean(label && description)}
    >
      {(label || description) && (
        <LabelContainer $inline={labelInline} $cannotError={cannotError}>
          {label && (
            <Label
              bold={labelBold}
              htmlFor={label}
              tooltipText={labelTooltip}
              marginBottom="0"
              required={required}
            >
              {label}
            </Label>
          )}
          {description && <Text>{description}</Text>}
        </LabelContainer>
      )}

      <SwitchContainer>
        <SwitchRoot
          ref={inputRef}
          id={id}
          checked={checked}
          value={value}
          name={label}
          required={required}
          onCheckedChange={handleCheckedChange}
          $hasError={Boolean(displayError)}
          aria-invalid={Boolean(displayError) || undefined}
          aria-describedby={displayError && id ? `${id}-error` : undefined}
          {...rest}
        >
          <SwitchThumb />
        </SwitchRoot>
        {!cannotError && (
          <InputError
            id={id ? `${id}-error` : undefined}
            visible={Boolean(displayError)}
            textAlign="left"
          >
            {displayError}
          </InputError>
        )}
      </SwitchContainer>
    </SwitchWrapper>
  );
};

export default Switch;
