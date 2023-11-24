import React from 'react';
import { Input, InputWrapper } from './styles';

import Label from '../Label/Label';
import InputError from '../InputError/InputError';

export enum InputWidth {
  Small = '136px',
  Medium = '240px',
  Large = '480px',
}
interface Props extends React.ComponentPropsWithoutRef<'input'> {
  error?: string;
  id: string;
  label: string;
  labelTooltip?: string;
  type: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  width?: InputWidth;
}

const TextInput: React.FC<Props> = ({
  error,
  label,
  labelTooltip,
  id,
  type = 'text',
  inputRef,
  width = InputWidth.Large,
  ...inputProps
}: Props) => (
  <InputWrapper $width={width}>
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
    <InputError
      visible={Boolean(error)}
      textAlign={width === InputWidth.Large ? 'right' : 'left'}
    >
      {error}
    </InputError>
  </InputWrapper>
);

export default TextInput;
