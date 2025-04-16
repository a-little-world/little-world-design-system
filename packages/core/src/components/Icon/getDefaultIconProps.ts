import { IconSvgProps } from './Icon';

export const getDefaultIconProps = ({
  backgroundColor,
  borderColor,
  circular,
  className,
  color,
  height,
  gradient,
  width,
  ...rest
}: IconSvgProps): IconSvgProps => ({
  backgroundColor,
  borderColor,
  circular,
  className,
  color: color || 'currentColor',
  height: height || '32',
  gradient,
  width: width || '32',
  ...rest,
});
