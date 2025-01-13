import React from 'react';
import { Calendar, Clock, MapPin, User, Globe, Users } from 'lucide-react';
import { ActivityEvent } from '../../types/activity';

interface EventDetailsProps {
  event: ActivityEvent;
}

export default function EventDetails({ event }: EventDetailsProps) {
  return (
    <div className="space-y-6">
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
              <p>{event.time} ({event.duration})</p>
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
              <span className="font-medium">Participants</span>
              <p>{event.participants} / {event.maxParticipants}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-gray-600">{event.description}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Objectives</h3>
          <ul className="list-disc list-inside text-gray-600">
            {event.objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Target Audience</h3>
          <p className="text-gray-600">{event.targetAudience}</p>
        </div>
      </div>
    </div>
  );
}