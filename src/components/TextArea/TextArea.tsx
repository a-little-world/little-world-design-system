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
    <Label
      bold
      htmlFor={id}
      toolTipText={labelTooltip}
      error={error}
      canHaveError
    >
      {label}
    </Label>
    <Area ref={inputRef} id={id} $hasError={Boolean(error)} {...areaProps} />
  </AreaWrapper>
);

export default TextArea;
