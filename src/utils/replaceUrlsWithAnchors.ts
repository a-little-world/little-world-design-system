// Example outputs:
/*
Input: Check out www.google.com for more info
Output: Check out <a href="https://www.google.com" target="_blank">www.google.com</a> for more info

Input: Visit little-world.io and https://example.com
Output: Visit <a href="https://little-world.io" target="_blank">little-world.io</a> and <a href="https://example.com" target="_blank">https://example.com</a>
*/

const urlPattern =
  /(?<=^|\s)(?:https?:\/\/)?(?:www\.)?(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(?:\/[^\s]*)?/g;

/**
 * Replaces all URLs in a text with HTML anchor tags
 * @param text - The input text containing URLs
 * @returns The text with URLs replaced with anchor tags
 */
export default function replaceUrlsWithAnchors(text: string): string {
  return text.replace(urlPattern, match => {
    // Ensure URL has protocol for href

    const href = match.startsWith('http') ? match : `https://${match}`;
    return `<a {"target":"_blank", "href":"${href}"}>${match}</a>`;
  });
}
