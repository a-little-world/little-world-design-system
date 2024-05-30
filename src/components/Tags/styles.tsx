import React from 'react';
import styled, { css } from 'styled-components';

export const Tag = styled.div`
  font-family: 'Signika Negative';
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color.surface.primary};
  border-radius: 10px;
  box-shadow: 0px 1px 5px rgb(0 0 0 / 30%);
  border-radius: 1000px;
  border: 2px solid ${({ theme }) => theme.color.border.selected};
  color: ${({ theme }) => theme.color.text.primary};
  padding: ${({ theme }) =>
    `${theme.spacing.xxxsmall} ${theme.spacing.xsmall}`};
  min-width: 60px;
  height: 33px;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.small}) {
      padding: ${theme.spacing.xxsmall} ${theme.spacing.small};
      min-width: 80px;
      height: 45px;
    }
  `}
`;
export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xsmall};
  padding-top: ${({ theme }) => theme.spacing.xxxsmall};
`;
