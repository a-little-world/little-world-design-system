export const isInternalLink = (href?: string): href is string =>
  !!href && href.startsWith('/') && !href.startsWith('//');
