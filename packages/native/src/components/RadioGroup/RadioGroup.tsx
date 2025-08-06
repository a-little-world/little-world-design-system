import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import { getRadioGroupStyles } from './styles';
import * as RadioGroupPrimitive from '@rn-primitives/radio-group';
import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

type Props = {
  error?: string;
  label?: string;
  labelTooltip?: string;
  items: Array<{ id: string; label?: string; value: string }>;
  inputRef: React.RefObject<HTMLInputElement>;
} & RadioGroupPrimitive.RootProps;

const RadioGroup: React.FC<Props> = ({
  error,
  items,
  label,
  labelTooltip,
  inputRef,
  ...rest
}: Props) => {
  const theme = useTheme();
  const styles = getRadioGroupStyles({ theme });

  return (
    <View>
      {label && (
        <Label
          bold
          // toolTipText={labelTooltip}
        >
          {label}
        </Label>
      )}
      <RadioGroupPrimitive.Root
        // ref={inputRef}
        // value={undefined}
        // name={label}
        {...rest}
      >
        {items?.map(item => (
          <View key={item.id} style={styles.itemContainer}>
            <RadioGroupPrimitive.Item value={item.value} id={item.id}>
              <RadioGroupPrimitive.Indicator style={styles.indicator} />
            </RadioGroupPrimitive.Item>
            {item.label && <Label inline>{item.label}</Label>}
          </View>
        ))}
        <InputError visible={Boolean(error)}>{error}</InputError>
      </RadioGroupPrimitive.Root>
    </View>
  );
};

export default RadioGroup;
