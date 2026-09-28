// @ts-nocheck
import { MemoryRouter, useLocation } from 'react-router-dom';

import { render, renderWithUser, screen } from '../../testUtils';
import Link from './Link';

export const MOCK_TEXT = 'Great content';
export const MOCK_SLUG = '/home';

const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location">{location.pathname}</div>;
};

// jsdom cannot navigate; every plain-anchor click (external URLs, _blank,
// mailto) logs a known "Not implemented" error, and MemoryRouter logs
// react-router future-flag warnings. Swallow exactly those, surface the rest.
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

beforeAll(() => {
  console.error = (...args) => {
    if (String(args[0]).includes('Not implemented: navigation')) return;
    originalConsoleError(...args);
  };
});

afterAll(() => {
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
});

test('Link renders correctly when "href" provided', () => {
  render(<Link href={MOCK_SLUG}>{MOCK_TEXT}</Link>);
  const link = screen.getByRole('link');
  expect(link.textContent).toEqual(MOCK_TEXT);
  expect(link).toHaveAttribute('href', MOCK_SLUG);
});

test('Link on click should call function', async () => {
  const onClick = jest.fn();
  const { user } = renderWithUser(
    <Link href={MOCK_SLUG} onClick={onClick}>
      {MOCK_TEXT}
    </Link>,
  );
  const link = screen.getByRole('link');
  await user.click(link);
  expect(onClick).toHaveBeenCalled();
});

// Semantic matrix: kind of destination (external page / internal route /
// in-page anchor / none), router mounted or not, and explicit target
// override. The Link contract: external pages open in a new tab
// (target="_blank"), internal routes navigate in-SPA without a target,
// in-page anchors stay plain same-tab anchors, no router falls back to a
// same-tab anchor, and an explicit target always wins over the defaults.
const EXTERNAL = 'https://example.com';
const INTERNAL = '/app/help/faqs';
const TO = '/somewhere';

const destinations: {
  label: string;
  kind?: 'external' | 'internal' | 'other';
  href?: string;
  to?: string;
}[] = [
  { label: 'external-href', kind: 'external', href: EXTERNAL },
  { label: 'external-href-beats-to', kind: 'external', href: EXTERNAL, to: TO },
  { label: 'internal-href', kind: 'internal', href: INTERNAL },
  {
    label: 'internal-href-beats-to',
    kind: 'internal',
    href: INTERNAL,
    to: TO,
  },
  { label: 'internal-to', kind: 'internal', to: TO },
  {
    label: 'internal-empty-href-falls-back-to-to',
    kind: 'internal',
    href: '',
    to: TO,
  },
  { label: 'hash-anchor', kind: 'other', href: '#section' },
  { label: 'mailto-href', kind: 'other', href: 'mailto:hi@example.com' },
  { label: 'none', href: undefined, to: undefined },
];

const rows: {
  name: string;
  props: { href?: string; to?: string; target?: string };
  inRouter: boolean;
  expectedHref: string | null;
  expectedTarget: string | null;
  expectedLocation: string;
}[] = [];

for (const dest of destinations) {
  for (const explicitTarget of [undefined, '_blank', '_self']) {
    for (const inRouter of [true, false]) {
      const destination =
        dest.href !== undefined && dest.href !== '' ? dest.href : dest.to;

      let kind: string;
      if (!destination) {
        kind = 'no-destination';
      } else if (!inRouter) {
        kind = 'fallback-anchor';
      } else if (dest.kind === 'external') {
        kind = 'external-anchor';
      } else if (dest.kind === 'other') {
        kind = 'other-anchor';
      } else if (explicitTarget === '_blank') {
        kind = 'internal-anchor-new-tab';
      } else {
        kind = 'internal-router-link';
      }

      rows.push({
        name: `${dest.label} target=${explicitTarget ?? 'none'} router=${inRouter ? 'in' : 'out'} -> ${kind}`,
        props: { href: dest.href, to: dest.to, target: explicitTarget },
        inRouter,
        expectedHref: destination ?? null,
        expectedTarget:
          explicitTarget ??
          (dest.kind === 'external' && destination ? '_blank' : null),
        expectedLocation: kind === 'internal-router-link' ? destination : '/',
      });
    }
  }
}

test.each(rows)('$name', async row => {
  const link = <Link {...row.props}>{MOCK_TEXT}</Link>;
  const view = renderWithUser(
    row.inRouter ? (
      <MemoryRouter initialEntries={['/']}>
        {link}
        <LocationDisplay />
      </MemoryRouter>
    ) : (
      link
    ),
  );

  const el = screen.getByText(MOCK_TEXT).closest('a');
  if (row.expectedHref === null) {
    expect(el).not.toHaveAttribute('href');
  } else {
    expect(el).toHaveAttribute('href', row.expectedHref);
  }
  if (row.expectedTarget === null) {
    expect(el).not.toHaveAttribute('target');
  } else {
    expect(el).toHaveAttribute('target', row.expectedTarget);
  }

  if (row.inRouter) {
    await view.user.click(screen.getByText(MOCK_TEXT));
    expect(screen.getByTestId('location')).toHaveTextContent(
      row.expectedLocation,
    );
  }
});
