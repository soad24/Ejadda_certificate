import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, User, Search, Clock, Edit } from 'lucide-react';
import StatusBadge from '../common/StatusBadge';

const mockEvents = [
  {
    id: 1,
    title: 'Web Development Workshop',
    date: '2024-03-20',
    time: '10:00 AM',
    location: 'Room 101',
    requiredBy: 'Computer Science Department',
    presenter: 'Dr. Ahmed Ali',
    language: 'Arabic',
    participants: 45,
    status: 'pending_department',
  },
  {
    id: 2,
    title: 'AI & Machine Learning Seminar',
    date: '2024-03-22',
    time: '2:00 PM',
    location: 'Main Hall',
    requiredBy: 'AI Research Center',
    presenter: 'Prof. Sarah Anderson',
    language: 'English',
    participants: 120,
    status: 'pending_department',
  },
];

export default function PendingEvents() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = mockEvents.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Pending Events</h1>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-sm">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <StatusBadge status={event.status} />
              </div>

              <div className="space-y-3 text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>Required by: {event.requiredBy}</span>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => navigate(`${event.id}/edit`)}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Edit className="w-4 h-4" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => navigate(`${event.id}/review`)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Review Event
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}