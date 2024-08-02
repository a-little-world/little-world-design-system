import * as RadixSwitch from '@radix-ui/react-switch';
import React from 'react';

import tokens from '../../tokens';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import { SwitchRoot, SwitchThumb, SwitchWrapper } from './styles';

type Props = {
  error?: string;
  label?: string;
  labelTooltip?: string;
  inputRef: React.RefObject<HTMLButtonElement>;
} & RadixSwitch.SwitchProps;

const Switch: React.FC<Props> = ({
  error,
  label,
  labelTooltip,
  inputRef,
  checked,
  onCheckedChange,
  value,
  ...rest
}: Props) => (
  <SwitchWrapper>
    {label && (
      <Label
        bold
        htmlFor={label}
        marginBottom={tokens.spacing.small}
        toolTipText={labelTooltip}
      >
        {label}
      </Label>
    )}
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
  </SwitchWrapper>
);

export default Switch;
