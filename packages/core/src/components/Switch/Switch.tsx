import * as RadixSwitch from '@radix-ui/react-switch';
import React from 'react';

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
  className?: string;
  description?: string;
  error?: string;
  fullWidth?: boolean;
  label?: string;
  labelBold?: boolean;
  labelInline?: boolean;
  labelTooltip?: string;
  inputRef: React.RefObject<HTMLButtonElement>;
} & RadixSwitch.SwitchProps;

const Switch: React.FC<Props> = ({
  className,
  description,
  error,
  fullWidth,
  label,
  labelBold = true,
  labelInline,
  labelTooltip,
  inputRef,
  checked,
  onCheckedChange,
  value,
  ...rest
}: Props) => (
  <SwitchWrapper
    className={className}
    $fullWidth={fullWidth}
    $labelInline={labelInline}
    $labelAndDescription={Boolean(label && description)}
  >
    {(label || description) && (
      <LabelContainer $inline={labelInline}>
        {label && (
          <Label
            bold={labelBold}
            htmlFor={label}
            toolTipText={labelTooltip}
            marginBottom="0"
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
        checked={checked}
        value={value}
        name={label}
        onCheckedChange={onCheckedChange}
        $hasError={Boolean(error)}
        {...rest}
      >
        <SwitchThumb />
      </SwitchRoot>
      <InputError visible={Boolean(error)} textAlign="left">
        {error}
      </InputError>
    </SwitchContainer>
  </SwitchWrapper>
);

export default Switch;
