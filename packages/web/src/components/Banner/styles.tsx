import styled, { css } from 'styled-components';

export const BannerWrapper = styled.div<{
  $background?: string;
  $isLarge: boolean;
}>`
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
  background: ${({ $background, theme }) =>
    $background || theme.color.surface.accent};
  background-position: center;
  background-size: cover;
  padding: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.color.text.reversed};
  width: 100%;
  justify-content: center;

  ${({ theme, $isLarge }) => css`
    @media (min-width: ${theme.breakpoints.small}) {
      flex-direction: row;
    }

    ${$isLarge &&
    css`
      min-height: 520px;
      padding: ${theme.spacing.large} ${theme.spacing.medium};

      @media (min-width: ${theme.breakpoints.medium}) {
        min-height: 272px;
        padding: ${theme.spacing.large};
      }
    `}
  `};
`;

export const Content = styled.div<{ $isLarge: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme, $isLarge }) =>
    $isLarge ? theme.spacing.large : theme.spacing.medium};
  max-width: ${({ $isLarge }) => ($isLarge ? '1200px' : '800px')};

  ${({ theme, $isLarge }) => css`
    @media (min-width: ${$isLarge
        ? theme.breakpoints.large
        : theme.breakpoints.small}) {
      flex-direction: ${$isLarge ? 'column' : 'row'};
      gap: ${$isLarge ? theme.spacing.xlarge : theme.spacing.large};
      justify-content: ${$isLarge ? 'space-between' : 'flex-start'};
    }
  `};
`;

export const Container = styled.div<{ $hasImage?: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: ${({ theme }) => theme.spacing.large};
  justify-content: ${({ $hasImage }) =>
    $hasImage ? 'flex-start' : 'flex-end'};

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.medium}) {
      gap: ${theme.spacing.large};
    }
  `};
`;

export const LeftContainer = styled(Container)`
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const RightContainer = styled(Container)<{ $ctasOnLHS: boolean }>`
  ${({ $ctasOnLHS, $hasImage, theme }) => css`
    display: ${$ctasOnLHS ? 'none' : 'flex'};

    ${$hasImage &&
    css`
      @media (min-width: ${theme.breakpoints.medium}) {
        display: flex;
      }
    `}

    @media (min-width: ${theme.breakpoints.large}) {
      display: flex;
    }
  `}
`;

export const MobileBannerImage = styled.img<{ $isLarge: boolean }>`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.small};
  object-fit: cover;
  align-self: center;
  display: none;
  max-height: 240px;

  ${({ theme, $isLarge }) =>
    $isLarge &&
    css`
      display: flex;
      @media (min-width: ${theme.breakpoints.large}) {
        max-height: 320px;
      }
    `};
`;

export const DesktopBannerImage = styled.img<{ $isLarge: boolean }>`
  display: none;
  border-radius: ${({ theme }) => theme.radius.small};

  ${({ theme, $isLarge }) =>
    !$isLarge &&
    css`
      @media (min-width: ${theme.breakpoints.small}) {
        display: block;
        width: auto;
        height: auto;
        max-height: 180px;
        object-fit: contain;
        align-self: flex-start;
      }
    `};
`;

export const TitleDescriptionStack = styled.div<{ $isLarge: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxxsmall};
  max-width: 200px;

  ${({ theme, $isLarge }) => css`
    @media (min-width: ${theme.breakpoints.small}) {
      max-width: 400px;
    }
    ${$isLarge &&
    css`
      @media (min-width: ${theme.breakpoints.medium}) {
        max-width: 720px;
      }
    `}
  `};
`;

export const Ctas = styled.div<{ $isRHS?: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
  width: 100%;
  flex-direction: column;

  ${({ theme, $isRHS }) => css`
    margin-top: ${$isRHS ? '0' : theme.spacing.xxsmall};

    @media (min-width: ${theme.breakpoints.small}) {
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: auto;

      ${$isRHS &&
      `
      align-self: flex-end;
      justify-content: flex-end;
      `}
    }
  `};
`;
