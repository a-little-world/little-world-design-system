import React from 'react';
import { Area, AreaWrapper } from './styles';

import Label from '../Label/Label';

interface Props extends React.ComponentPropsWithoutRef<'textarea'> {
  id: string;
  label: string;
}

const TextArea: React.FC<Props> = ({ label, id, ...areaProps }: Props) => (
  <AreaWrapper>
    <Label bold htmlFor={id} marginBottom={'8px'}>
      {label}
    </Label>
    <Area id={id} {...areaProps} />
  </AreaWrapper>
);

export default TextArea;
