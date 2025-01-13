import React from 'react';
import { getStatusStyles, getStatusLabel } from '../../utils/status';

interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles(status)}`}>
      {getStatusLabel(status)}
    </span>
  );
}