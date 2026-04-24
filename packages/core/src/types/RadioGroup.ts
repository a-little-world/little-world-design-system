export enum RadioGroupVariations {
  Classic = 'classic',
  Pill = 'pill',
}

export interface RadioGroupBaseProps {
  inline?: boolean;
  type?: RadioGroupVariations;
}
