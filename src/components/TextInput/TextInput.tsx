import React from 'react';
import { Input, InputWrapper } from './styles';

import Label from '../Label/Label';

type Props = {
  defaultValue: string;
  id: string;
  label: string;
  type: string;
};

const TextInput: React.FC<Props> = ({
  label,
  id,
  defaultValue,
  type = 'text',
}: Props) => (
  <InputWrapper>
    <Label bold htmlFor={id} marginBottom={'8px'}>
      {label}
    </Label>
    <Input type={type} id={id} defaultValue={defaultValue} />
  </InputWrapper>
);

export default TextInput;
