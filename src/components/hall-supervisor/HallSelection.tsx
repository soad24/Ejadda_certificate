import React from 'react';
import { Building2 } from 'lucide-react';

interface HallSelectionProps {
  selectedHall: string;
  onHallSelect: (hallId: string) => void;
  requiredCapacity: number;
}

const mockHalls = [
  {
    id: 'hall1',
    name: 'Main Hall',
    capacity: 200,
    facilities: ['Projector', 'Sound System', 'Air Conditioning'],
    availability: true,
  },
  {
    id: 'hall2',
    name: 'Room 101',
    capacity: 50,
    facilities: ['Projector', 'Whiteboard'],
    availability: true,
  },
  {
    id: 'hall3',
    name: 'Conference Room A',
    capacity: 100,
    facilities: ['Projector', 'Video Conference', 'Sound System'],
    availability: true,
  },
];

export default function HallSelection({ selectedHall, onHallSelect, requiredCapacity }: HallSelectionProps) {
  const availableHalls = mockHalls.filter(
    hall => hall.availability && hall.capacity >= requiredCapacity
  );

  return (
    <div className="space-y-4">
      {availableHalls.length === 0 ? (
        <p className="text-red-600">No suitable halls available for the required capacity.</p>
      ) : (
        availableHalls.map((hall) => (
          <div
            key={hall.id}
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedHall === hall.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => onHallSelect(hall.id)}
          >
            <div className="flex items-start">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium">{hall.name}</h3>
                  <span className="text-sm text-gray-600">
                    Capacity: {hall.capacity}
                  </span>
                </div>
                <div className="mt-1 flex flex-wrap gap-2">
                  {hall.facilities.map((facility, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                    >
                      {facility}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}