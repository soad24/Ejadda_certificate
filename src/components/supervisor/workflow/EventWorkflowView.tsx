import React from 'react';
import { Clock, ArrowRight, Calendar, User, Building2 } from 'lucide-react';
import { Event } from '../../../types/event';
import { format } from 'date-fns';

interface EventWorkflowViewProps {
  event: Event;
}

export default function EventWorkflowView({ event }: EventWorkflowViewProps) {
  return (
    <div className="space-y-6">
      {/* Event Creation Info */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Calendar className="w-6 h-6 text-blue-600" />
          <div>
            <h3 className="font-medium">Event Created</h3>
            <p className="text-sm text-gray-600">
              {format(new Date(event.createdAt), 'PPP p')} by {event.createdBy}
            </p>
          </div>
        </div>
      </div>

      {/* Workflow Steps */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-6">Approval Process</h3>
        
        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-200" />
          
          {/* Step 1: Event Creation */}
          <div className="relative flex items-start mb-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 z-10">
              <User className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h4 className="font-medium">Event Supervisor</h4>
              <p className="text-sm text-gray-600 mt-1">Creates and submits the event</p>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <Clock className="w-4 h-4 mr-1" />
                <span>{format(new Date(event.createdAt), 'PP')}</span>
              </div>
            </div>
          </div>

          {/* Step 2: Department Head */}
          <div className="relative flex items-start mb-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 z-10">
              <User className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h4 className="font-medium">Department Head</h4>
              <p className="text-sm text-gray-600 mt-1">Reviews and approves the event</p>
              {event.workflow.departmentApproval?.approvedAt && (
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{format(new Date(event.workflow.departmentApproval.approvedAt), 'PP')}</span>
                </div>
              )}
            </div>
          </div>

          {/* Step 3: Halls Reservation */}
          <div className="relative flex items-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 z-10">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h4 className="font-medium">Halls Reservation</h4>
              <p className="text-sm text-gray-600 mt-1">Assigns hall and finalizes event</p>
              {event.workflow.hallsApproval?.approvedAt && (
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{format(new Date(event.workflow.hallsApproval.approvedAt), 'PP')}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Current Status */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Current Status</h3>
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-blue-600" />
          <span className="text-gray-700">
            {event.workflow.status === 'approved' 
              ? 'Event approved and ready'
              : event.workflow.status === 'pending_halls'
              ? 'Waiting for halls reservation'
              : event.workflow.status === 'pending_department'
              ? 'Waiting for department head approval'
              : 'Draft'}
          </span>
        </div>
      </div>
    </div>
  );
}