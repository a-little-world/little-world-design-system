import styled from 'styled-components';

import Text from '../Text/Text';

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  align-items: center;
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxsmall};
`;

export const StarContainer = styled.button<{ isFocused?: boolean }>`
  position: relative;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  border-radius: ${({ theme }) => theme.radius.xxxsmall};
  f &:focus-visible {
    box-shadow: 0 0 0 2px #4f46e5;
  }
`;

export const StarOverlay = styled.div<{ fillAmount: number }>`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: ${props => props.fillAmount * 100}%;
  pointer-events: none;
`;

export const Rating = styled(Text)`
  margin-left: ${({ theme }) => theme.spacing.xxsmall};
  width: 24px;
`;

export const TextRating = styled(Text)`
  height: 16px;
`;

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
