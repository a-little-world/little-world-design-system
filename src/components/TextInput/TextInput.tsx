import React from 'react';
import { Input, InputWrapper } from './styles';

import Label from '../Label/Label';

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  id: string;
  label: string;
  type: string;
}

const TextInput: React.FC<Props> = ({
  label,
  id,
  type = 'text',
  ...inputProps
}: Props) => (
  <InputWrapper>
    <Label bold htmlFor={id} marginBottom={'8px'}>
      {label}
    </Label>
    <Input type={type} id={id} {...inputProps} />
  </InputWrapper>
);

export default TextInput;
