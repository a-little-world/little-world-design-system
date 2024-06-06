import * as RadixNavigationMenu from '@radix-ui/react-navigation-menu';
import React, { HTMLProps, PropsWithChildren, ReactNode } from 'react';

import { Logo } from '../Icon';
import { LinkProps } from '../Link/Link';
import {
  Callout,
  CalloutHeading,
  CalloutText,
  ContentList,
  ListItemHeading,
  ListItemLink,
  ListItemText,
  MenuTriggerIcon,
  NavMenuContent,
  NavMenuIndicator,
  NavMenuIndicatorArrow,
  NavMenuLink,
  NavMenuList,
  NavMenuRoot,
  NavMenuTrigger,
  NavMenuViewport,
  ViewportPosition,
} from './styles';

export enum MenuContentLayout {
  callout = 'callout',
  calloutWithList = 'calloutWithList',
  oneColumn = 'oneColumn',
  twoColumns = 'twoColumns',
  threeColumns = 'threeColumns',
}

interface NavigationMenuContentItemProps extends HTMLProps<HTMLAnchorElement> {
  active?: boolean;
  title?: string;
  children?: ReactNode;
}
const NavigationMenuContentItem = React.forwardRef<
  HTMLAnchorElement,
  NavigationMenuContentItemProps
>(({ active, className, children, title, ...props }, forwardedRef) => (
  <li>
    <RadixNavigationMenu.Link asChild active={active}>
      <ListItemLink
        className={className}
        {...(props as LinkProps)}
        ref={forwardedRef}
        textDecoration={false}
        active={active}
      >
        <ListItemHeading tag="h3">{title}</ListItemHeading>
        <ListItemText className="ListItemText">{children}</ListItemText>
      </ListItemLink>
    </RadixNavigationMenu.Link>
  </li>
));

const NavigationMenuList = NavMenuList;
const NavigationMenuItem = RadixNavigationMenu.Item;
const NavigationMenuLink = (
  props: LinkProps & RadixNavigationMenu.NavigationMenuLinkProps,
) => (
  <RadixNavigationMenu.Link asChild>
    <NavMenuLink {...props} textDecoration={false}>
      {props.children}
    </NavMenuLink>
  </RadixNavigationMenu.Link>
);

const NavigationMenuTrigger = ({ children }: PropsWithChildren) => (
  <NavMenuTrigger>
    {children}
    <MenuTriggerIcon
      width={12}
      height={12}
      label="menu trigger icon"
      labelId="menuTriggerIcon"
    />
  </NavMenuTrigger>
);

interface CalloutProps {
  heading: string;
  description: string;
  link: string;
  Icon?: any;
  to?: string;
  href?: string;
}
const NavigationMenuCallout = ({
  heading,
  description,
  Icon,
  to,
  href,
}: CalloutProps) => (
  <li style={{ gridRow: 'span 3' }}>
    <RadixNavigationMenu.Link asChild>
      <Callout to={to} href={href}>
        {Icon ? (
          <Icon
            width="48px"
            height="48px"
            label="Callout Icon"
            labelId="calloutIcon"
          />
        ) : (
          <Logo
            width="48px"
            height="48px"
            color="white"
            label="Little World Icon"
            labelId="lwIcon"
          />
        )}
        <CalloutHeading>{heading}</CalloutHeading>
        <CalloutText>{description}</CalloutText>
      </Callout>
    </RadixNavigationMenu.Link>
  </li>
);

const NavigationMenuContent = ({
  layout,
  children,
}: PropsWithChildren<{
  layout: keyof typeof MenuContentLayout;
}>) => (
  <NavMenuContent>
    <ContentList $layout={layout}>{children}</ContentList>
  </NavMenuContent>
);

const NavigationMenu = ({
  children,
  withShadow,
}: PropsWithChildren<{
  withShadow?: boolean;
}>) => (
  <NavMenuRoot>
    <NavigationMenuList $withShadow={withShadow}>
      {children}
      <NavMenuIndicator>
        <NavMenuIndicatorArrow />
      </NavMenuIndicator>
    </NavigationMenuList>
    <ViewportPosition>
      <NavMenuViewport />
    </ViewportPosition>
  </NavMenuRoot>
);

export {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuCallout,
  NavigationMenuLink,
  NavigationMenuContentItem,
};
