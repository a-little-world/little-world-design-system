import React, { Ref, useEffect, useRef, useState } from 'react';

import useAutosizeTextArea from '../../hooks/useAutosizeTextArea';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import {
  TextAreaSize,
  TextTypes,
} from '@a-little-world/little-world-design-system-core';
import { Area, AreaWrapper, Counter } from './styles';

export { TextAreaSize };

interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  displayCount?: boolean;
  error?: string;
  expandable?: boolean;
  id?: string;
  inputRef?: Ref<HTMLFormElement>;
  label?: string;
  labelTooltip?: string;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: () => boolean;
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
  const [internalValue, setInternalValue] = useState(value ?? '');
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  useAutosizeTextArea(textAreaRef.current, internalValue, expandable);
  const [textAreaCount, setTextAreaCount] = useState(0);

  useEffect(() => {
    setTextAreaCount(value?.length || 0);
    setInternalValue(value || '');
  }, [value]);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e);
    setTextAreaCount(e.target.value.length);
    setInternalValue(e.target.value);
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (onSubmit && e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const submitSuccessful = await onSubmit();
      if (submitSuccessful) setInternalValue('');
    }
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
        ref={e => {
          // @ts-ignore
          inputRef?.(e);
          textAreaRef.current = e;
        }}
        id={id}
        $hasError={Boolean(error)}
        $size={size}
        $expandable={Boolean(expandable)}
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
