import React from 'react';
import styled from 'styled-components';
import {
  BannerBaseProps,
  BannerTypes,
  ButtonAppearance,
  ButtonSizes,
  TextTypes,
} from '@a-little-world/little-world-design-system-core';

import Link from '../Link/Link';
import Text from '../Text/Text';
import {
  BannerWrapper,
  Content,
  LeftContainer,
  RightContainer,
  MobileBannerImage,
  DesktopBannerImage,
  TitleDescriptionStack,
  Ctas,
} from './styles';

export { BannerTypes };

const Cta = Link;
const PrimaryCta = styled(Cta)<{ $hasBorder: boolean }>`
  ${({ $hasBorder, theme }) =>
    $hasBorder &&
    `
color: ${theme.color.text.title};
border: 2px solid ${theme.color.text.title};
background: ${theme.color.surface.primary};
`}
`;

const Banner = ({
  background,
  className,
  description,
  image,
  imageAlt = 'Banner image',
  primaryCtaHasBorder = false,
  primaryCtaText,
  primaryCtaUrl,
  secondaryCtaText,
  secondaryCtaUrl,
  textColor,
  title,
  type = BannerTypes.Small,
}: BannerBaseProps) => {
  const isLarge = type === BannerTypes.Large;
  const showCtasOnLHS = type === BannerTypes.Small;
  const hasImage = Boolean(image);
  const showSecondaryCta = Boolean(secondaryCtaUrl && secondaryCtaText);
  const showPrimaryCta = Boolean(primaryCtaUrl && primaryCtaText);

  return (
    <BannerWrapper
      className={className}
      $background={background}
      $isLarge={isLarge}
    >
      <Content $isLarge={isLarge}>
        <LeftContainer>
          {hasImage && (
            <MobileBannerImage src={image} alt={imageAlt} $isLarge={isLarge} />
          )}

          <TitleDescriptionStack $isLarge={isLarge}>
            <Text
              tag="h3"
              type={isLarge ? TextTypes.Body2 : TextTypes.Body3}
              bold
              color={textColor}
            >
              {title}
            </Text>
            <Text color={textColor}>{description}</Text>
          </TitleDescriptionStack>

          {showCtasOnLHS && (
            <Ctas>
              {showSecondaryCta && (
                <Cta
                  to={secondaryCtaUrl}
                  buttonAppearance={ButtonAppearance.Secondary}
                  buttonSize={ButtonSizes.Medium}
                >
                  {secondaryCtaText}
                </Cta>
              )}
              {showPrimaryCta && (
                <PrimaryCta
                  to={primaryCtaUrl}
                  buttonAppearance={ButtonAppearance.Primary}
                  buttonSize={ButtonSizes.Medium}
                  $hasBorder={primaryCtaHasBorder}
                >
                  {primaryCtaText}
                </PrimaryCta>
              )}
            </Ctas>
          )}
        </LeftContainer>

        <RightContainer $hasImage={hasImage} $ctasOnLHS={showCtasOnLHS}>
          {hasImage && (
            <DesktopBannerImage src={image} alt={imageAlt} $isLarge={isLarge} />
          )}

          {!showCtasOnLHS && (
            <Ctas $isRHS>
              {showSecondaryCta && (
                <Cta
                  to={secondaryCtaUrl}
                  buttonAppearance={ButtonAppearance.Secondary}
                  buttonSize={ButtonSizes.Medium}
                >
                  {secondaryCtaText}
                </Cta>
              )}
              {showPrimaryCta && (
                <PrimaryCta
                  to={primaryCtaUrl}
                  buttonAppearance={ButtonAppearance.Primary}
                  buttonSize={ButtonSizes.Medium}
                  $hasBorder={primaryCtaHasBorder}
                >
                  {primaryCtaText}
                </PrimaryCta>
              )}
            </Ctas>
          )}
        </RightContainer>
      </Content>
    </BannerWrapper>
  );
};

export default Banner;
