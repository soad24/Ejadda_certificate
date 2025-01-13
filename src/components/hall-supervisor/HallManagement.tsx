import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit2, Trash2, Users, Calendar } from 'lucide-react';
import { Hall } from '../../types/hall';
import HallForm from './HallForm';

const mockHalls: Hall[] = [
  {
    id: 'hall1',
    name: 'Main Hall',
    capacity: 200,
    availability: true,
  },
  {
    id: 'hall2',
    name: 'Room 101',
    capacity: 50,
    availability: true,
  },
  {
    id: 'hall3',
    name: 'Conference Room A',
    capacity: 100,
    availability: true,
  },
];

export default function HallManagement() {
  const navigate = useNavigate();
  const [halls, setHalls] = useState(mockHalls);
  const [showForm, setShowForm] = useState(false);
  const [editingHall, setEditingHall] = useState<Hall | null>(null);

  const handleSubmit = (hallData: Partial<Hall>) => {
    if (editingHall) {
      setHalls(halls.map(hall =>
        hall.id === editingHall.id ? { ...hall, ...hallData } : hall
      ));
    } else {
      const newHall: Hall = {
        id: `hall${Date.now()}`,
        name: hallData.name!,
        capacity: hallData.capacity!,
        availability: true,
      };
      setHalls([...halls, newHall]);
    }
    setShowForm(false);
    setEditingHall(null);
  };

  const handleEdit = (hall: Hall) => {
    setEditingHall(hall);
    setShowForm(true);
  };

  const handleDelete = (hallId: string) => {
    if (confirm('Are you sure you want to delete this hall?')) {
      setHalls(halls.filter(hall => hall.id !== hallId));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Hall Management</h1>
        <div className="flex space-x-3">
          <button
            onClick={() => navigate('/dashboard/hall-supervisor')}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Back
          </button>
          <button
            onClick={() => {
              setEditingHall(null);
              setShowForm(true);
            }}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            <span>Add Hall</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {halls.map((hall) => (
          <div key={hall.id} className="bg-white rounded-xl shadow-sm">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">{hall.name}</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(hall)}
                    className="p-1 text-blue-600 hover:bg-blue-50 rounded-lg"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(hall.id)}
                    className="p-1 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3 text-gray-600">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Capacity: {hall.capacity}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Status: {hall.availability ? 'Available' : 'In Use'}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <HallForm
          hall={editingHall || undefined}
          onSubmit={handleSubmit}
          onClose={() => {
            setShowForm(false);
            setEditingHall(null);
          }}
        />
      )}
    </div>
  );
}