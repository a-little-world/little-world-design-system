import * as RadixSwitch from '@radix-ui/react-switch';
import React from 'react';

import tokens from '../../tokens';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import {
  SwitchContainer,
  SwitchRoot,
  SwitchThumb,
  SwitchWrapper,
} from './styles';

type Props = {
  error?: string;
  label?: string;
  labelInline?: boolean;
  labelTooltip?: string;
  inputRef: React.RefObject<HTMLButtonElement>;
} & RadixSwitch.SwitchProps;

const Switch: React.FC<Props> = ({
  error,
  label,
  labelInline,
  labelTooltip,
  inputRef,
  checked,
  onCheckedChange,
  value,
  ...rest
}: Props) => (
  <SwitchWrapper $labelInline={labelInline}>
    {label && (
      <Label
        bold={!labelInline}
        htmlFor={label}
        marginBottom={labelInline ? '20px' : tokens.spacing.small}
        toolTipText={labelTooltip}
      >
        {label}
      </Label>
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
