import styled from 'styled-components';

export type CheckboxGroupOrientation = 'vertical' | 'horizontal';

interface CheckboxGroupWrapperProps {
  $orientation?: CheckboxGroupOrientation;
}

export const CheckboxGroupWrapper = styled.div<CheckboxGroupWrapperProps>`
  width: 100%;
  display: flex;
  flex-direction: ${({ $orientation }) =>
    $orientation === 'vertical' ? 'column' : 'row'};
  align-items: ${({ $orientation }) =>
    $orientation === 'vertical' ? 'flex-start' : 'center'};
  flex-wrap: ${({ $orientation }) =>
    $orientation === 'vertical' ? 'nowrap' : 'wrap'};
  gap: ${({ theme }) => theme.spacing.xxsmall};
  margin-bottom: ${({ theme }) => theme.spacing.xxsmall};
`;

/** @deprecated Use CheckboxGroupWrapper instead */
export const MultiCheckboxWrapper = CheckboxGroupWrapper;
