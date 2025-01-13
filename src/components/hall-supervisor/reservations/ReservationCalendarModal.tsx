import React, { useState } from 'react';
import { X, Clock, Building2 } from 'lucide-react';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import { Hall } from '../../../types/hall';
import 'react-calendar/dist/Calendar.css';

interface ReservationCalendarModalProps {
  halls: Hall[];
  onSubmit: (data: { hallId: string; date: string; startTime: string; endTime: string }) => void;
  onClose: () => void;
}

export default function ReservationCalendarModal({ halls, onSubmit, onClose }: ReservationCalendarModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedHall, setSelectedHall] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      hallId: selectedHall,
      date: format(selectedDate, 'yyyy-MM-dd'),
      startTime,
      endTime,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Reserve Hall</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Hall
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                required
                value={selectedHall}
                onChange={(e) => setSelectedHall(e.target.value)}
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Choose a hall...</option>
                {halls.map((hall) => (
                  <option key={hall.id} value={hall.id}>
                    {hall.name} (Capacity: {hall.capacity})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Date
            </label>
            <div className="calendar-container">
              <style>
                {`
                  .react-calendar {
                    border: 1px solid #e5e7eb;
                    border-radius: 0.5rem;
                    width: 100%;
                    font-family: inherit;
                  }
                  .react-calendar__tile--active {
                    background-color: #2563eb !important;
                  }
                  .react-calendar__tile--now {
                    background-color: #f3f4f6;
                  }
                  .react-calendar__tile:enabled:hover {
                    background-color: #dbeafe;
                  }
                `}
              </style>
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                minDate={new Date()}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="time"
                  required
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="time"
                  required
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
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
              Reserve
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}