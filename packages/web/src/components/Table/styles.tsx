import styled from 'styled-components';

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border: 1px solid ${({ theme }) => theme.color?.border?.default ?? '#E5E7EB'};
  border-radius: 8px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  color: ${({ theme }) => theme.color?.text?.primary ?? '#111827'};

  caption {
    caption-side: top;
    padding: 8px 16px;
    text-align: left;
    font-weight: 600;
    color: ${({ theme }) => theme.color?.text?.secondary ?? '#374151'};
  }
`;

export const TableHead = styled.thead`
  background: ${({ theme }) => theme.color?.surface?.secondary ?? '#F9FAFB'};

  th {
    padding: 12px 16px;
    text-align: left;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color?.text?.secondary ?? '#6B7280'};
    border-bottom: 1px solid ${({ theme }) => theme.color?.border?.default ?? '#E5E7EB'};
    white-space: nowrap;

    button {
      background: none;
      border: none;
      cursor: pointer;
      font: inherit;
      color: inherit;
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 0;

      &:hover {
        color: ${({ theme }) => theme.color?.text?.primary ?? '#111827'};
      }
    }
  }
`;

export const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid ${({ theme }) => theme.color?.border?.default ?? '#F3F4F6'};
    transition: background 0.15s;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background: ${({ theme }) => theme.color?.surface?.hover ?? '#F9FAFB'};
    }
  }

  td {
    padding: 12px 16px;
    vertical-align: middle;
  }
`;

export const EmptyCell = styled.td`
  text-align: center;
  color: ${({ theme }) => theme.color?.text?.hint ?? '#9CA3AF'};
  padding: 32px 16px !important;
`;
