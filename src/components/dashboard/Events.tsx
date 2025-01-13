import React from 'react';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';

export default function Events() {
  const events = [
    {
      id: 1,
      title: 'Web Development Workshop',
      date: '2024-03-20',
      time: '10:00 AM',
      location: 'Room 101',
      participants: 45,
      status: 'upcoming',
    },
    {
      id: 2,
      title: 'AI & Machine Learning Seminar',
      date: '2024-03-22',
      time: '2:00 PM',
      location: 'Main Hall',
      participants: 120,
      status: 'upcoming',
    },
    {
      id: 3,
      title: 'Design Thinking Workshop',
      date: '2024-03-25',
      time: '11:00 AM',
      location: 'Room 203',
      participants: 30,
      status: 'upcoming',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Events Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Create Event
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6">
          <div className="grid gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{event.participants} participants</span>
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {event.status}
                  </span>
                </div>
                <div className="mt-4 flex space-x-3">
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-700 font-medium">
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}