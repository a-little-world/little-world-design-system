import { Range, Root, Thumb, Track } from '@radix-ui/react-slider';
import styled from 'styled-components';

export const SliderWrapper = styled.div``;

export const SliderRoot = styled(Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 100%:
  max-width: 400px;
  height: 20px;
`;

export const SliderTrack = styled(Track)`
  position: relative;
  background-color: ${props => props.theme.color.surface.secondary};
  flex-grow: 1;
  border-radius: 9999px;
  height: 3px;
`;

export const SliderRange = styled(Range)`
  position: absolute;
  background-color: ${props => props.theme.color.surface.bold};
  border-radius: 9999px;
  height: 100%;
`;

export const SliderThumb = styled(Thumb)`
  display: block;
  width: ${({ theme }) => theme.spacing.small};
  height: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.color.surface.primary};
  border-radius: 10px;
  border: 1px solid ${props => props.theme.color.border.moderate};

  &:hover {
    background-color: ${props => props.theme.color.surface.primary};
    cursor: grab;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0px 4px ${props => props.theme.color.surface.contrast};
  }
`;

export const Steps = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;
