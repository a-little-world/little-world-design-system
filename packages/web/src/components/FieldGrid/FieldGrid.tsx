import React from 'react';

import { StyledFieldGrid } from './styles';

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

export interface FieldGridProps
  extends FieldGridBaseProps,
    React.ComponentPropsWithoutRef<'div'> {}

const FieldGrid: React.FC<FieldGridProps> = ({
  columns = FieldGridColumns.Two,
  gap,
  responsive = true,
  children,
  ...rest
}) => {
  return (
    <StyledFieldGrid
      $columns={columns}
      $gap={gap}
      $responsive={responsive}
      {...rest}
    >
      {children}
    </StyledFieldGrid>
  );
};

export default FieldGrid;
