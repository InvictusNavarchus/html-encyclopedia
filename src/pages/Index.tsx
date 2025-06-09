
import React, { useState, useMemo } from 'react';
import { Search, Code, BookOpen, Layers, Type, Image, Grid, Play, Database, Lock, Calendar, Mail, Phone, Link, Globe, FileText, Hash, Star, Tag, Layout } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ElementCard } from '@/components/ElementCard';
import { htmlElements } from '@/data/htmlElements';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Elements', icon: Grid, count: htmlElements.length },
    { id: 'text', name: 'Text & Content', icon: Type, count: htmlElements.filter(el => el.category === 'text').length },
    { id: 'structure', name: 'Structure & Layout', icon: Layout, count: htmlElements.filter(el => el.category === 'structure').length },
    { id: 'media', name: 'Media & Graphics', icon: Image, count: htmlElements.filter(el => el.category === 'media').length },
    { id: 'forms', name: 'Forms & Input', icon: Database, count: htmlElements.filter(el => el.category === 'forms').length },
    { id: 'interactive', name: 'Interactive', icon: Play, count: htmlElements.filter(el => el.category === 'interactive').length },
    { id: 'metadata', name: 'Metadata & Links', icon: Link, count: htmlElements.filter(el => el.category === 'metadata').length },
    { id: 'semantic', name: 'Semantic', icon: BookOpen, count: htmlElements.filter(el => el.category === 'semantic').length },
    { id: 'deprecated', name: 'Deprecated', icon: Hash, count: htmlElements.filter(el => el.category === 'deprecated').length },
  ];

  const filteredElements = useMemo(() => {
    return htmlElements.filter(element => {
      const matchesSearch = element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           element.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           element.attributes.some(attr => attr.name.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || element.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <Code className="w-5 h-5" />
            <span className="text-sm font-medium">Complete HTML5 Reference</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            HTML Elements
            <br />
            Showcase
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Explore every HTML5 element with detailed examples, attributes, and use cases. 
            The ultimate reference for web developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              {htmlElements.length} Elements Covered
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Tag className="w-4 h-4 mr-2" />
              Complete Attribute Reference
            </Badge>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search elements, attributes, or descriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl shadow-lg"
            />
          </div>

          {/* Category Filters */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 ${
                    selectedCategory === category.id 
                      ? 'ring-2 ring-blue-500 bg-blue-50' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardContent className="p-4 text-center">
                    <Icon className={`w-8 h-8 mx-auto mb-2 ${
                      selectedCategory === category.id ? 'text-blue-600' : 'text-gray-600'
                    }`} />
                    <p className="font-semibold text-sm mb-1">{category.name}</p>
                    <Badge variant="outline" className="text-xs">
                      {category.count}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Results Summary */}
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            Showing <span className="font-bold text-blue-600">{filteredElements.length}</span> elements
            {selectedCategory !== 'all' && (
              <span> in <span className="font-bold text-purple-600">
                {categories.find(c => c.id === selectedCategory)?.name}
              </span></span>
            )}
            {searchTerm && (
              <span> matching "<span className="font-bold text-green-600">{searchTerm}</span>"</span>
            )}
          </p>
        </div>

        {/* Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredElements.map((element, index) => (
            <ElementCard
              key={element.name}
              element={element}
              index={index}
            />
          ))}
        </div>

        {filteredElements.length === 0 && (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No elements found</h3>
              <p className="text-gray-500">
                Try adjusting your search terms or selecting a different category.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code className="w-6 h-6" />
            <span className="text-xl font-bold">HTML5 Elements Showcase</span>
          </div>
          <p className="text-gray-400 mb-4">
            Comprehensive reference for all HTML5 elements and their attributes
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <span>Built with React & TypeScript</span>
            <span>•</span>
            <span>Complete HTML5 Coverage</span>
            <span>•</span>
            <span>Interactive Examples</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
