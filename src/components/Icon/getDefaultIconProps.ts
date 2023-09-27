import { IconSvgProps } from './Icon';
export const getDefaultIconProps = ({
  circular,
  color,
  height,
  gradient,
  width,
  ...rest
}: IconSvgProps): IconSvgProps => ({
  circular,
  color: color || 'currentColor',
  height: height || '32',
  gradient,
  width: width || '32',
  ...rest,
});
