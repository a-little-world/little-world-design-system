export enum FormRowAlign {
  Start = 'flex-start',
  Center = 'center',
  End = 'flex-end',
  Baseline = 'baseline',
}

export interface FormRowBaseProps {
  align?: FormRowAlign;
  gap?: string;
}
