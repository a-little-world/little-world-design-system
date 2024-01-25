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
        viewBox="0 0 6 11"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.70679 0.792787C5.89426 0.980314 5.99957 1.23462 5.99957 1.49979C5.99957 1.76495 5.89426 2.01926 5.70679 2.20679L2.41379 5.49979L5.70679 8.79279C5.88894 8.98139 5.98974 9.23399 5.98746 9.49619C5.98518 9.75838 5.88001 10.0092 5.6946 10.1946C5.5092 10.38 5.25838 10.4852 4.99619 10.4875C4.73399 10.4897 4.48139 10.3889 4.29279 10.2068L0.292787 6.20679C0.105316 6.01926 0 5.76495 0 5.49979C0 5.23462 0.105316 4.98031 0.292787 4.79279L4.29279 0.792787C4.48031 0.605316 4.73462 0.5 4.99979 0.5C5.26495 0.5 5.51926 0.605316 5.70679 0.792787V0.792787Z"
          fill={color}
        />
      </svg>
    </Icon>
  );
};
