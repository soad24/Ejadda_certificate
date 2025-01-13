import React from 'react';
import { User } from 'lucide-react';
import { staff } from '../../../types/department';

interface EventOrganizerProps {
  staffId: string;
  presenter: string;
  onStaffChange: (id: string) => void;
  onPresenterChange: (name: string) => void;
}

export default function EventOrganizer({
  staffId,
  presenter,
  onStaffChange,
  onPresenterChange
}: EventOrganizerProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Required By (Staff Member)
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <select
            required
            value={staffId}
            onChange={(e) => onStaffChange(e.target.value)}
            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select staff member...</option>
            {staff.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} - {s.position}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Speaker/Presenter
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            required
            value={presenter}
            onChange={(e) => onPresenterChange(e.target.value)}
            placeholder="Enter speaker name"
            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}