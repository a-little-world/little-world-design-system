import React from 'react';
import { Input, InputWrapper } from './styles';

import Label from '../Label/Label';
import InputError from '../InputError/InputError';

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  error?: string;
  id: string;
  label: string;
  labelTooltip?: string;
  type: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const TextInput: React.FC<Props> = ({
  error,
  label,
  labelTooltip,
  id,
  type = 'text',
  inputRef,
  ...inputProps
}: Props) => (
  <InputWrapper>
    {label && (
      <Label bold htmlFor={id} toolTipText={labelTooltip}>
        {label}
      </Label>
    )}
    <Input
      ref={inputRef}
      $hasError={Boolean(error)}
      type={type}
      id={id}
      {...inputProps}
    />
    <InputError visible={Boolean(error)}>{error}</InputError>
  </InputWrapper>
);

export default TextInput;
