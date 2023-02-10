import React, { useEffect, useState } from 'react';
import * as Progress from '@radix-ui/react-progress';
import styled from 'styled-components';
import tokens from '../../tokens';
import Text, { TextTypes } from '../Text/Text';

const ProgressRoot = styled(Progress.Root)`
  position: relative;
  overflow: hidden;
  background: var(--blackA9);
  border-radius: 99999px;
  background: ${tokens.color.theme.light.surface.secondary};
  width: 300px;
  height: 8px;

  /* Fix overflow clipping in Safari */
  /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
  transform: translateZ(0);
`;

const ProgressIndicator = styled(Progress.Indicator)`
  background-color: ${tokens.color.theme.light.surface.indicator};
  width: 100%;
  height: 100%;
  transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
`;

const ProgressBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-family: 'Work Sans';
`;

type ProgressBarProps = {
  max: number;
  value: number;
};

const calculateProgress = (max: number, value: number) => {
  return (value / max) * 100;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ max, value = 0 }) => {
  const [progress, setProgress] = useState(calculateProgress(max, value));

  useEffect(() => {
    setProgress(calculateProgress(max, value));
  }, [max, value]);

  return (
    <ProgressBarWrapper>
      <Text id="progressBarIndicator" tag="span" type={TextTypes.Body4}>
        {value}/{max}
      </Text>
      <ProgressRoot
        aria-labelledby="progressBarIndicator"
        value={value}
        max={max}
      >
        <ProgressIndicator
          className="ProgressIndicator"
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </ProgressRoot>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
