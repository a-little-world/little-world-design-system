import React from 'react';
import { Area, AreaWrapper } from './styles';

import Label from '../Label/Label';
import tokens from '../../tokens';

interface Props extends React.ComponentPropsWithoutRef<'textarea'> {
  id: string;
  label: string;
}

const TextArea: React.FC<Props> = ({ label, id, ...areaProps }: Props) => (
  <AreaWrapper>
    <Label bold htmlFor={id} marginBottom={tokens.spacing.xxsmall}>
      {label}
    </Label>
    <Area id={id} {...areaProps} />
  </AreaWrapper>
);

export default TextArea;
