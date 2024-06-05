// @ts-nocheck
import * as RadixNavigationMenu from '@radix-ui/react-navigation-menu';
import React, { HTMLProps, PropsWithChildren } from 'react';

import { Logo } from '../Icon';
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
}
const NavigationMenuContentItem = React.forwardRef<
  HTMLAnchorElement,
  NavigationMenuContentItemProps
>(({ active, className, children, title, ...props }, forwardedRef) => (
  <li>
    <RadixNavigationMenu.Link asChild active={active}>
      <ListItemLink
        className={className}
        {...props}
        ref={forwardedRef}
        textDecoration={false}
      >
        <ListItemHeading tag="h3">{title}</ListItemHeading>
        <ListItemText className="ListItemText">{children}</ListItemText>
      </ListItemLink>
    </RadixNavigationMenu.Link>
  </li>
));

const NavigationMenuList = NavMenuList;
const NavigationMenuLink = NavMenuLink;
const NavigationMenuItem = RadixNavigationMenu.Item;

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
}
const NavigationMenuCallout = ({
  heading,
  description,
  link,
  Icon,
}: CalloutProps) => (
  <li style={{ gridRow: 'span 3' }}>
    <NavMenuLink asChild>
      <Callout href={link}>
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
    </NavMenuLink>
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
