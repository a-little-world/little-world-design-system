import * as Checkbox from '@radix-ui/react-checkbox';
import styled from 'styled-components';
import tokens from '../../tokens';
import Label from '../Label/Label';

const ITEM_WIDTH = '13px';

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
}
`;

export const CheckboxRoot = styled(Checkbox.Root)`
  all: unset;
  background: white;
  box-sizing: border-box;
  border: 1px solid black;
  width: ${ITEM_WIDTH};
  height: ${ITEM_WIDTH};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLabel = styled(Label)`
  margin-left: ${tokens.spacing.xxsmall};
`;
