// @ts-nocheck
import { getLinkKind } from '@a-little-world/little-world-design-system-core';

test.each([
  ['/app/help/faqs', 'internal'],
  ['/app', 'internal'],
  ['/', 'internal'],
  ['https://example.com', 'external'],
  ['http://example.com/path', 'external'],
  ['//example.com/path', 'external'],
  ['#hash', 'other'],
  ['relative/path', 'other'],
  ['mailto:hi@example.com', 'other'],
  ['', 'other'],
  [undefined, 'other'],
])('getLinkKind(%j) is %s', (href, expected) => {
  expect(getLinkKind(href)).toBe(expected);
});
