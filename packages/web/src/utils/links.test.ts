// @ts-nocheck
import {
  getLinkKind,
  withScheme,
} from '@a-little-world/little-world-design-system-core';

test.each([
  ['/app/help/faqs', 'internal'],
  ['/app', 'internal'],
  ['/', 'internal'],
  ['https://example.com', 'external'],
  ['http://example.com/path', 'external'],
  ['//example.com/path', 'external'],
  ['little-world.com', 'external'],
  ['www.little-world.com', 'external'],
  ['sub.example.co.uk/path?x=1', 'external'],
  ['example.com:8080', 'external'],
  ['#hash', 'other'],
  ['relative/path', 'other'],
  ['42', 'other'],
  ['localhost:3000', 'other'],
  ['mailto:hi@example.com', 'other'],
  ['tel:+491234', 'other'],
  ['', 'other'],
  [undefined, 'other'],
])('getLinkKind(%j) is %s', (href, expected) => {
  expect(getLinkKind(href)).toBe(expected);
});

test.each([
  ['little-world.com', 'https://little-world.com'],
  ['www.little-world.com/app', 'https://www.little-world.com/app'],
  ['https://little-world.com', 'https://little-world.com'],
  ['//little-world.com', '//little-world.com'],
  ['/app/help', '/app/help'],
  ['mailto:hi@example.com', 'mailto:hi@example.com'],
  [undefined, undefined],
])('withScheme(%j) is %j', (href, expected) => {
  expect(withScheme(href)).toBe(expected);
});
