import React from 'react';
import { getDefaultIconProps } from '../getDefaultIconProps';
import { Icon, IconSvgProps } from '../Icon';

const LABEL_ID = 'AccountIcon';

export const AccountIcon = (props: IconSvgProps) => {
  const { color, height, width, label, labelVisible } =
    getDefaultIconProps(props);

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
        <circle
          vectorEffect="non-scaling-stroke"
          stroke={color}
          cx="20"
          cy="20"
          r="18.5"
        />
        <path
          fill={color}
          fillRule="evenodd"
          d="M4.915 31.553c1.471-4.547 5.667-7.828 10.614-7.828h8.942c4.947 0 9.143 3.281 10.614 7.828C31.612 36.081 26.147 39 20 39S8.388 36.08 4.915 31.553zM20 5.471c-3.703 0-6.706 3.064-6.706 6.845v2.282c0 3.78 3.003 6.846 6.706 6.846 3.704 0 6.706-3.065 6.706-6.846v-2.282c0-3.78-3.002-6.845-6.706-6.845z"
          clipRule="evenodd"
        />
      </svg>
    </Icon>
  );
};
