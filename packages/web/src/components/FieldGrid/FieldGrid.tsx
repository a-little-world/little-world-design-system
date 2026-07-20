import React from 'react';
import {
  FieldGridColumns,
  FieldGridBaseProps,
  FieldGridProps,
} from '@a-little-world/little-world-design-system-core';

import { StyledFieldGrid } from './styles';

export { FieldGridColumns, FieldGridBaseProps, FieldGridProps };

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
