import { EventWorkflow, EventStatus } from '../types/event';

export const getWorkflowStatus = (workflow: EventWorkflow): EventStatus => {
  if (workflow.hallsApproval?.approved) return 'approved';
  if (workflow.hallsApproval?.approved === false) return 'rejected';
  if (workflow.departmentApproval?.approved) return 'pending_halls';
  if (workflow.departmentApproval?.approved === false) return 'rejected';
  return 'pending_department';
};

export const canEditEvent = (workflow: EventWorkflow): boolean => {
  const status = getWorkflowStatus(workflow);
  return ['draft', 'rejected'].includes(status);
};

export const getNextApprovalStep = (workflow: EventWorkflow): string => {
  const status = getWorkflowStatus(workflow);
  switch (status) {
    case 'pending_department':
      return 'Waiting for department head approval';
    case 'pending_halls':
      return 'Waiting for halls reservation';
    case 'approved':
      return 'All approvals completed';
    case 'rejected':
      return 'Event was rejected';
    default:
      return 'Draft';
  }
};