import React from 'react';
import { CheckCircle2, Clock, XCircle, ArrowRight } from 'lucide-react';
import { EventWorkflow } from '../../types/event';

interface EventWorkflowStatusProps {
  workflow: EventWorkflow;
}

export default function EventWorkflowStatus({ workflow }: EventWorkflowStatusProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Approval Status</h3>
      
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-200" />

        {/* Department Head Approval */}
        <div className="relative flex items-start mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 z-10">
            {getStatusIcon(workflow.departmentApproval?.approved ? 'approved' : 'pending')}
          </div>
          <div className="ml-4">
            <h4 className="text-md font-medium">Department Head Approval</h4>
            <p className="text-sm text-gray-600 mt-1">
              {workflow.departmentApproval?.approved 
                ? `Approved by ${workflow.departmentApproval.approvedBy} on ${workflow.departmentApproval.approvedAt}`
                : 'Waiting for department head approval'}
            </p>
            {workflow.departmentApproval?.comments && (
              <p className="text-sm text-gray-600 mt-2">
                Comments: {workflow.departmentApproval.comments}
              </p>
            )}
          </div>
        </div>

        {/* Halls Reservation */}
        <div className="relative flex items-start">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 z-10">
            {getStatusIcon(workflow.hallsApproval?.approved ? 'approved' : 'pending')}
          </div>
          <div className="ml-4">
            <h4 className="text-md font-medium">Halls Reservation</h4>
            <p className="text-sm text-gray-600 mt-1">
              {workflow.hallsApproval?.approved
                ? `Reserved by ${workflow.hallsApproval.approvedBy} on ${workflow.hallsApproval.approvedAt}`
                : 'Pending hall reservation'}
            </p>
            {workflow.hallsApproval?.hallAssigned && (
              <p className="text-sm text-gray-600 mt-1">
                Assigned Hall: {workflow.hallsApproval.hallAssigned}
              </p>
            )}
            {workflow.hallsApproval?.comments && (
              <p className="text-sm text-gray-600 mt-2">
                Comments: {workflow.hallsApproval.comments}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}