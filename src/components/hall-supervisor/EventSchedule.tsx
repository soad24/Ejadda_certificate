import React from 'react';
import { format } from 'date-fns';
import { Clock, Users, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  department: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface EventScheduleProps {
  events: Event[];
  selectedDate: Date;
  onApprove: (eventId: number, note?: string) => void;
  onReject: (eventId: number, reason: string) => void;
}

export default function EventSchedule({ events, selectedDate, onApprove, onReject }: EventScheduleProps) {
  const dateEvents = events.filter(
    event => event.date === format(selectedDate, 'yyyy-MM-dd')
  ).sort((a, b) => a.startTime.localeCompare(b.startTime));

  const hasTimeConflict = (event1: Event, event2: Event) => {
    const start1 = new Date(`${event1.date}T${event1.startTime}`);
    const end1 = new Date(`${event1.date}T${event1.endTime}`);
    const start2 = new Date(`${event2.date}T${event2.startTime}`);
    const end2 = new Date(`${event2.date}T${event2.endTime}`);

    return start1 < end2 && end1 > start2;
  };

  const getConflictingEvents = (event: Event) => {
    return dateEvents.filter(e => 
      e.id !== event.id && 
      e.status !== 'rejected' && 
      hasTimeConflict(event, e)
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">
        Events for {format(selectedDate, 'MMMM d, yyyy')}
      </h2>

      <div className="space-y-4">
        {dateEvents.map((event) => {
          const conflicts = getConflictingEvents(event);
          
          return (
            <div 
              key={event.id} 
              className={`border rounded-lg p-4 ${
                conflicts.length > 0 && event.status === 'pending'
                  ? 'border-yellow-300 bg-yellow-50'
                  : ''
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <div className="mt-2 space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{event.startTime} - {event.endTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{event.department}</span>
                    </div>
                  </div>

                  {conflicts.length > 0 && event.status === 'pending' && (
                    <div className="mt-2 p-2 bg-yellow-100 rounded-lg">
                      <div className="flex items-start">
                        <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 mr-2" />
                        <div>
                          <p className="text-sm text-yellow-700">Time conflict with:</p>
                          <ul className="mt-1 text-sm text-yellow-600">
                            {conflicts.map(conflict => (
                              <li key={conflict.id}>
                                {conflict.title} ({conflict.startTime} - {conflict.endTime})
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {event.status === 'pending' && (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        const note = prompt('Add a note (optional):');
                        if (note !== null) {
                          onApprove(event.id, note);
                        }
                      }}
                      className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      title="Approve"
                    >
                      <CheckCircle className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        const reason = prompt('Please provide a reason for rejection:');
                        if (reason) {
                          onReject(event.id, reason);
                        }
                      }}
                      className="p-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50"
                      title="Reject"
                    >
                      <XCircle className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {dateEvents.length === 0 && (
          <p className="text-gray-500 text-center py-4">
            No events scheduled for this date
          </p>
        )}
      </div>
    </div>
  );
}