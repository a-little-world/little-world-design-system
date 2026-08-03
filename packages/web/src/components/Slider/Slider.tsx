import * as RadixSlider from '@radix-ui/react-slider';
import React, { useEffect, useState } from 'react';

import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import Text from '../Text/Text';
import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderWrapper,
  Steps,
} from './styles';

type SliderProps = {
  ariaLabel: string;
  error?: string;
  label?: string;
  labelTooltip?: string;
  inputRef: React.RefObject<HTMLInputElement>;
  required?: boolean;
  steps: string[];
} & RadixSlider.SliderProps;

const Slider = ({
  ariaLabel,
  defaultValue,
  error,
  inputRef,
  label,
  labelTooltip,
  onValueChange,
  required,
  value,
  steps,
}: SliderProps) => {
  const [displayError, setDisplayError] = useState(error);

  useEffect(() => {
    setDisplayError(error);
  }, [error]);

  const handleValueChange = (val: number[]) => {
    onValueChange?.(val);
    setDisplayError(undefined);
  };

  return (
    <SliderWrapper>
      {label && (
        <Label bold htmlFor={label} tooltipText={labelTooltip} required={required}>
          {label}
        </Label>
      )}
      <input
        type="text"
        required={required}
        value={(value ?? defaultValue ?? [])[0] !== undefined ? String((value ?? defaultValue ?? [])[0]) : ''}
        readOnly
        tabIndex={-1}
        aria-hidden="true"
        style={{ display: 'block', width: 0, height: 0, padding: 0, border: 0, overflow: 'hidden' }}
      />
      <SliderRoot
        aria-label={ariaLabel}
        aria-invalid={Boolean(displayError) || undefined}
        aria-required={required || undefined}
        ref={inputRef}
        defaultValue={defaultValue}
        max={steps.length - 1}
        onValueChange={handleValueChange}
        value={value || defaultValue}
      >
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb aria-label={ariaLabel} />
      </SliderRoot>
      <Steps>
        {steps.map(step => (
          <Text key={step}>{step}</Text>
        ))}
      </Steps>
      <InputError visible={Boolean(displayError)} textAlign="left">
        {displayError}
      </InputError>
    </SliderWrapper>
  );
};

export default Slider;
