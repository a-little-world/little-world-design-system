import React, { forwardRef } from 'react';
import {
  LinkProps as RouterLinkProps,
  useInRouterContext,
} from 'react-router-dom';

import {
  getLinkKind,
  LinkBaseProps,
  TextTypes,
} from '@a-little-world/little-world-design-system-core';
import { Anchor, AnchorText, RouterLink } from './styles';

export type LinkProps = Omit<RouterLinkProps, 'to' | 'relative'> &
  LinkBaseProps & {
    /** resolve `href` against the current path through the router */
    relative?: boolean;
  };

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
      rel,
      relative,
      state,
      style,
      target,
      textType,
      textDecoration = true,
      ...props
    },
    ref,
  ) => {
    const inRouterContext = useInRouterContext();
    const destination = href || undefined;
    const linkKind = getLinkKind(destination);
    const useRouterLink =
      inRouterContext && (relative ? !!destination : linkKind === 'internal');
    const effectiveTarget =
      target ?? (linkKind === 'external' ? '_blank' : undefined);
    const effectiveRel =
      rel ?? (effectiveTarget === '_blank' ? 'noopener noreferrer' : undefined);

    const Component = (
      useRouterLink ? RouterLink : Anchor
    ) as React.ElementType;

    return (
      <Component
        {...(useRouterLink
          ? { to: destination, state, relative: relative ? 'path' : undefined }
          : { href: destination })}
        className={className}
        ref={ref}
        $active={active}
        $backgroundColor={backgroundColor}
        $color={color}
        onClick={onClick}
        $buttonAppearance={buttonAppearance}
        $size={buttonSize}
        style={style}
        target={effectiveTarget}
        rel={effectiveRel}
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
