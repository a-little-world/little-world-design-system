import React, { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react';

import { ButtonAppearance, ButtonSizes } from '../Button/Button';
import TextTypes from '../Text/TextTypes';
import { Anchor, AnchorText, RouterLink } from './styles';

export interface LinkProps {
  active?: boolean;
  bold?: boolean;
  className?: string;
  href?: string;
  onClick?: () => void;
  to?: string;
  textType?: keyof typeof TextTypes;
  buttonAppearance?: keyof typeof ButtonAppearance;
  buttonSize?: keyof typeof ButtonSizes;
  style?: AnchorHTMLAttributes<HTMLAnchorElement>['style'];
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  state?: any;
  textDecoration?: boolean;
}

const Variants = {
  href: Anchor,
  to: RouterLink,
};

const Link: FC<PropsWithChildren<LinkProps>> = ({
  active,
  bold,
  buttonAppearance,
  buttonSize,
  children,
  className,
  href,
  onClick,
  state,
  style,
  target,
  to,
  textType,
  textDecoration = true,
}) => {
  const Component = Variants[href ? 'href' : 'to'] as React.ElementType;
  return (
    <Component
      {...(href ? { href } : { to })}
      className={className}
      $active={active}
      onClick={onClick}
      $buttonAppearance={buttonAppearance}
      $size={buttonSize}
      state={state}
      style={style}
      target={target}
      $textDecoration={textDecoration}
    >
      <AnchorText
        as="span"
        $type={textType || TextTypes.Body5}
        $bold={Boolean(bold)}
        $center={false}
      >
        {children}
      </AnchorText>
    </Component>
  );
};

export default Link;
