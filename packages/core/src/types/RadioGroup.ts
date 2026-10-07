export enum RadioGroupVariations {
  Classic = 'classic',
  Pill = 'pill',
}

export type RadioGroupOrientation = 'vertical' | 'horizontal';

export interface RadioGroupBaseProps {
  inline?: boolean;
  required?: boolean;
  type?: RadioGroupVariations;
  /**
   * Layout orientation for the radio group.
   * @default 'horizontal'
   * - 'horizontal': Radio buttons arranged in rows
   * - 'vertical': Radio buttons stacked vertically
   */
  orientation?: RadioGroupOrientation;
}
