
import { HTMLElement } from '@/types/htmlElement';

// Additional comprehensive HTML elements to extend the main collection
export const additionalHtmlElements: HTMLElement[] = [
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
  }
];
