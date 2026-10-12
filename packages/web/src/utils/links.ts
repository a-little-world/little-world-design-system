export type LinkKind = 'internal' | 'external' | 'other';

/**
 * 'internal' — root-absolute in-app routes (`/app/help`); react-router
 *   navigates them in-SPA when a router is mounted.
 * 'external' — absolute web URLs (`https://…`, `//host`); plain anchors that
 *   open in a new tab.
 * 'other'    — hashes, relative paths, mailto, empty; plain same-tab anchors.
 */
export const getLinkKind = (href?: string): LinkKind => {
  if (!href) return 'other';
  if (href.startsWith('/') && !href.startsWith('//')) return 'internal';
  if (/^(https?:)?\/\//.test(href)) return 'external';
  return 'other';
};
