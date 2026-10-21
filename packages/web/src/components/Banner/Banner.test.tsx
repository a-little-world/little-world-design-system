// @ts-nocheck
import { renderWithUser, screen, TestRouter } from '../../testUtils';
import Banner from './Banner';

test('internal CTA navigates in-app, external CTA opens a new tab', async () => {
  const { user } = renderWithUser(
    <TestRouter>
      <Banner
        title="Title"
        description="Description"
        primaryCtaText="Primary"
        primaryCtaUrl="/app/dashboard"
        secondaryCtaText="Secondary"
        secondaryCtaUrl="https://example.com"
      />
    </TestRouter>,
  );

  const secondary = screen.getByRole('link', { name: 'Secondary' });
  expect(secondary).toHaveAttribute('target', '_blank');

  await user.click(screen.getByRole('link', { name: 'Primary' }));
  expect(screen.getByTestId('location').textContent).toBe('/app/dashboard');
});
