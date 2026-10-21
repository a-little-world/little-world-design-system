export type LinkKind = 'internal' | 'external' | 'other';

/**
 * 'internal' — root-absolute in-app routes (`/app/help`)
 * 'external' — absolute web URLs (`https://…`, `//host`)
 * 'other'    — hashes, relative paths, mailto, empty
 */
export const getLinkKind = (href?: string): LinkKind => {
  if (!href) return 'other';
  if (href.startsWith('/') && !href.startsWith('//')) return 'internal';
  if (/^(https?:)?\/\//.test(href)) return 'external';
  return 'other';
};
