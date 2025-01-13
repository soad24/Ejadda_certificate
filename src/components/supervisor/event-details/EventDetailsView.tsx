import React from 'react';
import { Calendar, Clock, MapPin, User, Globe, Users } from 'lucide-react';
import EventWorkflowStatus from './EventWorkflowStatus';

interface EventDetails {
  title: string;
  date: string;
  time: string;
  location: string;
  requiredBy: string;
  presenter: string;
  language: string;
  participants: number;
  status: string;
}

interface EventDetailsViewProps {
  event: EventDetails;
}

export default function EventDetailsView({ event }: EventDetailsViewProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">{event.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-3" />
              <div>
                <span className="font-medium">Date</span>
                <p>{event.date}</p>
              </div>
            </div>
            
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-3" />
              <div>
                <span className="font-medium">Time</span>
                <p>{event.time}</p>
              </div>
            </div>
            
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-3" />
              <div>
                <span className="font-medium">Location</span>
                <p>{event.location}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center text-gray-600">
              <User className="w-5 h-5 mr-3" />
              <div>
                <span className="font-medium">Required By</span>
                <p>{event.requiredBy}</p>
              </div>
            </div>
            
            <div className="flex items-center text-gray-600">
              <User className="w-5 h-5 mr-3" />
              <div>
                <span className="font-medium">Presenter</span>
                <p>{event.presenter}</p>
              </div>
            </div>
            
            <div className="flex items-center text-gray-600">
              <Globe className="w-5 h-5 mr-3" />
              <div>
                <span className="font-medium">Language</span>
                <p>{event.language}</p>
              </div>
            </div>
            
            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 mr-3" />
              <div>
                <span className="font-medium">Number of Participants</span>
                <p>{event.participants}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EventWorkflowStatus />
    </div>
  );
}