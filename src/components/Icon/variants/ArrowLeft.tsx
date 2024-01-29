import React from 'react';

import { Icon, IconSvgProps } from '../Icon';
import IconGradient from '../IconGradient';
import { getDefaultIconProps } from '../getDefaultIconProps';

const LABEL_ID = 'ArrowLeftIcon';

export const ArrowLeftIcon = (props: IconSvgProps) => {
  const {
    circular,
    className,
    color,
    gradient,
    height,
    width,
    label,
    labelId,
    labelVisible,
  } = getDefaultIconProps(props);
  const id = LABEL_ID + labelId;

  return (
    <Icon
      circular={circular}
      className={className}
      color={color}
      labelId={labelId || LABEL_ID}
      label={label}
      labelVisible={labelVisible}
    >
      <svg
        aria-labelledby={labelId || LABEL_ID}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={circular ? undefined : className}
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M8.70711 1.70711C9.09763 1.31658 9.09763 0.683417 8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L7.29289 15.7071C7.68342 16.0976 8.31658 16.0976 8.70711 15.7071C9.09763 15.3166 9.09763 14.6834 8.70711 14.2929L3.41421 9H15C15.5523 9 16 8.55229 16 8C16 7.44772 15.5523 7 15 7H3.41421L8.70711 1.70711Z"
          fill={gradient ? `url(#gradient${id})` : color}
        />
        {gradient && <IconGradient variation={gradient} id={id} />}
      </svg>
    </Icon>
  );
};
