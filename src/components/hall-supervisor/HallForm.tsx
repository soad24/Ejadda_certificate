import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Hall } from '../../types/hall';

interface HallFormProps {
  hall?: Hall;
  onSubmit: (hall: Partial<Hall>) => void;
  onClose: () => void;
}

export default function HallForm({ hall, onSubmit, onClose }: HallFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    capacity: '',
  });

  useEffect(() => {
    if (hall) {
      setFormData({
        name: hall.name,
        capacity: hall.capacity.toString(),
      });
    }
  }, [hall]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name: formData.name,
      capacity: parseInt(formData.capacity),
      availability: true,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {hall ? 'Edit Hall' : 'Add New Hall'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hall Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Capacity
            </label>
            <input
              type="number"
              required
              min="1"
              value={formData.capacity}
              onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {hall ? 'Update' : 'Add'} Hall
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}