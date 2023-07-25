import React from 'react';
import { getDefaultIconProps } from '../getDefaultIconProps';
import { Icon, IconSvgProps } from '../Icon';

const LABEL_ID = 'QuestionIcon';

export const QuestionIcon = (props: IconSvgProps) => {
  const { circular, color, height, width, label, labelVisible } =
    getDefaultIconProps(props);

  return (
    <Icon
      circular={circular}
      color={color}
      labelId={LABEL_ID}
      label={label}
      labelVisible={labelVisible}
    >
      <svg
        aria-labelledby={LABEL_ID}
        focusable={false}
        width={width}
        height={height}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 16.9766C3.5816 16.9766 0 13.395 0 8.97656C0 4.55816 3.5816 0.976562 8 0.976562C12.4184 0.976562 16 4.55816 16 8.97656C16 13.395 12.4184 16.9766 8 16.9766ZM7.2 11.3766V12.9766H8.8V11.3766H7.2ZM8.8 10.0606C9.44294 9.86678 9.99488 9.44852 10.3553 8.88196C10.7158 8.31539 10.8607 7.63821 10.7638 6.97374C10.6669 6.30927 10.3345 5.70171 9.82721 5.26173C9.31993 4.82174 8.6715 4.57859 8 4.57656C7.35268 4.57651 6.72533 4.80069 6.22463 5.21096C5.72394 5.62123 5.38081 6.19227 5.2536 6.82696L6.8232 7.14136C6.86774 6.91851 6.97465 6.71288 7.13149 6.54842C7.28833 6.38395 7.48865 6.2674 7.70914 6.21233C7.92963 6.15726 8.16122 6.16593 8.37698 6.23734C8.59273 6.30875 8.78377 6.43995 8.92787 6.61569C9.07196 6.79143 9.1632 7.00447 9.19095 7.23004C9.2187 7.4556 9.18182 7.6844 9.08462 7.88983C8.98741 8.09525 8.83387 8.26885 8.64186 8.39043C8.44985 8.512 8.22726 8.57655 8 8.57656C7.78783 8.57656 7.58434 8.66085 7.43431 8.81088C7.28429 8.96091 7.2 9.16439 7.2 9.37656V10.5766H8.8V10.0606Z"
          fill={color}
        />
      </svg>
    </Icon>
  );
};
