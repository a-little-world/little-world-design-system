import React from 'react';

import Text from './Text';
import CallWidget from '../Widget/CallWidget';
import AttachmentWidget from '../Widget/AttachmentWidget';
import textParser from '../../utils/parser';

export default {
  component: Text,
  title: 'Components/Text',
  argTypes: {
    text: { control: 'text' },
  },
};

export const Default = ({ text, ...rest }) => <Text {...rest}>{text}</Text>;

Default.args = {
  text: 'Little World for a better society',
};

// Comprehensive visual test for the textParser
export const ParserShowcase = () => {
  // Configure custom elements using actual Widget components
  const customElements = [
    {
      Component: CallWidget,
      tag: 'CallWidget',
      props: { isPreview: false },
    },
    {
      Component: AttachmentWidget,
      tag: 'AttachmentWidget',
      props: { isPreview: false },
    },
  ];

  const showcaseText = `Welcome to the Little World Text Parser showcase! This story demonstrates all the powerful features of our text parser.

🔗 AUTOMATIC LINK DETECTION:

Visit our website at https://little-world.com or check out little-world.com for more information.

📝 BASIC STYLING TAGS:

This text contains <highlight>highlighted content</highlight> and <bold>bold text</bold> for emphasis.

🔗 CUSTOM ANCHOR TAGS:

Click this <a {"href": "https://little-world.com", "target": "_blank"}>external link</a> or this <a {"href": "/internal-page"}>internal link</a>.

🔘 INTERACTIVE BUTTONS:

<button {"className": "custom-button"}>Click me!</button>
<button {"appearance": "secondary"}>Secondary Button</button>
<button {"data-cal-link": "www.calendly.com/example", "data-cal-config": "{'layout': 'stacked'}"}>Schedule Meeting</button>

🧩 CUSTOM WIDGET COMPONENTS (Real Components):

<CallWidget {"isMissed": false, "header": "Video Anruf", "description": "Incoming video call", "isPreview": false, "isOutgoing": false}>
  Call content
</CallWidget>

<CallWidget {"isMissed": true, "header": "Anruf Verpasst", "description": "Zurück Rufen", "isPreview": false, "isOutgoing": false}>
  Missed call with description
</CallWidget>

<AttachmentWidget {"attachmentTitle": "Photo", "caption": "Beautiful sunset", "imageSrc": "https://picsum.photos/200/150", "isPreview": false}>
  Attachment content
</AttachmentWidget>

🔄 NESTED CONTENT WITH CUSTOM ELEMENTS:

<CallWidget {"isMissed": false, "header": "Mixed Content Call", "isPreview": false}>
  This call widget contains <highlight>highlighted text</highlight> and <a {"href": "https://example.com"}>a link</a>!
</CallWidget>

🎨 MIXED CONTENT:

You can combine <highlight>highlighted text</highlight> with <a {"href": "https://example.com"}>clickable links</a> and <bold>bold formatting</bold> in the same paragraph.

⚠️ EDGE CASES THAT DON'T BREAK THE PARSER:

This text has incomplete tags like <incomplete and <missing> without closing tags.
It also handles special characters: <30min, <100% success rate, and other HTML-like content.

📧 REAL-WORLD EXAMPLE (German text that previously caused hanging):

Hallo Andreas, auch die anderen bekommen diese Email typischerweise innerhalb von <30min - in Ausnahmefällen auch mal in ein paar Stunden (Server-Verzögerungen).

Bei manchen landen diese Systemnachrichten im Spam-Ordner und wenn der Nutzer dann den Absender nicht als "kein Spam" bzw "zulassen" markiert, passiert das immer wieder.

🔄 NESTED AND COMPLEX SCENARIOS:

<highlight>This highlighted text contains a <a {"href": "/nested-link"}>nested link</a> inside it</highlight>.

Multiple links: <a {"href": "/first"}>First link</a> and <a {"href": "/second"}>Second link</a> in the same paragraph.

📊 PERFORMANCE TEST:

This paragraph contains many elements: <bold>bold</bold>, <highlight>highlight</highlight>, <a {"href": "/link1"}>link1</a>, <button>button1</button>, <a {"href": "/link2"}>link2</a>, <highlight>more highlighting</highlight>, and <bold>more bold text</bold>.

✅ ALL FEATURES WORKING:

- ✓ Automatic URL detection
- ✓ Custom anchor tags with JSON attributes  
- ✓ Interactive buttons with data attributes
- ✓ Text styling (bold, highlight)
- ✓ Custom Widget components (CallWidget, AttachmentWidget)
- ✓ Nested content support
- ✓ Graceful handling of malformed content
- ✓ No hanging on complex text
- ✓ Performance with multiple elements`;

  return (
    <div style={{ maxWidth: '800px', lineHeight: '1.6', padding: '20px' }}>
      {/* Main showcase with all features */}
      <div style={{ marginBottom: '40px' }}>
        <Text tag="h2" type="Body3" bold style={{ marginBottom: '20px' }}>
          🎯 Complete Parser Showcase
        </Text>

        <div
          style={{
            padding: '16px',
            backgroundColor: '#e3f2fd',
            borderRadius: '8px',
            border: '1px solid #2196f3',
            marginBottom: '20px',
          }}
        >
          <Text style={{ color: '#1565c0', fontSize: '14px' }}>
            💡 <strong>Visual Testing:</strong> This showcase demonstrates all
            parser features including custom widgets, styling tags, buttons, and
            links. Test the onlyLinks functionality and parser disabled modes
            below.
          </Text>
        </div>
        <Text>{textParser(showcaseText, { customElements })}</Text>
      </div>

      {/* onlyLinks demonstration */}
      <div
        style={{
          marginBottom: '40px',
          padding: '24px',
          backgroundColor: '#f5f5f5',
          borderRadius: '12px',
          border: '1px solid #e0e0e0',
        }}
      >
        <Text tag="h3" bold style={{ marginBottom: '16px', color: '#333' }}>
          🔗 Parser with onlyLinks Option
        </Text>
        <div style={{ marginTop: '24px' }}>
          <Text
            style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}
          >
            💡 <strong>Test:</strong> Notice that only the &lt;a&gt; tag renders
            as a clickable link, while &lt;button&gt; and &lt;highlight&gt; tags
            are displayed as plain text. This demonstrates the onlyLinks
            functionality.
          </Text>
          <Text disableParser>
            {textParser(
              `This text has <highlight>highlighted content</highlight>, <button>a button</button>, and <a {"href": "/test"}>a link</a>.`,
              { onlyLinks: true },
            )}
          </Text>
        </div>
      </div>

      {/* Parser disabled demonstration */}
      <div
        style={{
          marginBottom: '40px',
          padding: '24px',
          backgroundColor: '#e8f4f8',
          borderRadius: '12px',
          border: '1px solid #b3d9e6',
        }}
      >
        <Text tag="h3" bold style={{ marginBottom: '16px', color: '#0c5460' }}>
          🚫 Parser Completely Disabled
        </Text>
        <Text
          disableParser
          style={{
            backgroundColor: '#f8f9fa',
            padding: '16px',
            borderRadius: '8px',
            border: '1px solid #dee2e6',
            fontFamily: 'monospace',
            fontSize: '14px',
          }}
        >
          {`Raw text with no parsing: <highlight>not highlighted</highlight> 
          Links not converted: https://little-world.com
          Buttons not created: <button>Just text</button>`}
        </Text>
      </div>
    </div>
  );
};

ParserShowcase.parameters = {
  docs: {
    description: {
      story: `This story showcases all the features of the Little World Text Parser:

**Automatic Features:**
- Converts URLs to clickable links automatically
- Handles both HTTP/HTTPS and domain-only formats

**Custom Tags:**
- \`<a {"href": "url"}>\` - Creates clickable links with JSON attributes
- \`<button {"appearance": "secondary"}\` - Creates interactive buttons with styling
- \`<highlight>\` - Applies highlight styling
- \`<bold>\` - Applies bold formatting

**Custom Widget Components:**
- \`<CallWidget>\` - Renders call widgets with missed/incoming call states
- \`<AttachmentWidget>\` - Renders file/photo attachments with previews
- Full JSON attribute support and nested content handling

**Robust Parsing:**
- Gracefully handles malformed HTML-like content
- Won't hang on complex or problematic text
- Safely parses JSON attributes with fallback
- Ignores incomplete or invalid tags

**Performance:**
- Uses zero regex for maximum reliability
- Fast string-based parsing
- Handles large text efficiently

The parser is used automatically in all Text components unless \`disableParser={true}\` is set.`,
    },
  },
};
