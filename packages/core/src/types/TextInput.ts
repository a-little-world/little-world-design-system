export enum InputWidth {
  XSmall = 104,
  Small = 136,
  Medium = 240,
  Large = 480,
}

export enum InputHeight {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface TextInputBaseProps {
  cannotError?: boolean;
  error?: string;
  height?: InputHeight;
  inline?: boolean;
  label: string;
  labelTooltip?: string;
  onSubmit?: () => boolean;
  onlyCountries?: string[];
  width?: InputWidth;
}
