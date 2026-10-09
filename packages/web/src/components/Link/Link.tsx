import React, { forwardRef } from 'react';
import {
  LinkProps as RouterLinkProps,
  useInRouterContext,
} from 'react-router-dom';

import {
  LinkBaseProps,
  TextTypes,
} from '@a-little-world/little-world-design-system-core';
import { getLinkKind } from '../../utils/links';
import { Anchor, AnchorText, RouterLink } from './styles';

export type LinkProps = Omit<RouterLinkProps, 'to'> & LinkBaseProps;

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      active,
      backgroundColor,
      bold,
      buttonAppearance,
      buttonSize,
      children,
      className,
      color,
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
    const inRouterContext = useInRouterContext();
    const hasHref = href !== undefined && href !== '';
    const linkKind = hasHref ? getLinkKind(href) : undefined;
    const useRouterLink =
      inRouterContext && (linkKind === 'internal' || (!hasHref && !!to));
    const destination = (hasHref ? href : to) as string;
    // External pages open in a new tab unless the caller sets a target;
    // internal routes navigate in-SPA (or fall back same-tab) without one.
    const effectiveTarget =
      target ?? (linkKind === 'external' ? '_blank' : undefined);

    const Component = (
      useRouterLink ? RouterLink : Anchor
    ) as React.ElementType;

    return (
      <Component
        {...(useRouterLink ? { to: destination } : { href: destination })}
        className={className}
        ref={ref}
        $active={active}
        $backgroundColor={backgroundColor}
        $color={color}
        onClick={onClick}
        $buttonAppearance={buttonAppearance}
        $size={buttonSize}
        state={state}
        style={style}
        target={effectiveTarget}
        $textDecoration={textDecoration}
        {...props}
      >
        <AnchorText
          as="span"
          $type={
            textType || buttonAppearance ? TextTypes.Heading7 : TextTypes.Body5
          }
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
