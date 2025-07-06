import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  margin: ${({ theme }) => theme.spacing.medium}; 0 ${({ theme }) => theme.spacing.xsmall}; 0;
`;

const ReactStatus = styled.div`
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing.xxsmall} ${({ theme }) => theme.spacing.xsmall};
  font-family: monospace;
  background: #20232a;
  color: #61dafb;
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  align-items: center;
  font-size: 1rem;
`;

const FigmaStatus = styled.a`
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing.xxsmall} ${({ theme }) => theme.spacing.xsmall};
  display: flex;
  gap: ${({ theme }) => theme.spacing.xsmall};
  align-items: center;
  background: #000;
  text-decoration: none;
  color: #fff;
  font-size: 0.9rem;

  &:hover {
    background: #333;
  }
`;

type StatusProps = {
  React: string;
  Figma: string;
};

const Status = ({ React, Figma }: StatusProps) => {
  return (
    <Wrapper>
      {React && (
        <ReactStatus>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            alt=""
            height="20"
          />
          <div>{React}</div>
        </ReactStatus>
      )}
      {Figma && (
        <FigmaStatus href={Figma}>
          <svg height="20px" viewBox="0 0 38 57">
            <path
              fill="#1abcfe"
              d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
            ></path>
            <path
              fill="#0acf83"
              d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
            ></path>
            <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"></path>
            <path
              fill="#f24e1e"
              d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
            ></path>
            <path
              fill="#a259ff"
              d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
            ></path>
          </svg>
          <div>Link</div>
        </FigmaStatus>
      )}
    </Wrapper>
  );
};

export default Status;
