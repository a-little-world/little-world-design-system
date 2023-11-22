import React from 'react';
import { Anchor, AnchorText } from './Link.styles';
import { TextTypes } from '../Text/styles';

type LinkProps = {
  active?: boolean;
  children: string;
  onClick?: () => void;
  to: string;
  textType?: keyof typeof TextTypes;
};

const Link = ({ active, children, onClick, to, textType }: LinkProps) => (
  <Anchor href={to} $active={active} onClick={onClick}>
    <AnchorText tag="span" type={textType}>
      {children}
    </AnchorText>
  </Anchor>
);

export default Link;
