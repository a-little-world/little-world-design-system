import replaceUrlsWithAnchors from './replaceUrlsWithAnchors';

const ANCHOR_ENTITY_CODE = '<a';

const positiveTestCases = [
  'Check out google.com for more info',
  'Visit www.google.com and https://example.com',
  'Link at start: mozilla.org is first',
  'https://complex-url.com/path?param=value#section',
];

const negativeTestCases = [
  'prefix:google.com should not match',
  'href:little-world.com should not match but google.com should',
  'email@google.com should not match',
  '<a {"href":"little-world.com", "target":"_blank"}>little-world.com</a>',
];

it('should replace html link with anchor link if valid', () => {
  positiveTestCases.forEach(text => {
    const result = replaceUrlsWithAnchors(text);
    expect(result.includes(ANCHOR_ENTITY_CODE));
  });
});

it('should also include text before and after link', () => {
  const result = replaceUrlsWithAnchors(positiveTestCases[0]);
  expect(result.includes('Check out '));
  expect(result.includes(' for more info'));
});

it('should also include text between links', () => {
  const result = replaceUrlsWithAnchors(positiveTestCases[1]);
  expect(result.includes(' and '));
});

it('should not replace html link with anchor link if not valid', () => {
  negativeTestCases.forEach(text => {
    const result = replaceUrlsWithAnchors(text);
    expect(result.includes(ANCHOR_ENTITY_CODE) === false);
  });
});
