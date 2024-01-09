import { render, screen } from '../testUtils';
import textParser from './parser';

it('should return string if it does not contain tags', () => {
  const text = 'Mock string with no tags';
  render(textParser(text));
  expect(screen.getByText(text)).toBeInTheDocument();
});

it('should return string including unrecognised tags', () => {
  const text =
    'Mock string with <fake>unrecognised tags</fake>. This <book>is also fake</book>';
  render(textParser(text));
  expect(screen.getByText(text)).toBeInTheDocument();
});

it('should return color text if text contains highlight tag', () => {
  const normalString = 'Mock string with';
  const text = normalString + ' <highlight>this is orange</highlight>';
  render(textParser(text));
  expect(screen.getByText(normalString)).toBeInTheDocument();
  expect(screen.getByText('this is orange')).toBeInTheDocument();
});

it('should return anchor element with correct attributes', () => {
  const normalString = 'Mock string and';
  const text =
    normalString + ' <a {"href": "little-world"}>this is an anchor</a>';
  render(textParser(text));

  const link = screen.getByRole('link');
  expect(screen.getByText(normalString)).toBeInTheDocument();
  expect(link).toHaveTextContent('this is an anchor');
  expect(link).toHaveAttribute('href', 'little-world');
});

it('should return just string if anchor does not contain href', () => {
  const string = '<a {"onClick": "little-world"}>this is an anchor</a>';
  render(textParser(string));

  const link = screen.queryByRole('link');
  expect(link).not.toBeInTheDocument();
  expect(screen.getByText('this is an anchor')).toBeInTheDocument();
});

it('should return correct elements if string contains multiple anchor tags', () => {
  const normalString = 'Mock string and';
  const text =
    normalString +
    ` <a {"href": "little-world"}>this is an anchor</a>and<a {"href": "sda"}>another anchor</a>`;
  render(textParser(text));

  const links = screen.getAllByRole('link');
  expect(links[0]).toHaveTextContent('this is an anchor');
  expect(links[1]).toHaveTextContent('another anchor');
});

it('should return correct elements if string contains multiple valid tags', () => {
  const normalString = 'Mock string and';
  const text =
    normalString +
    ` <a {"href": "little-world"}>this is an anchor</a><highlight>highlight text</highlight>`;
  render(textParser(text));
  expect(screen.getByText(normalString)).toBeInTheDocument();
  expect(screen.getByRole('link')).toBeInTheDocument();
  expect(screen.getByText('highlight text')).toBeInTheDocument();
});

it('should return text after tag elements correctly', () => {
  const normalString = 'Mock string and';
  const text = `<a {"href": "little-world"}>this is an anchor</a><highlight>highlight text</highlight>${normalString}`;
  render(textParser(text));
  expect(screen.getByText('Mock string and')).toBeInTheDocument();
  expect(screen.getByRole('link')).toBeInTheDocument();
  expect(screen.getByText('highlight text')).toBeInTheDocument();
});
