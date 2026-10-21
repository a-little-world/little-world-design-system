// @ts-nocheck
import { Route, Routes } from 'react-router-dom';

import { render, renderWithUser, screen, TestRouter } from '../../testUtils';
import Link from './Link';

export const MOCK_TEXT = 'Great content';
export const MOCK_SLUG = '/home';

// jsdom can't navigate; clicking a plain anchor logs "Not implemented: navigation"
const originalConsoleError = console.error;

beforeAll(() => {
  console.error = (...args) => {
    if (String(args[0]).includes('Not implemented: navigation')) return;
    originalConsoleError(...args);
  };
});

afterAll(() => {
  console.error = originalConsoleError;
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

const EXTERNAL = 'https://example.com';
const INTERNAL = '/app/help/faqs';
const NEW_TAB = { target: '_blank', rel: 'noopener noreferrer' };

// `location` is where the router ends up after clicking; omitted when rendered without a router
test.each`
  name                                | props                                   | inRouter | attrs                                                    | location
  ${'external opens new tab'}         | ${{ href: EXTERNAL }}                   | ${true}  | ${{ href: EXTERNAL, ...NEW_TAB }}                        | ${'/'}
  ${'external without router'}        | ${{ href: EXTERNAL }}                   | ${false} | ${{ href: EXTERNAL, ...NEW_TAB }}                        | ${undefined}
  ${'protocol-relative is external'}  | ${{ href: '//example.com' }}            | ${true}  | ${{ href: '//example.com', ...NEW_TAB }}                 | ${'/'}
  ${'external explicit _self'}        | ${{ href: EXTERNAL, target: '_self' }}  | ${true}  | ${{ href: EXTERNAL, target: '_self', rel: null }}        | ${'/'}
  ${'external explicit rel'}          | ${{ href: EXTERNAL, rel: 'nofollow' }}  | ${true}  | ${{ href: EXTERNAL, target: '_blank', rel: 'nofollow' }} | ${'/'}
  ${'internal routes in-app'}         | ${{ href: INTERNAL }}                   | ${true}  | ${{ href: INTERNAL, target: null, rel: null }}           | ${INTERNAL}
  ${'internal keeps search and hash'} | ${{ href: `${INTERNAL}?tab=1#faq` }}    | ${true}  | ${{ href: `${INTERNAL}?tab=1#faq`, target: null }}       | ${`${INTERNAL}?tab=1#faq`}
  ${'internal without router'}        | ${{ href: INTERNAL }}                   | ${false} | ${{ href: INTERNAL, target: null, rel: null }}           | ${undefined}
  ${'internal explicit _blank'}       | ${{ href: INTERNAL, target: '_blank' }} | ${true}  | ${{ href: INTERNAL, ...NEW_TAB }}                        | ${'/'}
  ${'hash anchor stays same tab'}     | ${{ href: '#section' }}                 | ${true}  | ${{ href: '#section', target: null, rel: null }}         | ${'/'}
  ${'mailto stays same tab'}          | ${{ href: 'mailto:hi@example.com' }}    | ${true}  | ${{ href: 'mailto:hi@example.com', target: null }}       | ${'/'}
  ${'empty href renders no href'}     | ${{ href: '' }}                         | ${true}  | ${{ href: null, target: null }}                          | ${'/'}
  ${'no href renders no href'}        | ${{}}                                   | ${true}  | ${{ href: null, target: null }}                          | ${'/'}
`('$name', async ({ props, inRouter, attrs, location }) => {
  const link = <Link {...props}>{MOCK_TEXT}</Link>;
  const { user } = renderWithUser(
    inRouter ? <TestRouter>{link}</TestRouter> : link,
  );

  const el = screen.getByText(MOCK_TEXT).closest('a');
  Object.entries(attrs).forEach(([attr, value]) => {
    if (value === null) expect(el).not.toHaveAttribute(attr);
    else expect(el).toHaveAttribute(attr, value);
  });

  if (location !== undefined) {
    await user.click(el);
    expect(screen.getByTestId('location').textContent).toBe(location);
  }
});

test('router state is not leaked onto plain anchors', () => {
  render(
    <Link href={EXTERNAL} state={{ from: 'test' }}>
      {MOCK_TEXT}
    </Link>,
  );
  expect(screen.getByRole('link')).not.toHaveAttribute('state');
});

test.each`
  href           | expected
  ${'42'}        | ${'/emails/42'}
  ${'../users'}  | ${'/users'}
  ${'?tab=chat'} | ${'/emails?tab=chat'}
`(
  'relative "$href" resolves against the current path',
  async ({ href, expected }) => {
    const { user } = renderWithUser(
      <TestRouter initialPath="/emails">
        <Routes>
          <Route
            path="/emails"
            element={
              <Link href={href} relative>
                {MOCK_TEXT}
              </Link>
            }
          />
          <Route path="*" element={null} />
        </Routes>
      </TestRouter>,
    );
    await user.click(screen.getByRole('link'));
    expect(screen.getByTestId('location').textContent).toBe(expected);
  },
);

test('relative href without the prop stays a plain anchor', () => {
  render(
    <TestRouter initialPath="/emails">
      <Link href="42">{MOCK_TEXT}</Link>
    </TestRouter>,
  );
  expect(screen.getByRole('link')).toHaveAttribute('href', '42');
});
