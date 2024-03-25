import React from 'react';

import { coreColors } from '../../../tokens/core';
import { Icon, IconSvgProps } from '../Icon';
import IconGradient from '../IconGradient';
import { getDefaultIconProps } from '../getDefaultIconProps';

const LABEL_ID = 'MessageWithQuestionIcon';

export const MessageWithQuestionIcon = (props: IconSvgProps) => {
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
        focusable={false}
        width={width}
        height={height}
        className={circular ? undefined : className}
        viewBox="0 0 27 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.4758 17.1571L17.2068 17.1571L13.6999 22L10.5087 17.1571L4.71466 17.1571C2.38613 17.1571 0.499999 15.4389 0.499999 13.3158L0.5 3.84125C0.5 1.72265 2.38613 8.24452e-08 4.71466 1.84229e-07L22.4758 9.60593e-07C24.8029 1.06231e-06 26.6905 1.71674 26.6905 3.84125L26.6905 13.3217C26.6905 15.4389 24.8029 17.1571 22.4758 17.1571Z"
          fill={gradient ? `url(#gradient${id})` : color}
        />
        <path
          opacity="0.9"
          d="M11.1992 4.42661C12.0734 3.88192 13.0808 3.58996 14.1103 3.58301C15.118 3.58301 15.8848 3.82678 16.4108 4.31432C16.9367 4.80186 17.2022 5.44454 17.2071 6.24233C17.2071 7.5129 16.5681 8.48798 15.29 9.16759L14.3904 9.64036L14.243 10.8223C13.9787 10.9073 13.702 10.9472 13.4245 10.9405C13.1422 10.9465 12.8608 10.9066 12.5913 10.8223L12.4733 8.62095L12.6503 8.39934L13.4466 8.02999C14.4199 7.58677 14.9066 7.0746 14.9066 6.49349C14.9132 6.35393 14.8888 6.21464 14.8353 6.08564C14.7818 5.95663 14.7003 5.84112 14.5969 5.7474C14.3904 5.56617 14.066 5.47507 13.6236 5.47408C13.1812 5.4731 12.6356 5.64546 11.9867 5.99117C11.7633 5.79935 11.5825 5.56282 11.4558 5.2968C11.3062 5.02969 11.2185 4.73228 11.1992 4.42661ZM12.379 12.183C12.7088 12.0273 13.0688 11.9466 13.4334 11.9466C13.7979 11.9466 14.158 12.0273 14.4878 12.183C14.704 12.7235 14.704 13.3267 14.4878 13.8672C14.158 14.0228 13.7979 14.1035 13.4334 14.1035C13.0688 14.1035 12.7088 14.0228 12.379 13.8672C12.1627 13.3267 12.1627 12.7235 12.379 12.183Z"
          fill={coreColors.white}
        />
        {gradient && <IconGradient variation={gradient} id={id} />}
      </svg>
    </Icon>
  );
};
