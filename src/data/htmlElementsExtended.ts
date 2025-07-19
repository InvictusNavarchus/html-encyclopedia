
import { HTMLElement } from '@/types/htmlElement';

// Additional comprehensive HTML elements to extend the main collection
export const additionalHtmlElements: HTMLElement[] = [
  // Document Structure Elements
  {
    name: 'html',
    description: 'The root element of an HTML document.',
    category: 'metadata',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'lang', description: 'Language of the document', global: true },
      { name: 'dir', description: 'Text direction', values: ['ltr', 'rtl', 'auto'], global: true },
      { name: 'manifest', description: 'Application cache manifest (deprecated)' },
      { name: 'xmlns', description: 'XML namespace' },
    ],
    example: '<html lang="en">\n  <head>...</head>\n  <body>...</body>\n</html>',
    exampleOutput: '<p>Root element - contains entire HTML document</p>',
    useCases: [
      'Document root',
      'Language declaration',
      'Document structure',
      'Accessibility'
    ],
    notes: 'Should be the outermost element of every HTML document.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html'
  },
  {
    name: 'head',
    description: 'Contains metadata about the HTML document.',
    category: 'metadata',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'profile', description: 'Metadata profile URLs (deprecated)' },
    ],
    example: '<head>\n  <title>Page Title</title>\n  <meta charset="UTF-8">\n</head>',
    exampleOutput: '<p>Contains document metadata - not visible to users</p>',
    useCases: [
      'Document metadata',
      'CSS and JavaScript links',
      'SEO information',
      'Character encoding'
    ],
    notes: 'Content is not displayed to users but is essential for browsers and search engines.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head'
  },
  {
    name: 'body',
    description: 'Contains the visible content of the HTML document.',
    category: 'structure',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'onload', description: 'Script to run when page loads' },
      { name: 'onunload', description: 'Script to run when page unloads' },
      { name: 'onbeforeunload', description: 'Script to run before page unloads' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<body>\n  <h1>Welcome</h1>\n  <p>Page content goes here.</p>\n</body>',
    exampleOutput: '<div style="border: 1px dashed #ccc; padding: 10px;"><h1>Welcome</h1><p>Page content goes here.</p></div>',
    useCases: [
      'Main document content',
      'Visible page elements',
      'User interface',
      'Content structure'
    ],
    notes: 'Contains all visible content that users interact with.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body'
  },
  {
    name: 'title',
    description: 'Defines the title of the document shown in browser tabs.',
    category: 'metadata',
    type: 'Block',
    support: 'Universal',
    attributes: [],
    example: '<title>My Website - Home Page</title>',
    exampleOutput: '<p>Displayed in browser tab: "My Website - Home Page"</p>',
    useCases: [
      'Browser tab titles',
      'Search engine results',
      'Bookmarks',
      'Social media sharing'
    ],
    notes: 'Essential for SEO and user experience. Should be unique and descriptive.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title'
  },
  {
    name: 'meta',
    description: 'Provides metadata about the HTML document.',
    category: 'metadata',
    type: 'Void',
    support: 'Universal',
    attributes: [
      { name: 'charset', description: 'Character encoding declaration' },
      { name: 'name', description: 'Metadata name', values: ['viewport', 'description', 'keywords', 'author', 'robots'] },
      { name: 'content', description: 'Metadata content', required: true },
      { name: 'http-equiv', description: 'HTTP header equivalent', values: ['refresh', 'content-type', 'content-security-policy'] },
      { name: 'property', description: 'Open Graph property' },
    ],
    example: '<meta name="description" content="A comprehensive HTML reference guide">',
    exampleOutput: '<p>Provides metadata for search engines and browsers</p>',
    useCases: [
      'SEO optimization',
      'Viewport configuration',
      'Character encoding',
      'Social media metadata'
    ],
    notes: 'Critical for SEO, mobile responsiveness, and social sharing.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta'
  },
  {
    name: 'link',
    description: 'Specifies relationships between the current document and external resources.',
    category: 'metadata',
    type: 'Void',
    support: 'Universal',
    attributes: [
      { name: 'href', description: 'URL of the linked resource', required: true },
      { name: 'rel', description: 'Relationship type', values: ['stylesheet', 'icon', 'preload', 'prefetch', 'canonical'], required: true },
      { name: 'type', description: 'MIME type of linked resource' },
      { name: 'media', description: 'Media query for conditional loading' },
      { name: 'sizes', description: 'Icon sizes' },
      { name: 'crossorigin', description: 'CORS settings', values: ['anonymous', 'use-credentials'] },
    ],
    example: '<link rel="stylesheet" href="styles.css">',
    exampleOutput: '<p>Links external CSS file to the document</p>',
    useCases: [
      'CSS stylesheets',
      'Favicons',
      'Preloading resources',
      'Canonical URLs'
    ],
    notes: 'Essential for linking CSS, icons, and other external resources.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link'
  },
  {
    name: 'base',
    description: 'Specifies the base URL for all relative URLs in the document.',
    category: 'metadata',
    type: 'Void',
    support: 'Universal',
    attributes: [
      { name: 'href', description: 'Base URL for relative links' },
      { name: 'target', description: 'Default target for links', values: ['_blank', '_self', '_parent', '_top'] },
    ],
    example: '<base href="https://example.com/" target="_blank">',
    exampleOutput: '<p>Sets base URL for all relative links in the document</p>',
    useCases: [
      'Setting base URLs',
      'Default link targets',
      'Relative path resolution',
      'Site-wide link behavior'
    ],
    notes: 'Can only have one base element per document. Affects all relative URLs.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base'
  },
  {
    name: 'style',
    description: 'Contains CSS styles for the document.',
    category: 'metadata',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'type', description: 'MIME type (usually text/css)' },
      { name: 'media', description: 'Media query for conditional styles' },
      { name: 'scoped', description: 'Scoped styles (deprecated)' },
    ],
    example: '<style>\n  body { font-family: Arial, sans-serif; }\n  .highlight { background: yellow; }\n</style>',
    exampleOutput: '<p>Contains CSS styles applied to the document</p>',
    useCases: [
      'Internal CSS styles',
      'Component-specific styles',
      'Media-specific styles',
      'Quick styling'
    ],
    notes: 'Better to use external CSS files for maintainability.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style'
  },
  {
    name: 'script',
    description: 'Contains or references executable code, typically JavaScript.',
    category: 'metadata',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'src', description: 'URL of external script file' },
      { name: 'type', description: 'MIME type of script', values: ['text/javascript', 'module', 'application/json'] },
      { name: 'async', description: 'Load script asynchronously' },
      { name: 'defer', description: 'Defer script execution' },
      { name: 'crossorigin', description: 'CORS settings', values: ['anonymous', 'use-credentials'] },
      { name: 'integrity', description: 'Subresource integrity hash' },
      { name: 'nomodule', description: 'Skip in module-supporting browsers' },
    ],
    example: '<script src="app.js" defer></script>',
    exampleOutput: '<p>Loads and executes JavaScript code</p>',
    useCases: [
      'JavaScript functionality',
      'External script libraries',
      'Inline scripts',
      'Module loading'
    ],
    notes: 'Use defer or async for better performance. Consider module type for modern JS.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script'
  },
  {
    name: 'noscript',
    description: 'Content shown when JavaScript is disabled or not supported.',
    category: 'metadata',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<noscript>\n  <p>This website requires JavaScript to function properly.</p>\n</noscript>',
    exampleOutput: '<p style="background: #ffe6e6; padding: 10px; border: 1px solid #ff9999;">This website requires JavaScript to function properly.</p>',
    useCases: [
      'Fallback content',
      'Accessibility',
      'Progressive enhancement',
      'Error messages'
    ],
    notes: 'Important for accessibility and graceful degradation.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript'
  },
  // Semantic HTML5 Elements
  {
    name: 'article',
    description: 'Represents a standalone piece of content that could be distributed independently.',
    category: 'semantic',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'role', description: 'ARIA role for accessibility', global: true },
    ],
    example: '<article>\n  <h2>Article Title</h2>\n  <p>Article content that stands alone...</p>\n</article>',
    exampleOutput: '<article style="border: 1px solid #ddd; padding: 15px; margin: 10px 0;"><h2>Article Title</h2><p>Article content that stands alone...</p></article>',
    useCases: [
      'Blog posts',
      'News articles',
      'Forum posts',
      'Product reviews',
      'Independent content blocks'
    ],
    notes: 'Should contain content that makes sense on its own, even when removed from the page context.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article'
  },
  {
    name: 'section',
    description: 'Represents a generic section of content, typically with a heading.',
    category: 'semantic',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'role', description: 'ARIA role for accessibility', global: true },
    ],
    example: '<section>\n  <h2>Section Title</h2>\n  <p>Related content grouped together...</p>\n</section>',
    exampleOutput: '<section style="border-left: 4px solid #007acc; padding-left: 15px; margin: 10px 0;"><h2>Section Title</h2><p>Related content grouped together...</p></section>',
    useCases: [
      'Document sections',
      'Chapter divisions',
      'Thematic groupings',
      'Content organization',
      'Page structure'
    ],
    notes: 'Use when content represents a distinct section. Should typically include a heading.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section'
  },
  {
    name: 'nav',
    description: 'Represents a section of navigation links.',
    category: 'semantic',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'role', description: 'ARIA role for accessibility', global: true },
      { name: 'aria-label', description: 'Accessible name for the navigation', global: true },
    ],
    example: '<nav aria-label="Main navigation">\n  <ul>\n    <li><a href="/">Home</a></li>\n    <li><a href="/about">About</a></li>\n  </ul>\n</nav>',
    exampleOutput: '<nav style="background: #f5f5f5; padding: 10px; border-radius: 4px;"><ul style="list-style: none; margin: 0; padding: 0;"><li style="display: inline; margin-right: 15px;"><a href="/">Home</a></li><li style="display: inline; margin-right: 15px;"><a href="/about">About</a></li></ul></nav>',
    useCases: [
      'Main site navigation',
      'Breadcrumb navigation',
      'Table of contents',
      'Pagination',
      'Menu systems'
    ],
    notes: 'Should only be used for major navigation blocks. Use aria-label for multiple nav elements.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav'
  },
  {
    name: 'header',
    description: 'Represents introductory content or navigational aids.',
    category: 'semantic',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'role', description: 'ARIA role for accessibility', global: true },
    ],
    example: '<header>\n  <h1>Site Title</h1>\n  <nav>...</nav>\n</header>',
    exampleOutput: '<header style="background: #333; color: white; padding: 20px; margin-bottom: 20px;"><h1 style="margin: 0; color: white;">Site Title</h1><p style="margin: 5px 0 0 0; color: #ccc;">Navigation would go here</p></header>',
    useCases: [
      'Page headers',
      'Article headers',
      'Section introductions',
      'Site branding',
      'Navigation containers'
    ],
    notes: 'Can be used multiple times per page. Cannot contain other header or footer elements.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header'
  },
  {
    name: 'footer',
    description: 'Represents footer content for its nearest sectioning element.',
    category: 'semantic',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'role', description: 'ARIA role for accessibility', global: true },
    ],
    example: '<footer>\n  <p>&copy; 2024 Company Name. All rights reserved.</p>\n</footer>',
    exampleOutput: '<footer style="background: #f8f8f8; padding: 15px; margin-top: 20px; border-top: 1px solid #ddd; text-align: center;"><p style="margin: 0; color: #666;">&copy; 2024 Company Name. All rights reserved.</p></footer>',
    useCases: [
      'Page footers',
      'Article footers',
      'Copyright information',
      'Contact details',
      'Related links'
    ],
    notes: 'Can be used multiple times per page. Cannot contain other header or footer elements.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer'
  },
  {
    name: 'aside',
    description: 'Represents content tangentially related to the main content.',
    category: 'semantic',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'role', description: 'ARIA role for accessibility', global: true },
    ],
    example: '<aside>\n  <h3>Related Articles</h3>\n  <ul>\n    <li><a href="#">Article 1</a></li>\n  </ul>\n</aside>',
    exampleOutput: '<aside style="background: #f9f9f9; padding: 15px; margin: 10px 0; border-left: 3px solid #007acc;"><h3 style="margin-top: 0;">Related Articles</h3><ul><li><a href="#">Article 1</a></li></ul></aside>',
    useCases: [
      'Sidebars',
      'Related content',
      'Advertisements',
      'Author bios',
      'Tangential information'
    ],
    notes: 'Content should be related but not essential to understanding the main content.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside'
  },
  {
    name: 'main',
    description: 'Represents the main content area of the document.',
    category: 'semantic',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'role', description: 'ARIA role for accessibility', global: true },
    ],
    example: '<main>\n  <h1>Page Title</h1>\n  <p>Main page content goes here...</p>\n</main>',
    exampleOutput: '<main style="padding: 20px; margin: 0 auto; max-width: 800px;"><h1>Page Title</h1><p>Main page content goes here...</p></main>',
    useCases: [
      'Primary content area',
      'Document main content',
      'Application main view',
      'Content focus',
      'Skip navigation target'
    ],
    notes: 'Should only be used once per page. Excludes headers, footers, navigation, and sidebars.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main'
  },
  {
    name: 'address',
    description: 'Provides contact information for the nearest article or body element.',
    category: 'semantic',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<address>\n  <p>Contact: <a href="mailto:info@example.com">info@example.com</a></p>\n  <p>Phone: (555) 123-4567</p>\n</address>',
    exampleOutput: '<address style="font-style: italic; background: #f0f8ff; padding: 10px; border-left: 3px solid #007acc;"><p style="margin: 5px 0;">Contact: <a href="mailto:info@example.com">info@example.com</a></p><p style="margin: 5px 0;">Phone: (555) 123-4567</p></address>',
    useCases: [
      'Contact information',
      'Author details',
      'Business addresses',
      'Email contacts',
      'Phone numbers'
    ],
    notes: 'Should not contain arbitrary addresses, only contact information for the content.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address'
  },
  {
    name: 'hgroup',
    description: 'Groups heading elements when they have multiple levels.',
    category: 'semantic',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<hgroup>\n  <h1>Main Title</h1>\n  <h2>Subtitle</h2>\n</hgroup>',
    exampleOutput: '<hgroup><h1 style="margin-bottom: 5px;">Main Title</h1><h2 style="margin-top: 0; color: #666; font-weight: normal;">Subtitle</h2></hgroup>',
    useCases: [
      'Title and subtitle combinations',
      'Heading hierarchies',
      'Multi-level headings',
      'Document titles',
      'Section headers'
    ],
    notes: 'Use when you have a main heading with subheadings that form a single logical heading.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup'
  },
  {
    name: 'search',
    description: 'Represents a part of the document that contains search functionality.',
    category: 'semantic',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'role', description: 'ARIA role for accessibility', global: true },
    ],
    example: '<search>\n  <form>\n    <input type="search" placeholder="Search...">\n    <button type="submit">Search</button>\n  </form>\n</search>',
    exampleOutput: '<search style="background: #f5f5f5; padding: 15px; border-radius: 4px;"><form style="display: flex; gap: 10px;"><input type="search" placeholder="Search..." style="flex: 1; padding: 8px;"><button type="submit" style="padding: 8px 15px; background: #007acc; color: white; border: none; border-radius: 4px;">Search</button></form></search>',
    useCases: [
      'Search forms',
      'Filter interfaces',
      'Query inputs',
      'Site search',
      'Content filtering'
    ],
    notes: 'New HTML element for semantic search functionality. Improves accessibility.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search'
  },
  // List Elements
  {
    name: 'ul',
    description: 'Unordered list container.',
    category: 'text',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
      { name: 'type', description: 'Bullet style (deprecated)', values: ['disc', 'square', 'circle'] },
    ],
    example: '<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ul>',
    exampleOutput: '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>',
    useCases: [
      'Navigation menus',
      'Feature lists',
      'Bullet point lists',
      'Unordered content'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul'
  },
  {
    name: 'ol',
    description: 'Ordered list container.',
    category: 'text',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'start', description: 'Starting number for the list' },
      { name: 'type', description: 'Numbering style', values: ['1', 'A', 'a', 'I', 'i'] },
      { name: 'reversed', description: 'Reverse the numbering' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<ol start="5">\n  <li>Fifth item</li>\n  <li>Sixth item</li>\n  <li>Seventh item</li>\n</ol>',
    exampleOutput: '<ol start="5"><li>Fifth item</li><li>Sixth item</li><li>Seventh item</li></ol>',
    useCases: [
      'Step-by-step instructions',
      'Rankings',
      'Numbered lists',
      'Sequential content'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol'
  },
  {
    name: 'li',
    description: 'List item within ordered or unordered lists.',
    category: 'text',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'value', description: 'Ordinal value (for ol only)' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<li>List item content</li>',
    exampleOutput: '<p>Used inside ul or ol elements - see list examples above</p>',
    useCases: [
      'List items',
      'Menu options',
      'Steps in procedures',
      'Collection items'
    ],
    notes: 'Must be contained within ul, ol, or menu elements.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li'
  },
  {
    name: 'dl',
    description: 'Description list containing terms and descriptions.',
    category: 'text',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n  <dt>CSS</dt>\n  <dd>Cascading Style Sheets</dd>\n</dl>',
    exampleOutput: '<dl><dt><strong>HTML</strong></dt><dd style="margin-left: 20px;">HyperText Markup Language</dd><dt><strong>CSS</strong></dt><dd style="margin-left: 20px;">Cascading Style Sheets</dd></dl>',
    useCases: [
      'Glossaries',
      'Definitions',
      'Key-value pairs',
      'FAQ sections'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl'
  },
  {
    name: 'dt',
    description: 'Term in a description list.',
    category: 'text',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<dt>Term to define</dt>',
    exampleOutput: '<p>Used inside dl elements - see dl example above</p>',
    useCases: [
      'Dictionary terms',
      'Property names',
      'Question labels',
      'Category titles'
    ],
    notes: 'Must be used within dl elements, typically followed by dd.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt'
  },
  {
    name: 'dd',
    description: 'Description for a term in a description list.',
    category: 'text',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<dd>Definition or description content</dd>',
    exampleOutput: '<p>Used inside dl elements - see dl example above</p>',
    useCases: [
      'Definitions',
      'Property values',
      'Answer content',
      'Descriptions'
    ],
    notes: 'Must be used within dl elements, typically following dt.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd'
  },
  // Table Elements
  {
    name: 'table',
    description: 'Container for tabular data.',
    category: 'structure',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'border', description: 'Table border width (deprecated)' },
      { name: 'cellpadding', description: 'Cell padding (deprecated)' },
      { name: 'cellspacing', description: 'Cell spacing (deprecated)' },
      { name: 'summary', description: 'Table summary (deprecated)' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Age</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>25</td>\n    </tr>\n  </tbody>\n</table>',
    exampleOutput: '<table style="border-collapse: collapse; border: 1px solid #ccc;"><thead><tr><th style="border: 1px solid #ccc; padding: 8px; background: #f5f5f5;">Name</th><th style="border: 1px solid #ccc; padding: 8px; background: #f5f5f5;">Age</th></tr></thead><tbody><tr><td style="border: 1px solid #ccc; padding: 8px;">John</td><td style="border: 1px solid #ccc; padding: 8px;">25</td></tr></tbody></table>',
    useCases: [
      'Data tables',
      'Comparison charts',
      'Structured data',
      'Financial reports'
    ],
    notes: 'Use CSS for styling instead of deprecated attributes.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table'
  },
  {
    name: 'thead',
    description: 'Groups header content in a table.',
    category: 'structure',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'align', description: 'Horizontal alignment (deprecated)', values: ['left', 'center', 'right'] },
      { name: 'valign', description: 'Vertical alignment (deprecated)', values: ['top', 'middle', 'bottom'] },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<thead>\n  <tr>\n    <th>Column 1</th>\n    <th>Column 2</th>\n  </tr>\n</thead>',
    exampleOutput: '<p>Used inside table elements - see table example above</p>',
    useCases: [
      'Table headers',
      'Column titles',
      'Table organization',
      'Accessibility structure'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead'
  },
  {
    name: 'tbody',
    description: 'Groups body content in a table.',
    category: 'structure',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'align', description: 'Horizontal alignment (deprecated)', values: ['left', 'center', 'right'] },
      { name: 'valign', description: 'Vertical alignment (deprecated)', values: ['top', 'middle', 'bottom'] },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<tbody>\n  <tr>\n    <td>Data 1</td>\n    <td>Data 2</td>\n  </tr>\n</tbody>',
    exampleOutput: '<p>Used inside table elements - see table example above</p>',
    useCases: [
      'Table data rows',
      'Main table content',
      'Data organization',
      'Table structure'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody'
  },
  {
    name: 'tfoot',
    description: 'Groups footer content in a table.',
    category: 'structure',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'align', description: 'Horizontal alignment (deprecated)', values: ['left', 'center', 'right'] },
      { name: 'valign', description: 'Vertical alignment (deprecated)', values: ['top', 'middle', 'bottom'] },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<tfoot>\n  <tr>\n    <td>Total</td>\n    <td>$100</td>\n  </tr>\n</tfoot>',
    exampleOutput: '<tfoot style="background: #f0f0f0;"><tr><td style="border: 1px solid #ccc; padding: 8px;">Total</td><td style="border: 1px solid #ccc; padding: 8px;">$100</td></tr></tfoot>',
    useCases: [
      'Table summaries',
      'Totals and calculations',
      'Table conclusions',
      'Footer information'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot'
  },
  {
    name: 'tr',
    description: 'Table row containing cells.',
    category: 'structure',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'align', description: 'Horizontal alignment (deprecated)', values: ['left', 'center', 'right'] },
      { name: 'valign', description: 'Vertical alignment (deprecated)', values: ['top', 'middle', 'bottom'] },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<tr>\n  <td>Cell 1</td>\n  <td>Cell 2</td>\n</tr>',
    exampleOutput: '<p>Used inside table elements - see table example above</p>',
    useCases: [
      'Table rows',
      'Data organization',
      'Row grouping',
      'Table structure'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr'
  },
  {
    name: 'td',
    description: 'Standard table cell containing data.',
    category: 'structure',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'colspan', description: 'Number of columns to span' },
      { name: 'rowspan', description: 'Number of rows to span' },
      { name: 'headers', description: 'IDs of header cells' },
      { name: 'align', description: 'Horizontal alignment (deprecated)', values: ['left', 'center', 'right'] },
      { name: 'valign', description: 'Vertical alignment (deprecated)', values: ['top', 'middle', 'bottom'] },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<td colspan="2">Spanning two columns</td>',
    exampleOutput: '<p>Used inside table row elements - see table example above</p>',
    useCases: [
      'Table data',
      'Cell content',
      'Data presentation',
      'Table information'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td'
  },
  {
    name: 'th',
    description: 'Table header cell.',
    category: 'structure',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'colspan', description: 'Number of columns to span' },
      { name: 'rowspan', description: 'Number of rows to span' },
      { name: 'scope', description: 'Cells that header applies to', values: ['row', 'col', 'rowgroup', 'colgroup'] },
      { name: 'abbr', description: 'Abbreviated version of header' },
      { name: 'align', description: 'Horizontal alignment (deprecated)', values: ['left', 'center', 'right'] },
      { name: 'valign', description: 'Vertical alignment (deprecated)', values: ['top', 'middle', 'bottom'] },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<th scope="col">Column Header</th>',
    exampleOutput: '<p>Used inside table row elements - see table example above</p>',
    useCases: [
      'Column headers',
      'Row headers',
      'Table titles',
      'Data categorization'
    ],
    notes: 'Use scope attribute for accessibility.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th'
  },
  {
    name: 'caption',
    description: 'Title or explanation for a table.',
    category: 'structure',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'align', description: 'Caption alignment (deprecated)', values: ['top', 'bottom', 'left', 'right'] },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<table>\n  <caption>Monthly Sales Report</caption>\n  <tr><th>Month</th><th>Sales</th></tr>\n</table>',
    exampleOutput: '<table style="border: 1px solid #ccc;"><caption style="font-weight: bold; margin-bottom: 10px;">Monthly Sales Report</caption><tr><th style="border: 1px solid #ccc; padding: 8px;">Month</th><th style="border: 1px solid #ccc; padding: 8px;">Sales</th></tr></table>',
    useCases: [
      'Table titles',
      'Table descriptions',
      'Data context',
      'Accessibility labels'
    ],
    notes: 'Must be the first child of a table element.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption'
  },
  // Additional Form Elements
  {
    name: 'textarea',
    description: 'Multi-line text input control.',
    category: 'forms',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'name', description: 'Name of the form control' },
      { name: 'rows', description: 'Number of visible text lines' },
      { name: 'cols', description: 'Number of visible character columns' },
      { name: 'placeholder', description: 'Hint text shown when empty' },
      { name: 'required', description: 'Must be filled before submission' },
      { name: 'disabled', description: 'Disable the control' },
      { name: 'readonly', description: 'Make the control read-only' },
      { name: 'maxlength', description: 'Maximum number of characters' },
      { name: 'minlength', description: 'Minimum number of characters' },
      { name: 'wrap', description: 'Text wrapping behavior', values: ['soft', 'hard'] },
      { name: 'autocomplete', description: 'Autocomplete behavior' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<textarea name="message" rows="4" cols="50" placeholder="Enter your message..."></textarea>',
    exampleOutput: '<textarea rows="4" cols="50" placeholder="Enter your message..." style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-family: inherit;"></textarea>',
    useCases: [
      'Multi-line text input',
      'Comments and feedback',
      'Message composition',
      'Code input',
      'Long-form content'
    ],
    notes: 'Use for multi-line text input. Content goes between opening and closing tags.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea'
  },
  {
    name: 'select',
    description: 'Dropdown selection control.',
    category: 'forms',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'name', description: 'Name of the form control' },
      { name: 'multiple', description: 'Allow multiple selections' },
      { name: 'size', description: 'Number of visible options' },
      { name: 'required', description: 'Must have a selection before submission' },
      { name: 'disabled', description: 'Disable the control' },
      { name: 'autocomplete', description: 'Autocomplete behavior' },
      { name: 'form', description: 'Associated form element ID' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<select name="country">\n  <option value="us">United States</option>\n  <option value="ca">Canada</option>\n  <option value="uk">United Kingdom</option>\n</select>',
    exampleOutput: '<select style="padding: 8px; border: 1px solid #ccc; border-radius: 4px;"><option value="us">United States</option><option value="ca">Canada</option><option value="uk">United Kingdom</option></select>',
    useCases: [
      'Dropdown menus',
      'Country selection',
      'Category choices',
      'Option lists',
      'Single/multiple selection'
    ],
    notes: 'Contains option elements. Use optgroup for grouping options.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select'
  },
  {
    name: 'option',
    description: 'Option item within a select element.',
    category: 'forms',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'value', description: 'Value sent when form is submitted' },
      { name: 'selected', description: 'Pre-selected option' },
      { name: 'disabled', description: 'Disable this option' },
      { name: 'label', description: 'Label for the option' },
    ],
    example: '<option value="red" selected>Red</option>',
    exampleOutput: '<p>Used inside select elements - see select example above</p>',
    useCases: [
      'Dropdown choices',
      'List items',
      'Selection values',
      'Menu options'
    ],
    notes: 'Must be contained within select, optgroup, or datalist elements.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option'
  },
  {
    name: 'optgroup',
    description: 'Groups related options within a select element.',
    category: 'forms',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'label', description: 'Label for the option group', required: true },
      { name: 'disabled', description: 'Disable all options in the group' },
    ],
    example: '<select>\n  <optgroup label="North America">\n    <option value="us">United States</option>\n    <option value="ca">Canada</option>\n  </optgroup>\n</select>',
    exampleOutput: '<select style="padding: 8px; border: 1px solid #ccc;"><optgroup label="North America"><option value="us">United States</option><option value="ca">Canada</option></optgroup></select>',
    useCases: [
      'Grouped selections',
      'Categorized options',
      'Organized dropdowns',
      'Hierarchical choices'
    ],
    notes: 'Used to group related options in select elements for better organization.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup'
  },
  {
    name: 'datalist',
    description: 'Provides a list of predefined options for input elements.',
    category: 'forms',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
    ],
    example: '<input list="browsers" name="browser">\n<datalist id="browsers">\n  <option value="Chrome">\n  <option value="Firefox">\n  <option value="Safari">\n</datalist>',
    exampleOutput: '<input list="browsers" placeholder="Type or select..." style="padding: 8px; border: 1px solid #ccc;"><datalist id="browsers"><option value="Chrome"><option value="Firefox"><option value="Safari"></datalist>',
    useCases: [
      'Autocomplete suggestions',
      'Predefined options',
      'Search suggestions',
      'Input assistance',
      'Combo boxes'
    ],
    notes: 'Linked to input elements via the list attribute. Provides autocomplete functionality.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist'
  },
  {
    name: 'fieldset',
    description: 'Groups related form controls and labels.',
    category: 'forms',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'disabled', description: 'Disable all controls in the fieldset' },
      { name: 'form', description: 'Associated form element ID' },
      { name: 'name', description: 'Name of the fieldset' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<fieldset>\n  <legend>Personal Information</legend>\n  <label>Name: <input type="text" name="name"></label>\n  <label>Email: <input type="email" name="email"></label>\n</fieldset>',
    exampleOutput: '<fieldset style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;"><legend style="padding: 0 10px; font-weight: bold;">Personal Information</legend><div style="margin: 10px 0;"><label style="display: block; margin: 5px 0;">Name: <input type="text" style="margin-left: 10px; padding: 4px;"></label><label style="display: block; margin: 5px 0;">Email: <input type="email" style="margin-left: 10px; padding: 4px;"></label></div></fieldset>',
    useCases: [
      'Form sections',
      'Related controls grouping',
      'Accessibility enhancement',
      'Visual organization',
      'Logical form structure'
    ],
    notes: 'Improves accessibility by grouping related form controls. Use with legend element.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset'
  },
  {
    name: 'legend',
    description: 'Caption for a fieldset element.',
    category: 'forms',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<legend>Contact Information</legend>',
    exampleOutput: '<p>Used inside fieldset elements - see fieldset example above</p>',
    useCases: [
      'Fieldset captions',
      'Form section titles',
      'Group descriptions',
      'Accessibility labels'
    ],
    notes: 'Must be the first child of a fieldset element. Provides accessible name for the group.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend'
  },
  {
    name: 'label',
    description: 'Caption for a form control.',
    category: 'forms',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'for', description: 'ID of the associated form control' },
      { name: 'form', description: 'Associated form element ID' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<label for="email">Email Address:</label>\n<input type="email" id="email" name="email">',
    exampleOutput: '<label for="email" style="display: block; margin-bottom: 5px; font-weight: bold;">Email Address:</label><input type="email" id="email" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px;">',
    useCases: [
      'Form control labels',
      'Accessibility enhancement',
      'Click targets',
      'Input descriptions',
      'User guidance'
    ],
    notes: 'Essential for accessibility. Associates label text with form controls.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label'
  },
  {
    name: 'button',
    description: 'Clickable button element.',
    category: 'forms',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'type', description: 'Button behavior', values: ['submit', 'reset', 'button'] },
      { name: 'name', description: 'Name of the button' },
      { name: 'value', description: 'Value sent when form is submitted' },
      { name: 'disabled', description: 'Disable the button' },
      { name: 'form', description: 'Associated form element ID' },
      { name: 'formaction', description: 'Override form action URL' },
      { name: 'formmethod', description: 'Override form method', values: ['get', 'post'] },
      { name: 'formtarget', description: 'Override form target', values: ['_blank', '_self', '_parent', '_top'] },
      { name: 'formnovalidate', description: 'Skip form validation' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<button type="submit">Submit Form</button>',
    exampleOutput: '<button type="submit" style="padding: 10px 20px; background: #007acc; color: white; border: none; border-radius: 4px; cursor: pointer;">Submit Form</button>',
    useCases: [
      'Form submission',
      'Interactive actions',
      'Navigation triggers',
      'Modal controls',
      'Custom functionality'
    ],
    notes: 'More flexible than input type="button". Can contain rich content like images.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button'
  },
  {
    name: 'output',
    description: 'Result of a calculation or user action.',
    category: 'forms',
    type: 'Inline',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'for', description: 'IDs of elements that contributed to the calculation' },
      { name: 'form', description: 'Associated form element ID' },
      { name: 'name', description: 'Name of the output element' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">\n  <input type="range" id="a" value="50"> +\n  <input type="number" id="b" value="25"> =\n  <output name="result" for="a b">75</output>\n</form>',
    exampleOutput: '<form style="padding: 15px; border: 1px solid #ddd; border-radius: 4px;"><input type="range" value="50" style="margin: 0 10px;"> + <input type="number" value="25" style="width: 60px; margin: 0 10px; padding: 4px;"> = <output style="font-weight: bold; color: #007acc;">75</output></form>',
    useCases: [
      'Calculation results',
      'Form computations',
      'Dynamic values',
      'User action outcomes',
      'Live calculations'
    ],
    notes: 'Represents the result of a calculation. Can be updated dynamically with JavaScript.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output'
  },
  // HTML5 New Elements
  {
    name: 'time',
    description: 'Represents a specific period in time.',
    category: 'text',
    type: 'Inline',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'datetime', description: 'Machine-readable date/time' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<p>The event is on <time datetime="2024-12-25">Christmas Day</time>.</p>',
    exampleOutput: '<p>The event is on <time datetime="2024-12-25">Christmas Day</time>.</p>',
    useCases: [
      'Publication dates',
      'Event times',
      'Timestamps',
      'Schedules'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time'
  },
  {
    name: 'progress',
    description: 'Shows the completion progress of a task.',
    category: 'interactive',
    type: 'Inline',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'value', description: 'Current progress value' },
      { name: 'max', description: 'Maximum value' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<progress value="75" max="100">75%</progress>',
    exampleOutput: '<progress value="75" max="100">75%</progress>',
    useCases: [
      'Loading indicators',
      'Task completion',
      'Download progress',
      'Form completion'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress'
  },
  {
    name: 'meter',
    description: 'Represents a scalar measurement within a known range.',
    category: 'interactive',
    type: 'Inline',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'value', description: 'Current numeric value', required: true },
      { name: 'min', description: 'Lower bound of range' },
      { name: 'max', description: 'Upper bound of range' },
      { name: 'low', description: 'Upper bound of low range' },
      { name: 'high', description: 'Lower bound of high range' },
      { name: 'optimum', description: 'Optimal value' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<meter value="6" min="0" max="10">6 out of 10</meter>',
    exampleOutput: '<meter value="6" min="0" max="10">6 out of 10</meter>',
    useCases: [
      'Disk usage',
      'Relevance scores',
      'Battery levels',
      'Ratings'
    ],
    notes: 'Not suitable for progress indicators - use <progress> instead.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter'
  },
  // Additional Text Semantic Elements
  {
    name: 'abbr',
    description: 'Represents an abbreviation or acronym.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'title', description: 'Full expansion of the abbreviation' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<p>The <abbr title="World Wide Web">WWW</abbr> was invented by Tim Berners-Lee.</p>',
    exampleOutput: '<p>The <abbr title="World Wide Web" style="text-decoration: underline dotted; cursor: help;">WWW</abbr> was invented by Tim Berners-Lee.</p>',
    useCases: [
      'Abbreviations',
      'Acronyms',
      'Technical terms',
      'Accessibility enhancement',
      'Tooltip information'
    ],
    notes: 'Use title attribute to provide the full expansion. Improves accessibility.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr'
  },
  {
    name: 'bdi',
    description: 'Isolates text that might be formatted in a different direction.',
    category: 'text',
    type: 'Inline',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'dir', description: 'Text direction', values: ['ltr', 'rtl', 'auto'], global: true },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<p>User <bdi>إيان</bdi> scored 90 points.</p>',
    exampleOutput: '<p>User <bdi style="unicode-bidi: isolate;">إيان</bdi> scored 90 points.</p>',
    useCases: [
      'User-generated content',
      'Multilingual text',
      'Bidirectional text isolation',
      'International applications',
      'Mixed-direction content'
    ],
    notes: 'Useful when embedding user-generated content with unknown text direction.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi'
  },
  {
    name: 'bdo',
    description: 'Overrides the current text direction.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'dir', description: 'Text direction', values: ['ltr', 'rtl'], required: true },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<p>This text is <bdo dir="rtl">reversed</bdo> in direction.</p>',
    exampleOutput: '<p>This text is <bdo dir="rtl" style="unicode-bidi: bidi-override;">reversed</bdo> in direction.</p>',
    useCases: [
      'Text direction override',
      'Special formatting',
      'Bidirectional text control',
      'Language-specific display',
      'Typography effects'
    ],
    notes: 'Forces text direction regardless of character properties. Use sparingly.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo'
  },
  {
    name: 'cite',
    description: 'References the title of a creative work.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<p>My favorite book is <cite>To Kill a Mockingbird</cite> by Harper Lee.</p>',
    exampleOutput: '<p>My favorite book is <cite style="font-style: italic;">To Kill a Mockingbird</cite> by Harper Lee.</p>',
    useCases: [
      'Book titles',
      'Movie titles',
      'Article references',
      'Creative work citations',
      'Academic references'
    ],
    notes: 'Use for titles of works, not for author names or general citations.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite'
  },
  {
    name: 'data',
    description: 'Links content with a machine-readable translation.',
    category: 'text',
    type: 'Inline',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'value', description: 'Machine-readable value', required: true },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<p>Product: <data value="UPC:042100005264">Coca-Cola</data></p>',
    exampleOutput: '<p>Product: <data value="UPC:042100005264">Coca-Cola</data></p>',
    useCases: [
      'Product codes',
      'Machine-readable data',
      'Structured content',
      'Data attributes',
      'Semantic markup'
    ],
    notes: 'For time-related data, use the time element instead.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data'
  },
  {
    name: 'dfn',
    description: 'Represents the defining instance of a term.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'title', description: 'Definition of the term' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<p>A <dfn>widget</dfn> is a small gadget or mechanical device.</p>',
    exampleOutput: '<p>A <dfn style="font-style: italic; font-weight: bold;">widget</dfn> is a small gadget or mechanical device.</p>',
    useCases: [
      'Term definitions',
      'Glossary entries',
      'Technical definitions',
      'First-time term usage',
      'Concept introduction'
    ],
    notes: 'Use for the defining instance of a term, typically the first occurrence.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn'
  },
  {
    name: 'kbd',
    description: 'Represents user input from keyboard, voice, or other input device.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>',
    exampleOutput: '<p>Press <kbd style="background: #f0f0f0; padding: 2px 4px; border: 1px solid #ccc; border-radius: 3px; font-family: monospace;">Ctrl</kbd> + <kbd style="background: #f0f0f0; padding: 2px 4px; border: 1px solid #ccc; border-radius: 3px; font-family: monospace;">C</kbd> to copy.</p>',
    useCases: [
      'Keyboard shortcuts',
      'Key combinations',
      'User input examples',
      'Command instructions',
      'Interface guidance'
    ],
    notes: 'Represents any form of user input, not just keyboard input.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd'
  },
  {
    name: 'q',
    description: 'Represents a short inline quotation.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'cite', description: 'URL of the source of the quotation' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<p>As Shakespeare wrote, <q>To be or not to be, that is the question.</q></p>',
    exampleOutput: '<p>As Shakespeare wrote, <q style="quotes: \'"\' \'"\' \'"\' \'"\';">"To be or not to be, that is the question."</q></p>',
    useCases: [
      'Short quotations',
      'Inline quotes',
      'Referenced text',
      'Dialogue',
      'Cited content'
    ],
    notes: 'For longer quotations, use blockquote. Browsers typically add quotation marks.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q'
  },
  {
    name: 'ruby',
    description: 'Represents small annotations for East Asian typography.',
    category: 'text',
    type: 'Inline',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<ruby>漢<rt>kan</rt>字<rt>ji</rt></ruby>',
    exampleOutput: '<ruby style="ruby-align: center;">漢<rt style="font-size: 0.7em;">kan</rt>字<rt style="font-size: 0.7em;">ji</rt></ruby>',
    useCases: [
      'Pronunciation guides',
      'East Asian typography',
      'Phonetic annotations',
      'Language learning',
      'Character readings'
    ],
    notes: 'Used with rt and rp elements for complete ruby annotation.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby'
  },
  {
    name: 'rt',
    description: 'Ruby text component for pronunciation or translation.',
    category: 'text',
    type: 'Inline',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<ruby>東京<rt>とうきょう</rt></ruby>',
    exampleOutput: '<p>Used inside ruby elements - see ruby example above</p>',
    useCases: [
      'Pronunciation text',
      'Translation annotations',
      'Phonetic guides',
      'Reading assistance',
      'Language annotations'
    ],
    notes: 'Must be used within ruby elements. Provides the annotation text.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt'
  },
  {
    name: 'rp',
    description: 'Fallback parentheses for browsers that don\'t support ruby.',
    category: 'text',
    type: 'Inline',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<ruby>漢<rp>(</rp><rt>kan</rt><rp>)</rp>字<rp>(</rp><rt>ji</rt><rp>)</rp></ruby>',
    exampleOutput: '<p>Used inside ruby elements for fallback - see ruby example above</p>',
    useCases: [
      'Ruby fallback',
      'Browser compatibility',
      'Graceful degradation',
      'Accessibility',
      'Legacy support'
    ],
    notes: 'Provides fallback parentheses for browsers without ruby support.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp'
  },
  {
    name: 's',
    description: 'Represents content that is no longer accurate or relevant.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<p>Regular price: <s>$100</s> Sale price: $75</p>',
    exampleOutput: '<p>Regular price: <s style="text-decoration: line-through;">$100</s> Sale price: $75</p>',
    useCases: [
      'Outdated information',
      'Price changes',
      'Incorrect content',
      'Superseded data',
      'Historical accuracy'
    ],
    notes: 'Use del for document edits. Use s for content that\'s no longer accurate.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s'
  },
  {
    name: 'samp',
    description: 'Represents sample output from a computer program.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<p>The program output was: <samp>Hello, World!</samp></p>',
    exampleOutput: '<p>The program output was: <samp style="font-family: monospace; background: #f5f5f5; padding: 2px 4px;">Hello, World!</samp></p>',
    useCases: [
      'Program output',
      'Command results',
      'System messages',
      'Console output',
      'Error messages'
    ],
    notes: 'Represents output, not input. Use kbd for input and code for source code.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp'
  },
  {
    name: 'var',
    description: 'Represents a variable in mathematical expressions or programming.',
    category: 'text',
    type: 'Inline',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<p>The equation is <var>y</var> = <var>mx</var> + <var>b</var>.</p>',
    exampleOutput: '<p>The equation is <var style="font-style: italic; font-family: serif;">y</var> = <var style="font-style: italic; font-family: serif;">mx</var> + <var style="font-style: italic; font-family: serif;">b</var>.</p>',
    useCases: [
      'Mathematical variables',
      'Programming variables',
      'Placeholder values',
      'Formula components',
      'Abstract concepts'
    ],
    notes: 'Represents variables, not literal text. Typically rendered in italics.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var'
  },
  {
    name: 'wbr',
    description: 'Represents a word break opportunity.',
    category: 'text',
    type: 'Void',
    support: 'Modern',
    isNew: true,
    attributes: [],
    example: '<p>This is a very<wbr>long<wbr>word<wbr>that<wbr>might<wbr>need<wbr>breaking.</p>',
    exampleOutput: '<p>This is a very<wbr>long<wbr>word<wbr>that<wbr>might<wbr>need<wbr>breaking.</p>',
    useCases: [
      'Long words',
      'URL breaking',
      'Responsive text',
      'Line break hints',
      'Typography control'
    ],
    notes: 'Suggests where a line break could occur if needed. Invisible unless used.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr'
  },
  // Additional Block Elements
  {
    name: 'blockquote',
    description: 'Represents a section quoted from another source.',
    category: 'text',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'cite', description: 'URL of the source of the quotation' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<blockquote cite="https://example.com">\n  <p>The only way to do great work is to love what you do.</p>\n  <footer>— Steve Jobs</footer>\n</blockquote>',
    exampleOutput: '<blockquote style="margin: 20px 0; padding: 15px 20px; border-left: 4px solid #007acc; background: #f9f9f9; font-style: italic;"><p style="margin: 0 0 10px 0;">The only way to do great work is to love what you do.</p><footer style="font-style: normal; color: #666;">— Steve Jobs</footer></blockquote>',
    useCases: [
      'Long quotations',
      'Testimonials',
      'Referenced content',
      'Citations',
      'Excerpts'
    ],
    notes: 'For short quotes, use q element. Include cite attribute for source URL.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote'
  },
  {
    name: 'hr',
    description: 'Represents a thematic break between content.',
    category: 'text',
    type: 'Void',
    support: 'Universal',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<p>First section content.</p>\n<hr>\n<p>Second section content.</p>',
    exampleOutput: '<p>First section content.</p><hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;"><p>Second section content.</p>',
    useCases: [
      'Section breaks',
      'Topic changes',
      'Content separation',
      'Visual dividers',
      'Thematic transitions'
    ],
    notes: 'Represents a thematic break, not just a visual line. Use CSS for styling.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr'
  },
  {
    name: 'figure',
    description: 'Represents self-contained content, potentially with an optional caption.',
    category: 'text',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<figure>\n  <img src="chart.png" alt="Sales Chart">\n  <figcaption>Q4 Sales Performance</figcaption>\n</figure>',
    exampleOutput: '<figure style="margin: 20px 0; text-align: center;"><img src="https://via.placeholder.com/300x200" alt="Sales Chart" style="max-width: 100%;"><figcaption style="margin-top: 10px; font-style: italic; color: #666;">Q4 Sales Performance</figcaption></figure>',
    useCases: [
      'Images with captions',
      'Code examples',
      'Diagrams',
      'Illustrations',
      'Self-contained content'
    ],
    notes: 'The figure, its caption, and its contents are referenced as a single unit.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure'
  },
  {
    name: 'figcaption',
    description: 'Represents a caption or legend describing the rest of the contents of its parent figure element.',
    category: 'text',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<figcaption>Figure 1: System Architecture</figcaption>',
    exampleOutput: '<p>Used inside figure elements - see figure example above</p>',
    useCases: [
      'Image captions',
      'Chart descriptions',
      'Diagram labels',
      'Content attribution',
      'Figure explanations'
    ],
    notes: 'Must be used within a figure element. Can be placed before or after the main content.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption'
  },
  {
    name: 'menu',
    description: 'A semantic alternative to ul, but treated by browsers as no different than ul.',
    category: 'text',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<menu>\n  <li><button>New File</button></li>\n  <li><button>Open</button></li>\n  <li><button>Save</button></li>\n</menu>',
    exampleOutput: '<menu style="list-style: none; padding: 0; margin: 0;"><li style="margin: 5px 0;"><button style="padding: 8px 12px; border: 1px solid #ccc; background: #f5f5f5;">New File</button></li><li style="margin: 5px 0;"><button style="padding: 8px 12px; border: 1px solid #ccc; background: #f5f5f5;">Open</button></li><li style="margin: 5px 0;"><button style="padding: 8px 12px; border: 1px solid #ccc; background: #f5f5f5;">Save</button></li></menu>',
    useCases: [
      'Context menus',
      'Toolbar buttons',
      'Action lists',
      'Command menus',
      'Interactive lists'
    ],
    notes: 'Represents an unordered list of items with interactive commands.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu'
  },
  {
    name: 'details',
    description: 'Creates a disclosure widget with hideable content.',
    category: 'interactive',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'open', description: 'Initially open the details' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<details>\n  <summary>Click to expand</summary>\n  <p>Hidden content that can be toggled.</p>\n</details>',
    exampleOutput: '<details style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;"><summary style="cursor: pointer; font-weight: bold;">Click to expand</summary><p style="margin-top: 10px;">Hidden content that can be toggled.</p></details>',
    useCases: [
      'FAQ sections',
      'Expandable content',
      'Collapsible sections',
      'Progressive disclosure'
    ],
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details'
  },
  {
    name: 'summary',
    description: 'Summary or caption for the details element.',
    category: 'interactive',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<summary>Show/Hide Details</summary>',
    exampleOutput: '<p>Used inside details elements - see details example above</p>',
    useCases: [
      'Disclosure labels',
      'Toggle buttons',
      'Section headers',
      'Expandable titles'
    ],
    notes: 'Must be the first child of a details element.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary'
  },
  // Multimedia and Embedded Content Elements
  {
    name: 'iframe',
    description: 'Embeds another HTML page into the current page.',
    category: 'media',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'src', description: 'URL of the page to embed' },
      { name: 'width', description: 'Width of the iframe' },
      { name: 'height', description: 'Height of the iframe' },
      { name: 'name', description: 'Name for targeting' },
      { name: 'sandbox', description: 'Security restrictions', values: ['allow-forms', 'allow-scripts', 'allow-same-origin', 'allow-popups'] },
      { name: 'allow', description: 'Feature policy permissions' },
      { name: 'loading', description: 'Loading behavior', values: ['lazy', 'eager'] },
      { name: 'referrerpolicy', description: 'Referrer policy' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<iframe src="https://example.com" width="600" height="400" title="Example website"></iframe>',
    exampleOutput: '<iframe src="about:blank" width="600" height="400" style="border: 1px solid #ccc;" title="Example website"><p>Your browser does not support iframes.</p></iframe>',
    useCases: [
      'Embedded websites',
      'Maps integration',
      'Video players',
      'Social media widgets',
      'Third-party content'
    ],
    notes: 'Use sandbox attribute for security. Always include title for accessibility.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe'
  },
  {
    name: 'embed',
    description: 'Embeds external content like plugins or applications.',
    category: 'media',
    type: 'Void',
    support: 'Universal',
    attributes: [
      { name: 'src', description: 'URL of the external resource', required: true },
      { name: 'type', description: 'MIME type of the embedded content' },
      { name: 'width', description: 'Width of the embedded content' },
      { name: 'height', description: 'Height of the embedded content' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<embed src="document.pdf" type="application/pdf" width="600" height="400">',
    exampleOutput: '<div style="width: 600px; height: 400px; border: 1px solid #ccc; display: flex; align-items: center; justify-content: center; background: #f5f5f5;"><p>PDF Document (embedded content)</p></div>',
    useCases: [
      'PDF documents',
      'Flash content (deprecated)',
      'Plugin content',
      'External applications',
      'Media files'
    ],
    notes: 'Less flexible than object element. Support varies by browser and content type.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed'
  },
  {
    name: 'object',
    description: 'Embeds external resources like images, videos, or plugins.',
    category: 'media',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'data', description: 'URL of the resource' },
      { name: 'type', description: 'MIME type of the resource' },
      { name: 'width', description: 'Width of the object' },
      { name: 'height', description: 'Height of the object' },
      { name: 'name', description: 'Name for form submission' },
      { name: 'form', description: 'Associated form element ID' },
      { name: 'usemap', description: 'Image map to use' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<object data="movie.mp4" type="video/mp4" width="400" height="300">\n  <p>Your browser does not support this video format.</p>\n</object>',
    exampleOutput: '<object style="width: 400px; height: 300px; border: 1px solid #ccc; background: #000;"><p style="color: white; text-align: center; padding: 20px;">Your browser does not support this video format.</p></object>',
    useCases: [
      'Video content',
      'Interactive media',
      'Plugin content',
      'External applications',
      'Fallback content'
    ],
    notes: 'More flexible than embed. Can contain fallback content between tags.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object'
  },
  {
    name: 'canvas',
    description: 'Provides a drawing surface for graphics via JavaScript.',
    category: 'media',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'width', description: 'Width of the canvas in pixels' },
      { name: 'height', description: 'Height of the canvas in pixels' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<canvas id="myCanvas" width="400" height="200">\n  Your browser does not support the canvas element.\n</canvas>',
    exampleOutput: '<canvas width="400" height="200" style="border: 1px solid #ccc; background: #f9f9f9;"><p>Your browser does not support the canvas element.</p></canvas>',
    useCases: [
      'Dynamic graphics',
      'Data visualization',
      'Games',
      'Image manipulation',
      'Custom drawings'
    ],
    notes: 'Requires JavaScript to draw content. Include fallback content for accessibility.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas'
  },
  {
    name: 'map',
    description: 'Defines an image map with clickable areas.',
    category: 'media',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'name', description: 'Name of the image map', required: true },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<img src="planets.jpg" usemap="#planetmap">\n<map name="planetmap">\n  <area shape="circle" coords="90,58,3" href="mercury.html" alt="Mercury">\n  <area shape="circle" coords="124,58,8" href="venus.html" alt="Venus">\n</map>',
    exampleOutput: '<div style="position: relative; display: inline-block;"><img src="https://via.placeholder.com/300x150" usemap="#planetmap" style="display: block;"><map name="planetmap"><area shape="circle" coords="90,58,3" href="mercury.html" alt="Mercury"><area shape="circle" coords="124,58,8" href="venus.html" alt="Venus"></map></div>',
    useCases: [
      'Interactive images',
      'Clickable diagrams',
      'Navigation images',
      'Image hotspots',
      'Geographic maps'
    ],
    notes: 'Used with area elements to define clickable regions. Link to img with usemap.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map'
  },
  {
    name: 'area',
    description: 'Defines a clickable area within an image map.',
    category: 'media',
    type: 'Void',
    support: 'Universal',
    attributes: [
      { name: 'shape', description: 'Shape of the area', values: ['rect', 'circle', 'poly', 'default'] },
      { name: 'coords', description: 'Coordinates defining the area' },
      { name: 'href', description: 'URL the area links to' },
      { name: 'alt', description: 'Alternative text for the area', required: true },
      { name: 'target', description: 'Where to open the link', values: ['_blank', '_self', '_parent', '_top'] },
      { name: 'download', description: 'Download the linked resource' },
      { name: 'rel', description: 'Relationship to the linked resource' },
    ],
    example: '<area shape="rect" coords="0,0,100,100" href="page1.html" alt="Top left section">',
    exampleOutput: '<p>Used inside map elements - see map example above</p>',
    useCases: [
      'Image hotspots',
      'Clickable regions',
      'Interactive diagrams',
      'Navigation areas',
      'Mapped links'
    ],
    notes: 'Must be used within map elements. Always include alt text for accessibility.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area'
  },
  {
    name: 'track',
    description: 'Provides text tracks for video and audio elements.',
    category: 'media',
    type: 'Void',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'src', description: 'URL of the track file', required: true },
      { name: 'kind', description: 'Type of track', values: ['subtitles', 'captions', 'descriptions', 'chapters', 'metadata'] },
      { name: 'srclang', description: 'Language of the track' },
      { name: 'label', description: 'User-readable title for the track' },
      { name: 'default', description: 'Default track to enable' },
    ],
    example: '<video controls>\n  <source src="movie.mp4" type="video/mp4">\n  <track src="subtitles.vtt" kind="subtitles" srclang="en" label="English">\n</video>',
    exampleOutput: '<p>Used inside video/audio elements for subtitles and captions</p>',
    useCases: [
      'Video subtitles',
      'Audio captions',
      'Chapter markers',
      'Accessibility',
      'Multiple languages'
    ],
    notes: 'Uses WebVTT format. Essential for video accessibility.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track'
  },
  // Interactive and Modern Elements
  {
    name: 'dialog',
    description: 'Represents a dialog box or interactive component.',
    category: 'interactive',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'open', description: 'Whether the dialog is open' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<dialog open>\n  <p>This is a dialog box.</p>\n  <button onclick="this.parentElement.close()">Close</button>\n</dialog>',
    exampleOutput: '<dialog open style="border: 1px solid #ccc; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"><p>This is a dialog box.</p><button style="padding: 8px 16px; background: #007acc; color: white; border: none; border-radius: 4px;">Close</button></dialog>',
    useCases: [
      'Modal dialogs',
      'Alert boxes',
      'Confirmation dialogs',
      'Form overlays',
      'Interactive popups'
    ],
    notes: 'Use showModal() method for modal behavior. Include close mechanism.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog'
  },
  {
    name: 'template',
    description: 'Holds HTML that is not rendered until activated by JavaScript.',
    category: 'interactive',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<template id="my-template">\n  <div class="card">\n    <h3></h3>\n    <p></p>\n  </div>\n</template>',
    exampleOutput: '<p>Template content is not rendered until cloned with JavaScript</p>',
    useCases: [
      'Reusable HTML patterns',
      'Dynamic content generation',
      'Component templates',
      'JavaScript frameworks',
      'Client-side templating'
    ],
    notes: 'Content is inert until cloned. Use with JavaScript to create dynamic content.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template'
  },
  {
    name: 'slot',
    description: 'Placeholder for content in Web Components.',
    category: 'interactive',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'name', description: 'Name of the slot' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<template>\n  <div>\n    <slot name="title">Default Title</slot>\n    <slot>Default content</slot>\n  </div>\n</template>',
    exampleOutput: '<p>Used in Web Components for content projection</p>',
    useCases: [
      'Web Components',
      'Content projection',
      'Shadow DOM',
      'Custom elements',
      'Component composition'
    ],
    notes: 'Part of Web Components specification. Used for content distribution.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot'
  },
  // Additional Table Elements
  {
    name: 'col',
    description: 'Defines properties for table columns.',
    category: 'structure',
    type: 'Void',
    support: 'Universal',
    attributes: [
      { name: 'span', description: 'Number of columns the element spans' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<table>\n  <colgroup>\n    <col style="background-color: yellow">\n    <col span="2" style="background-color: lightblue">\n  </colgroup>\n  <tr><td>A</td><td>B</td><td>C</td></tr>\n</table>',
    exampleOutput: '<table style="border-collapse: collapse;"><colgroup><col style="background-color: yellow"><col span="2" style="background-color: lightblue"></colgroup><tr><td style="border: 1px solid #ccc; padding: 8px; background-color: yellow;">A</td><td style="border: 1px solid #ccc; padding: 8px; background-color: lightblue;">B</td><td style="border: 1px solid #ccc; padding: 8px; background-color: lightblue;">C</td></tr></table>',
    useCases: [
      'Column styling',
      'Table formatting',
      'Column grouping',
      'CSS targeting',
      'Table structure'
    ],
    notes: 'Must be used within colgroup elements. Affects entire columns.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col'
  },
  {
    name: 'colgroup',
    description: 'Groups columns in a table for styling purposes.',
    category: 'structure',
    type: 'Block',
    support: 'Universal',
    attributes: [
      { name: 'span', description: 'Number of columns in the group' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<table>\n  <colgroup span="2" style="background-color: lightgray">\n  <colgroup style="background-color: lightblue">\n  <tr><td>A</td><td>B</td><td>C</td></tr>\n</table>',
    exampleOutput: '<table style="border-collapse: collapse;"><colgroup span="2" style="background-color: lightgray"><colgroup style="background-color: lightblue"><tr><td style="border: 1px solid #ccc; padding: 8px; background-color: lightgray;">A</td><td style="border: 1px solid #ccc; padding: 8px; background-color: lightgray;">B</td><td style="border: 1px solid #ccc; padding: 8px; background-color: lightblue;">C</td></tr></table>',
    useCases: [
      'Column group styling',
      'Table organization',
      'CSS application',
      'Column management',
      'Table structure'
    ],
    notes: 'Can contain col elements or use span attribute. Must come before table content.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup'
  },
  // SVG and MathML Elements
  {
    name: 'svg',
    description: 'Container defining a new coordinate system and viewport for SVG graphics.',
    category: 'media',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'width', description: 'Width of the SVG viewport' },
      { name: 'height', description: 'Height of the SVG viewport' },
      { name: 'viewBox', description: 'Defines the coordinate system' },
      { name: 'xmlns', description: 'SVG namespace declaration' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<svg width="100" height="100" viewBox="0 0 100 100">\n  <circle cx="50" cy="50" r="40" fill="blue" />\n</svg>',
    exampleOutput: '<svg width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="blue" /></svg>',
    useCases: [
      'Vector graphics',
      'Icons and logos',
      'Charts and diagrams',
      'Scalable illustrations',
      'Interactive graphics'
    ],
    notes: 'Used as the outermost element of SVG documents or to embed SVG fragments.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg'
  },
  {
    name: 'math',
    description: 'The top-level element in MathML for mathematical expressions.',
    category: 'text',
    type: 'Block',
    support: 'Modern',
    isNew: true,
    attributes: [
      { name: 'display', description: 'Display style', values: ['block', 'inline'] },
      { name: 'xmlns', description: 'MathML namespace declaration' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<math>\n  <mrow>\n    <mi>x</mi>\n    <mo>=</mo>\n    <mfrac>\n      <mi>a</mi>\n      <mi>b</mi>\n    </mfrac>\n  </mrow>\n</math>',
    exampleOutput: '<math><mrow><mi>x</mi><mo>=</mo><mfrac><mi>a</mi><mi>b</mi></mfrac></mrow></math>',
    useCases: [
      'Mathematical equations',
      'Scientific formulas',
      'Academic content',
      'Educational materials',
      'Technical documentation'
    ],
    notes: 'Every valid MathML instance must be wrapped in a math element.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/MathML/Element/math'
  },
  // Experimental Elements
  {
    name: 'fencedframe',
    description: 'Represents a nested browsing context with enhanced privacy features.',
    category: 'media',
    type: 'Block',
    support: 'Limited',
    isNew: true,
    attributes: [
      { name: 'src', description: 'URL of the content to embed' },
      { name: 'width', description: 'Width of the frame' },
      { name: 'height', description: 'Height of the frame' },
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<fencedframe src="https://example.com" width="400" height="300"></fencedframe>',
    exampleOutput: '<div style="width: 400px; height: 300px; border: 1px solid #ccc; background: #f5f5f5; display: flex; align-items: center; justify-content: center;"><p>Fenced Frame Content (Experimental)</p></div>',
    useCases: [
      'Privacy-focused embedding',
      'Secure third-party content',
      'Isolated browsing contexts',
      'Enhanced security frames'
    ],
    notes: 'Experimental element with built-in privacy features. Limited browser support.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fencedframe'
  },
  {
    name: 'selectedcontent',
    description: 'Displays the content of the currently selected option inside a closed select element.',
    category: 'forms',
    type: 'Inline',
    support: 'Limited',
    isNew: true,
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<select>\n  <selectedcontent>Choose an option</selectedcontent>\n  <option>Option 1</option>\n  <option>Option 2</option>\n</select>',
    exampleOutput: '<p>Experimental element for customizing select appearance</p>',
    useCases: [
      'Custom select styling',
      'Enhanced form controls',
      'Improved user experience',
      'Select customization'
    ],
    notes: 'Experimental and non-standard element. Very limited browser support.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/selectedcontent'
  },
  // Deprecated Elements (important for reference)
  {
    name: 'font',
    description: 'Specifies font face, size, and color (deprecated).',
    category: 'deprecated',
    type: 'Inline',
    support: 'Deprecated',
    attributes: [
      { name: 'face', description: 'Font family (deprecated)' },
      { name: 'size', description: 'Font size (deprecated)' },
      { name: 'color', description: 'Font color (deprecated)' },
    ],
    example: '<font face="Arial" size="3" color="red">Deprecated text</font>',
    exampleOutput: '<span style="font-family: Arial; font-size: 14px; color: red;">Deprecated text</span>',
    useCases: [
      'Legacy code (not recommended)',
      'Historical reference'
    ],
    notes: 'Use CSS for styling instead. This element is obsolete.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font'
  },
  {
    name: 'center',
    description: 'Centers content horizontally (deprecated).',
    category: 'deprecated',
    type: 'Block',
    support: 'Deprecated',
    attributes: [],
    example: '<center>Centered content</center>',
    exampleOutput: '<div style="text-align: center;">Centered content</div>',
    useCases: [
      'Legacy code (not recommended)',
      'Historical reference'
    ],
    notes: 'Use CSS text-align: center instead. This element is obsolete.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center'
  },
  // Additional Deprecated Elements
  {
    name: 'acronym',
    description: 'Represents an acronym (deprecated).',
    category: 'deprecated',
    type: 'Inline',
    support: 'Deprecated',
    attributes: [
      { name: 'title', description: 'Full expansion of the acronym' },
    ],
    example: '<acronym title="World Wide Web">WWW</acronym>',
    exampleOutput: '<abbr title="World Wide Web" style="text-decoration: underline dotted;">WWW</abbr>',
    useCases: [
      'Legacy code (not recommended)',
      'Historical reference'
    ],
    notes: 'Use abbr element instead. This element is obsolete.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/acronym'
  },
  {
    name: 'big',
    description: 'Makes text larger (deprecated).',
    category: 'deprecated',
    type: 'Inline',
    support: 'Deprecated',
    attributes: [],
    example: '<big>Large text</big>',
    exampleOutput: '<span style="font-size: larger;">Large text</span>',
    useCases: [
      'Legacy code (not recommended)',
      'Historical reference'
    ],
    notes: 'Use CSS font-size instead. This element is obsolete.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/big'
  },
  {
    name: 'dir',
    description: 'Directory list (deprecated).',
    category: 'deprecated',
    type: 'Block',
    support: 'Deprecated',
    attributes: [
      { name: 'compact', description: 'Compact display (deprecated)' },
    ],
    example: '<dir>\n  <li>File 1</li>\n  <li>File 2</li>\n</dir>',
    exampleOutput: '<ul style="list-style-type: disc;"><li>File 1</li><li>File 2</li></ul>',
    useCases: [
      'Legacy code (not recommended)',
      'Historical reference'
    ],
    notes: 'Use ul element instead. This element is obsolete.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dir'
  },
  {
    name: 'frame',
    description: 'Defines a frame in a frameset (deprecated).',
    category: 'deprecated',
    type: 'Void',
    support: 'Deprecated',
    attributes: [
      { name: 'src', description: 'URL of the frame content' },
      { name: 'name', description: 'Name of the frame' },
      { name: 'noresize', description: 'Prevent frame resizing' },
      { name: 'scrolling', description: 'Scrollbar behavior', values: ['yes', 'no', 'auto'] },
    ],
    example: '<frame src="content.html" name="main">',
    exampleOutput: '<div style="border: 1px solid #ccc; padding: 20px; background: #f5f5f5;">Frame content would appear here (deprecated)</div>',
    useCases: [
      'Legacy code (not recommended)',
      'Historical reference'
    ],
    notes: 'Use iframe instead. Frames are obsolete and not supported in HTML5.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frame'
  },
  {
    name: 'frameset',
    description: 'Container for frames (deprecated).',
    category: 'deprecated',
    type: 'Block',
    support: 'Deprecated',
    attributes: [
      { name: 'cols', description: 'Column layout specification' },
      { name: 'rows', description: 'Row layout specification' },
    ],
    example: '<frameset cols="50%,50%">\n  <frame src="left.html">\n  <frame src="right.html">\n</frameset>',
    exampleOutput: '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2px; height: 200px;"><div style="border: 1px solid #ccc; background: #f5f5f5; padding: 10px;">Left frame content</div><div style="border: 1px solid #ccc; background: #f5f5f5; padding: 10px;">Right frame content</div></div>',
    useCases: [
      'Legacy code (not recommended)',
      'Historical reference'
    ],
    notes: 'Use CSS Grid or Flexbox instead. Framesets are obsolete.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frameset'
  },
  {
    name: 'marquee',
    description: 'Scrolling text (deprecated).',
    category: 'deprecated',
    type: 'Block',
    support: 'Deprecated',
    attributes: [
      { name: 'behavior', description: 'Scrolling behavior', values: ['scroll', 'slide', 'alternate'] },
      { name: 'direction', description: 'Scrolling direction', values: ['left', 'right', 'up', 'down'] },
      { name: 'scrollamount', description: 'Scrolling speed' },
      { name: 'scrolldelay', description: 'Delay between scroll steps' },
    ],
    example: '<marquee direction="left">Scrolling text</marquee>',
    exampleOutput: '<div style="overflow: hidden; white-space: nowrap; background: #f0f0f0; padding: 10px; border: 1px solid #ccc;"><span style="animation: marquee 10s linear infinite;">Scrolling text</span></div>',
    useCases: [
      'Legacy code (not recommended)',
      'Historical reference'
    ],
    notes: 'Use CSS animations instead. This element is obsolete.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee'
  },
  {
    name: 'nobr',
    description: 'No line breaks (deprecated).',
    category: 'deprecated',
    type: 'Inline',
    support: 'Deprecated',
    attributes: [],
    example: '<nobr>This text will not wrap to the next line</nobr>',
    exampleOutput: '<span style="white-space: nowrap;">This text will not wrap to the next line</span>',
    useCases: [
      'Legacy code (not recommended)',
      'Historical reference'
    ],
    notes: 'Use CSS white-space: nowrap instead. This element is obsolete.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nobr'
  },
  {
    name: 'noframes',
    description: 'Content for browsers without frame support (deprecated).',
    category: 'deprecated',
    type: 'Block',
    support: 'Deprecated',
    attributes: [],
    example: '<noframes>\n  <p>Your browser does not support frames.</p>\n</noframes>',
    exampleOutput: '<div style="background: #ffe6e6; padding: 15px; border: 1px solid #ff9999;"><p>Your browser does not support frames.</p></div>',
    useCases: [
      'Legacy code (not recommended)',
      'Historical reference'
    ],
    notes: 'No longer needed as frames are obsolete. This element is obsolete.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noframes'
  },
  {
    name: 'plaintext',
    description: 'Plain text content (deprecated).',
    category: 'deprecated',
    type: 'Block',
    support: 'Deprecated',
    attributes: [],
    example: '<plaintext>This is plain text content',
    exampleOutput: '<pre style="font-family: monospace; background: #f5f5f5; padding: 10px; border: 1px solid #ccc;">This is plain text content</pre>',
    useCases: [
      'Legacy code (not recommended)',
      'Historical reference'
    ],
    notes: 'Use pre element instead. This element is obsolete.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/plaintext'
  },
  {
    name: 'strike',
    description: 'Strikethrough text (deprecated).',
    category: 'deprecated',
    type: 'Inline',
    support: 'Deprecated',
    attributes: [],
    example: '<strike>Strikethrough text</strike>',
    exampleOutput: '<s style="text-decoration: line-through;">Strikethrough text</s>',
    useCases: [
      'Legacy code (not recommended)',
      'Historical reference'
    ],
    notes: 'Use s or del elements instead. This element is obsolete.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strike'
  },
  {
    name: 'tt',
    description: 'Teletype text (deprecated).',
    category: 'deprecated',
    type: 'Inline',
    support: 'Deprecated',
    attributes: [],
    example: '<tt>Monospace text</tt>',
    exampleOutput: '<code style="font-family: monospace;">Monospace text</code>',
    useCases: [
      'Legacy code (not recommended)',
      'Historical reference'
    ],
    notes: 'Use code element or CSS font-family instead. This element is obsolete.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tt'
  },
  {
    name: 'xmp',
    description: 'Example text (deprecated).',
    category: 'deprecated',
    type: 'Block',
    support: 'Deprecated',
    attributes: [],
    example: '<xmp>\nExample code\n  with formatting\n</xmp>',
    exampleOutput: '<pre style="font-family: monospace; background: #f5f5f5; padding: 10px; border: 1px solid #ccc;">Example code\n  with formatting</pre>',
    useCases: [
      'Legacy code (not recommended)',
      'Historical reference'
    ],
    notes: 'Use pre element instead. This element is obsolete.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/xmp'
  },
  {
    name: 'param',
    description: 'Defines parameters for an object element (deprecated).',
    category: 'deprecated',
    type: 'Void',
    support: 'Deprecated',
    attributes: [
      { name: 'name', description: 'Name of the parameter' },
      { name: 'value', description: 'Value of the parameter' },
      { name: 'type', description: 'MIME type of the parameter value' },
      { name: 'valuetype', description: 'Type of the value', values: ['data', 'ref', 'object'] },
    ],
    example: '<object data="movie.swf">\n  <param name="quality" value="high">\n  <param name="bgcolor" value="#ffffff">\n</object>',
    exampleOutput: '<p>Used inside object elements for plugin parameters (deprecated)</p>',
    useCases: [
      'Legacy code (not recommended)',
      'Historical reference',
      'Plugin parameters'
    ],
    notes: 'Use modern alternatives for multimedia content. This element is obsolete.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param'
  },
  {
    name: 'noembed',
    description: 'Provides fallback content for browsers that don\'t support embed (deprecated).',
    category: 'deprecated',
    type: 'Block',
    support: 'Deprecated',
    attributes: [],
    example: '<embed src="content.swf">\n<noembed>\n  <p>Your browser does not support embedded content.</p>\n</noembed>',
    exampleOutput: '<div style="background: #ffe6e6; padding: 15px; border: 1px solid #ff9999;"><p>Your browser does not support embedded content.</p></div>',
    useCases: [
      'Legacy code (not recommended)',
      'Historical reference',
      'Embed fallback'
    ],
    notes: 'Use object element with fallback content instead. This element is obsolete.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noembed'
  },
  {
    name: 'rb',
    description: 'Used to delimit the base text component of a ruby annotation (deprecated).',
    category: 'deprecated',
    type: 'Inline',
    support: 'Deprecated',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<ruby>\n  <rb>漢</rb><rt>kan</rt>\n  <rb>字</rb><rt>ji</rt>\n</ruby>',
    exampleOutput: '<p>Used inside ruby elements for base text (deprecated)</p>',
    useCases: [
      'Legacy code (not recommended)',
      'Historical reference',
      'Ruby base text'
    ],
    notes: 'Use ruby element without rb wrapper. This element is obsolete.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rb'
  },
  {
    name: 'rtc',
    description: 'Embraces semantic annotations of characters in ruby elements (deprecated).',
    category: 'deprecated',
    type: 'Inline',
    support: 'Deprecated',
    attributes: [
      { name: 'id', description: 'Unique identifier for the element', global: true },
      { name: 'class', description: 'CSS class names for styling', global: true },
    ],
    example: '<ruby>\n  <rb>東京</rb>\n  <rtc><rt>とうきょう</rt></rtc>\n  <rtc><rt>Tokyo</rt></rtc>\n</ruby>',
    exampleOutput: '<p>Used inside ruby elements for semantic annotations (deprecated)</p>',
    useCases: [
      'Legacy code (not recommended)',
      'Historical reference',
      'Ruby semantic annotations'
    ],
    notes: 'Use standard ruby, rt, and rp elements instead. This element is obsolete.',
    mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rtc'
  }
];
