// @ts-nocheck
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '../testUtils';
import textParser from './parser';

// Mock AttachmentWidget component for testing
const MockAttachmentWidget = ({
  attachmentTitle,
  attachmentLink,
  imageSrc,
  caption,
  isPreview,
}: any) => (
  <div data-testid="attachment-widget">
    <div>Title: {attachmentTitle}</div>
    <div>Link: {attachmentLink}</div>
    <div>Image: {imageSrc}</div>
    <div>Caption: {caption}</div>
    <div>Preview: {isPreview ? 'true' : 'false'}</div>
  </div>
);

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
  const normalString = 'Mock string with';
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
  expect(screen.getByRole('button')).toHaveTextContent('this is a button');
  expect(screen.getByText('highlight text')).toBeInTheDocument();
});

it('should not return parsed button if onlyLinks is true', () => {
  const text = `<a {"href": "little-world"}>this is an anchor</a><button>this is a button</button><highlight>highlight text</highlight>`;

  render(textParser(text, { onlyLinks: true }));
  expect(screen.getByRole('link')).toHaveTextContent('this is an anchor');
  expect(screen.queryByRole('button')).toBeNull();
});

// Test for the failing AttachmentWidget case
it('should handle AttachmentWidget with malformed JSON gracefully', () => {
  const text =
    '<AttachmentWidget {"attachmentTitle": "Image", "attachmentLink": null, "imageSrc": "https://little-world-production-bucket.s3.eu-central-1.amazonaws.com/static/message_attachments/9cca2cd0-07f5-4727-a0ee-6012a34f98f6.png", "caption": "Hallo Hasan,\ndoch, hast Du :)\nNach dem Login bist Du automatisch auf \"Start", dann oben unter Gruppengespräche -> siehe Anhang\nGruß\nChris"} ></AttachmentWidget>';

  const options = {
    customElements: [
      {
        Component: MockAttachmentWidget,
        tag: 'AttachmentWidget',
        props: { isPreview: false },
      },
    ],
  };

  // This should not crash and should return the unparsed string
  render(textParser(text, options));

  // Should render the unparsed string (HTML-encoded) instead of a component
  expect(screen.getByText(/AttachmentWidget/)).toBeInTheDocument();
  expect(screen.getByText(/attachmentTitle/)).toBeInTheDocument();
  expect(screen.getByText(/Hallo Hasan/)).toBeInTheDocument();
});

// Test for AttachmentWidget with valid JSON
it('should handle AttachmentWidget with valid JSON correctly', () => {
  const text =
    '<AttachmentWidget {"attachmentTitle": "Image", "attachmentLink": null, "imageSrc": "https://example.com/image.png", "caption": "Valid caption"} ></AttachmentWidget>';

  const options = {
    customElements: [
      {
        Component: MockAttachmentWidget,
        tag: 'AttachmentWidget',
        props: { isPreview: false },
      },
    ],
  };

  render(textParser(text, options));

  const attachmentWidget = screen.getByTestId('attachment-widget');
  expect(attachmentWidget).toBeInTheDocument();
  expect(screen.getByText('Title: Image')).toBeInTheDocument();
  expect(screen.getByText('Caption: Valid caption')).toBeInTheDocument();
});

// Test for the problematic German text that was causing hanging
it('should handle complex German text with incomplete tags without hanging', () => {
  const problematicText = `Hallo Andreas,
das kenne ich :)

auch die anderen bekommen diese Email typischerweise innerhalb von <30min - in Ausnahmefällen auch mal in ein paar Stunden (Server-Verzögerungen).

Bei manchen landen diese Systemnachrichten im Spam-Ordner und wenn der Nutzer dann den Absender nicht als "kein Spam" bzw "zulassen" markiert, passiert das immer wieder. Auch denke ich, das nicht jeder Nutzer regelmäßig in seine Email schaut - old school :) - oder eine Neben-Emailadresse benutzt - oder diese Nachricht ignoriert - oder ....

Ich würde das bei den Betroffenen ganz einfach mal ansprechen. Oft klärt sich das dann recht schnell.

Meldet sich jemand länger nicht, besteht ja die Möglichkeit, dass wir eine private Email an denjenigen schicken - das hilft in 50% der Fälle.

Gruß
Chris`;

  const options = {
    customElements: [
      {
        Component: MockAttachmentWidget,
        tag: 'AttachmentWidget',
        props: { isPreview: false },
      },
    ],
  };

  const result = textParser(problematicText, options);
  expect(result).toBe(problematicText);
});

// Test for text with malformed HTML-like content
it('should handle text with malformed HTML-like content gracefully', () => {
  const malformedText =
    'This text has <incomplete tags and <nested>content</nested> and <30min which looks like a tag but isnt';

  const options = {
    customElements: [
      {
        Component: MockAttachmentWidget,
        tag: 'AttachmentWidget',
        props: { isPreview: false },
      },
    ],
  };

  const result = textParser(malformedText, options);
  expect(result).toBe(malformedText);
});

// Test for the specific problematic pattern step by step
it('should handle the specific problematic pattern step by step', () => {
  // Test 1: Just the <30min part
  const test1 = 'Text with <30min in it';
  const result1 = textParser(test1, {});
  expect(result1).toBe(test1);

  // Test 2: Text with quotes and newlines
  const test2 = 'Text with "quotes" and\nnewlines';
  const result2 = textParser(test2, {});
  expect(result2).toBe(test2);

  // Test 3: Text with incomplete tag-like content
  const test3 = 'Text with <30min - incomplete tag';
  const result3 = textParser(test3, {});
  expect(result3).toBe(test3);
});

// Test for the exact problematic pattern that causes hanging
it('should handle the exact problematic pattern that causes hanging', () => {
  const problematicLine =
    'auch die anderen bekommen diese Email typischerweise innerhalb von <30min - in Ausnahmefällen auch mal in ein paar Stunden (Server-Verzögerungen).';

  const result = textParser(problematicLine, {});
  expect(result).toBe(problematicLine);
});

// Test to identify the exact hanging combination
it('should identify the exact hanging combination', () => {
  const paragraph1 = 'Hallo Andreas,\ndas kenne ich :)';
  const result1 = textParser(paragraph1, {});
  expect(result1).toBe(paragraph1);

  const paragraph2 =
    'auch die anderen bekommen diese Email typischerweise innerhalb von <30min - in Ausnahmefällen auch mal in ein paar Stunden (Server-Verzögerungen).';
  const result2 = textParser(paragraph2, {});
  expect(result2).toBe(paragraph2);

  const paragraph3 =
    'Bei manchen landen diese Systemnachrichten im Spam-Ordner und wenn der Nutzer dann den Absender nicht als "kein Spam" bzw "zulassen" markiert, passiert das immer wieder.';
  const result3 = textParser(paragraph3, {});
  expect(result3).toBe(paragraph3);

  // Test 4: The paragraph with multiple incomplete patterns
  const paragraph4 =
    'Auch denke ich, das nicht jeder Nutzer regelmäßig in seine Email schaut - old school :) - oder eine Neben-Emailadresse benutzt - oder diese Nachricht ignoriert - oder ....';
  const result4 = textParser(paragraph4, {});
  expect(result4).toBe(paragraph4);
});

// Test for the full problematic text to identify where it hangs
it('should handle the full problematic text without hanging', () => {
  const fullProblematicText = `Hallo Andreas,
das kenne ich :)

auch die anderen bekommen diese Email typischerweise innerhalb von <30min - in Ausnahmefällen auch mal in ein paar Stunden (Server-Verzögerungen).

Bei manchen landen diese Systemnachrichten im Spam-Ordner und wenn der Nutzer dann den Absender nicht als "kein Spam" bzw "zulassen" markiert, passiert das immer wieder. Auch denke ich, das nicht jeder Nutzer regelmäßig in seine Email schaut - old school :) - oder eine Neben-Emailadresse benutzt - oder diese Nachricht ignoriert - oder ....

Ich würde das bei den Betroffenen ganz einfach mal ansprechen. Oft klärt sich das dann recht schnell.

Meldet sich jemand länger nicht, besteht ja die Möglichkeit, dass wir eine private Email an denjenigen schicken - das hilft in 50% der Fälle.

Gruß
Chris`;

  const options = {
    customElements: [
      {
        Component: MockAttachmentWidget,
        tag: 'AttachmentWidget',
        props: { isPreview: false },
      },
    ],
  };

  const result = textParser(fullProblematicText, options);
  expect(result).toBe(fullProblematicText);
});

// Test for text with multiple < characters
it('should handle text with multiple < characters without hanging', () => {
  const textWithMultipleLessThan =
    'Text with <30min and <another and <third and <fourth';

  const result = textParser(textWithMultipleLessThan, {});
  expect(result).toBe(textWithMultipleLessThan);
});

it('should handle multiple problematic patterns without hanging', () => {
  // This combines multiple patterns that individually work but together caused hanging with regex
  const multipleProblematicPatterns =
    'Text with <30min and <nested>content</nested> and <another incomplete';

  const result = textParser(multipleProblematicPatterns, {});
  expect(result).toBe(multipleProblematicPatterns);
});

it('should handle component creation without hanging', () => {
  const problematicComponentCreation = 'Text with <30min - incomplete tag';

  const result = textParser(problematicComponentCreation, {});
  expect(result).toBe(problematicComponentCreation);
});

it('should handle nested tags correctly', () => {
  const text = `<highlight>This highlighted text contains a <a {"href": "/nested-link"}>nested link</a> inside it</highlight>`;

  const result = textParser(text, {});

  expect(result).toBeDefined();
  // The result should be a React element, not the original string
  expect(typeof result).not.toBe('string');
});

it('should handle button with ButtonAppearance.Secondary and onClick', () => {
  const text = `<button {"appearance": "secondary", "onClick": "console.log('Button clicked!')"}>Click me!</button>`;

  const result = textParser(text, {});

  // Should render button component
  expect(result).toBeDefined();
  expect(typeof result).not.toBe('string');
});

it('should handle custom elements like CallWidget and AttachmentWidget', () => {
  const MockCallWidget = ({
    isMissed,
    isPreview,
    header,
    description,
    onReturnCall,
    ...props
  }) => (
    <div data-testid="call-widget" {...props}>
      <div>Header: {header}</div>
      <div>Description: {description}</div>
      <div>Missed: {isMissed ? 'Yes' : 'No'}</div>
      <div>Preview: {isPreview ? 'Yes' : 'No'}</div>
      {onReturnCall && <button onClick={onReturnCall}>Return Call</button>}
    </div>
  );

  const MockAttachmentWidget = ({ isPreview, ...props }) => (
    <div data-testid="attachment-widget" {...props}>
      <div>Preview: {isPreview ? 'Yes' : 'No'}</div>
    </div>
  );

  const customElements = [
    {
      Component: MockCallWidget,
      tag: 'CallWidget',
      props: { isPreview: false },
    },
    {
      Component: MockAttachmentWidget,
      tag: 'AttachmentWidget',
      props: { isPreview: false },
    },
  ];

  const text = `<CallWidget {"isMissed": false, "header": "Video Anruf", "isPreview": false}>Call content</CallWidget>
<AttachmentWidget {"isPreview": false}>Attachment content</AttachmentWidget>`;

  const result = textParser(text, { customElements });

  // Should render custom components
  expect(result).toBeDefined();
  expect(typeof result).not.toBe('string');
});

it('should handle mixed content with custom elements and regular tags', () => {
  const MockWidget = ({ title, children, ...props }) => (
    <div data-testid="widget" {...props}>
      <strong>{title}: </strong>
      {children}
    </div>
  );

  const customElements = [
    {
      Component: MockWidget,
      tag: 'widget',
      props: { className: 'custom-widget' },
    },
  ];

  const text = `<highlight>Highlighted text with <widget {"title": "Custom Widget"}>widget content</widget> and <a {"href": "/link"}>a link</a></highlight>`;

  const result = textParser(text, { customElements });

  expect(result).toBeDefined();
  expect(typeof result).not.toBe('string');
});

// Test 6: Edge case - custom elements with invalid JSON
it('should handle custom elements with invalid JSON gracefully', () => {
  const MockWidget = ({ title, children, ...props }) => (
    <div data-testid="widget" {...props}>
      <strong>{title}: </strong>
      {children}
    </div>
  );

  const customElements = [
    {
      Component: MockWidget,
      tag: 'widget',
      props: { className: 'custom-widget' },
    },
  ];

  const text = `<widget {"title": "Valid Widget"}>Valid content</widget>
<widget {"title": "Invalid Widget", "broken": json}>Invalid content</widget>`;

  const result = textParser(text, { customElements });

  // Should handle invalid JSON gracefully
  expect(result).toBeDefined();
});

// Test cases for nonInteractive option
describe('nonInteractive option', () => {
  it('should render plain URLs as text when nonInteractive is true', () => {
    const text =
      'Visit little-world.com and https://www.little-world.com for more info';

    const { container } = render(textParser(text, { nonInteractive: true }));

    // Should render URLs as plain text, not as links
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(container.textContent).toContain('little-world.com');
    expect(container.textContent).toContain('https://www.little-world.com');
  });

  it('should render anchor tags as plain text when nonInteractive is true', () => {
    const text =
      'Check out <a {"href": "little-world"}>this link</a> for more details';

    const { container } = render(textParser(text, { nonInteractive: true }));

    // Should render anchor content as plain text, not as a link
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(container.textContent).toContain('this link');
  });

  it('should render button tags as plain text when nonInteractive is true', () => {
    const text = 'Click <button>this button</button> to continue';

    const { container } = render(textParser(text, { nonInteractive: true }));

    // Should render button content as plain text, not as a button
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(container.textContent).toContain('this button');
  });

  it('should render colored tags as plain text when nonInteractive is true', () => {
    const text =
      'This is <highlight>highlighted text</highlight> and <bold>bold text</bold>';

    const { container } = render(textParser(text, { nonInteractive: true }));

    // Should render colored content as plain text
    expect(container.textContent).toContain('highlighted text');
    expect(container.textContent).toContain('bold text');
  });

  it('should render mixed content as plain text when nonInteractive is true', () => {
    const text =
      'Visit <a {"href": "little-world"}>little-world.com</a> and click <button>Submit</button> for <highlight>highlighted action</highlight>';

    const { container } = render(textParser(text, { nonInteractive: true }));

    // Should render all content as plain text
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(container.textContent).toContain('little-world.com');
    expect(container.textContent).toContain('Submit');
    expect(container.textContent).toContain('highlighted action');
  });

  it('should still render custom elements when nonInteractive is true', () => {
    const MockWidget = ({ title, children }) => (
      <div data-testid="widget">
        <strong>{title}: </strong>
        {children}
      </div>
    );

    const customElements = [
      {
        Component: MockWidget,
        tag: 'widget',
        props: {},
      },
    ];

    const text =
      'Regular text with <widget {"title": "Custom Widget"}>widget content</widget> and <a {"href": "/link"}>link text</a>';

    const { container } = render(
      textParser(text, { nonInteractive: true, customElements }),
    );

    // Custom elements should still render, but interactive elements should be plain text
    expect(screen.getByTestId('widget')).toBeInTheDocument();
    expect(screen.getByText('Custom Widget:')).toBeInTheDocument();
    expect(screen.getByText('widget content')).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(container.textContent).toContain('link text');
  });
});
