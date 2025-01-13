import React from 'react';
import { Folder } from 'lucide-react';

interface EventCategoryProps {
  category: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'science', label: 'Science' },
  { id: 'culture', label: 'Culture' },
  { id: 'technology', label: 'Technology' }
];

export default function EventCategory({ category, onCategoryChange }: EventCategoryProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Event Category
      </label>
      <div className="relative">
        <Folder className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          required
          className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select category...</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}