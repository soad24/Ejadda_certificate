import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Plus, User, Users } from 'lucide-react';
import StatusBadge from '../common/StatusBadge';

const events = [
  {
    id: 1,
    title: 'Web Development Workshop',
    date: 'March 20, 2024',
    requiredBy: 'Computer Science Department',
    status: 'pending_department',
  },
  {
    id: 2,
    title: 'AI & Machine Learning Seminar',
    date: 'March 25, 2024',
    requiredBy: 'AI Research Center',
    status: 'pending_halls',
    departmentApproved: true,
  },
];

export default function EventList() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">My Events</h1>
        <button
          onClick={() => navigate('new')}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          <span>Create Event</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <StatusBadge status={event.status} />
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <User className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>Required by: {event.requiredBy}</span>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => navigate(`${event.id}/participants`)}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Users className="w-4 h-4" />
                  <span>Participants</span>
                </button>
                <button
                  onClick={() => navigate(`${event.id}/workflow`)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}