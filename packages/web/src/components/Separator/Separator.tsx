import * as RadixSeparator from '@radix-ui/react-separator';
import React from 'react';
import styled from 'styled-components';

const StyledSeparator = styled(RadixSeparator.Root)<{
  $background?: string;
  $spacing?: string;
}>`
  margin: ${({ theme, $spacing }) => $spacing || theme.spacing.small} 0;
  background: ${({ theme, $background }) =>
    $background || theme.color.border.contrast};

  &[data-orientation='vertical'] {
    height: 100%;
    width: 1px;
    margin: 0 ${({ theme, $spacing }) => $spacing || theme.spacing.medium};
  }

  &[data-orientation='horizontal'] {
    height: 1px;
    width: 100%;
    margin: ${({ theme, $spacing }) => $spacing || theme.spacing.medium} 0;
  }
`;

interface SeparatorProps {
  background?: string;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  spacing?: string;
}

const Separator = ({
  background,
  className,
  orientation = 'horizontal',
  spacing,
}: SeparatorProps) => {
  return (
    <StyledSeparator
      className={className}
      orientation={orientation}
      decorative
      $background={background}
      $spacing={spacing}
    />
  );
};

export default Separator;
