import * as RadioGroup from '@radix-ui/react-radio-group';
import styled from 'styled-components';
import Label from '../Label/Label';

const ITEM_WIDTH = '13px';

export const RadioGroupRoot = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RadioGroupItem = styled(RadioGroup.Item)`
  all: unset;
  background: white;
  box-sizing: border-box;
  border: 1px solid black;
  width: ${ITEM_WIDTH};
  height: ${ITEM_WIDTH};
  border-radius: 100%;
  margin-right: 8px;

  &:focus {
    box-shadow: 0 0 0 2px #eeb612;
  }
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
    background-color: black;
  }
`;
