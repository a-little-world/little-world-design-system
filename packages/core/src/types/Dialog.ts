export enum DialogSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Fullscreen = 'fullscreen',
}

export const DialogWidths: Record<DialogSize, string> = {
  [DialogSize.Small]: '400px',
  [DialogSize.Medium]: '600px',
  [DialogSize.Large]: '900px',
  [DialogSize.Fullscreen]: '100%',
};
