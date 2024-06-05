import { Meta } from '@storybook/react';
import React from 'react';

import {
  MenuContentLayout,
  NavigationMenu,
  NavigationMenuCallout,
  NavigationMenuContent,
  NavigationMenuContentItem,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from './NavigationMenu';

const meta: Meta<typeof NavigationMenu> = {
  component: NavigationMenu,
  title: 'Components/NavigationMenu',
};

export default meta;

export const Default = () => (
  <div style={{ height: '500px', width: '100%' }}>
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Callout With List</NavigationMenuTrigger>
        <NavigationMenuContent layout={MenuContentLayout.calloutWithList}>
          <NavigationMenuCallout
            heading="New to Little World"
            description="Amazing new feature offered by Little World. Go there now"
            link="/"
          />
          <NavigationMenuContentItem href="/" title="Stitches" active>
            CSS-in-JS with best-in-class developer experience.
          </NavigationMenuContentItem>
          <NavigationMenuContentItem href="/" title="Colors">
            Beautiful, thought-out palettes with auto dark mode.
          </NavigationMenuContentItem>
          <NavigationMenuContentItem href="/" title="Icons">
            A crisp set of 15x15 icons, balanced and consistent.
          </NavigationMenuContentItem>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Callout</NavigationMenuTrigger>
        <NavigationMenuContent layout={MenuContentLayout.callout}>
          <NavigationMenuCallout
            heading="New to Little World"
            description="Amazing new feature offered by Little World. Go there now"
            link="/"
          />
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>One Column</NavigationMenuTrigger>
        <NavigationMenuContent layout={MenuContentLayout.oneColumn}>
          <NavigationMenuContentItem title="Introduction" href="/">
            Build high-quality, accessible design systems and web apps.
          </NavigationMenuContentItem>
          <NavigationMenuContentItem title="Getting started" href="/">
            A quick tutorial to get you up and running with LW.
          </NavigationMenuContentItem>
          <NavigationMenuContentItem
            title="Styling"
            href="/primitives/docs/guides/styling"
          >
            Unstyled and compatible with any styling solution.
          </NavigationMenuContentItem>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
        <NavigationMenuContent layout={MenuContentLayout.twoColumns}>
          <NavigationMenuContentItem title="Introduction" href="/">
            Build high-quality, accessible design systems and web apps.
          </NavigationMenuContentItem>
          <NavigationMenuContentItem title="Getting started" href="/">
            A quick tutorial to get you up and running with LW.
          </NavigationMenuContentItem>
          <NavigationMenuContentItem title="Styling" href="/">
            Unstyled and compatible with any styling solution.
          </NavigationMenuContentItem>
          <NavigationMenuContentItem title="Animation" href="/">
            Use CSS keyframes or any animation library of your choice.
          </NavigationMenuContentItem>
          <NavigationMenuContentItem title="Accessibility" href="/">
            Tested in a range of browsers and assistive technologies.
          </NavigationMenuContentItem>
          <NavigationMenuContentItem title="Releases" href="/">
            Releases and their changelogs.
          </NavigationMenuContentItem>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink href="">Link</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenu>
    <div style={{ zIndex: 100 }}>Z-index Test: 100</div>
  </div>
);
