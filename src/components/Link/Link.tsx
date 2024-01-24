import React from 'react';

import { ButtonAppearance, ButtonSizes } from '../Button/Button';
import TextTypes from '../Text/TextTypes';
import { Anchor, AnchorText, RouterLink } from './styles';

type LinkProps = {
  active?: boolean;
  bold?: boolean;
  children: string;
  className?: string;
  href?: string;
  onClick?: () => void;
  to?: string;
  textType?: keyof typeof TextTypes;
  buttonAppearance?: keyof typeof ButtonAppearance;
  buttonSize?: keyof typeof ButtonSizes;
};

const Variants = {
  href: Anchor,
  to: RouterLink,
};

const Link = ({
  active,
  bold,
  buttonAppearance,
  buttonSize,
  children,
  className,
  href,
  onClick,
  to,
  textType,
}: LinkProps) => {
  const Component = Variants[href ? 'href' : 'to'] as React.ElementType;
  return (
    <Component
      {...(href ? { href } : { to })}
      className={className}
      $active={active}
      onClick={onClick}
      $buttonAppearance={buttonAppearance}
      $size={buttonSize}
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
