import React from 'react';
import {
  LoadingBaseProps,
  LoadingSizes,
  LoadingType,
} from '@a-little-world/little-world-design-system-core';

import { LoadingContainer, LoadingElement, LogoContainer } from './styles';
import LoadingLogo from './LoadingLogo';

// Re-export enum for easy access
export { LoadingSizes, LoadingType };

export const LOADING_RING_ID = 'loadingRing';
export const LOADING_LOGO_ID = 'loadingLogo';

export interface LoadingProps extends LoadingBaseProps {
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({
  align,
  className,
  color,
  inline = false,
  size = LoadingSizes.Small,
  type = LoadingType.Ring,
}) => {
  if (type === LoadingType.Logo) {
    return (
      <LoadingContainer
        className={className}
        $align={align}
        $color={color}
        $inline={inline}
        $size={size}
        $type={type}
        data-testid={LOADING_LOGO_ID}
      >
        <LogoContainer $size={size}>
          <LoadingLogo size={size} />
        </LogoContainer>
      </LoadingContainer>
    );
  }

  return (
    <LoadingContainer
      className={className}
      $align={align}
      $color={color}
      $inline={inline}
      $size={size}
      $type={type}
      data-testid={LOADING_RING_ID}
    >
      <LoadingElement $color={color} $size={size} />
      <LoadingElement $color={color} $size={size} />
      <LoadingElement $color={color} $size={size} />
      <LoadingElement $color={color} $size={size} />
    </LoadingContainer>
  );
};

export default Loading;
