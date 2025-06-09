
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, Code, Eye, AlertTriangle, Info, ExternalLink } from 'lucide-react';
import { HTMLElement } from '@/types/htmlElement';

interface ElementCardProps {
  element: HTMLElement;
  index: number;
}

export const ElementCard: React.FC<ElementCardProps> = ({ element, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showExample, setShowExample] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      text: 'bg-blue-100 text-blue-800',
      structure: 'bg-green-100 text-green-800',
      media: 'bg-purple-100 text-purple-800',
      forms: 'bg-orange-100 text-orange-800',
      interactive: 'bg-pink-100 text-pink-800',
      metadata: 'bg-indigo-100 text-indigo-800',
      semantic: 'bg-emerald-100 text-emerald-800',
      deprecated: 'bg-red-100 text-red-800',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getSupportColor = (support: string) => {
    switch (support) {
      case 'Universal': return 'bg-green-100 text-green-800';
      case 'Modern': return 'bg-blue-100 text-blue-800';
      case 'Limited': return 'bg-yellow-100 text-yellow-800';
      case 'Deprecated': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card 
      className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="flex items-center gap-2 text-lg group-hover:text-blue-600 transition-colors">
              <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                &lt;{element.name}&gt;
              </code>
              {element.isNew && (
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  HTML5
                </Badge>
              )}
            </CardTitle>
            <div className="flex gap-2 mt-2">
              <Badge className={getCategoryColor(element.category)}>
                {element.category}
              </Badge>
              <Badge className={getSupportColor(element.support)}>
                {element.support}
              </Badge>
            </div>
          </div>
        </div>
        <CardDescription className="text-sm leading-relaxed mt-2">
          {element.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="bg-gray-50 p-2 rounded">
            <span className="font-medium text-gray-600">Type:</span>
            <br />
            <span className="text-gray-800">{element.type}</span>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <span className="font-medium text-gray-600">Attributes:</span>
            <br />
            <span className="text-gray-800">{element.attributes.length}</span>
          </div>
        </div>

        {/* Example Toggle */}
        {element.example && (
          <div className="mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowExample(!showExample)}
              className="w-full justify-between"
            >
              <span className="flex items-center gap-2">
                {showExample ? <Eye className="w-4 h-4" /> : <Code className="w-4 h-4" />}
                {showExample ? 'Hide Example' : 'Show Example'}
              </span>
              {showExample ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
            
            {showExample && (
              <div className="mt-3 space-y-3">
                <div className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto">
                  <code className="text-sm whitespace-pre-wrap">{element.example}</code>
                </div>
                {element.exampleOutput && (
                  <div className="border border-gray-200 p-3 rounded-lg bg-white">
                    <div className="text-xs text-gray-500 mb-2 font-medium">RENDERED OUTPUT:</div>
                    <div dangerouslySetInnerHTML={{ __html: element.exampleOutput }} />
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Expandable Details */}
        <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <span className="font-medium">View Details & Attributes</span>
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="space-y-4 mt-4">
            {/* Use Cases */}
            {element.useCases && element.useCases.length > 0 && (
              <div>
                <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  Common Use Cases
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {element.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Attributes */}
            <div>
              <h4 className="font-semibold text-sm text-gray-700 mb-3">
                Attributes ({element.attributes.length})
              </h4>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {element.attributes.map((attr, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                    <div className="flex items-start justify-between mb-2">
                      <code className="font-mono text-sm bg-white px-2 py-1 rounded border">
                        {attr.name}
                      </code>
                      <div className="flex gap-1">
                        {attr.required && (
                          <Badge variant="destructive" className="text-xs">Required</Badge>
                        )}
                        {attr.global && (
                          <Badge variant="secondary" className="text-xs">Global</Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{attr.description}</p>
                    {attr.values && attr.values.length > 0 && (
                      <div className="text-xs">
                        <span className="font-medium text-gray-500">Values: </span>
                        <span className="font-mono text-gray-700">{attr.values.join(', ')}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            {element.notes && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-blue-800 mb-1">Notes</p>
                    <p className="text-sm text-blue-700">{element.notes}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Deprecation Warning */}
            {element.category === 'deprecated' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-red-800 mb-1">Deprecated Element</p>
                    <p className="text-sm text-red-700">
                      This element is deprecated and should not be used in new projects. 
                      Consider using modern alternatives.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* MDN Link */}
            {element.mdnUrl && (
              <Button variant="outline" size="sm" asChild className="w-full">
                <a href={element.mdnUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on MDN Documentation
                </a>
              </Button>
            )}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};
