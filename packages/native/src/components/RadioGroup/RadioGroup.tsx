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
  orientation?: 'vertical' | 'horizontal';
} & RadioGroupPrimitive.RootProps;

const RadioGroup: React.FC<Props> = ({
  error,
  items,
  label,
  labelTooltip,
  inputRef,
  orientation = 'vertical',
  ...rest
}: Props) => {
  const theme = useTheme();
  const styles = getRadioGroupStyles({ theme });

  return (
    <View>
      {Boolean(label) && <Label bold>{label}</Label>}
      <RadioGroupPrimitive.Root {...rest}>
        <View
          style={{
            flexDirection: orientation === 'horizontal' ? 'row' : 'column',
            gap: 12,
          }}
        >
          {items?.map(item => (
            <View key={item.id} style={styles.itemContainer}>
              <RadioGroupPrimitive.Item value={item.value} id={item.id}>
                <RadioGroupPrimitive.Indicator style={styles.indicator} />
              </RadioGroupPrimitive.Item>
              {item.label && <Label inline>{item.label}</Label>}
            </View>
          ))}
        </View>
        {Boolean(error) && (
          <InputError visible={Boolean(error)}>{error}</InputError>
        )}
      </RadioGroupPrimitive.Root>
    </View>
  );
};

export default RadioGroup;
