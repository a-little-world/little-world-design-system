import { ReactNode } from 'react';

export enum StatusTypes {
  Error = 'Error',
  Success = 'Success',
  Info = 'Info',
  Warning = 'Warning',
}

export interface StatusBaseProps {
  className?: string;
  children: ReactNode;
  visible?: boolean;
  type: StatusTypes;
  withBorder?: boolean;
}

// Aliases for better semantic use
export type AlertBaseProps = StatusBaseProps;
export type FormMessageBaseProps = StatusBaseProps;
export type StatusMessageBaseProps = StatusBaseProps;
