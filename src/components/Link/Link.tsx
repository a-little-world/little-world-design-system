import React from 'react';
import TextTypes from '../Text/TextTypes';
import { Anchor, AnchorText } from './styles';
import { ButtonAppearance, ButtonSizes } from '../Button/Button';

type LinkProps = {
  active?: boolean;
  bold?: boolean;
  children: string;
  onClick?: () => void;
  to: string;
  textType?: keyof typeof TextTypes;
  buttonAppearance?: keyof typeof ButtonAppearance;
  buttonSize?: keyof typeof ButtonSizes;
};

const Link = ({
  active,
  bold,
  buttonAppearance,
  buttonSize,
  children,
  onClick,
  to,
  textType,
}: LinkProps) => (
  <Anchor
    href={to}
    $active={active}
    onClick={onClick}
    $buttonAppearance={buttonAppearance}
    $size={buttonSize}
  >
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
