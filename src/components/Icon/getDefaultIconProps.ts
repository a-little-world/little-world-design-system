import { IconSvgProps } from './Icon';
export const getDefaultIconProps = ({
  color,
  height,
  width,
  ...rest
}: IconSvgProps): IconSvgProps => ({
  color: color || 'currentColor',
  height: height || '32',
  width: width || '32',
  ...rest,
});
