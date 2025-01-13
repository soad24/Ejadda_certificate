export const getStatusStyles = (status: string): string => {
  const styles = {
    draft: 'bg-gray-100 text-gray-800',
    pending_department: 'bg-yellow-100 text-yellow-800',
    pending_halls: 'bg-blue-100 text-blue-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
  };

  return styles[status] || styles.draft;
};

export const getStatusLabel = (status: string): string => {
  const labels = {
    draft: 'Draft',
    pending_department: 'Pending Department',
    pending_halls: 'Pending Halls',
    approved: 'Approved',
    rejected: 'Rejected',
  };

  return labels[status] || 'Unknown';
};