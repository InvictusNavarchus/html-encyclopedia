
import { HTMLElement } from '@/types/htmlElement';
import { additionalHtmlElements } from './htmlElementsExtended';

export const htmlElements: HTMLElement[] = [
  // Text Content Elements
  {
    name: 'h1',
    description: 'Represents the highest level heading, typically the main title of a page or section.',
    category: 'text',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'style', description: 'Inline CSS styles', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<h1>Main Page Title</h1>',
    exampleOutput: '<h1>Main Page Title</h1>',
    useCases: [
      'Page main titles',
      'Article headlines',
      'Section headers',
      'Blog post titles'
    ],
    notes: 'Should only be used once per page for the main heading.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1'
  },
  {
    name: 'h2',
    description: 'Second level heading, used for major section headings.',
    category: 'text',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'style', description: 'Inline CSS styles', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<h2>Chapter Title</h2>',
    exampleOutput: '<h2>Chapter Title</h2>',
    useCases: [
      'Chapter headings',
      'Main section titles',
      'Category headers'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h2'
  },
  {
    name: 'h3',
    description: 'Third level heading, used for subsection headings.',
    category: 'text',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'style', description: 'Inline CSS styles', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<h3>Subsection Title</h3>',
    exampleOutput: '<h3>Subsection Title</h3>',
    useCases: [
      'Subsection headings',
      'Topic divisions',
      'Card titles'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h3'
  },
  {
    name: 'h4',
    description: 'Fourth level heading, used for minor subsection headings.',
    category: 'text',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'style', description: 'Inline CSS styles', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<h4>Minor Section</h4>',
    exampleOutput: '<h4>Minor Section</h4>',
    useCases: [
      'Minor section headings',
      'Sidebar titles',
      'Component headers'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h4'
  },
  {
    name: 'h5',
    description: 'Fifth level heading, used for minor subsection headings.',
    category: 'text',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'style', description: 'Inline CSS styles', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<h5>Small Heading</h5>',
    exampleOutput: '<h5>Small Heading</h5>',
    useCases: [
      'Small section titles',
      'Detail headings',
      'Fine-grained organization'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h5'
  },
  {
    name: 'h6',
    description: 'Sixth and lowest level heading.',
    category: 'text',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'style', description: 'Inline CSS styles', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<h6>Smallest Heading</h6>',
    exampleOutput: '<h6>Smallest Heading</h6>',
    useCases: [
      'Tiny section titles',
      'Fine details',
      'Deeply nested content'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h6'
  },
  {
    name: 'p',
    description: 'Represents a paragraph of text content.',
    category: 'text',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'style', description: 'Inline CSS styles', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<p>This is a paragraph of text content.</p>',
    exampleOutput: '<p>This is a paragraph of text content.</p>',
    useCases: [
      'Body text',
      'Article content',
      'Descriptions',
      'General text blocks'
    ],
    notes: 'The most fundamental text container element.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p'
  },
  {
    name: 'span',
    description: 'Generic inline container for text content with no semantic meaning.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'style', description: 'Inline CSS styles', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<p>This is <span class="highlight">highlighted text</span> in a paragraph.</p>',
    exampleOutput: '<p>This is <span style="background-color: yellow;">highlighted text</span> in a paragraph.</p>',
    useCases: [
      'Styling parts of text',
      'JavaScript targeting',
      'CSS hooks',
      'Inline formatting'
    ],
    notes: 'Should only be used when no other semantic element is appropriate.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span'
  },
  {
    name: 'div',
    description: 'Generic block-level container with no semantic meaning.',
    category: 'structure',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'style', description: 'Inline CSS styles', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<div class="container">\n  <p>Content inside a div</p>\n</div>',
    exampleOutput: '<div style="border: 1px solid #ccc; padding: 10px;"><p>Content inside a div</p></div>',
    useCases: [
      'Layout containers',
      'Styling wrappers',
      'JavaScript manipulation',
      'CSS grid/flexbox items'
    ],
    notes: 'Use semantic HTML elements when appropriate instead of div.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div'
  },
  {
    name: 'a',
    description: 'Creates hyperlinks to other pages, files, locations, or URLs.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'href', description: 'URL or fragment identifier that the link points to' },
      { name: 'target', description: 'Where to display the linked resource', values: ['_blank', '_self', '_parent', '_top'] },
      { name: 'rel', description: 'Relationship between current document and linked resource', values: ['noopener', 'noreferrer', 'nofollow', 'external'] },
      { name: 'download', description: 'Suggests the linked resource should be downloaded' },
      { name: 'type', description: 'MIME type of the linked resource' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<a href="https://example.com" target="_blank">Visit Example.com</a>',
    exampleOutput: '<a href="https://example.com" target="_blank">Visit Example.com</a>',
    useCases: [
      'Navigation links',
      'External website links',
      'Email links (mailto:)',
      'Phone links (tel:)',
      'File downloads'
    ],
    notes: 'Use rel="noopener noreferrer" with target="_blank" for security.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a'
  },
  {
    name: 'strong',
    description: 'Indicates text of strong importance, urgency, or seriousness.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'style', description: 'Inline CSS styles', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<p>This is <strong>very important</strong> information.</p>',
    exampleOutput: '<p>This is <strong>very important</strong> information.</p>',
    useCases: [
      'Important warnings',
      'Key points',
      'Critical information',
      'Emphasis for screen readers'
    ],
    notes: 'Has semantic meaning unlike <b>, which is purely presentational.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong'
  },
  {
    name: 'em',
    description: 'Indicates text that should be emphasized or stressed.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'style', description: 'Inline CSS styles', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<p>I <em>really</em> love this feature!</p>',
    exampleOutput: '<p>I <em>really</em> love this feature!</p>',
    useCases: [
      'Stressed emphasis',
      'Important context',
      'Vocal emphasis',
      'Subtle highlighting'
    ],
    notes: 'Has semantic meaning unlike <i>, which is purely presentational.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em'
  },
  {
    name: 'b',
    description: 'Stylistically offset text without conveying extra importance.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'style', description: 'Inline CSS styles', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<p>The <b>bold text</b> stands out visually.</p>',
    exampleOutput: '<p>The <b>bold text</b> stands out visually.</p>',
    useCases: [
      'Keywords in summaries',
      'Product names',
      'Visual emphasis without semantic importance',
      'Stylistic bold text'
    ],
    notes: 'Use <strong> instead when semantic importance is needed.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b'
  },
  {
    name: 'i',
    description: 'Text in an alternate voice or mood, or offset from normal prose.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'style', description: 'Inline CSS styles', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<p>The <i>Mona Lisa</i> is a famous painting.</p>',
    exampleOutput: '<p>The <i>Mona Lisa</i> is a famous painting.</p>',
    useCases: [
      'Foreign phrases',
      'Technical terms',
      'Ship names',
      'Thoughts or internal dialogue'
    ],
    notes: 'Use <em> instead when emphasis is needed.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i'
  },
  {
    name: 'u',
    description: 'Text with a non-textual annotation, such as labeling misspelled text.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'style', description: 'Inline CSS styles', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<p>This word is <u>mispelled</u>.</p>',
    exampleOutput: '<p>This word is <u>mispelled</u>.</p>',
    useCases: [
      'Marking misspelled words',
      'Indicating proper names in Chinese text',
      'Non-textual annotations'
    ],
    notes: 'Avoid using for general underlining; use CSS instead.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u'
  },
  {
    name: 'small',
    description: 'Represents side-comments and small print, like copyright and legal text.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'style', description: 'Inline CSS styles', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<p>Copyright notice: <small>© 2024 Company Name</small></p>',
    exampleOutput: '<p>Copyright notice: <small>© 2024 Company Name</small></p>',
    useCases: [
      'Copyright notices',
      'Legal disclaimers',
      'Fine print',
      'Attribution text'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small'
  },
  {
    name: 'mark',
    description: 'Text marked or highlighted for reference or notation purposes.',
    category: 'text',
    type: 'Inline',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'style', description: 'Inline CSS styles', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<p>Search results for <mark>HTML5</mark> elements.</p>',
    exampleOutput: '<p>Search results for <mark>HTML5</mark> elements.</p>',
    useCases: [
      'Search result highlighting',
      'Relevant text marking',
      'Referenced content',
      'Important passages'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark'
  },
  {
    name: 'del',
    description: 'Text that has been deleted from the document.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'cite', description: 'URL explaining the reason for the change' },
      { name: 'datetime', description: 'Date and time of the change' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<p>The price is <del>$50</del> $30.</p>',
    exampleOutput: '<p>The price is <del>$50</del> $30.</p>',
    useCases: [
      'Document revisions',
      'Price changes',
      'Edited content',
      'Version tracking'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del'
  },
  {
    name: 'ins',
    description: 'Text that has been inserted into the document.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'cite', description: 'URL explaining the reason for the change' },
      { name: 'datetime', description: 'Date and time of the change' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<p>The meeting is <ins>confirmed for 3 PM</ins>.</p>',
    exampleOutput: '<p>The meeting is <ins>confirmed for 3 PM</ins>.</p>',
    useCases: [
      'Document additions',
      'New information',
      'Content updates',
      'Collaborative editing'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins'
  },
  {
    name: 'sub',
    description: 'Subscript text, displayed below the baseline.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'style', description: 'Inline CSS styles', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<p>The chemical formula for water is H<sub>2</sub>O.</p>',
    exampleOutput: '<p>The chemical formula for water is H<sub>2</sub>O.</p>',
    useCases: [
      'Chemical formulas',
      'Mathematical notation',
      'Footnote references',
      'Scientific expressions'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub'
  },
  {
    name: 'sup',
    description: 'Superscript text, displayed above the baseline.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'style', description: 'Inline CSS styles', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<p>Einstein\'s equation: E = mc<sup>2</sup></p>',
    exampleOutput: '<p>Einstein\'s equation: E = mc<sup>2</sup></p>',
    useCases: [
      'Mathematical exponents',
      'Ordinal numbers',
      'Footnote markers',
      'Copyright symbols'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup'
  },
  {
    name: 'code',
    description: 'A fragment of computer code.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'style', description: 'Inline CSS styles', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<p>Use the <code>console.log()</code> function to debug.</p>',
    exampleOutput: '<p>Use the <code>console.log()</code> function to debug.</p>',
    useCases: [
      'Inline code snippets',
      'Function names',
      'Variable names',
      'Programming syntax'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code'
  },
  {
    name: 'pre',
    description: 'Preformatted text with preserved whitespace and line breaks.',
    category: 'text',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'style', description: 'Inline CSS styles', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<pre><code>function hello() {\n    console.log("Hello World!");\n}</code></pre>',
    exampleOutput: '<pre><code>function hello() {\n    console.log("Hello World!");\n}</code></pre>',
    useCases: [
      'Code blocks',
      'ASCII art',
      'Formatted text',
      'Terminal output'
    ],
    notes: 'Often used with <code> for syntax highlighting.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre'
  },
  {
    name: 'br',
    description: 'Produces a line break in text (carriage-return).',
    category: 'text',
    type: 'Void',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'style', description: 'Inline CSS styles', global: true },
    ],
    example: '<p>First line<br>Second line</p>',
    exampleOutput: '<p>First line<br>Second line</p>',
    useCases: [
      'Line breaks in poems',
      'Address formatting',
      'Breaking long text',
      'Forced line breaks'
    ],
    notes: 'Use sparingly. Consider using CSS or paragraph elements for better semantic structure.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br'
  },
  // Media Elements
  {
    name: 'img',
    description: 'Embeds an image into the document.',
    category: 'media',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'src', description: 'URL of the image', required: true },
      { name: 'alt', description: 'Alternative text description', required: true },
      { name: 'width', description: 'Width of the image in pixels' },
      { name: 'height', description: 'Height of the image in pixels' },
      { name: 'loading', description: 'How the image should be loaded', values: ['lazy', 'eager'] },
      { name: 'decoding', description: 'Image decoding hint', values: ['sync', 'async', 'auto'] },
      { name: 'sizes', description: 'Image sizes for responsive images' },
      { name: 'srcset', description: 'Set of source images for responsive images' },
      { name: 'crossorigin', description: 'CORS settings', values: ['anonymous', 'use-credentials'] },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'title', description: 'Advisory information about the element', global: true },
    ],
    example: '<img src="example.jpg" alt="A beautiful landscape" width="300" height="200">',
    exampleOutput: '<img src="https://via.placeholder.com/300x200" alt="A beautiful landscape" width="300" height="200">',
    useCases: [
      'Photos and illustrations',
      'Icons and graphics',
      'Charts and diagrams',
      'Product images'
    ],
    notes: 'Always include alt text for accessibility.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img'
  },
  {
    name: 'video',
    description: 'Embeds video content into the document.',
    category: 'media',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'src', description: 'URL of the video file' },
      { name: 'controls', description: 'Show video controls' },
      { name: 'autoplay', description: 'Automatically start playing' },
      { name: 'loop', description: 'Loop the video' },
      { name: 'muted', description: 'Mute the audio' },
      { name: 'poster', description: 'Image to show before video plays' },
      { name: 'width', description: 'Width of the video player' },
      { name: 'height', description: 'Height of the video player' },
      { name: 'preload', description: 'How much to preload', values: ['none', 'metadata', 'auto'] },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<video controls width="400">\n  <source src="movie.mp4" type="video/mp4">\n  Your browser does not support video.\n</video>',
    exampleOutput: '<video controls width="400" style="background: #f0f0f0;"><p>Your browser does not support video.</p></video>',
    useCases: [
      'Video content',
      'Tutorials and demos',
      'Entertainment media',
      'Educational content'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video'
  },
  {
    name: 'audio',
    description: 'Embeds audio content into the document.',
    category: 'media',
    type: 'Inline',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'src', description: 'URL of the audio file' },
      { name: 'controls', description: 'Show audio controls' },
      { name: 'autoplay', description: 'Automatically start playing' },
      { name: 'loop', description: 'Loop the audio' },
      { name: 'muted', description: 'Mute the audio' },
      { name: 'preload', description: 'How much to preload', values: ['none', 'metadata', 'auto'] },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<audio controls>\n  <source src="audio.mp3" type="audio/mpeg">\n  Your browser does not support audio.\n</audio>',
    exampleOutput: '<audio controls><p>Your browser does not support audio.</p></audio>',
    useCases: [
      'Music and sound effects',
      'Podcasts',
      'Voice recordings',
      'Audio books'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio'
  },
  {
    name: 'source',
    description: 'Specifies multiple media resources for media elements.',
    category: 'media',
    type: 'Void',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'src', description: 'URL of the media file' },
      { name: 'type', description: 'MIME type of the media file' },
      { name: 'media', description: 'Media query for responsive images' },
      { name: 'sizes', description: 'Image sizes for responsive images' },
      { name: 'srcset', description: 'Set of source images' },
    ],
    example: '<video controls>\n  <source src="movie.webm" type="video/webm">\n  <source src="movie.mp4" type="video/mp4">\n</video>',
    exampleOutput: '<p>Used inside video/audio elements - see video example above</p>',
    useCases: [
      'Multiple video formats',
      'Responsive images',
      'Browser compatibility',
      'Quality options'
    ],
    notes: 'Must be used inside video, audio, or picture elements.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source'
  },
  {
    name: 'picture',
    description: 'Container for multiple image sources for responsive images.',
    category: 'media',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<picture>\n  <source media="(min-width: 800px)" srcset="large.jpg">\n  <source media="(min-width: 400px)" srcset="medium.jpg">\n  <img src="small.jpg" alt="Responsive image">\n</picture>',
    exampleOutput: '<picture><img src="https://via.placeholder.com/300x200" alt="Responsive image"></picture>',
    useCases: [
      'Responsive images',
      'Art direction',
      'Format fallbacks',
      'Performance optimization'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture'
  },
  // Form Elements
  {
    name: 'form',
    description: 'Container for form controls and submission.',
    category: 'forms',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'action', description: 'URL where form data is sent' },
      { name: 'method', description: 'HTTP method for submission', values: ['get', 'post'] },
      { name: 'enctype', description: 'Encoding type for form data', values: ['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'] },
      { name: 'target', description: 'Where to display response', values: ['_blank', '_self', '_parent', '_top'] },
      { name: 'autocomplete', description: 'Enable form autocomplete', values: ['on', 'off'] },
      { name: 'novalidate', description: 'Skip form validation' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<form action="/submit" method="post">\n  <input type="text" name="username" required>\n  <button type="submit">Submit</button>\n</form>',
    exampleOutput: '<form style="border: 1px dashed #ccc; padding: 10px;"><input type="text" placeholder="Username" required><br><br><button type="submit">Submit</button></form>',
    useCases: [
      'User input collection',
      'Data submission',
      'Search interfaces',
      'Contact forms'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form'
  },
  {
    name: 'input',
    description: 'Interactive form control for user input.',
    category: 'forms',
    type: 'Void',
    support: 'Universal',
    attributes: [
      { name: 'type', description: 'Type of input control', values: ['text', 'password', 'email', 'number', 'tel', 'url', 'search', 'color', 'date', 'time', 'datetime-local', 'month', 'week', 'file', 'hidden', 'checkbox', 'radio', 'submit', 'reset', 'button', 'image', 'range'] },
      { name: 'name', description: 'Name of the form control' },
      { name: 'value', description: 'Initial value of the control' },
      { name: 'placeholder', description: 'Hint text shown when empty' },
      { name: 'required', description: 'Must be filled before submission' },
      { name: 'disabled', description: 'Disable the control' },
      { name: 'readonly', description: 'Make the control read-only' },
      { name: 'autocomplete', description: 'Autocomplete behavior' },
      { name: 'min', description: 'Minimum value (for numeric inputs)' },
      { name: 'max', description: 'Maximum value (for numeric inputs)' },
      { name: 'step', description: 'Step interval (for numeric inputs)' },
      { name: 'pattern', description: 'Regular expression for validation' },
      { name: 'maxlength', description: 'Maximum number of characters' },
      { name: 'minlength', description: 'Minimum number of characters' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<input type="email" name="email" placeholder="Enter your email" required>',
    exampleOutput: '<input type="email" placeholder="Enter your email" required style="padding: 8px; border: 1px solid #ccc;">',
    useCases: [
      'Text input',
      'Email addresses',
      'Passwords',
      'Numbers and dates',
      'File uploads',
      'Checkboxes and radio buttons'
    ],
    notes: 'HTML5 introduced many new input types for better UX and validation.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input'
  },
  ...additionalHtmlElements
];
