import styled, { css } from 'styled-components';
import { StatusBaseProps, StatusTypes } from '@a-little-world/little-world-design-system-core';


const StatusMessage = styled.div<StatusBaseProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: ${({ theme }) => theme.spacing.xlarge};
  padding: ${({ theme }) => theme.spacing.xxsmall};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: ${({ $visible }) => ($visible ? 'opacity 1s' : 'none')};
  text-align: center;
  margin: ${({ theme }) => theme.spacing.xxsmall} 0;

  ${({ $type }) => {
    if ($type === StatusTypes.Error)
      return css`
        background: ${({ theme }) => theme.color.surface.error};
        color: ${({ theme }) => theme.color.text.error};
      `;

    if ($type === StatusTypes.Success)
      return css`
        background: ${({ theme }) => theme.color.surface.success};
        color: ${({ theme }) => theme.color.text.success};
      `;
    return '';
  }})
`;

export default StatusMessage;
