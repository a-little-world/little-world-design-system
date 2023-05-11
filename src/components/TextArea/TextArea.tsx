import React from 'react';
import { Area, AreaWrapper } from './styles';

import Label, { LabelContainer } from '../Label/Label';
import InputError from '../InputError/InputError';

interface Props extends React.ComponentPropsWithoutRef<'textarea'> {
  error?: string;
  id: string;
  label: string;
  inputRef?: React.RefObject<HTMLTextAreaElement>;
}

const TextArea: React.FC<Props> = ({
  error,
  label,
  id,
  inputRef,
  ...areaProps
}: Props) => (
  <AreaWrapper>
    <LabelContainer>
      <Label bold htmlFor={id}>
        {label}
      </Label>
      <InputError visible={Boolean(error)}>{error}</InputError>
    </LabelContainer>
    <Area ref={inputRef} id={id} $hasError={Boolean(error)} {...areaProps} />
  </AreaWrapper>
);

export default TextArea;
