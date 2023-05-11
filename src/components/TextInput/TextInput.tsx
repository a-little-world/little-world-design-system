import React from 'react';
import { Input, InputWrapper } from './styles';

import Label, { LabelContainer } from '../Label/Label';
import InputError from '../InputError/InputError';

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  error?: string;
  id: string;
  label: string;
  type: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const TextInput: React.FC<Props> = ({
  error,
  label,
  id,
  type = 'text',
  inputRef,
  ...inputProps
}: Props) => (
  <InputWrapper>
    <LabelContainer>
      <Label bold htmlFor={id}>
        {label}
      </Label>
      <InputError visible={Boolean(error)}>{error}</InputError>
    </LabelContainer>
    <Input
      ref={inputRef}
      $hasError={Boolean(error)}
      type={type}
      id={id}
      {...inputProps}
    />
  </InputWrapper>
);

export default TextInput;
