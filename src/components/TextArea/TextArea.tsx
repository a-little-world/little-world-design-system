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

interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  displayCount?: boolean;
  error?: string;
  expandable?: boolean;
  id?: string;
  inputRef?: React.RefObject<HTMLTextAreaElement>;
  label?: string;
  labelTooltip?: string;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: () => void;
  size?: TextAreaSize;
  value?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  displayCount = true,
  error,
  expandable,
  id,
  inputRef,
  label,
  labelTooltip,
  maxLength,
  onChange,
  onSubmit,
  readOnly,
  size = TextAreaSize.Small,
  value,
  ...areaProps
}) => {
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

  const handleOnInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!expandable) return;
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  return (
    <AreaWrapper $size={size}>
      {label && (
        <Label bold htmlFor={id} toolTipText={labelTooltip}>
          {label}
        </Label>
      )}
      {Boolean(displayCount && !readOnly && maxLength) && (
        <Counter
          type={TextTypes.Body7}
        >{`${textAreaCount}/${maxLength}`}</Counter>
      )}
      <Area
        ref={inputRef}
        id={id}
        $hasError={Boolean(error)}
        $size={size}
        $expandable={Boolean(expandable)}
        maxLength={maxLength}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        onInput={handleOnInput}
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
