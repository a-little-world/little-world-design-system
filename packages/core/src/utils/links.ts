export type LinkKind = 'internal' | 'external' | 'other';

// ponytail: TLD heuristic, so `file.pdf` reads as a domain; pass `relative` for relative file links
const SCHEMELESS_DOMAIN =
  /^(www\.|[a-z\d-]+(\.[a-z\d-]+)*\.[a-z]{2,}([:/?#]|$))/i;

/** Prefixes `https://` onto scheme-less domains (`little-world.com/x`); other hrefs pass through. */
export const withScheme = <T extends string | undefined>(href: T): T =>
  (href && SCHEMELESS_DOMAIN.test(href) ? `https://${href}` : href) as T;

/**
 * 'internal' — root-absolute in-app routes (`/app/help`)
 * 'external' — web URLs (`https://…`, `//host`, `little-world.com`)
 * 'other'    — hashes, relative paths, mailto, empty
 */
export const getLinkKind = (href?: string): LinkKind => {
  if (!href) return 'other';
  if (href.startsWith('/') && !href.startsWith('//')) return 'internal';
  if (/^(https?:)?\/\//.test(withScheme(href))) return 'external';
  return 'other';
};
