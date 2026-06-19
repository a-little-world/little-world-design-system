export enum FieldGridColumns {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
}

export interface FieldGridBaseProps {
  columns?: FieldGridColumns;
  gap?: string;
  responsive?: boolean;
}
