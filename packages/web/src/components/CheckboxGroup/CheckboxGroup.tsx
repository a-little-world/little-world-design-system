import { CheckboxSizes } from '@a-little-world/little-world-design-system-core';
import { CheckedState } from '@radix-ui/react-checkbox';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import { CheckboxButton } from '../Checkbox/Checkbox';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import { CheckboxGroupWrapper } from './styles';

/**
 * Props for CheckboxGroup component
 * @example
 * {
 *   heading: "Select your interests",
 *   options: [{ label: "Option 1", value: "opt1" }],
 *   onSelection: (selected) => console.log(selected),
 *   name: "interests",
 *   orientation: "vertical"
 * }
 */
type CheckboxGroupProps = {
  heading?: string;
  options: { label: string; value: string }[];
  onSelection: (selected: string[]) => void;
  preSelected?: string[];
  error?: string;
  name: string;
  readOnly?: boolean;
  /**
   * Layout orientation for the checkbox group.
   * @default 'horizontal'
   * - 'horizontal': Checkboxes arranged in rows (wrappable)
   * - 'vertical': Checkboxes stacked vertically
   */
  orientation?: 'vertical' | 'horizontal';
};

// Backward compatibility - MultiCheckboxProps is exported as an alias in the export statement below
// @deprecated Use CheckboxGroupProps instead

/**
 * CheckboxGroup - A group of checkboxes for multi-selection.
 * Shorter, more concise naming aligned with industry standards.
 *
 * @example
 * // Standard usage with concise name
 * <CheckboxGroup
 *   heading="Select your interests"
 *   options={[
 *     { label: 'JavaScript', value: 'js' },
 *     { label: 'TypeScript', value: 'ts' }
 *   ]}
 *   onSelection={(selected) => console.log(selected)}
 *   name="skills"
 * />
 */
const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  error,
  heading,
  preSelected,
  onSelection,
  options,
  name,
  readOnly,
  orientation = 'horizontal',
}) => {
  const theme = useTheme();
  const [selected, setSelected] = useState(preSelected || []);

  const onSelect = ({
    state,
    value,
  }: {
    value: string;
    state: CheckedState;
  }) => {
    const oldValues = selected || [];
    const newValues = state
      ? [...oldValues, value]
      : oldValues.filter(el => el !== value);

    setSelected(newValues);
    onSelection(newValues);
  };

  return (
    <div>
      {heading && <Label bold>{heading}</Label>}
      <CheckboxGroupWrapper $orientation={orientation}>
        {options.map(({ value, label }) => (
          <CheckboxButton
            id={label}
            key={label}
            error={error}
            label={label}
            name={name}
            checked={selected.includes(value)}
            onCheckedChange={state => onSelect({ value, state })}
            color={theme.color.surface.selected}
            value={value}
            readOnly={readOnly}
            size={CheckboxSizes.Small}
          />
        ))}
      </CheckboxGroupWrapper>
      <InputError visible={Boolean(error)} textAlign="left">
        {error}
      </InputError>
    </div>
  );
};

/**
 * Backward compatibility export
 * @deprecated Use CheckboxGroup instead. MultiCheckbox is kept for backward compatibility only.
 * This component will be removed in a future major version.
 * @example
 * // ❌ Old (deprecated)
 * import { MultiCheckbox } from '@a-little-world/little-world-design-system';
 * <MultiCheckbox {...props} />
 *
 * // ✅ New (recommended)
 * import { CheckboxGroup } from '@a-little-world/little-world-design-system';
 * <CheckboxGroup {...props} />
 */
const MultiCheckbox = CheckboxGroup;

export default CheckboxGroup;
export { MultiCheckbox };
/**
 * Primary export: CheckboxGroupProps for the recommended CheckboxGroup component
 */
export type { CheckboxGroupProps };
/**
 * @deprecated Use CheckboxGroupProps instead.
 * Type alias kept for backward compatibility only.
 */
export type { CheckboxGroupProps as MultiCheckboxProps };
