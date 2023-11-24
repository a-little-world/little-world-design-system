import styled, { css } from 'styled-components';
import { StyledElement } from '../Text/styles';

export const LINK_HOVER_CSS = css`
  transition: all 0.3s ease-in-out;
  background: transparent;

  // underline hover effect
  &::before {
    content: '';
    background: currentColor;
    display: block;
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 0;
    height: 1px;
    transition: all 0.3s ease-in-out;
  }
`;

export const Anchor = styled.a<{ $active?: boolean }>`
  display: inline-flex;
  position: relative;
  color: ${({ theme }) => theme.color.text.link};
  text-decoration: none;
  border: none;

  ${LINK_HOVER_CSS}

  &:hover {
    cursor: pointer;
    background-position: 0;

    &::before {
      width: 100%;
    }
  }
`;

export const AnchorText = styled(StyledElement)`
  color: ${({ theme }) => theme.color.text.link};
`;
