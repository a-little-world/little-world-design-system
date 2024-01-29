import React from 'react';

import { Icon, IconSvgProps } from '../Icon';
import IconGradient from '../IconGradient';
import { getDefaultIconProps } from '../getDefaultIconProps';

const LABEL_ID = 'TrashIcon';

export const TrashIcon = (props: IconSvgProps) => {
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
        fill="none"
        focusable={false}
        width={width}
        height={height}
        className={circular ? undefined : className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="2.67 3.64 26.67 26.67"
      >
        <path
          d="M9.33366 6.31022V3.64355H22.667V6.31022H29.3337V8.97689H26.667V28.9769C26.667 29.3305 26.5265 29.6697 26.2765 29.9197C26.0264 30.1697 25.6873 30.3102 25.3337 30.3102H6.66699C6.31337 30.3102 5.97423 30.1697 5.72418 29.9197C5.47413 29.6697 5.33366 29.3305 5.33366 28.9769V8.97689H2.66699V6.31022H9.33366ZM8.00033 8.97689V27.6436H24.0003V8.97689H8.00033ZM12.0003 12.9769H14.667V23.6436H12.0003V12.9769ZM17.3337 12.9769H20.0003V23.6436H17.3337V12.9769Z"
          fill={color}
        />
      </svg>
    </Icon>
  );
};
