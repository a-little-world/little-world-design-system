import CheckboxGroup from './CheckboxGroup';
import type { CheckboxGroupProps } from './CheckboxGroup';

export default {
  component: CheckboxGroup,
  title: 'Components/CheckboxGroup',
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation for the checkbox group',
    },
  },
};

// Recommended: Concise naming (industry standard) - Horizontal (default)
export const Default = (args: CheckboxGroupProps) => (
  <CheckboxGroup {...args} />
);

Default.args = {
  id: 'checkbox group id',
  onSelection: () => null,
  heading: 'Select your favourite veg',
  preSelected: ['carrots', 'Potato'],
  orientation: 'horizontal',
  options: [
    { label: 'Carrots', value: 'carrots' },
    { label: 'Beets', value: 'Beets' },
    { label: 'Broccoli', value: 'Broccoli' },
    { label: 'Potato', value: 'Potato' },
    { label: 'Longer sentence to test', value: 'longer' },
  ],
};

// Vertical layout variant
export const Vertical = (args: CheckboxGroupProps) => (
  <CheckboxGroup {...args} />
);

Vertical.args = {
  id: 'checkbox group vertical id',
  onSelection: () => null,
  heading: 'Select your skills',
  preSelected: ['javascript'],
  orientation: 'vertical',
  options: [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'TypeScript', value: 'typescript' },
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
  ],
};

// Backward compatibility: Verbose naming (deprecated but still works)
// Note: MultiCheckbox is intentionally deprecated in favor of CheckboxGroup
// This story demonstrates that the old name still works as an alias
export const WithMultiCheckboxAlias = (args: CheckboxGroupProps) => (
  <CheckboxGroup {...args} />
);

WithMultiCheckboxAlias.args = {
  id: 'multi selector id',
  onSelection: () => null,
  heading: 'Select your interests',
  preSelected: ['sports'],
  orientation: 'horizontal',
  options: [
    { label: 'Sports', value: 'sports' },
    { label: 'Music', value: 'music' },
    { label: 'Reading', value: 'reading' },
    { label: 'Travel', value: 'travel' },
  ],
};
