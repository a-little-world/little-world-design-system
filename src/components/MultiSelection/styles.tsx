import styled, { css } from 'styled-components';
import tokens from '../../tokens';

export const MultiSelectionWrapper = styled.div`
  width: 100%:
`;

export const Options = styled.div`
  display: flex;
  border-radius: 15px;
  background: ${tokens.color.theme.light.surface.secondary};
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px;
  white-space: pre-line;
`;

export const Option = styled.button<{ $selected: boolean }>`
  font-family: 'Signika Negative';
  background: ${tokens.color.theme.light.surface.primary};
  min-width: 80px;
  height: 45px;
  border-radius: 10px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.03);
  border-radius: 1000px;
  border: 2px solid ${tokens.color.theme.light.border.reversed};
  padding: 8px 16px;

  &:hover {
    cursor: pointer;
  }

  ${({ $selected }) =>
    $selected &&
    css`
      border-color: ${tokens.color.theme.light.border.selected};
    `}
`;
