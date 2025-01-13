import React from 'react';
import { CheckCircle2, Clock, XCircle, User, Building2 } from 'lucide-react';

interface TimelineStep {
  title: string;
  status: 'completed' | 'current' | 'pending' | 'rejected';
  date?: string;
  actor?: string;
  comments?: string;
}

interface WorkflowTimelineProps {
  steps: TimelineStep[];
}

export default function WorkflowTimeline({ steps }: WorkflowTimelineProps) {
  const getStepIcon = (status: TimelineStep['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-6 h-6 text-green-500" />;
      case 'rejected':
        return <XCircle className="w-6 h-6 text-red-500" />;
      case 'current':
        return <Clock className="w-6 h-6 text-yellow-500" />;
      default:
        return <Clock className="w-6 h-6 text-gray-300" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-semibold mb-6">Approval Timeline</h3>
      <div className="relative">
        <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200" />
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-start mb-8 last:mb-0">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-gray-200 z-10">
              {getStepIcon(step.status)}
            </div>
            <div className="ml-4 flex-1">
              <h4 className="text-lg font-medium">{step.title}</h4>
              {step.date && (
                <p className="text-sm text-gray-600 mt-1">
                  {step.date}
                </p>
              )}
              {step.actor && (
                <p className="text-sm text-gray-600">
                  By: {step.actor}
                </p>
              )}
              {step.comments && (
                <p className="text-sm text-gray-700 mt-2 bg-gray-50 p-3 rounded-lg">
                  "{step.comments}"
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}