import React from 'react';

import { Icon, IconSvgProps } from '../Icon';
import IconGradient from '../IconGradient';
import { getDefaultIconProps } from '../getDefaultIconProps';

const LABEL_ID = 'ArchiveIcon';

export const ArchiveIcon = (props: IconSvgProps) => {
  const {
    backgroundColor,
    borderColor,
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
      backgroundColor={backgroundColor}
      borderColor={borderColor}
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
        viewBox="0 0 15 16"
      >
        <path
          d="M7.5 0.583252C7.71776 0.583252 7.91498 0.671171 8.05811 0.813449L7.5 0.979085L7.19696 0.643323C7.29031 0.604615 7.39266 0.583252 7.5 0.583252Z"
          fill={gradient ? `url(#gradient${id})` : color}
        />
        <path
          d="M7.19696 0.643323L7.5 0.979085L8.06008 0.815414L11.2265 3.98179C11.5356 4.29096 11.5356 4.79221 11.2265 5.10138C10.9173 5.41054 10.416 5.41054 10.1069 5.10138L8.29167 3.28617V10.0833C8.29167 10.5205 7.93723 10.8749 7.5 10.8749C7.06277 10.8749 6.70833 10.5205 6.70833 10.0833V3.28617L4.89313 5.10138C4.58396 5.41054 4.08271 5.41054 3.77354 5.10138C3.46438 4.79221 3.46438 4.29096 3.77354 3.98179L6.94021 0.815126C7.01611 0.739223 7.10359 0.681956 7.19696 0.643323Z"
          fill={gradient ? `url(#gradient${id})` : color}
        />
        <path
          d="M1.95833 8.49992C1.95833 8.06269 1.60389 7.70825 1.16667 7.70825C0.729441 7.70825 0.375 8.06269 0.375 8.49992V13.2499C0.375 14.5616 1.43832 15.6249 2.75 15.6249H12.25C13.5617 15.6249 14.625 14.5616 14.625 13.2499V8.49992C14.625 8.06269 14.2706 7.70825 13.8333 7.70825C13.3961 7.70825 13.0417 8.06269 13.0417 8.49992V13.2499C13.0417 13.6871 12.6872 14.0416 12.25 14.0416H2.75C2.31277 14.0416 1.95833 13.6871 1.95833 13.2499V8.49992Z"
          fill={gradient ? `url(#gradient${id})` : color}
        />
        {gradient && <IconGradient variation={gradient} id={id} />}
      </svg>
    </Icon>
  );
};
