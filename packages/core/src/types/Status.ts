export enum StatusTypes {
  Error = 'Error',
  Success = 'Success',
  Info = 'Info',
  Warning = 'Warning',
}

export interface StatusBaseProps {
  $visible?: boolean;
  $type: keyof typeof StatusTypes;
}
