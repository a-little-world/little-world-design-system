import React, { forwardRef } from 'react';
import { LinkProps as RouterLinkProps } from 'react-router-dom';

import { LinkBaseProps, TextTypes } from '@a-little-world/little-world-design-system-core';
import { Anchor, AnchorText, RouterLink } from './styles';

export type LinkProps = Omit<RouterLinkProps, 'to'> & LinkBaseProps;

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
