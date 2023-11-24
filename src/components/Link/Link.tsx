import React from 'react';
import TextTypes from '../Text/TextTypes';
import { Anchor, AnchorText } from './styles';

type LinkProps = {
  active?: boolean;
  bold?: boolean;
  children: string;
  onClick?: () => void;
  to: string;
  textType?: keyof typeof TextTypes;
};

const Link = ({ active, bold, children, onClick, to, textType }: LinkProps) => (
  <Anchor href={to} $active={active} onClick={onClick}>
    <AnchorText
      as="span"
      $type={textType || TextTypes.Body3}
      $bold={Boolean(bold)}
      $center={false}
    >
      {children}
    </AnchorText>
  </Anchor>
);

export default Link;
