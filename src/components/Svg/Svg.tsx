import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Arrow } from '../../assets/arrowDown.svg';
import { ReactComponent as Close } from '../../assets/close.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Menu } from '../../assets/menu.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';

export const ARROW = 'Arrow';
export const CLOSE = 'Close';
export const LOGO = 'Logo';
export const MENU = 'Menu';
export const FACEBOOK = 'Facebook';
export const GITHUB = 'Github';
export const INSTAGRAM = 'Instagram';
export const TWITTER = 'Twitter';

// hide element but keep visible to screen readers
// parent requires position: relative;
const Label = styled.span`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  &:focus {
    clip: auto;
    height: auto;
    overflow: auto;
    position: absolute;
    width: auto;
  }
`;

enum Icons {
  Arrow = 'Arrow',
  Close = 'Close',
  Logo = 'Logo',
  Menu = 'Menu',
  Facebook = 'Facebook',
  Github = 'Github',
  Instagram = 'Instagram',
  Twitter = 'Twitter',
}

type IconsList = keyof typeof Icons;

const getPath = (name: IconsList, props: Omit<SvgProps, 'name'>) => {
  switch (name) {
    case ARROW:
      return <Arrow {...props} />;
    case CLOSE:
      return <Close {...props} />;
    case LOGO:
      return <Logo {...props} />;
    case MENU:
      return <Menu {...props} />;
    case FACEBOOK:
      return <Facebook {...props} />;
    case GITHUB:
      return <Github {...props} />;
    case INSTAGRAM:
      return <Instagram {...props} />;
    case TWITTER:
      return <Twitter {...props} />;
    default:
      return null;
  }
};

type SvgProps = {
  name: IconsList;
  height?: string;
  width?: string;
  className?: string;
};

const Svg = ({ name, ...rest }: SvgProps) => (
  <>
    {getPath(name, rest)}
    <Label>{name}</Label>
  </>
);

export default Svg;
