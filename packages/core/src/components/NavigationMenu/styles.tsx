import * as RadixNavigationMenu from '@radix-ui/react-navigation-menu';
import styled, { css } from 'styled-components';

import {
  enterFromLeft,
  enterFromRight,
  exitToLeft,
  exitToRight,
  scaleIn,
  scaleOut,
} from '../../utils/animations';
import { ChevronDownIcon } from '../Icon';
import Link from '../Link/Link';
import Text from '../Text/Text';

export const MenuTriggerIcon = styled(ChevronDownIcon)`
  position: relative;
  color: ${({ theme }) => theme.color.text.primary};
  top: 1px;
  transition: transform 250ms ease;
`;

export const NavMenuRoot = styled(RadixNavigationMenu.Root)`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1000;

  &[data-state='open'] > ${MenuTriggerIcon} {
    transform: rotate(-180deg);
  }
`;

export const NavMenuList = styled(RadixNavigationMenu.List)<{
  $withShadow?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.surface.primary};
  padding: ${({ theme }) => theme.spacing.xxsmall};
  border-radius: ${({ theme }) => theme.radius.xxsmall};
  list-style: none;
  margin: 0;
  gap: ${({ theme }) => theme.spacing.xxsmall};

  ${({ theme, $withShadow }) =>
    $withShadow && `box-shadow: 0 2px 10px ${theme.color.surface.secondary};`}
`;

const MENU_ITEM_CSS = css`
  gap: ${({ theme }) => theme.spacing.xxsmall};
  padding: ${({ theme }) => `${theme.spacing.xsmall}`};
  outline: none;
  user-select: none;
  font-weight: 500;
  line-height: 1;
  font-size: 15px;
  border-radius: ${({ theme }) => theme.radius.xxxsmall};
  color: ${({ theme }) => theme.color.text.primary};

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.surface.tertiary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.surface.secondary};
  }
`;

export const NavMenuLink = styled(Link)`
  display: block;
  text-decoration: none;

  ${MENU_ITEM_CSS}
  ${({ active, theme }) =>
    active &&
    `
   box-shadow: 0 0 0 2px ${theme.color.border.bold};  
`}
`;

export const NavMenuTrigger = styled(RadixNavigationMenu.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${MENU_ITEM_CSS}
`;

export const NavMenuContent = styled(RadixNavigationMenu.Content)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  animation-duration: 250ms;
  animation-timing-function: ease;
  z-index: 200;

  &[data-motion='from-start'] {
    animation-name: ${enterFromLeft};
  }
  &[data-motion='from-end'] {
    animation-name: ${enterFromRight};
  }
  &[data-motion='to-start'] {
    animation-name: ${exitToLeft};
  }

  &[data-motion='to-end'] {
    animation-name: ${exitToRight};
  }
`;

export const NavMenuIndicator = styled(RadixNavigationMenu.Indicator)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 10px;
  top: 100%;
  overflow: hidden;
  z-index: 1;
  transition: width, transform 250ms ease;

  &[data-state='visible'] {
    animation: fadeIn 200ms ease forward;
  }

  &[data-state='hidden'] {
    animation: fadeOut 200ms ease forward;
  }
`;

export const NavMenuIndicatorArrow = styled.div`
  position: relative;
  top: 70%;
  background-color: white;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  border-top-left-radius: 2px;
`;

export const ViewportPosition = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  top: 100%;
  left: 0;
  perspective: 2000px;
`;

export const NavMenuViewport = styled(RadixNavigationMenu.Viewport)`
  position: relative;
  transform-origin: top center;
  margin-top: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.surface.primary};
  border-radius: 6px;
  overflow: hidden;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  transition: width, height, 300ms ease;
  height: var(--radix-navigation-menu-viewport-height);

  &[data-state='open'] {
    animation: ${scaleIn} 200ms ease;
  }

  &[data-state='closed'] {
    animation: ${scaleOut} 200ms ease;
  }
`;

export const ContentList = styled.ul<{ $layout: string }>`
  display: grid;
  padding: 22px;
  margin: 0;
  column-gap: 10px;
  list-style: none;
  gap: ${({ theme }) => theme.spacing.xxxsmall};

  ${({ $layout }) => {
    if ($layout === 'callout')
      return css`
        width: 100%;
        grid-template-columns: 1fr;
      `;

    if ($layout === 'calloutWithList')
      return css`
        width: 100%;
        grid-template-columns: 0.75fr 1fr;
      `;

    if ($layout === 'oneColumn')
      return css`
        width: 100%;
        grid-auto-flow: column;
        grid-template-rows: repeat(1, 1fr);
      `;

    if ($layout === 'twoColumns')
      return css`
        width: 100%;
        grid-auto-flow: column;
        grid-template-rows: repeat(3, 1fr);
      `;

    if ($layout === 'threeColumns')
      return css`
        width: 100%;
        grid-auto-flow: column;
        grid-template-rows: repeat(2, 1fr);
      `;
  }}
`;

export const ListItemLink = styled(Link)`
  display: block;
  outline: none;
  text-decoration: none;
  user-select: none;
  padding: 12px;
  border-radius: 6px;
  font-size: 15px;
  line-height: 1;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.surface.secondary};
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.surface.tertiary};
  }

  ${({ active, theme }) =>
    active &&
    `
     box-shadow: 0 0 0 2px ${theme.color.border.bold};  
  `}
`;

export const ListItemHeading = styled(Text)`
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 5px;
`;

export const ListItemText = styled(Text)`
  color: ${({ theme }) => theme.color.text.primary};
  line-height: 1.4;
  font-weight: initial;
`;

export const Callout = styled(Link)`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${({ theme }) =>
    `linear-gradient(135deg, ${theme.color.text.primary} 0%, ${theme.color.border.bold} 100%)`};
  border-radius: 6px;
  padding: 25px;
  text-decoration: none;
  outline: none;
  user-select: none;
  grid-row: 1 / -1; /* Span all rows */

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.text.primary};
  }
`;

export const CalloutHeading = styled(Text)`
  color: ${({ theme }) => theme.color.text.reversed};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
`;

export const CalloutText = styled(Text)`
  color: ${({ theme }) => theme.color.text.reversed};
  font-size: 14px;
  line-height: 1.3;
`;
