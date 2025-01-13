import React from 'react';
import { ListPlus, X } from 'lucide-react';

interface EventObjectivesProps {
  objectives: string[];
  onAddObjective: (objective: string) => void;
  onRemoveObjective: (index: number) => void;
}

export default function EventObjectives({ objectives, onAddObjective, onRemoveObjective }: EventObjectivesProps) {
  const [newObjective, setNewObjective] = React.useState('');

  const handleAdd = () => {
    if (newObjective.trim()) {
      onAddObjective(newObjective.trim());
      setNewObjective('');
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Event Objectives</h3>
      
      <div className="flex space-x-2">
        <input
          type="text"
          value={newObjective}
          onChange={(e) => setNewObjective(e.target.value)}
          placeholder="Enter an objective"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="button"
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <ListPlus className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-2">
        {objectives.map((objective, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
          >
            <span>{objective}</span>
            <button
              type="button"
              onClick={() => onRemoveObjective(index)}
              className="text-red-600 hover:text-red-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}