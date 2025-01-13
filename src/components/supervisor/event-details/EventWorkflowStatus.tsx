import React from 'react';
import { CheckCircle2, Clock, XCircle } from 'lucide-react';

interface WorkflowStep {
  title: string;
  date?: string;
  status: 'completed' | 'pending' | 'rejected' | 'upcoming';
  description: string;
  comments?: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    title: 'Event Creation',
    date: '2024-03-15 09:30 AM',
    status: 'completed',
    description: 'Event created by John Smith',
  },
  {
    title: 'Department Head Approval',
    date: '2024-03-16 02:15 PM',
    status: 'completed',
    description: 'Approved by Dr. Michael Brown',
    comments: 'Event aligns with department objectives',
  },
  {
    title: 'Hall Reservation',
    status: 'pending',
    description: 'Waiting for hall assignment',
  },
  {
    title: 'Final Approval',
    status: 'upcoming',
    description: 'Pending previous steps',
  },
];

export default function EventWorkflowStatus() {
  const getStatusIcon = (status: WorkflowStep['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-6 h-6 text-green-500" />;
      case 'pending':
        return <Clock className="w-6 h-6 text-yellow-500" />;
      case 'rejected':
        return <XCircle className="w-6 h-6 text-red-500" />;
      default:
        return <Clock className="w-6 h-6 text-gray-300" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-semibold mb-6">Event Workflow</h3>
      
      <div className="relative">
        <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200" />
        
        {workflowSteps.map((step, index) => (
          <div key={index} className="relative flex items-start mb-8 last:mb-0">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-gray-200 z-10">
              {getStatusIcon(step.status)}
            </div>
            <div className="ml-4 flex-1">
              <h4 className="text-lg font-medium">{step.title}</h4>
              <p className="text-gray-600 mt-1">{step.description}</p>
              {step.date && (
                <p className="text-sm text-gray-500 mt-1">{step.date}</p>
              )}
              {step.comments && (
                <div className="mt-2 p-3 bg-gray-50 rounded-lg text-gray-700">
                  "{step.comments}"
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}