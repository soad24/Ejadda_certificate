import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
import { StudentEvent } from '../../types/student';
import { format } from 'date-fns';

interface RegisteredEventsProps {
  events: StudentEvent[];
}

export default function RegisteredEvents({ events }: RegisteredEventsProps) {
  const completedEvents = events.filter(e => e.status === 'completed');

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Completed Events</h2>
        <div className="space-y-4">
          {completedEvents.map((event) => (
            <div
              key={event.id}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <div className="mt-2 space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{format(new Date(event.date), 'PPP')}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.type}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      <span>{event.points} points</span>
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Completed
                </span>
              </div>
            </div>
          ))}
          {completedEvents.length === 0 && (
            <p className="text-gray-500">No completed events</p>
          )}
        </div>
      </div>
    </div>
  );
}