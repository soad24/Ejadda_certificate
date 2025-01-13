import React from 'react';
import { Calendar, Clock, MapPin, User, Globe } from 'lucide-react';

interface EventWorkflowHeaderProps {
  event: {
    title: string;
    date: string;
    time: string;
    location: string;
    requiredBy: string;
    presenter: string;
    language: string;
    createdAt: string;
  };
}

export default function EventWorkflowHeader({ event }: EventWorkflowHeaderProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Created on: {event.createdAt}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{event.location}</span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <User className="w-4 h-4 mr-2" />
            <span>Required by: {event.requiredBy}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <User className="w-4 h-4 mr-2" />
            <span>Presenter: {event.presenter}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Globe className="w-4 h-4 mr-2" />
            <span>Language: {event.language}</span>
          </div>
        </div>
      </div>
    </div>
  );
}