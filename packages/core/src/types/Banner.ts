export enum BannerTypes {
  Small = 'small',
  Large = 'large',
}

export interface BannerBaseProps {
  background?: string;
  className?: string;
  description: string;
  image?: string;
  imageAlt?: string;
  primaryCtaColor?: string;
  primaryCtaText?: string;
  primaryCtaUrl?: string;
  secondaryCtaColor?: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  textColor?: string;
  title: string;
  type?: BannerTypes;
}
