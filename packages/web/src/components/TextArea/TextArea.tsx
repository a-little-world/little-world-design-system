import React, { Ref, useEffect, useRef, useState } from 'react';

import useAutosizeTextArea from '../../hooks/useAutosizeTextArea';
import FieldError from '../FieldError/FieldError';
import Label from '../Label/Label';
import {
  TextAreaSize,
  TextTypes,
} from '@a-little-world/little-world-design-system-core';
import { Area, AreaWrapper, Counter } from './styles';

export { TextAreaSize };

type TextAreaBaseProps = React.ComponentPropsWithoutRef<'textarea'> & {
  displayCount?: boolean;
  error?: string;
  expandable?: boolean;
  inputRef?: Ref<HTMLFormElement>;
  label?: string;
  labelTooltip?: string;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: () => boolean;
  size?: TextAreaSize;
  value?: string;
};

export type TextAreaProps =
  | (TextAreaBaseProps & {
      label?: never;
    })
  | (TextAreaBaseProps & {
      label: string;
      id: string;
    });

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
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(value ?? '');
  const activeError =
    Boolean(error) && !(isControlled ? false : Boolean(internalValue));
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const isTouchDeviceRef = useRef(
    typeof globalThis.window !== 'undefined' &&
      ('ontouchstart' in globalThis.window || navigator.maxTouchPoints > 0),
  );
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      onSubmit &&
      e.key === 'Enter' &&
      !e.shiftKey &&
      !isTouchDeviceRef.current
    ) {
      e.preventDefault();
      const submitSuccessful = onSubmit();
      if (submitSuccessful) setInternalValue('');
    }
  };

  return (
    <AreaWrapper $size={size}>
      {label && (
        <Label bold htmlFor={id} tooltipText={labelTooltip}>
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
        $hasError={activeError}
        $size={size}
        $expandable={Boolean(expandable)}
        maxLength={maxLength}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        readOnly={readOnly}
        value={value}
        {...areaProps}
      />
      {!readOnly && activeError && error && <FieldError text={error} />}
    </AreaWrapper>
  );
};

export default TextArea;
