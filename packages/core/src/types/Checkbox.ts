export enum CheckboxSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export const CheckboxDimensions = {
  [CheckboxSizes.Small]: 16,
  [CheckboxSizes.Medium]: 20,
  [CheckboxSizes.Large]: 24,
} as const;

export const CheckboxIconDimensions = {
  [CheckboxSizes.Small]: 10,
  [CheckboxSizes.Medium]: 12,
  [CheckboxSizes.Large]: 14,
} as const;

export interface CheckboxBaseProps {
  size?: CheckboxSizes;
}
