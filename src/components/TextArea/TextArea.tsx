import React, { useEffect, useState } from 'react';
import { Area, AreaWrapper, Counter } from './styles';

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
  value?: string;
}

const TextArea: React.FC<Props> = ({
  error,
  label,
  labelTooltip,
  id,
  inputRef,
  maxLength = 999,
  onChange,
  value,
  ...areaProps
}: Props) => {
  const [textAreaCount, setTextAreaCount] = useState(0);

  useEffect(() => {
    setTextAreaCount(value?.length || 0);
  }, [value]);

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
      <Counter
        type={TextTypes.Body5}
      >{`${textAreaCount}/${maxLength}`}</Counter>
      <Area
        ref={inputRef}
        id={id}
        $hasError={Boolean(error)}
        maxLength={maxLength}
        onChange={handleOnChange}
        value={value}
        {...areaProps}
      />
      <InputError visible={Boolean(error)} textAlign="left">
        {error}
      </InputError>
    </AreaWrapper>
  );
};

export default TextArea;
