import React, { forwardRef } from 'react';
import { LinkProps as RouterLinkProps } from 'react-router';

import { ButtonAppearance, ButtonSizes } from '../Button/Button';
import TextTypes from '../Text/TextTypes';
import { Anchor, AnchorText, RouterLink } from './styles';

export interface LinkProps extends Omit<RouterLinkProps, 'to'> {
  active?: boolean;
  bold?: boolean;
  href?: string;
  onClick?: () => void;
  to?: string;
  textType?: keyof typeof TextTypes;
  buttonAppearance?: keyof typeof ButtonAppearance;
  buttonSize?: keyof typeof ButtonSizes;
  state?: any;
  textDecoration?: boolean;
}

const Variants = {
  href: Anchor,
  to: RouterLink,
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
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
      ...props
    },
    ref,
  ) => {
    const Component = Variants[href ? 'href' : 'to'] as React.ElementType;

    return (
      <Component
        {...(href ? { href } : { to })}
        className={className}
        ref={ref}
        $active={active}
        onClick={onClick}
        $buttonAppearance={buttonAppearance}
        $size={buttonSize}
        state={state}
        style={style}
        target={target}
        $textDecoration={textDecoration}
        {...props}
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
  },
);

export default Link;
