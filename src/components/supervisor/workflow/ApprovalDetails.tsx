import React from 'react';
import { EventWorkflow } from '../../../types/event';

interface ApprovalDetailsProps {
  workflow: EventWorkflow;
}

export default function ApprovalDetails({ workflow }: ApprovalDetailsProps) {
  return (
    <div className="space-y-6">
      {workflow.departmentApproval && (
        <div className="bg-white rounded-lg p-4">
          <h4 className="font-medium mb-2">Department Approval Details</h4>
          <div className="space-y-2 text-sm">
            <p><strong>Status:</strong> {workflow.departmentApproval.approved ? 'Approved' : 'Pending'}</p>
            {workflow.departmentApproval.approvedAt && (
              <p><strong>Date:</strong> {workflow.departmentApproval.approvedAt}</p>
            )}
            {workflow.departmentApproval.comments && (
              <p><strong>Comments:</strong> {workflow.departmentApproval.comments}</p>
            )}
          </div>
        </div>
      )}

      {workflow.hallsApproval && (
        <div className="bg-white rounded-lg p-4">
          <h4 className="font-medium mb-2">Halls Reservation Details</h4>
          <div className="space-y-2 text-sm">
            <p><strong>Status:</strong> {workflow.hallsApproval.approved ? 'Approved' : 'Pending'}</p>
            {workflow.hallsApproval.approvedAt && (
              <p><strong>Date:</strong> {workflow.hallsApproval.approvedAt}</p>
            )}
            {workflow.hallsApproval.hallAssigned && (
              <p><strong>Assigned Hall:</strong> {workflow.hallsApproval.hallAssigned}</p>
            )}
            {workflow.hallsApproval.comments && (
              <p><strong>Comments:</strong> {workflow.hallsApproval.comments}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}