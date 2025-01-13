import React from 'react';
import { EventWorkflow } from '../../../types/event';
import WorkflowTimeline from './WorkflowTimeline';
import ApprovalDetails from './ApprovalDetails';

interface WorkflowStatusProps {
  workflow: EventWorkflow;
}

export default function WorkflowStatus({ workflow }: WorkflowStatusProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-6">Event Approval Status</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WorkflowTimeline workflow={workflow} />
        <ApprovalDetails workflow={workflow} />
      </div>
    </div>
  );
}