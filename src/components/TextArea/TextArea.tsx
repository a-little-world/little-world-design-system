import React from 'react';
import { Area, AreaWrapper } from './styles';

import Label from '../Label/Label';
import InputError from '../InputError/InputError';

interface Props extends React.ComponentPropsWithoutRef<'textarea'> {
  error?: string;
  id: string;
  label: string;
  labelTooltip?: string;
  inputRef?: React.RefObject<HTMLTextAreaElement>;
}

const TextArea: React.FC<Props> = ({
  error,
  label,
  labelTooltip,
  id,
  inputRef,
  ...areaProps
}: Props) => (
  <AreaWrapper>
    {label && (
      <Label bold htmlFor={id} toolTipText={labelTooltip}>
        {label}
      </Label>
    )}
    <Area ref={inputRef} id={id} $hasError={Boolean(error)} {...areaProps} />
    <InputError visible={Boolean(error)}>{error}</InputError>
  </AreaWrapper>
);

export default TextArea;
