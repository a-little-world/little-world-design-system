import React, { useEffect, useState } from 'react';

import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import TextTypes from '../Text/TextTypes';
import { Area, AreaWrapper, Counter } from './styles';

export enum TextAreaSize {
  Small = '80px',
  Medium = '120px',
  Large = '160px',
}

interface Props extends React.ComponentPropsWithoutRef<'textarea'> {
  error?: string;
  id: string;
  inputRef?: React.RefObject<HTMLTextAreaElement>;
  label: string;
  labelTooltip?: string;
  maxLength?: number | null;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: () => void;
  size?: TextAreaSize;
  value?: string;
}

const TextArea: React.FC<Props> = ({
  error,
  id,
  inputRef,
  label,
  labelTooltip,
  maxLength = 999,
  onChange,
  onSubmit,
  readOnly,
  size = TextAreaSize.Small,
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (onSubmit && e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <AreaWrapper $size={size}>
      {label && (
        <Label bold htmlFor={id} toolTipText={labelTooltip}>
          {label}
        </Label>
      )}
      {Boolean(maxLength && !readOnly) && (
        <Counter
          type={TextTypes.Body7}
        >{`${textAreaCount}/${maxLength}`}</Counter>
      )}
      <Area
        ref={inputRef}
        id={id}
        $hasError={Boolean(error)}
        $size={size}
        maxLength={maxLength}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        readOnly={readOnly}
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
