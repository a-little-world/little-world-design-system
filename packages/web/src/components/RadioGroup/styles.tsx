import * as RadioGroup from '@radix-ui/react-radio-group';
import styled from 'styled-components';

const ITEM_WIDTH = '13px';

export const RadioGroupWrapper = styled.div``;

export const RadioGroupRoot = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  align-items: flex-start;
`;

export const RadioGroupItem = styled(RadioGroup.Item)`
  all: unset;
  background: ${({ theme }) => theme.color.surface.primary};
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.color.surface.contrast};
  width: ${ITEM_WIDTH};
  height: ${ITEM_WIDTH};
  border-radius: 100%;
  margin-right: ${({ theme }) => theme.spacing.xxsmall};

  &:focus {
    box-shadow: 0 0 0 2px #eeb612;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioGroupIndicator = styled(RadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.text.primary};
  }
`;
