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
  primaryCtaHasBorder?: boolean;
  primaryCtaText?: string;
  primaryCtaUrl?: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  textColor?: string;
  title: string;
  type?: BannerTypes;
}
