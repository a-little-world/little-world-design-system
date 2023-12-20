import React, { useState } from 'react';
import { Area, AreaContainer, AreaWrapper, Counter } from './styles';

import Label from '../Label/Label';
import InputError from '../InputError/InputError';
import TextTypes from '../Text/TextTypes';

interface Props extends React.ComponentPropsWithoutRef<'textarea'> {
  error?: string;
  id: string;
  label: string;
  labelTooltip?: string;
  maxLength?: number;
  inputRef?: React.RefObject<HTMLTextAreaElement>;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<Props> = ({
  error,
  label,
  labelTooltip,
  id,
  inputRef,
  maxLength = 999,
  onChange,
  ...areaProps
}: Props) => {
  const [textAreaCount, setTextAreaCount] = useState(0);
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e);
    setTextAreaCount(e.target.value.length);
  };

  return (
    <AreaWrapper>
      {label && (
        <Label bold htmlFor={id} toolTipText={labelTooltip}>
          {label}
        </Label>
      )}
      <AreaContainer>
        <Counter
          type={TextTypes.Body4}
        >{`${textAreaCount}/${maxLength}`}</Counter>
        <Area
          ref={inputRef}
          id={id}
          $hasError={Boolean(error)}
          maxLength={maxLength}
          onChange={handleOnChange}
          {...areaProps}
        />
      </AreaContainer>
      <InputError visible={Boolean(error)}>{error}</InputError>
    </AreaWrapper>
  );
};

export default TextArea;
