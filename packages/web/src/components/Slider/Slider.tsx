import * as RadixSlider from '@radix-ui/react-slider';
import React from 'react';

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
  steps: string[];
} & RadixSlider.SliderProps;

const Slider = ({
  ariaLabel,
  defaultValue,
  inputRef,
  label,
  labelTooltip,
  onValueChange,
  value,
  steps,
}: SliderProps) => (
  <SliderWrapper>
    {label && (
      <Label bold htmlFor={label} toolTipText={labelTooltip}>
        {label}
      </Label>
    )}
    <SliderRoot
      aria-label={ariaLabel}
      ref={inputRef}
      defaultValue={defaultValue}
      max={steps.length - 1}
      onValueChange={onValueChange}
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
  </SliderWrapper>
);

export default Slider;
