import { ActivityEvent } from '../types/activity';

export const getEventStatusColor = (status: ActivityEvent['status']) => {
  switch (status) {
    case 'pending_department':
      return 'bg-yellow-100 text-yellow-800';
    case 'pending_halls':
      return 'bg-blue-100 text-blue-800';
    case 'approved':
      return 'bg-green-100 text-green-800';
    case 'rejected':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const getEventStatusLabel = (status: ActivityEvent['status']) => {
  switch (status) {
    case 'pending_department':
      return 'Pending Department Approval';
    case 'pending_halls':
      return 'Pending Halls Approval';
    case 'approved':
      return 'Approved';
    case 'rejected':
      return 'Rejected';
    default:
      return 'Unknown';
  }
};