import * as RadixSlider from '@radix-ui/react-slider';
import React, { useId } from 'react';

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
  cannotError?: boolean;
  error?: string;
  label?: string;
  labelTooltip?: string;
  required?: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  steps: string[];
} & RadixSlider.SliderProps;

const Slider = ({
  ariaLabel,
  cannotError = false,
  defaultValue,
  error,
  id,
  inputRef,
  label,
  labelTooltip,
  onValueChange,
  required,
  value,
  steps,
}: SliderProps) => {
  const generatedId = useId();
  const errorId = `${id ?? generatedId}-error`;

  return (
    <SliderWrapper>
      {label && (
        <Label
          bold
          htmlFor={label}
          tooltipText={labelTooltip}
          required={required}
        >
          {label}
        </Label>
      )}
      <SliderRoot
        aria-label={ariaLabel}
        id={id}
        ref={inputRef}
        defaultValue={defaultValue}
        max={steps.length - 1}
        onValueChange={onValueChange}
        value={value || defaultValue}
      >
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb
          aria-label={ariaLabel}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={error ? errorId : undefined}
        />
      </SliderRoot>
      <Steps>
        {steps.map(step => (
          <Text key={step}>{step}</Text>
        ))}
      </Steps>
      {!cannotError && (
        <InputError id={errorId} visible={Boolean(error)} textAlign="left">
          {error}
        </InputError>
      )}
    </SliderWrapper>
  );
};

export default Slider;
