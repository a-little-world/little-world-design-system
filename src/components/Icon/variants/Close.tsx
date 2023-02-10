import React from 'react';
import { getDefaultProps } from '../getDefaultProps';
import Icon, { IconSvgProps } from '../Icon';

const LABEL_ID = 'CloseIcon';

export const CloseIcon = (props: IconSvgProps) => {
  const { color, height, width, label, labelVisible } = getDefaultProps(props);

  return (
    <Icon labelId={LABEL_ID} label={label} labelVisible={labelVisible}>
      <svg
        aria-labelledby={LABEL_ID}
        focusable={false}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 40 40"
      >
        <path
          vectorEffect="non-scaling-stroke"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M35 5L5 35m30 0L5 5"
        />
      </svg>
    </Icon>
  );
};
