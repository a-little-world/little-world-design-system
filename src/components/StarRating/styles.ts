import styled from 'styled-components';

export const RatingContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxxsmall};
  align-items: center;
`;

export const StarContainer = styled.button<{ isFocused?: boolean }>`
  position: relative;
  cursor: pointer;
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.xxxxsmall};
  outline: none;
  border-radius: ${({ theme }) => theme.radius.xxxsmall};

  &:focus-visible {
    box-shadow: 0 0 0 2px #4f46e5;
  }
`;

export const StarOverlay = styled.div<{ fillAmount: number }>`
  position: absolute;
  top: 2px;
  left: 2px;
  overflow: hidden;
  width: ${props => props.fillAmount * 100}%;
  pointer-events: none;
`;

export const Rating = styled.span`
  margin-left: ${({ theme }) => theme.spacing.xxsmall};
  font-size: 14px;
  color: #666;
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
