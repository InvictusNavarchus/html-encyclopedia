
export interface HTMLAttribute {
  name: string;
  description: string;
  required?: boolean;
  values?: string[];
  global?: boolean;
}

export interface HTMLElement {
  name: string;
  description: string;
  category: 'text' | 'structure' | 'media' | 'forms' | 'interactive' | 'metadata' | 'semantic' | 'deprecated';
  type: string;
  support: 'Universal' | 'Modern' | 'Limited' | 'Deprecated';
  isNew?: boolean;
  attributes: HTMLAttribute[];
  example?: string;
  exampleOutput?: string;
  useCases?: string[];
  notes?: string;
  mdnUrl?: string;
}
