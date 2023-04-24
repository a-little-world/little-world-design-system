import React from 'react';
import { CheckboxProps } from '@radix-ui/react-checkbox';
import {
  CheckboxRoot,
  CheckboxIndicator,
  CheckboxWrapper,
  StyledLabel,
} from './styles';
import { CheckIcon } from '../Icon';
import { coreColors } from '../../tokens/core';

type Props = {
  className?: string;
  color?: string;
  label?: string;
} & CheckboxProps;

const Checkbox: React.FC<Props> = ({
  checked,
  className,
  color = coreColors.orange,
  label,
  onCheckedChange,
  value,
  ...rest
}: Props) => (
  <CheckboxWrapper className={className}>
    <CheckboxRoot
      className="CheckboxRoot"
      checked={checked}
      onCheckedChange={onCheckedChange}
      value={value}
    >
      <CheckboxIndicator className="CheckboxIndicator">
        <CheckIcon label="check icon" labelId="check icon" width={12} />
      </CheckboxIndicator>
    </CheckboxRoot>
    {label && (
      <StyledLabel htmlFor={label} inline>
        {label}
      </StyledLabel>
    )}
  </CheckboxWrapper>
);

export default Checkbox;
