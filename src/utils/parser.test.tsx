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

it('should return string including unrecognised tags containing empty string', () => {
  const text = 'Empty string <sa></sa>';
  render(textParser(text));
  expect(screen.getByText(text)).toBeInTheDocument();
});

it('should return urls as anchor tags', () => {
  const normalString = 'Mock string and';
  const endOfString = '. Sign up';
  const text =
    normalString +
    ` little-world.com & https://www.little-world.com` +
    endOfString;
  render(textParser(text));

  const links = screen.getAllByRole('link');
  expect(links[0]).toHaveTextContent('little-world.com');
  expect(links[1]).toHaveTextContent('https://www.little-world.com');
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

it('should return button if string contains button tag', () => {
  const normalString = 'Mock string and';
  const text = `<button>this is a button</button><highlight>highlight text</highlight>${normalString}`;
  render(textParser(text));
  expect(screen.getByText('Mock string and')).toBeInTheDocument();
  expect(screen.getByRole('button')).toHaveTextContent('this is a button');
  expect(screen.getByText('highlight text')).toBeInTheDocument();
});

it('should not return parsed button if onlyLinks is true', () => {
  const text = `<a {"href": "little-world"}>this is an anchor</a><button>this is a button</button><highlight>highlight text</highlight>`;

  render(textParser(text, { onlyLinks: true }));
  expect(screen.getByRole('link')).toHaveTextContent('this is an anchor');
  expect(screen.queryByRole('button')).toBeNull();
});
