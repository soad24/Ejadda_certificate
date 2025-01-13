import React from 'react';

interface EventNotesProps {
  notes: string;
  onChange: (value: string) => void;
}

export default function EventNotes({ notes, onChange }: EventNotesProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Additional Notes</h3>
      
      <textarea
        value={notes}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Add any additional notes or special requirements"
      />
    </div>
  );
}