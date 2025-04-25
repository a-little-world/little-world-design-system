import styled from "styled-components";

import Button from "../Button/Button";
import { DROPDOWN_MAX_WIDTH } from "../Dropdown/styles";

export const MultiDropdownWrapper = styled.div``;

export const AddMore = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxsmall};
`;

export const AddMoreButton = styled(Button)`
  color: ${({ theme }) => theme.color.text.highlight};

  &:disabled {
    color: ${({ theme }) => theme.color.text.disabled};
  }
`;

export const Segment = styled.section<{ $locked?: boolean }>`
  display: grid;
  max-width: calc(
    ${DROPDOWN_MAX_WIDTH} * 2 + ${({ theme }) => theme.spacing.small}
  );
  grid-template-columns: ${({ $locked, theme }) =>
    $locked
      ? "repeat(2, minmax(0, 1fr))"
      : `repeat(2, minmax(0, 1fr)) minmax(
      ${theme.spacing.small},
      auto
    )`};
  align-items: start;
  gap: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.xxsmall};
`;

export const DeleteButton = styled(Button)`
  top: ${({ theme }) => theme.spacing.xsmall};
`;
